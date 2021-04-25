import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/IPost';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private PostServce: PostService) { }
  listOfPosts: IPost[] = [];
  Msgerr: string;
  ngOnInit(): void {

    this.PostServce.getAllPosts().subscribe(

      (data) => {
        this.listOfPosts = data;
      },
      (err) =>{
        this.Msgerr = err ;
      }
        
    )
  }

}
