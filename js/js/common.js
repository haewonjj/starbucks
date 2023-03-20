const searchE1 = document.querySelector('.search_bar');
const searchIntputE1 = searchE1.querySelector('input');
console.log(searchE1);
console.log(searchIntputE1);

//마우스 커서가 input아무곳이나 누르면 늘어나게
searchE1.addEventListener('click' , function(){
    searchIntputE1.focus();
});
//서치바가 늘어날때 글자추가
searchIntputE1.addEventListener('focus',function(){
    searchE1.classList.add('focused');
    searchIntputE1.setAttribute('placeholder','Search keyword');
});
//글자추가 된거 다시 빠져나감
searchIntputE1.addEventListener('blur',function(){
    searchE1.classList.remove('focused');
    searchIntputE1.setAttribute('placeholder','');
});
