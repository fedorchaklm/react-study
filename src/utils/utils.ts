interface ISearchParams {
    [key: string]: string;
}

export const getUrlWithSearchParam = (requestUrl: string, searchParam: ISearchParams): string => {
    const url = new URL(requestUrl);
    for (const key in searchParam) {
        url.searchParams.append(key, searchParam[key]);
    }
    return url.toString();
}

export const getQuantityOfPages = (total: number, limit: number): number => {
    return Math.ceil(total / limit);
}