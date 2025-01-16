export const getUrlWithSearchParam = (requestUrl: string, searchParam: string, searchParamValue:string): string => {
    const url = new URL(requestUrl);
    url.searchParams.append( searchParam, searchParamValue);
    return url.toString();
}

export const getQuantityOfPages = (total: number, limit: number): number => {
    return Math.round(total / limit);
}