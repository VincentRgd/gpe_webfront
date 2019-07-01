import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {FormUploadFileComponent} from './form-upload-file/form-upload-file.component';
import {FormGenerateInfrastructureComponent} from './form-generate-infrastructure/form-generate-infrastructure.component';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'form/upload', component: FormUploadFileComponent},
  {path: 'form/infra', component: FormGenerateInfrastructureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
