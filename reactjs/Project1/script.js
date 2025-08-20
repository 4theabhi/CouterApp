const changeBtn = document.getElementById('changetxt');
//console.log(changeBtn);

function buttonClick(){
    alert('Hello Jagadeesh')
}
//buttonClick();

//changeBtn.addEventListener('click',buttonClick);

changeBtn.addEventListener('click',function(){
    //document.getElementById('divName').innerText = 'Ruthvik Is Good boy';
    document.getElementById('divName').textContent = 'Ruthvik Is Good boy';
    const divEle = document.getElementById('root');
    console.log(divEle);
    divEle.innerHTML= "<p>Chicking</p>"
});