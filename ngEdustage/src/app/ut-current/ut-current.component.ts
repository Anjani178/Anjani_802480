import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';

@Component({
  selector: 'app-ut-current',
  templateUrl: './ut-current.component.html',
  styleUrls: ['./ut-current.component.css']
})
export class UtCurrentComponent implements OnInit {

  ed
  t:Training
  list3:Training[]=[]
  msg:any
  constructor(private trainingServ: TrainingService) {
    this.ed=0;
   }
  e(u){
  this.ed=1;
   this.t=u;
  }
  checkE(){
    if(this.ed==1){
      return 1;
    }else {
      return 2;
  }
  }
  save(){
    this.trainingServ.Update(this.t).subscribe(data=>this.msg=data);
    console.log(this.msg);
    alert('Item Saved\n\n');
    this.ed=0;
  }
  cancel(){
    this.ed=0;
  }
  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Ongoing"&& element.uid==localStorage.getItem("ID")){
          this.list3.push(element)
        }
      });
      })
  }

}
