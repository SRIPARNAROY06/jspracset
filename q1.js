function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--)
    {
        newString +=str[i];
    }
    return newString;
}
let string= "string";
let finalstring=reverseString(string);
console.log(finalstring);