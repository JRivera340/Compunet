"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReplyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_reply_dto_1 = require("./create-reply.dto");
class UpdateReplyDto extends (0, swagger_1.PartialType)(create_reply_dto_1.CreateReplyDto) {
}
exports.UpdateReplyDto = UpdateReplyDto;
//# sourceMappingURL=update-reply.dto.js.map