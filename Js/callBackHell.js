// CallBack Hell

function getData(id, getNextData) {
    setTimeout(() => {
        console.log(`Data : ${id}`)
        if(getNextData) {
            getNextData();
        }
    }, 2000);
    
}

// CallBack function contains CallBack function in it and so on.
// So this is not easy to read that why we call it CallBack Hell in JavaScript
getData(1, () => {
    console.log('Fetching data 2');
    getData(2, () => {
        console.log('Fetching data 3');
        getData(3, () => {
            console.log('Fetching data 4');
            getData(4);
        });
    });
});

