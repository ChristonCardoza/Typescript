import { Repo } from "./Repo";

export class User {

    login : string;
    fullName : string;
    repoCount : number;
    followerCount : number;
    repos? : Repo[];

    constructor(userResonse : any){
        this.login = userResonse.login;
        this.fullName = userResonse.name;
        this.repoCount = userResonse.public_repos;
        this.followerCount = userResonse.followers;
        // this.login = userResonse.login;
    }

}