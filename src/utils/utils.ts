export const getUrlWithSearchParam = (requestUrl: string, searchParam: string, searchParamValue:string): URL => {
    const url = new URL(requestUrl);
    url.searchParams.append( searchParam, searchParamValue);
    return url;
}