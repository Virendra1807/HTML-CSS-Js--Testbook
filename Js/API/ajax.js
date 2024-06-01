
const fetchBtn = document.getElementById('fetchBtn');
const content = document.getElementById('content');

fetchBtn.addEventListener('click', fetchFunction);

function fetchFunction(){

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            content.innerHTML =  `<img scr= '${data.message}' alt='dog-image' />`;
            console.log(data.message);
            // console.log(data.success);
        })

}










    // const xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://drive.google.com/drive/folders/1YxG-xJvaE5G9j_YcN3BfCBkWOR9zLWNu', true);
    
    // content.innerHTML = JSON.parse(this.responseText);
    // console.log(this.responseText);
    // generate joke
    // https://official-joke-api.appspot.com/random_joke
    
    // xhr.send();
