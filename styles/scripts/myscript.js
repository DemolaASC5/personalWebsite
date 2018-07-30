// alert('Welcome to my website')
 
function onClick(){
    const image= document.querySelector('#ig');
    image.src = "https://image.ibb.co/mCkrDo/insta_bw.png"
}

const image= document.querySelector('.Instagram');
const buttonElement = document.querySelector('button'); 
buttonElement.addEventListener('click', onClick); 
