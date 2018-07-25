import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Import components here */
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PatientComponent } from './components/patient/patient.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  /*Configure routes here*/
  {path: '', component: HomeComponent },
  {path: 'videos', component: VideosComponent},
  {path: 'about', component: AboutComponent },
  {path: 'patient', component: PatientComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
