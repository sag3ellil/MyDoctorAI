import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import bodyParts from '../common/bodysymptoms';
import { CommunService} from '../commun.service';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-sympthom-details',
  templateUrl: './sympthom-details.component.html',
  styleUrls: ['./sympthom-details.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, CommonModule],
})
export class SympthomDetailsComponent implements OnInit {
  selectedValues: string[] = [];
 
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  data:string[]=[]
  ngOnInit()
  {
    let seletedBodyPart: string= this.communService.getSelectedBodyPart();

    switch(seletedBodyPart){
      case "arm":
        this.data=  bodyParts["arm"]
        break;
      case "hands":
        this.data=  bodyParts["hands"]
        break;
      case "shoulder":
        this.data=  bodyParts["shoulder"]
        break;
      case "legs":
        this.data=  bodyParts["legs"]
        break;
      case "cheast":
        this.data=  bodyParts["cheast"]
        break;
      case "stomach":
        this.data=  bodyParts["stomach"]
        break;
      case "head":
        this.data=  bodyParts["head"]
        break;
      default:
        console.log("failed for:"+seletedBodyPart)
    }
   console.log(this.data)
   this.selectedValues= this.data

  }

  constructor(private _formBuilder: FormBuilder,
     public dialogRef: MatDialogRef<SympthomDetailsComponent> ,
      private matDialog: MatDialog ,
      private communService:CommunService) {}

  onReset(): void {
    
   
  }
  closeModal() {
    this.dialogRef.close();
  }

  goSignUp()
  {
  }

  /*handleCheckboxSelection() {
    console.log(this.selectedValues);
    // You can perform further actions based on the selected checkbox values
  }*/
  ValuesSelected: string[] = [];
  getValue(v:string)
  {
    console.log(v)
    const index = this.ValuesSelected.indexOf(v, 0);
    if (index > -1) {
      this.ValuesSelected.splice(index, 1);
    }
    else
      this.ValuesSelected.push(v)
      this.communService.setSymptomsSelected(this.ValuesSelected)
      console.log(this.ValuesSelected)
  }
}
