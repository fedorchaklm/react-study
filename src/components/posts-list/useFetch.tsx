import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string, defaultValue: T) => {
    const [posts, setPosts] = useState<T>(defaultValue);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [url]);

    return {posts, setPosts};
}