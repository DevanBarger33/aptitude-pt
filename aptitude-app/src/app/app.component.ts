import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map'; 

import { NavbarComponent } from './shared/navbar/navbar.component'; 
import { FooterComponent } from './shared/footer/footer.component'; 

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aptitude Physical Therapy';
  private apiURL = 'https://www.googleapis.com/blogger/v3/blogs/7109502014540023393/posts?key=AIzaSyBv2u0GFvVkYJyDAcsbHF2QQP8fPM333Zs';
  data: any = {}; 

  constructor(private http: Http) {
    console.log('Hello fellow user'); 
    this.getBlogs(); 
    this.getData(); 
  }

  getData() {
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getBlogs() {
    this.getData().subscribe(data => {
      console.log(data); 
      this.data = data
    })
  }
}
