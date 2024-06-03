
const fetchBtn = document.getElementById('fetchBtn');
const content = document.getElementById('content');
const imgSrc = document.getElementsByTagName('img');
fetchBtn.addEventListener('click', fetchFunction);

function fetchFunction(){

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) =>{
            // console.log(response.json());
            return response.json();
        })
        .then((data) =>{
            imgSrc.src = `${data.message}`;
            // content.innerHTML =  "<img scr= '"+ data.message +"'/>";
            console.log(data.message);

            // content.appendChild('img');
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
