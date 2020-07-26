import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AuthComponent } from "./auth.component";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthComponent],
  imports:[
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: AuthComponent }])
  ]
})
export class AuthModule {}
