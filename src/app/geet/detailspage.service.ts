import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailspageService {

  private username: string;
  private clientid = 'f5b0823c405b062f7a26';
  private clientsecret = '0d10b7a7f33389eb852a3f718e1ef619313f1ff8';

  constructor(private http: HttpClient) {
      console.log('Ready for display');
      this.username = 'eddyyonnie';
 }
 getprofileInfo(username) {
   console.log(this.username);
   // tslint:disable-next-line:max-line-length
   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

 }
 getprofileRepos() {
// tslint:disable-next-line:max-line-length
return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


   }

 updateprofile(username: string) {
   this.username = username;
 }

}
