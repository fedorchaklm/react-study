import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {IPost} from "../../models/IPost.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {postSliceActions} from "../../redux/userSlice/postSlice.ts";

export const PostsPage: FC = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    console.log('>', { posts });
    const dispatch = useAppDispatch();

        useEffect(() => {
            console.log(posts);
            dispatch(postSliceActions.loadPosts());
        }, [posts]);

    return (
        <>
            {posts && posts.map((post: IPost) => <div key={post.id}>{post.title}</div>)}
        </>
    )
}