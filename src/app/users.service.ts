import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url="http://localhost:3000/api/v1/users/login";
    return this.http.get(url);
  }

  loginUser(email: string, password: string ){
    let url="http://localhost:3000/api/v1/users/login";
    return this.http.post(url, {
      "email": email,
      "password": password,
    })
    
  }
  registerUser(username: string, password: string, email: string){
    let url="http://localhost:3000/api/v1/users/register";
    return this.http.post(url, {
      "username": username,
      "email": email,
      "password": password 
    })
    
  }


}
