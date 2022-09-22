class User {
    // encapsulation
    private _email: string = "";
    static roleName: string = "User";

    set email(val: string) {
        if (val.length < 5) {
            this._email = "undefined email";
        } else {
            this._email = val;
        }
    }

    get email(): string {
        return this._email;
    }

    static foo(): void {
        console.log("Hello, user");
    }
}

const user = new User();
user.email = "izeah@gmail.com";

console.log(user.email);
console.log(User.roleName);
User.foo();
