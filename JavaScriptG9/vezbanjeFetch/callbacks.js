// const posts = [
//     {title: 'post One', body: 'This is post one'},
//     {title: 'post Two', body: 'This is post two'}
// ];

// function getPosts(){
//     setTimeout(()=>{
//         let outpu = '';
//         posts.forEach((post,index)=> {
//             outpu += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = outpu;
//     },1000)
// }


// cretePost=(post,callback)=>{
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000);
// }

// getPosts();

// cretePost({title: 'Post three',body:'This is post thre'},getPosts)







// fetch('https://62bf337cbe8ba3a10d65d799.mockapi.io/post' )
// .then(response => {
//    const data = response.json(); 
//    return data;

// })
// .then(data => {
//     console.log(data);
// }) 
// .catch(()=> {
//     console.log('nece jbg');
// })

// let books = new Promise((res,rej)=> 
// {
// let a = 1 + 1;
// if(a == 1){
//     res('Seccues')
// }else{
//     rej('Failed')
// }
// })

// books.then(res => {
//     console.log(res);
// }).catch(rej => {
//     console.log('Neceee');
// })


// promFunc = () => {
//     return new Promise((res,rej) => {
//         if(arg === 2){
//             res('Bravo kralju')
//         }else{
//            rej('Nije kralju')
//         }
//     })
// }

// promFunc().then((res)=>{
//     console.log(res);
// })