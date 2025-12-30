var randomnum = Math.floor(Math.random()*100)+1;
var attempts = 0;
document.getElementById('btn').addEventListener('click',function(){
    var guess = parseInt(document.getElementById('guessinput').value);
    attempts++;
    if(guess===randomnum){
       displayMessage("congratulations! You guessed the Number in "+attempts+" attempts");
       document.getElementById('btn').disabled=true;
    }
    else if(guess<randomnum){
        displayMessage("Too low! Try a higher Number");
    }
    else {
        displayMessage("Too High! Try a lower Number");
    }
});
function displayMessage(Message)
{
    document.getElementById('msg').textContent = Message;
}