export default class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
        readonly isAgent: boolean
    ) {}

    static fromObject(object: any): User {
        return new User(
            object["firstName"],
            object["lastName"],
            object["email"],
            object["isAgent"]
        );
    }
}