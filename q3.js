let arr1=["CSE","ECE","CSE","IT"];
let arr2=["Tulsi","Subhradeep","Suvam","Akash"];
let merge= arr1.map(function(value,index){
    return {stream:value, name:arr2[index]}
});
console.log(merge);


