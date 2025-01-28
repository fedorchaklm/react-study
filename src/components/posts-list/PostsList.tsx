import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {Post} from "../post/Post.tsx";
import {postSliceActions} from "../../redux/post-slice/postSlice.ts";
import {IPost} from "../../models/IPost.ts";

export const PostsList: FC = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            {posts.map((post:IPost) => <Post key={post.id} post={post}/> )}
        </div>
    )
}