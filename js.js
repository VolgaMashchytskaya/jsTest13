//localStorage.setItem('data', 10)
//console.log(localStorage.getItem('data'))

let a = [1,2,3]
//localStorage.setItem('data', a)
localStorage.setItem('data', JSON.stringify(a))


let b = localStorage.getItem('data')
console.log(b[2])
b = JSON.parse(b)
console.log(b)

console.log(b[2])
console.log(typeof(b))

localStorage.clear;


let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange  = function(){
  if(this.readyState == 4 && this.status == 200){
      myfunc(this.responseText)
  }
}

xhttp.open('GET', 'https://www.kufar.by/')
xhttp.send()


function myfunc (data){
  console.log(data)
}
