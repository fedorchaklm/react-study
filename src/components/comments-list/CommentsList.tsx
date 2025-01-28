import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {IComment} from "../../models/IComment.ts";
import {commentSliceActions} from "../../redux/comment-slice/commentSlice.ts";
import { Comment } from '../comment/Comment.tsx';

export const CommentsList: FC = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            {comments.map((comment:IComment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}