import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9090/mimi';

  public registercompte(compteData: any) {
    return this.http.post(this.API + '/Compte/addCompte', compteData);
  }
  public getCompte() {
    return this.http.get(this.API  + '/Compte/getCompte');
  }
  public deleteCompte(id: any) {
    return this.http.delete(this.API + '/Compte/deleteComptel?id=' + id);
  }
  
  public updateCompte(Compte: any) {
    return this.http.put(this.API + '/Compte/updateCompte', Compte);
  }
}
