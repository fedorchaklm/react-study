export const userApiService = {
    getUsers: async (url: URL) => {
        const data = await fetch(url);
        const responseObj = await data.json();
        return responseObj.data;
    },
    getPages: async (url: URL) => {
        const data = await fetch(url);
        const responseObj = await data.json();
        return responseObj.total_pages;
    }
}