import {FC} from "react";
import './PostComponent.css';
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost;
}

export const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 border-solid border-orange-500 border-2 py-2 px-2 mb-3 w-1/3'>
                <p>Post #{post.id} - {post.title}</p>
                <p>{post.body}</p>
        </div>
    )
}