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
exports.ReplyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reply_entity_1 = require("./entities/reply.entity");
const post_entity_1 = require("../post/entities/post.entity");
const user_entity_1 = require("../../auth/user/entities/user.entity");
const user_service_1 = require("../../auth/user/user.service");
let ReplyService = class ReplyService {
    replyRepository;
    postRepository;
    userRepository;
    userService;
    constructor(replyRepository, postRepository, userRepository, userService) {
        this.replyRepository = replyRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }
    async create(createReplyDto) {
        const { postId, userId, replyId, ...replyData } = createReplyDto;
        const post = await this.postRepository.findOne({ where: { id: postId } });
        if (!post)
            throw new common_1.NotFoundException(`Post with ID ${postId} not found`);
        const user = await this.userService.findOne(userId);
        let parentReply = null;
        if (replyId) {
            parentReply = await this.replyRepository.findOne({ where: { id: replyId } });
            if (!parentReply)
                throw new common_1.NotFoundException(`Parent reply with ID ${replyId} not found`);
        }
        const reply = this.replyRepository.create({
            ...replyData,
            post,
            user,
            reply: parentReply,
            dateAdded: createReplyDto.dateAdded ?? new Date(),
            likes: 0,
            approvals: 0,
            isValidated: false,
        });
        const savedReply = await this.replyRepository.save(reply);
        await this.userService.addXp(userId, 5);
        return savedReply;
    }
    async findAll() {
        return await this.replyRepository.find({
            relations: ['user', 'post', 'replies'],
        });
    }
    async findOne(id) {
        const reply = await this.replyRepository.findOne({
            where: { id },
            relations: ['user', 'post', 'replies', 'replies.user'],
        });
        if (!reply)
            throw new common_1.NotFoundException(`Reply with ID ${id} not found`);
        return reply;
    }
    async update(id, updateReplyDto) {
        const reply = await this.findOne(id);
        const { postId, userId, replyId, ...replyData } = updateReplyDto;
        if (postId) {
            const post = await this.postRepository.findOne({ where: { id: postId } });
            if (!post)
                throw new common_1.NotFoundException(`Post with ID ${postId} not found`);
            reply.post = post;
        }
        if (userId) {
            const user = await this.userService.findOne(userId);
            reply.user = user;
        }
        if (replyId !== undefined) {
            if (replyId === null) {
                reply.reply = null;
            }
            else {
                const parentReply = await this.replyRepository.findOne({ where: { id: replyId } });
                if (!parentReply)
                    throw new common_1.NotFoundException(`Parent reply with ID ${replyId} not found`);
                reply.reply = parentReply;
            }
        }
        const updatedReply = this.replyRepository.merge(reply, replyData);
        return await this.replyRepository.save(updatedReply);
    }
    async remove(id) {
        const reply = await this.findOne(id);
        await this.replyRepository.remove(reply);
    }
    async like(id) {
        const reply = await this.findOne(id);
        reply.likes += 1;
        const savedReply = await this.replyRepository.save(reply);
        await this.userService.addXp(reply.user.id, 2);
        return savedReply;
    }
    async validate(id) {
        const reply = await this.findOne(id);
        reply.isValidated = true;
        reply.approvals += 1;
        const savedReply = await this.replyRepository.save(reply);
        await this.userService.addXp(reply.user.id, 50);
        return savedReply;
    }
};
exports.ReplyService = ReplyService;
exports.ReplyService = ReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reply_entity_1.Reply)),
    __param(1, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UserService])
], ReplyService);
//# sourceMappingURL=reply.service.js.map