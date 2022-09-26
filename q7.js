let arr1 = ["twice", "straykids", "astro", "girlsgeneration", "bangtan"];
console.log("Before Sort: " + arr1 );
arr1.sort((a,b) => { return a.length - b.length;});
console.log("After Sort: " + arr1);