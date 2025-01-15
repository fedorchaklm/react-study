export const getUrlWithSearchParam = (requestUrl: string, searchParam: string): URL => {
    const url = new URL(requestUrl);
    url.searchParams.append('page', searchParam);
    return url;
}
