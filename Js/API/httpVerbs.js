

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const patchBtn = document.getElementById('patch-btn');
const deleteBtn = document.getElementById('delete-btn');

var url = 'https://catfact.ninja/fact';
//GET method
getBtn.addEventListener('click', ()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        let facts = document.getElementById('facts');
        facts.innerText = data.fact
    })
    .catch((err)=> console.error(err));
});