import { Component, OnInit } from '@angular/core';
import { MentorObj } from '../models/mentor-obj';
import { MentorService } from '../Service/mentor.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  s
  mid;
  item:MentorObj
  item1:MentorObj
  constructor(private mentorserv :MentorService) {
    
   }
   save(){
     this.mentorserv.Update(this.item).subscribe(k=>{console.log(k)})
     this.s=1
   }
   reset(){
     if(this.s!=1){
     this.item=this.item1
     }
     else{
      this.item=this.item
     }
   }

  ngOnInit() {
    this.mid=localStorage.getItem("ID")
    this.mentorserv.getbyId(this.mid).subscribe(k=>this.item=k)
    this.item1=this.item
  }

}
