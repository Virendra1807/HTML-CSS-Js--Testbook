
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const patchBtn = document.getElementById('patch-btn');
const deleteBtn = document.getElementById('delete-btn');

//GET method
getBtn.addEventListener('click', async () => {
    try {
        const responce = await fetch('https://catfact.ninja/fact');
        if (responce.ok) {
            let data = await responce.json();
            let facts = document.getElementById('facts');
            facts.innerText = data.fact
        } else {
            throw new Error(`Something Wrong, Network Status : ${responce.status}`);
        }
    } catch (error) {
        console.log(error);
    }
});