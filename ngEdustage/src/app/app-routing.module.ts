import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { UtCompletedComponent } from './ut-completed/ut-completed.component';
import { SearchComponent } from './search/search.component';
import { SresultsComponent } from './sresults/sresults.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { UtCurrentComponent } from './ut-current/ut-current.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { MentCompletedComponent } from './ment-completed/ment-completed.component';
import { MentCurrentComponent } from './ment-current/ment-current.component';


const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'utCompleted',component:UtCompletedComponent},
  {path:'utCurrent',component:UtCurrentComponent},
  {path:'mtCompleted',component:MentCompletedComponent},
  {path:'mtCurrent',component:MentCurrentComponent},
  {path:'EditSkills',component:EditSkillsComponent},
  {path:'sResult',component:SresultsComponent},
  {path:'admin',component:AdminComponent},
  {path:'payment',component:PaymentComponent}
  //{path: '**',component:NotFoundcomponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
