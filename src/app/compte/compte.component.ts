import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompteService } from '../_services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    
  }
  compteDetails = null as any;
  compteToUpdate = {
    idCompte:"",
    numCompte:"",
    PlanCompte:"",
    Email:""

    
 
   }
 

   register(registerForm: NgForm) {
     this.compteService.registercompte(registerForm.value).subscribe(
       (resp) => {
         console.log(resp);
         registerForm.reset();
         this.getcomptelDetails();
       },
       (err) => {
         console.log(err);
       }
     );
   }
   getcomptelDetails(){
     this.compteService.getCompte().subscribe(
       (resp) => {
         console.log(resp);
         this.compteDetails = resp;
       },
       (err) => {
         console.log(err);
       }
     );
   }
   deletecompte(compte: any) {
     this.compteService.deleteCompte(compte.idCompte).subscribe(
       (resp) => {
         console.log(resp);
         this.getcomptelDetails();
       },
       (err) => {
         console.log(err);
       }
     );
   }
 
   edit(compte: any){
     this.compteToUpdate = compte;
   }
 
   updatecompte(){
     this.compteService.updateCompte(this.compteToUpdate).subscribe(
       (resp) => {
         console.log(resp);
       },
       (err) => {
         console.log(err);
       }
     );
   }

}
