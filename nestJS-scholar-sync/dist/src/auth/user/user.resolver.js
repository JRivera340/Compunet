"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../common/guards/gql-auth.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const message_response_type_1 = require("../../common/dto/message-response.type");
const user_service_1 = require("./user.service");
const user_entity_1 = require("./entities/user.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const isAdmin = (user) => user.usersRoles?.some((ur) => ur.role.name === 'Admin');
let UserResolver = class UserResolver {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    users() {
        return this.userService.findAllFull();
    }
    user(id) {
        return this.userService.findOne(id);
    }
    createUser(input) {
        return this.userService.create(input);
    }
    updateUser(id, input, currentUser) {
        if (!isAdmin(currentUser) && currentUser.id !== id) {
            throw new common_1.ForbiddenException('You can only update your own account');
        }
        return this.userService.update(id, input);
    }
    removeUser(id, currentUser) {
        if (!isAdmin(currentUser)) {
            throw new common_1.ForbiddenException('Only an admin can delete users');
        }
        return this.userService.remove(id);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('input')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_response_type_1.MessageResponse),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "removeUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map