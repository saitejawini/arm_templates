import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  postUrl="http://localhost:3000/api/user";
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }
  
  appMethod(user){
    console.log("In post method"+JSON.stringify(user));  
    return this.http.post(this.postUrl,user,this.httpOptions);
  }
}
