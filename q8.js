function removedups(arr){
    let arr1 = [];
    for(let i of arr) {
        if(arr1.indexOf(i) === -1) {
            arr1.push(i);
        }
    }
    console.log(arr1);
}
let arr3 = [1,3,6,6,3,8,9];
removedups(arr3);