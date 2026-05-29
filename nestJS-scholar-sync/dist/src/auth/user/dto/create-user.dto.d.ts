export declare enum Majors {
    SE = "Software Engineering",
    BIO = "Biology",
    CHEM = "Chemistry",
    PHYS = "Physics",
    MATH = "Mathematics"
}
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    profilePic?: string;
    major1: Majors;
    major2?: Majors;
    xp: number;
    level: number;
}
