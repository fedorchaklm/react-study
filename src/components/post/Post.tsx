import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type UserType = {
    post: IPost;
}
export const Post: FC<UserType> = ({post}) => {
    return (
        <div className='border-2 my-2 px-2'>
            <p>Title: {post.title}</p>
            <hr/>
            <p>{post.body}</p>
        </div>
    )
}