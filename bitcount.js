function getOneBits(n) {
    let count = 0;
    let temp = [];
    let idx = 1;
    while (n) {
        if (n & 1) temp.push(idx);
        count += n & 1;
        n >>= 1;
        idx++;
    }
    let result = []
    for (let index = 0; index < temp.length; index++) {
        result.push(idx - temp[index])
    }
    result.reverse();
    result.unshift(count);
    return result;
}