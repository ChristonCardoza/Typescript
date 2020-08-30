import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

// let svc = new GithubApiService();
// svc.getUserInfo('ChristonCardoza',(user : User) => {
//     console.log(user);
// });

// svc.getRepo('ChristonCardoza', (repo : Repo[]) => {
//     console.log(repo);
// });

let svc = new GithubApiService();
if(process.argv.length < 3){
    console.log("Please enter the username as commandline argument");
}
else{

    let userName = process.argv[2];
    svc.getUserInfo(userName,(user : User) => {
        svc.getRepo(userName, (repo : Repo[]) => {
            user.repos = repo;
            console.log(user);
        });
    });
}
