
function TimeTakenToBuyTicket(){

    let ticketQueue = [5,3,2,5,2,1];
    let k = 2; //kth person
    let TimeTaken = 0;

    for(let i=0; i<ticketQueue.length; i++){
        
        if(ticketQueue[i] <= ticketQueue[k] && i<=k  ){
                TimeTaken += ticketQueue[i];
        }
        else if(ticketQueue[i] > ticketQueue[k] && i<=k){
            // Add ticketQueue[k]th tickets because they want more tickets than kth person 
            // so they will be in queue after kth person buys his all tickets
            TimeTaken += ticketQueue[k];
        }
        else if (ticketQueue[i] < ticketQueue[k] && i>k){
            TimeTaken += ticketQueue[i];
        }
        else{
            // Add ticketQueue[k]th tickets because they want more tickets than kth person 
            // so they will be in queue after kth person buys his all tickets
            TimeTaken += ticketQueue[k]-1;
        }
    
    }

    console.log('Time taken to buy all tickets to kth person is ' + TimeTaken);
}



TimeTakenToBuyTicket();
