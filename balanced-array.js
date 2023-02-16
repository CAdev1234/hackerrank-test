function solve(a){
    // Complete this function
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    let curr = a[0];
    for(let i = 1; i < a.length; i++) {
        if(curr === sum - curr -a[i]) {
            return i;
        }
        curr += a[i];
    }
    return -1;
}
