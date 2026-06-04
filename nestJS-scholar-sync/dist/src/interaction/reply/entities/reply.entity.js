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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reply = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const post_entity_1 = require("../../post/entities/post.entity");
const user_entity_1 = require("../../../auth/user/entities/user.entity");
let Reply = class Reply {
    id;
    post;
    user;
    replies;
    reply;
    replyMessage;
    dateAdded;
    likes;
    approvals;
    isValidated;
};
exports.Reply = Reply;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reply.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => post_entity_1.Post),
    (0, typeorm_1.ManyToOne)(() => post_entity_1.Post, (post) => post.replies, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'post_id' }),
    __metadata("design:type", post_entity_1.Post)
], Reply.prototype, "post", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.replies, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Reply.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Reply], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Reply, (reply) => reply.reply, { nullable: true }),
    __metadata("design:type", Array)
], Reply.prototype, "replies", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Reply, (reply) => reply.replies, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'reply_id' }),
    __metadata("design:type", Object)
], Reply.prototype, "reply", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'reply_message', nullable: false, length: 1000 }),
    __metadata("design:type", String)
], Reply.prototype, "replyMessage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.GraphQLISODateTime),
    (0, typeorm_1.Column)({ name: 'date_added', type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Reply.prototype, "dateAdded", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Reply.prototype, "likes", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], Reply.prototype, "approvals", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ name: 'is_validated', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Reply.prototype, "isValidated", void 0);
exports.Reply = Reply = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('replies')
], Reply);
//# sourceMappingURL=reply.entity.js.map