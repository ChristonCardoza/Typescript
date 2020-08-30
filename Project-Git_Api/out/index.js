"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
// let svc = new GithubApiService();
// svc.getUserInfo('ChristonCardoza',(user : User) => {
//     console.log(user);
// });
// svc.getRepo('ChristonCardoza', (repo : Repo[]) => {
//     console.log(repo);
// });
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log("Please enter the username as commandline argument");
}
else {
    var userName_1 = process.argv[2];
    svc.getUserInfo(userName_1, function (user) {
        svc.getRepo(userName_1, function (repo) {
            user.repos = repo;
            console.log(user);
        });
    });
}
