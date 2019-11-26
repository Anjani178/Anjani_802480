import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../Service/training.service';
import { Training } from '../models/training';

@Component({
  selector: 'app-ut-completed',
  templateUrl: './ut-completed.component.html',
  styleUrls: ['./ut-completed.component.css']
})
export class UtCompletedComponent implements OnInit {
  list3:Training[]=[]
  constructor(private trainingServ: TrainingService) { 
  }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      console.log(k)
      k.forEach(element => {
        if(element.status=="Completed"&& element.uid==localStorage.getItem("ID")){
          this.list3.push(element)
        }
      });
      })
  }

}
