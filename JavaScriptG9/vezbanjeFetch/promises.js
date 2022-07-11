const posts = [
    {title: 'post One', body: 'This is post one'},
    {title: 'post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let outpu = '';
        posts.forEach((post,index)=> {
            outpu += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = outpu;
    },1000)
}


cretePost=(post)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            posts.push(post)

            const error = false;
            if (!error) {
                res()
            }else {
                rej('Error : nece !')
            }
        }, 2000);
    })
   
}

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((res,rej)=>
// setTimeout(res,2000,'GodBye')
// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(val => console.log(val))

// cretePost({title: 'Post three', body: 'This is post three'},)
// .then(getPosts)
// .catch(err => {
//     console.log(err);
// })

//  async function init() {
//     await cretePost({title: 'post thre', body : "this is post thre"})

//     getPosts();
// }

// init()


async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);
}

fetchUsers();