function quick_sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	}else {
		let left = [];
		let right = [];
		let newArray = [];
		let pivot = origArray.pop();
		let length = origArray.length;
		for(let i=0; i<length; i++) {
			if(origArray[i] <= pivot) {
				left.push(origArray[i]);
			}else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quick_sort(left), pivot, quick_sort(right))
	}
}

let exampleArr = [3,0,2,5,-1,4,1];
let sortedArr = quick_sort(exampleArr);