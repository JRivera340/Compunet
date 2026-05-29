export declare enum UserCourseRelationTypes {
    STUDENT = "student",
    PROFESSOR = "professor",
    TA = "ta"
}
export declare class CreateUserCourseDto {
    userId: number;
    courseId: number;
    relationType: UserCourseRelationTypes;
}
