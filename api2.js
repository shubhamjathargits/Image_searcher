let photo = document.getElementById('gallery');
let errs = document.getElementById('err');
let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(){
    const num = document.getElementById('inp').value;
    errs.innerHTML = "";
    if (!num.match(/^[0-9]+$/)) {
        errs.innerHTML = "Enter Valid Number";
    }
    allimg=""
    fetch(` https://api.thecatapi.com/v1/images/search?limit=${num}&page=10&order=Desc`)
    .then((res)=>res.json())
    .then((res)=>{
        for(let i=0;i<num;i++)
        {
            allimg+=`<img src=${res[i].url}>`
        }
        photo.innerHTML=allimg;
    })
});
btn2.addEventListener('click',  function(){
    const num = document.getElementById('inp').value;
    errs.innerHTML = "";
    if (!num.match(/^[0-9]+$/)) {
        errs.innerHTML = "Enter Valid Number";
    }
    allimg=""
     fetch(` https://api.thedogapi.com/v1/images/search?limit=${num}&page=10&order=Desc`)
    .then((res)=>res.json())
    .then((res)=>{
        for(let i=0;i<num;i++)
        {
            allimg+=`<img src=${res[i].url}>`
        }
        photo.innerHTML=allimg;
    })
});
