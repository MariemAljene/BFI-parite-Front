import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:9090/mimi';

  public registerStudent(studentData: any) {
    return this.http.post(this.API + '/journal/addJournal/', studentData);
  }
  public getJournal() {
    return this.http.get(this.API  + '/journal/getJournal');
  }
  public deleteJournal(id: any) {
    return this.http.delete(this.API + '/journal/deleteJournal?id=' + id);
  }
  
  public updateJournam(journal: any) {
    return this.http.put(this.API + '/journal/updateJournal', journal);
  }
}
