const baseUrl = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        userById: (id: number) => {
            return baseUrl + '/users' + '/' + id;
        }
    }
}