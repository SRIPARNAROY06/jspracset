let n = 5;
let st =''; 
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(i===1 || i===n){
      st += '*';
    }
    else{
        if(j===1 || j===n){
          st += '*';
        }
        else{
          st +=' ';
        }
    }
  }
  st += '\n';
}
console.log(st);