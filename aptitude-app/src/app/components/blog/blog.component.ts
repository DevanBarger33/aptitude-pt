import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  // The base URL used to get to the Aptitude Blogger API endpoint
  private baseURL = 'https://www.googleapis.com/blogger/v3/blogs/7109502014540023393/posts?key=AIzaSyBv2u0GFvVkYJyDAcsbHF2QQP8fPM333Zs';

  // The fields we want from the response
  private fields = '&fields=items/published,items/url,items/title,items/content,items/author/displayName,items/labels';

  // Combine the Base URL
  private apiURL = this.baseURL + this.fields;

  // The array we use to store the JSON items
  items: any = [];

constructor(private http: HttpClient) {
  console.log('Hello fellow user');
	}

	ngOnInit(): void {

    // interface to specify that we have multiple items
		interface BloggerResponse {
			items: {
        		[key: string]: Item
			};

		}

    // interface to specify what is in an item
		interface Item {
			  published: string;
  			url: string;
  			title: string;
  			content: string;
  			author: string;
  			labels: string;
        thumbnail: string;
        summary: string;
		}

    // calls the Blogger API returns response AS items
    this.http.get<BloggerResponse>(this.apiURL)
      .subscribe(
        data => { this.items = data.items;
      // console.log(this.items);

      // parse through content
      for (const blog of this.items) {

        // extract the thumbnail from the content
        blog.thumbnail = blog.content.substring(blog.content.indexOf('src="https://') + 5, blog.content.indexOf('" width="400"'));

        // extract 400 character summary from content
        blog.summary = blog.content.substring(blog.content.indexOf('</a></div>'), (blog.content.indexOf('</a></div>') + 400)) + '...';
      }
    });
	}

}
