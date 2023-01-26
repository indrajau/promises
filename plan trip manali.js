
function buycar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('buy an car');
        },1000);
    })
}
function planatrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('go to manali');
        },2000);
    })
}
function reachmanali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached manali');
        },3000);
    })
}
function gotofamousmouuntain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached mountain');
        },4000);
    })
}
/*buycar().then((msg)=>{
console.log(msg);
planatrip().then((msg2)=>{
    console.log(msg2);
  reachmanali().then((msg3)=>{
    console.log(msg3);
    gotofamousmouuntain().then((msg4)=>{
        console.log(msg4);
    })
  })
})
}) */
async function trip(){
    const msg=await buycar();
    console.log(msg);
    const msg2=await planatrip();
    console.log(msg2);
    const msg3=await reachmanali();
    console.log(msg3);
    const msg4=await gotofamousmouuntain();
    console.log(msg4);
}
trip();
