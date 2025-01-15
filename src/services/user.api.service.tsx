export const userApiService = {
    getUsersByPage: async (page: number) => {
        const limit = 30;
        const skip = limit * page - 30;
        const data = await fetch('https://dummyjson.com/users' + '?skip=' + skip);
        const dataObj = await data.json();
        return dataObj.users;
    }
}