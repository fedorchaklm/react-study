const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const urls = {
    users: {
        allUsers: baseUrl + '/users'
    },
    posts: {
        allPosts: baseUrl + '/posts'
    }
}