// Promise in Js Shradha Khapra JS-Playlist-12 video
function getInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                console.log(`Student Id : ${id}`);
                resolve("Successfully Execute");
            } else {
                console.log("Rejected");
                reject("No student Id");
            }
        }, 5000);
    });
}

