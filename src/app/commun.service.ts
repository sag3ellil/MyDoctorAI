import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

  private numberClickBody:number = 0;
  private selectedBodyPart:string='';
  private symptomsSelected : string[]=[];
  constructor() { }

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
