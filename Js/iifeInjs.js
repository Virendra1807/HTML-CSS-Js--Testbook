
// IIFE - Imediately Invoked Funtion Expression

(function(){
    console.log("It will execute without calling it")
})();


const hello = () => {
    console.log('Hello')
}

// Different Ways to call a function
hello.call();
hello.apply();


