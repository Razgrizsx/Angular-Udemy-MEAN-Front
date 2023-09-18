import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private _user! : Usuario

  get user(){
    return {...this._user}
  } 

  login(email: string, password: string){
   return this.http.post<AuthResponse>(environment.apiUrl, {email, password})
    .pipe(
      tap( res => {
        if(res.uid){
          localStorage.setItem('token', res.token)
          }}),
        catchError(err => of(err))
    )
  }

  logout(){
    localStorage.clear();

  }

  register(name: string, email: string, password: string){
   return this.http.post<AuthResponse>(`${environment.apiUrl}/new`, {name: name, email: email, password: password})
    .pipe(
      tap(
        res => {
          if(res.uid){
            localStorage.setItem('token', res.token)
            }}
      ),
      catchError(err => of(err))
    )
  }

  validarToken(){
    const headers = new HttpHeaders()
      .set("x-token", localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>(`${environment.apiUrl}/renew`,  {headers})
      .pipe(
        map( res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._user = {
            name: res.name!,
            uid: res.uid!,
            email: res.email!
          }
          return true
        }),
        catchError(err => of(false))
      )
  }

}
