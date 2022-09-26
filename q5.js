
let random=()=>{
    var arr=[];
    for(var j=0;j<10;j++){
    arr.push(Math.round(Math.random()*40)+10);
}
    console.log(arr);
};
let func=(random)=>{
    return random();
}

func(random);
