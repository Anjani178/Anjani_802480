import { Component, OnInit } from '@angular/core';
import { Training } from '../models/training';
import { TrainingService } from '../Service/training.service';

@Component({
  selector: 'app-ment-current',
  templateUrl: './ment-current.component.html',
  styleUrls: ['./ment-current.component.css']
})
export class MentCurrentComponent implements OnInit {

  rating=""
  trList:Training[]=[]
  constructor(private trainingServ: TrainingService) { 
  }

  ngOnInit() {
    this.trainingServ.GetAll().subscribe(k=>{
      k.forEach(element => {
        if(element.status=="Ongoing"&& element.mid==localStorage.getItem("ID")){
          this.trList.push(element)
        }
      });
      })
  }

}
