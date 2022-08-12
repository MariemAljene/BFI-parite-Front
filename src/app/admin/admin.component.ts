import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JournalService } from '../_services/journal.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  journalDetails = null as any;
 journalToUpdate = {
    idJournal:"",
    numCompte:"",
    DateTransaction:"",
    libelle:"",
    debit:"",
    credit:""

  }

  constructor(private journalService: JournalService) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm,id) {
    this.journalService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getjournalDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getjournalDetails(){
    this.journalService.getJournal().subscribe(
      (resp) => {
        console.log(resp);
        this.journalDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteJournal(journal: any) {
    this.journalService.deleteJournal(journal.idJournal).subscribe(
      (resp) => {
        console.log(resp);
        this.getjournalDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(journal: any){
    this.journalToUpdate = journal;
  }

  updateJournal(){
    this.journalService.updateJournam(this.journalToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
