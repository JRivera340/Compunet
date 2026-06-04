import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';

const login = async (app: INestApplication, email: string) => {
    const res = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query: `mutation { login(input: { email: "${email}", password: "Password123" }) { access_token } }` });
    return res.body.data.login.access_token as string;
};

describe('Users GraphQL E2E', () => {
    let app: INestApplication;
    let adminToken: string;
    let studentToken: string;
    let createdId: number;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
        await app.init();
        adminToken = await login(app, 'dave@example.com');
        studentToken = await login(app, 'alice@example.com');
    });

    afterAll(async () => {
        await app.close();
    });

    it('creates a user without a token (public registration)', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: `mutation {
                    createUser(input: {
                        email: "e2e-user@example.com", password: "Password123",
                        firstName: "E2E", lastName: "User",
                        major1: "Software Engineering", xp: 1, level: 1
                    }) { id email }
                }`,
            })
            .expect(200);
        expect(res.body.data.createUser.id).toBeDefined();
        createdId = res.body.data.createUser.id;
    });

    it('rejects the users query without a token', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .send({ query: '{ users { id email } }' })
            .expect(200);
        expect(res.body.errors).toBeDefined();
    });

    it('returns the users list for an authenticated user', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .set('Authorization', `Bearer ${studentToken}`)
            .send({ query: '{ users { id email major1 xp level } }' })
            .expect(200);
        expect(Array.isArray(res.body.data.users)).toBe(true);
    });

    it('forbids a regular user from deleting another user', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .set('Authorization', `Bearer ${studentToken}`)
            .send({ query: `mutation { removeUser(id: ${createdId}) { message } }` })
            .expect(200);
        expect(res.body.errors).toBeDefined();
    });

    it('lets an admin delete a user', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .set('Authorization', `Bearer ${adminToken}`)
            .send({ query: `mutation { removeUser(id: ${createdId}) { message } }` })
            .expect(200);
        expect(res.body.data.removeUser.message).toContain('removed');
    });
});
