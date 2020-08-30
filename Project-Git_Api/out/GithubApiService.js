"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTION = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, callback) {
        request.get("https://api.github.com/users/" + userName, OPTION, function (error, response, body) {
            // console.log(error);
            // console.log(response);
            // console.log(body);
            var user = new User_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepo = function (userName, callback) {
        request.get("https://api.github.com/users/" + userName + "/repos", OPTION, function (error, response, body) {
            // console.log(error);
            // console.log(response);
            // console.log(body);
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            callback(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
