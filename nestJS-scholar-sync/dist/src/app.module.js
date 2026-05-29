"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const badge_module_1 = require("./badge/badge.module");
const interaction_module_1 = require("./interaction/interaction.module");
const course_module_1 = require("./course/course.module");
const supplementary_session_module_1 = require("./supplementary-session/supplementary-session.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            badge_module_1.BadgeModule,
            course_module_1.CourseModule,
            interaction_module_1.InteractionModule,
            supplementary_session_module_1.SupplementarySessionModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const databaseUrl = configService.get('DATABASE_URL');
                    if (databaseUrl) {
                        return {
                            type: 'postgres',
                            url: databaseUrl,
                            ssl: { rejectUnauthorized: false },
                            extra: { ssl: { rejectUnauthorized: false } },
                            entities: [__dirname + '/../**/*.entity.js'],
                            synchronize: configService.get('DB_SYNCHRONIZE'),
                        };
                    }
                    const portValue = configService.get('DB_PORT');
                    const port = portValue ? Number(portValue) : undefined;
                    return {
                        type: configService.get('DB_TYPE') ?? 'mysql',
                        host: configService.get('DB_HOST') ?? 'localhost',
                        port,
                        username: configService.get('DB_USERNAME'),
                        password: configService.get('DB_PASSWORD'),
                        database: configService.get('DB_DATABASE'),
                        entities: [__dirname + '/../**/*.entity.js'],
                        synchronize: configService.get('DB_SYNCHRONIZE'),
                    };
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map