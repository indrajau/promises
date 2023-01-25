let lastActivity = new Date().getTime();
console.log("last activity before createing post "+lastActivity);


const posts =[
    {title :'Post One', body:'This is post one' },
    {title :'Post Two', body:'This is post two'}
]

function getPost(){
    
    setTimeout(()=>{
        const output = '';
        posts.forEach((arr)=>{
            output+= `<li>${arr.title}</li>`;
        })
        document.body.innerHTML=output;
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push(post);
        let error=false;
            if(!error){
                resolve();
            }
            else {
                reject('error:something wemt wrong');
            }
        },2000);

    });
}
const user={
    username:'indu',
    lastActivitytime :'2nd sepetember'
}
function updateLastActivityTime (){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        user.lastActivitytime=new Date().getTime();
        resolve(user.lastActivitytime)
    },1000);
})
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastElement=posts.pop();
                resolve(lastElement);
            } else {
                reject('array is empty now');
            }
        },2000);
    });
}

createPost({title:'post three',body:'this is third post'}).then(()=>{
    getPost();
    deletePost().then((deletedElement)=>{
        console.log(deletedElement);
        getPost();
        deletePost().then(()=>{
            getPost();
            deletePost().then(()=>{
                getPost();
                deletePost().then(()=>{}).catch((err)=>{
                    console.log('inside catch block',err);
                })
            }).catch((err)=>{})
        })
    })
})
.catch((err)=>{
    console.log(err);
}
)

