import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostProps = {
    post: IPost;
}

export const Post: FC<PostProps> = ({post}) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.title}</p>
        </div>
    )
}