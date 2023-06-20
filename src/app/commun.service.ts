import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService {


  private numberClickBody:number = 0;
  private selectedBodyPart:string='';
  private age:string='';
  private gender:string='';
  private symptomsSelected : string[]=[];
  constructor() { }
  setGender(gender: any) {
    this.gender=gender
  }
  setAge(age: any) {
    this.age=age
  }

  getGender() {
    return this.gender
  }
  getAge() {
    return this.age
  }
  getSymptomsSelected()
  {
    return this.symptomsSelected;
  }

  setSymptomsSelected(e:string[])
  {
    this.symptomsSelected = e;
  }


  getSelectedBodyPart()
  {
    return this.selectedBodyPart;
  }

  setSelectedBodyPart(e:string)
  {
    this.selectedBodyPart = e;
  }

  getNumberClickBody()
  {
    return this.numberClickBody;
  }
  incrementNumberClickBody()
  {
    this.numberClickBody = this.numberClickBody+1;
  }
}
