"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCourseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_course_dto_1 = require("./create-user-course.dto");
class UpdateUserCourseDto extends (0, swagger_1.PartialType)(create_user_course_dto_1.CreateUserCourseDto) {
}
exports.UpdateUserCourseDto = UpdateUserCourseDto;
//# sourceMappingURL=update-user-course.dto.js.map