"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResonse) {
        this.login = userResonse.login;
        this.fullName = userResonse.name;
        this.repoCount = userResonse.public_repos;
        this.followerCount = userResonse.followers;
        // this.login = userResonse.login;
    }
    return User;
}());
exports.User = User;
