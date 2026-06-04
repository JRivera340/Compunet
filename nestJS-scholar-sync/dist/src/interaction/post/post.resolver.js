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
exports.PostResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const gql_auth_guard_1 = require("../../common/guards/gql-auth.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const message_response_type_1 = require("../../common/dto/message-response.type");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const post_service_1 = require("./post.service");
const post_entity_1 = require("./entities/post.entity");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const isAdmin = (user) => user.usersRoles?.some((ur) => ur.role.name === 'Admin');
let PostResolver = class PostResolver {
    postService;
    constructor(postService) {
        this.postService = postService;
    }
    posts() {
        return this.postService.findAll();
    }
    post(id) {
        return this.postService.findOne(id);
    }
    createPost(input) {
        return this.postService.create(input);
    }
    async updatePost(id, input, currentUser) {
        const post = await this.postService.findOne(id);
        if (!isAdmin(currentUser) && post.user.id !== currentUser.id) {
            throw new common_1.ForbiddenException('You can only update your own posts');
        }
        return this.postService.update(id, input);
    }
    async removePost(id, currentUser) {
        const post = await this.postService.findOne(id);
        if (!isAdmin(currentUser) && post.user.id !== currentUser.id) {
            throw new common_1.ForbiddenException('You can only delete your own posts');
        }
        await this.postService.remove(id);
        return { message: `Post with ID ${id} removed successfully` };
    }
};
exports.PostResolver = PostResolver;
__decorate([
    (0, graphql_1.Query)(() => [post_entity_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
__decorate([
    (0, graphql_1.Query)(() => post_entity_1.Post),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_entity_1.Post),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_entity_1.Post),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, graphql_1.Args)('input')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_post_dto_1.UpdatePostDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_response_type_1.MessageResponse),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "removePost", null);
exports.PostResolver = PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_entity_1.Post),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
//# sourceMappingURL=post.resolver.js.map