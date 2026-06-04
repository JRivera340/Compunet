import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';

describe('Auth GraphQL E2E', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('logs in a seeded user and returns a token', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: `mutation {
                    login(input: { email: "dave@example.com", password: "Password123" }) {
                        access_token
                    }
                }`,
            })
            .expect(200);
        expect(res.body.data.login.access_token).toBeDefined();
    });

    it('rejects a wrong password', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .send({
                query: `mutation {
                    login(input: { email: "dave@example.com", password: "wrongpass" }) {
                        access_token
                    }
                }`,
            })
            .expect(200);
        expect(res.body.errors).toBeDefined();
        expect(res.body.data).toBeNull();
    });
});
