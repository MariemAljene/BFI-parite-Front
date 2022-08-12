import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { JournalService } from './_services/journal.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  title = 'BFI';
  journalDetails = null as any;
  constructor(private journalService: JournalService) {
    this.getJournalDetails();
   
  }

  register(registerForm: NgForm) {
    this.journalService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getJournalDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getJournalDetails()
  {
    this.journalService.getJournal().subscribe(
      (resp) => {
        console.log(resp);
       
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
