export const sortedByParameter = <T>(parameter: keyof T) => (prev:T, next: T) => {
    if (prev[parameter] > next[parameter]) {
        return 1;
    }
    if (prev[parameter] < next[parameter]) {
        return -1;
    }

    return 0;
}