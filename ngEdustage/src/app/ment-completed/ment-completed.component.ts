import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';
import { TrainingService } from '../Service/training.service';

@Component({
  selector: 'app-ment-completed',
  templateUrl: './ment-completed.component.html',
  styleUrls: ['./ment-completed.component.css']
})
export class MentCompletedComponent implements OnInit {

  rating=""
  trList:Training[]=[]
  constructor(private trainingServ: TrainingService) { 
  }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Completed"&& element.mid==localStorage.getItem("ID")){
          this.trList.push(element)
        }
      });
      })
  }

}
