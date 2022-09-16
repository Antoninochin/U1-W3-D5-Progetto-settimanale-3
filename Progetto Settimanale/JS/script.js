
    let person = prompt('Inserisci il Tuo nome')
    if (person != null){
    document.getElementById('Interagire').innerHTML = 'Benvenuto/a' + ' ' + person + ',' +  ' adesso puoi calcolare!'; 
    }


function Write(number){
    document.getElementById('display').value += number
}

function Result(){
    let result = eval(document.getElementById('display').value)
    document.getElementById('display').value = result
}

function Delete(){
    let c = document.getElementById('display').value
    document.getElementById('display').value = c.substring(0, c.length-1)
}
 function Reset(){
    document.getElementById('display').value = ''
 }

 /*risultato senza il metodo eval
  function Result(){
  let somma = [1,2,3,4,5,6,7,8,9]
  let Result = somma(getElementById('display').value)
  document.getElementById('display').value += Result.substring(0, Result.length-1)
}*/
  