const button = document.querySelector('button')
const inputHexa = document.getElementById('inputHexa')
const targetObject = document.getElementById('targetObject')

button.addEventListener('click', function(){
    targetObject.style.backgroundColor = inputHexa
})