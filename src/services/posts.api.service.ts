import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const PostsService = {
    getAllPosts: async (): Promise<Array<IPost>> => {
        const data = await fetch(urls.posts.allPosts);
        const postsObj = await data.json();
        return postsObj.posts;
    }
}