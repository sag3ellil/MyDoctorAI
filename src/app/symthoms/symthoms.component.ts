import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunService} from '../commun.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { SympthomDetailsComponent } from '.././sympthom-details/sympthom-details.component';

@Component({
  selector: 'app-symthoms',
  templateUrl: './symthoms.component.html',
  styleUrls: ['./symthoms.component.css']
})
export class SymthomsComponent implements OnInit {
  bodyElem: string[]=[];
  
  
  handleClick(bodyPartClicked:any) {
    console.log(bodyPartClicked)
  }
constructor(private communService:CommunService, private router:Router, private matDialog:MatDialog)
{}


  ngOnInit() : void
  {
    window.onload = function () {
      const pieces = document.getElementsByTagName('svg');
      for (var i = 0; pieces.length; i++) {
          let _piece = pieces[i];
          _piece.onclick = function(t?:any) {
            var data = document.getElementById('data')
              if (t.target.getAttribute('data-position') != null && data != null) data.innerHTML = t.target.getAttribute('data-position');
              if (t.target.parentElement.getAttribute('data-position') != null && data != null) data.innerHTML = t.target.parentElement.getAttribute('data-position');
              //t.style.fill = "red"
          }
      }
  }

  
}

bodyClick(e:any)
{
  console.log(e)
  console.log(this.communService.getNumberClickBody())
  var element = document.getElementById(e) 
  if(element!= null)
  {

    let nbc = this.communService.getNumberClickBody();

    if(nbc % 2 == 0)
    {
      element.style.fill= "red"
      this.communService.incrementNumberClickBody()
      this.bodyElem.push(e)
    }
    else
    {
      element.style.fill= "#57c9d5"
      this.communService.incrementNumberClickBody()
      const index = this.bodyElem.indexOf(e, 0);
      if (index > -1) {
        this.bodyElem.splice(index, 1);
     }
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id="";
    dialogConfig.height = "350px";
    dialogConfig.width = "500px";
    this.matDialog.closeAll();
    this.matDialog.open(SympthomDetailsComponent, dialogConfig)


  }
  

  


 // console.log(e.srcElement.farthestViewportElement.attributes)


}



next()
{
  this.router.navigate(["/symthoms"]);
}

}
