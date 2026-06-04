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

const gql = (app: INestApplication, token: string, query: string) =>
    request(app.getHttpServer()).post('/graphql').set('Authorization', `Bearer ${token}`).send({ query });

describe('Interaction GraphQL E2E (Post & Reply)', () => {
    let app: INestApplication;
    let studentToken: string;
    let postId: number;
    let replyId: number;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
        await app.init();
        studentToken = await login(app, 'alice@example.com');
    });

    afterAll(async () => {
        await app.close();
    });

    it('creates a post', async () => {
        const res = await gql(
            app,
            studentToken,
            `mutation { createPost(input: { userId: 1, title: "E2E Post", question: "How does GraphQL e2e work?" }) { id title } }`,
        ).expect(200);
        expect(res.body.data.createPost.id).toBeDefined();
        postId = res.body.data.createPost.id;
    });

    it('lists posts', async () => {
        const res = await gql(app, studentToken, `{ posts { id title user { id } } }`).expect(200);
        expect(Array.isArray(res.body.data.posts)).toBe(true);
    });

    it('creates a reply on the post', async () => {
        const res = await gql(
            app,
            studentToken,
            `mutation { createReply(input: { postId: ${postId}, userId: 1, replyMessage: "An e2e reply" }) { id likes } }`,
        ).expect(200);
        expect(res.body.data.createReply.id).toBeDefined();
        replyId = res.body.data.createReply.id;
    });

    it('likes the reply', async () => {
        const res = await gql(app, studentToken, `mutation { likeReply(id: ${replyId}) { likes } }`).expect(200);
        expect(res.body.data.likeReply.likes).toBe(1);
    });

    it('deletes the post', async () => {
        const res = await gql(app, studentToken, `mutation { removePost(id: ${postId}) { message } }`).expect(200);
        expect(res.body.data.removePost.message).toContain('removed');
    });
});
