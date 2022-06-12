let timer;
let titleOld = document.querySelector('head title').innerHTML;

// console.log(titleOld);

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href',icon);
}

window.onblur = () =>{
    timer = setTimeout(() =>{
        changeTitle('../img/favicon1.ico', 'Вернись скотина');
    }, 3000)
}

window.onfocus = () =>{
    // clearTimeout(timer);
    changeTitle('../img/favicon1.ico', titleOld);
}