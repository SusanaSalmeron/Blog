import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[];
  categorias: string[];


  constructor(private postService: PostService) {


  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
    this.categorias = this.postService.getCategorias();

  }

  onChange($event) {
    if ($event.target.value != "mostrarTodas") {
      this.posts = this.postService.getPostsByCategoria($event.target.value)
    } else {
      this.posts = this.postService.getAllPosts();
    }
  }

}
