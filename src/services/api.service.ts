
export const apiService = {
    getAll: async <T>(url: string): Promise<Array<T>> => {
        const response = await fetch(url);
        return await response.json();
    }
}