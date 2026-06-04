import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

import { AppModule } from '../src/app.module';

describe('GraphQL smoke E2E', () => {
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

    it('responds to the healthCheck query', async () => {
        const res = await request(app.getHttpServer())
            .post('/graphql')
            .send({ query: '{ healthCheck }' })
            .expect(200);
        expect(res.body.data.healthCheck).toBe('ok');
    });
});
