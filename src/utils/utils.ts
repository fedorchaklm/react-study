export  const sortedByParameter = (parameter: string) => (prev, next) => {
    if (prev[parameter] > next[parameter]) {
        return 1;
    }
    if (prev[parameter] < next[parameter]) {
        return -1;
    }

    if (prev[parameter] === next[parameter]) {
        return 0;
    }
}