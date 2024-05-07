

const animal = {
    name : "Lion",
    color : " Yellow",
    print : function (){
        console.log(this.name + this.color);
    }
}


const bird = {
    name:"Parrot",
    color: " Green" 
}


animal.print();

let birdBind = animal.print.bind(bird); 
birdBind();

// By using Bind we can use function of another object




