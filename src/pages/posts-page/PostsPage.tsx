import {FC} from "react";
import {PostsList} from "../../components/posts-list/PostsList.tsx";

export const PostsPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-3xl'>
          <PostsList/>
        </div>
    )
}