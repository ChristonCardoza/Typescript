import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTION : any = {
    headers : {

        'User-Agent' : 'request'
    },
    json : true
}

export class GithubApiService {


    getUserInfo(userName : string, callback : (user : User) => any){

        request.get("https://api.github.com/users/" + userName, OPTION, (error : any, response : any, body : any) => {
                
                // console.log(error);
                // console.log(response);
                // console.log(body);

                let user = new User(body);
                callback(user);
        } );
    }

    getRepo(userName : string, callback : (repos : Repo[]) => any){

        request.get("https://api.github.com/users/" + userName + "/repos", OPTION, (error : any, response : any, body : any) => {
                
                // console.log(error);
                // console.log(response);
                // console.log(body);

                let repos = body.map((repo : any) => new Repo(repo));
                callback(repos);
        } );
    }

}