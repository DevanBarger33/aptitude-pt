import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{

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
