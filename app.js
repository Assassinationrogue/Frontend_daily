const img1 = document.querySelector('.image1');
const contain = document.querySelector('.container');

img1.style.opacity='0%';

// img1.addEventListener('mouseover',opa=>{
//     img1.style.opacity='50%';
// });

// img1.addEventListener('mouseout',opa=>{
//     img1.style.opacity='100%';
// });
// setTimeout(opa=>{
//     img1.style.opacity='100%';
// },2000).then(opa=>{
//     img1.style.opacity='0%';
// })



// const imgstore = new Promise(function(resolve,reject){
//     if(img1){
//         resolve(setTimeout(opa=>{
//             img1.style.opacity='100%';
//         },2000))
//     }else{
//         reject(img1.style.opacity='0%');
//     }
// })

// imgstore.then(res=>console.log('Loaded!'))

const createImage = function(ImgPath){
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        img.src = ImgPath;
(
        img.addEventListener('load',function(){
            contain.append(img);
            resolve(img);
        }))

        img.addEventListener('error',function(){
            reject(new Error('Image not found.'))
        });
    });
};

createImage('veronique-trudel-PvN17RvS1hM-unsplash.jpg').then(img => {
    console.log('Image one loaded.')
})

const whereAmI = async function(country){
   const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
   console.log(res)
}
whereAmI('portugal');
console.log('First');