import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentType = {
    comment: IComment;
}
export const Comment: FC<CommentType> = ({comment}) => {
    return (
        <div className='border-2 my-2 px-2'>
            <p>Name: {comment.name}</p>
            <hr/>
            <p>{comment.body}</p>
        </div>
    )
}