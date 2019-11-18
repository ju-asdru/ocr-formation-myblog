import { IPost } from 'src/core/interfaces/IPost';

export class Post implements IPost{
    title: string;    
    content?: string;
    loveIts?: number;
    created_at?: Date;

    constructor(post : Post){
        post.created_at = new Date();
        post.loveIts = 0;
        Object.assign(this, post);
    }
}