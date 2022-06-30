/**
function funcao2(){
   document.white('Este texto foi impresso pela função do arquivo externo.');
 }
*/


const btn = document.querySelectorAll("button")

btn[0].addEventListener("click", function teste) {
  alert("teste 1")
}

btn[0].addEventListener("click", function () {
  alert("teste 2")
})

btn[0].addEventListener("click"( ) => {
  alert("teste 3")
})
