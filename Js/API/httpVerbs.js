
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const patchBtn = document.getElementById('patch-btn');
const deleteBtn = document.getElementById('delete-btn');

//GET method for getting Data
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

//POST method for Creating post
postBtn.addEventListener('click', async () => {
    try {
        // Syntax for post method
        const responce = await fetch('https://catfact.ninja/fact', {
            method: "POST",
            body: "BODY OF POST",
            headers: ""
        });

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


//PUT method for Updating complete post
putBtn.addEventListener('click', async () => {
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

//PATCH method for Updating a single property not a complete post
patchBtn.addEventListener('click', async () => {
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

//DELETE method for Deleting post from API
deleteBtn.addEventListener('click', async () => {
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






