import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData(){
    let url="https://dm-gen.com/api/v1/users/login";
    return this.http.get(url);
  }

  subtractfreegeneration(userid: string | null, count: number){

    let url="https://dm-gen.com/api/v1/users/subtractfreegeneration/"+userid+"&"+count;
    return this.http.put(url, {
    })
  }

  subtractgeneration(userid: string | null, count: number){
    let url="https://dm-gen.com/api/v1/users/subtractgeneration/"+userid+"&"+count;
    return this.http.put(url, {
    })
  }

//ADD Tokens AFTER PAYMENT!
addfreegeneration(userid: string | null, count: number){

  let url="https://dm-gen.com/api/v1/users/addfreegeneration/"+userid+"&"+count;
  return this.http.put(url, {
  })
}
addgeneration(userid: string | null, count: number){

  let url="https://dm-gen.com/api/v1/users/addgeneration/"+userid+"&"+count;
  return this.http.put(url, {
  })
}

//----------------------------------------------------------------


  loginUser(email: string, password: string ){
    let url="https://dm-gen.com/api/v1/users/login";
    return this.http.post(url, {
      "email": email,
      "password": password,
    })
  }
  specialLoginUser(email: string, password: string ){
    let url="https://dm-gen.com/api/v1/users/speciallogin";
    return this.http.post(url, {
      "email": email,
      "password": password,
    })
  }
  registerUser(username: string, password: string, email: string){
    let url="https://dm-gen.com/api/v1/users/register";
    return this.http.post(url, {
      "username": username,
      "email": email,
      "password": password,
      "loginable" : 0 
    })
  }

  


}
