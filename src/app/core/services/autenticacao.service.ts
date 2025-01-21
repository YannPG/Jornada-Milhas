import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

interface AuthReponse{
  access_token: string
}
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userService: UserService) { 

   }

  autenticar(email: string, senha:string): Observable<HttpResponse<AuthReponse>> {
    return this.http.post<AuthReponse>(`${this.apiUrl}/auth/login`,
      { email, senha},
      { observe: 'response'}).pipe(
        tap((response) =>{
          const authtoken = response.body?.access_token || '';
          this.userService.salvarToken(authtoken);
        })
      )
  } 

}