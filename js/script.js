// console.log('Ура! Заработало!!!');

const header = document.querySelector('.siteHeader');
const spider = document.querySelector('.spider');


document.querySelector('.showOn').onchange = function(){
    if (this.checked){
        header.classList.add('siteHeaderBg');
        spider.classList.add('spiderAnimation');
    }
    else{
        header.classList.remove('siteHeaderBg');
        spider.classList.remove('spiderAnimation');
    }
}


function scarySound(){
    const audio = new Audio()
    audio.preload = 'auto';
    audio.src = '../img/monstr.mp3'
    audio.play();
}

spider.onclick = scarySound;