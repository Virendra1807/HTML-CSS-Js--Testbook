

let queue = [];

function enQueue(num){
    queue.push(num);
    console.log(`Added ${num} in queue`);
}

function deQueue(){
    let a = queue.shift();
    console.log(`Removed ${a} from queue`);
}

function peek(){
    console.log(`Peek element in Queue is ${queue[0]}`);
}

enQueue(10);
enQueue(20);
enQueue(30);
deQueue();
peek();