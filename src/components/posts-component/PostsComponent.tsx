import {FC, useEffect, useState} from "react";
import {PostComponent} from "../post-component/PostComponent.tsx";
import {IPost} from "../../models/IPost.ts";
import {PostsService} from "../../services/posts.api.service.ts";

export const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<Array<IPost>>([]);

    useEffect(() => {
        const getAllPosts = async () => {
            const posts = await PostsService.getAllPosts();
            setPosts(posts);
        }

        getAllPosts();
    }, [])

    return (
        <div className='flex flex-col items-center'>
            {posts.map((post) => <PostComponent key={post.id} post={post}></PostComponent>)}
        </div>
    )
}