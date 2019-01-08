
function responseR(rat) {
    var amount = document.getElementById('amountInput').value ;
    var tip = document.getElementById('tip')
    var rating = rat
    var total = (amount * rating)
    total = Math.round(total * 100) / 100;
   
    if( amount < 1 || isNaN(amount) ){
              alert('Your number is invalid')
            }
    else
     {  tip.innerHTML = total+" -Rs";}   

}