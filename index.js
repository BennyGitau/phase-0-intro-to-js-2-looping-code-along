const gifts = ["teddy bear", "drone", "doll"];



function wrapGifts(array){
    for(let item in array) {
        console.log(`Wrapped ${array[item]}, and added a bow!`);
    };
    return array;
}
wrapGifts(gifts);


function makeCards(array, event) {

    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    
    }
    return newArray;

}
makeCards(gifts, 'birthday');

//rewrite wrapgifts using a while for

function wrapGiftsWithWhile(array){
    let i = 0;// initialization is outside the body
    while(i < array.length){
    console.log(`Wrapped ${array[i]}, and added a bow!`);
    i++; //iteration is inside the body
    }
    return array;
}
wrapGiftsWithWhile(gifts);



// Code your solutions in this file
   
//returns an array of thank you messages for each name provided to the function

//const gifts = ["Guadalupe", "Ollie", "Aki"]
function writeCards(gifts, event){
    let message = [];

    for(let i = 0; i < gifts.length; i++){
        message.push(`Thank you, ${gifts[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
writeCards(gifts, 'birthday');


          
//function invokes console.log once for each number, counting down from the number provided to zero
//logs each number when counting down, starting from the number provided
function countDown(integer){
    let counter = integer;
    while (counter >= 0){
            console.log(counter);
            --counter;
        }
}
countDown(10);