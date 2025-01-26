import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
import {Post} from "../post/Post.tsx";
import {useFetch} from "./useFetch.ts";

export const PostsList: FC = () => {
    const {posts} = useFetch<Array<IPost>>('https://jsonplaceholder.typicode.com/posts', [])

    return (
        <>
            {posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
        </>
    )
}