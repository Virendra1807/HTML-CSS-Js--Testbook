
function getInfo1(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                console.log(`Student Id : ${id}`);
                resolve("Successfully Execute");
            } else {
                console.log("Rejected");
                reject("No student Id");
            }
        }, 2000);
    });
}


// Promise Chaining 
// getInfo1(235)
// .then((res) => {
//     console.log(res);
//     getInfo1(236)
//     .then((res) => {
//         console.log(res)
//         getInfo1(237)
//         .then((res) => {
//             console.log(res)
//             getInfo1(238)
//             .then((res) => {
//                 console.log(res)
//             });
//         });
//     });
// });


// Promise Chaining 2
getInfo1(235)
    .then((res) => {
        console.log(res);
        return getInfo1(236);
    })
    .then((res) => {
        console.log(res);
        return getInfo1(237);
    })
    .then((res) => {
        console.log(res);
        return getInfo1(238);
    })
    .then((res) => {
        console.log(res);
    });