import {FC, useEffect} from "react";
import {IUser} from "../../models/IUser.ts";
import {User} from "../../components/user/User.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../../redux/user-slice/userSlice.ts";
import {postSliceActions} from "../../redux/post-slice/postSlice.ts";
import {commentSliceActions} from "../../redux/comment-slice/commentSlice.ts";
import {IPost} from "../../models/IPost.ts";
import {Post} from "../../components/post/Post.tsx";
import {IComment} from "../../models/IComment.ts";
import {Comment} from "../../components/comment/Comment.tsx";

export const ComplexPage: FC = () => {
    const {userSlice: {users}, postSlice: {posts}, commentSlice: {comments}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!users.length) {
            dispatch(userSliceActions.loadUsers())
        }
        if (!posts.length) {
            dispatch(postSliceActions.loadPosts())
        }
        if (!comments.length) {
            dispatch(commentSliceActions.loadComments())
        }
    }, [users, posts, comments]);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-3xl'>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
            {posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
            {comments.map((comment: IComment) => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}