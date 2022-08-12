import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteService } from '../_services/compte.service';
import { JournalService } from '../_services/journal.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  

  constructor(private journalService: JournalService,private compteService: CompteService) { }
  listOfModule :any
  ngOnInit(): void {
    this.compteService.getCompte().subscribe(module=>this.listOfModule=module);
    console.log(this.listOfModule);
    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd/MM/yyyy');

    
  }
  items=null as any;
  journalDetails = null as any; 
  Total =null as any ;
  journalToUpdate = {
     idJournal:"",
     numCompte:"",
     todayWithPipe:"",
     libelle:"",
     debit:"",
     credit:""
 
   }
 

   register(registerForm: NgForm) {
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
