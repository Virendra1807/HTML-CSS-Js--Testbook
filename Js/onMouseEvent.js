
let i = 0;
let j = 0;

// i value will not update continuosly but yes as we leave and then again hover on it, then the value of i is definately updated
document.getElementById('demo1').onmouseover = ()=>{
    j++;
    document.getElementById('h1').innerHTML = "The j value when we use Mouse Over : " + j;
    // document.body.style.backgroundColor = 'orange';
};

// It continuosly occurs if we hover and i value will continuosly update as we move on it
document.getElementById('demo2').onmousemove = ()=>{
    i++;
    document.getElementById('h2').innerHTML = "The i value when we use Mouse move : " + i;
    // document.body.style.backgroundColor = 'violet';
};


// Event occurs on mouse click
document.getElementById('demo2').onmousedown = ()=>{
    i++;
    // document.getElementById('h2').innerHTML = "The i value when we use Mouse move : " + i;
    document.body.style.backgroundColor = 'violet';
};

// Event occurs on releasing click
document.getElementById('demo2').onmouseup = ()=>{
    i++;
    // document.getElementById('h2').innerHTML = "The i value when we use Mouse move : " + i;
    document.body.style.backgroundColor = 'yellow';
};


//Mouse leave and mouse Out function of both are same but leave override out.
document.getElementById('demo1').onmouseleave = ()=>{
    i++;
    // document.getElementById('h2').innerHTML = "The i value when we use Mouse move : " + i;
    document.body.style.backgroundColor = 'red';
};

document.getElementById('demo1').onmouseout = ()=>{
    i++;
    // document.getElementById('h2').innerHTML = "The i value when we use Mouse move : " + i;
    document.body.style.backgroundColor = 'green';
};

