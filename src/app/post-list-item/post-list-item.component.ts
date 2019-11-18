import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/core/classes/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

  onLikePost() {
    this.post.loveIts++;
  }

  onDislikePost(){
    this.post.loveIts--;
  }

}
