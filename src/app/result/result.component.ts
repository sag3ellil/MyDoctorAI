
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild,OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import { CommunService} from '../commun.service'
import {GbtapiService} from '../services/gbtapi.service'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
constructor(private _ngZone: NgZone,private gbtapiService:GbtapiService, private communService:CommunService) {}
  answer:any=""

ngOnInit(): void {
let age = this.communService.getAge();
let gender =this.communService.getGender();
let symtoms =this.communService.getSymptomsSelected();


let message ="We are going to roleplay, you are a doctor and I'm a patient, only give me the answer of my question.";
message += "I'm a person, my age of "+ age+ ", my gender is "+ gender+ " and my symptoms are " + symtoms + " what could be my issue and what recommandations do you give me?"
  
let msg = {message: message}
this.answer="waiting..."
this.gbtapiService.getChat(msg).subscribe(
    (result:any)=>{
      console.log(result)

      this.answer=result.choices[0].text.replaceAll("\n","")
      
    }

   )
  }



 

 
}
