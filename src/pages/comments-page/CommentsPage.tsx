import {FC} from "react";
import {CommentsList} from "../../components/comments-list/CommentsList.tsx";

export const CommentsPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-3xl'>
            <CommentsList/>
        </div>
    )
}