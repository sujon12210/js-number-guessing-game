const secret = Math.floor(Math.random() * 10) + 1;

function check(){
  const guess = Number(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if(!guess){
    result.innerText = 'Enter a number';
    return;
  }

  if(guess === secret){
    result.innerText = '🎉 Correct! You guessed it.';
  }else if(guess > secret){
    result.innerText = 'Too high!';
  }else{
    result.innerText = 'Too low!';
  }
}
