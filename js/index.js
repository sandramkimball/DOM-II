
// CLICK
const navButtons = document.querySelectorAll('.nav-link');
navButtons.forEach(item =>{
    item.addEventListener('click', e=>{
        item.textContent = 'Aloha!';
    })
})


// MOUSEENTER + MOUSELEAVE
const imgAnime = document.querySelectorAll('img');
imgAnime.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = 'transform 0.5s';
    })
})

const imgAnime2 = document.querySelectorAll('img');
imgAnime2.forEach(item => {
    item.addEventListener('mouseleave', e => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.5s';
    })
})

// DBLCLICK
const newImg = document.querySelectorAll('img');
newImg.forEach(item =>{
    item.addEventListener('dblclick', e=> {
        item.src = "https://pbs.twimg.com/media/CsmIMVRW8AA3bI2.jpg";
    })
})


// WHEEL
const bgAnime = document.querySelector('body');
bgAnime.addEventListener('wheel', e=> {
    bgAnime.style.backgroundImage = 'linear-gradient(#d1e2be, #1c6262)';
    bgAnime.style.transition = 'transform 1.0s';
})

const returnPg = document.querySelector('body');
returnPg.addEventListener('dblclick', e=> {
    returnPg.style.backgroundImage = "url('https://pbs.twimg.com/media/CsmIMVRW8AA3bI2.jpg')";
})



// SELECT
const wordBig = document.querySelectorAll('body p');
wordBig.forEach(item =>{
    item.addEventListener('select', e=> {
    item.style.fontSize = '45px';
    })
})


// RESIZE
window.addEventListener('resize', e=>{
    const newH2 = document.querySelectorAll('body h2');
    newH2.textContent = "I See You";
})


// KEYDOWN + KEYUP
const contMove = document.querySelector('body');
contMove.addEventListener('keydown', e=>{
    contMove.style.marginLeft = '-50%';
})

const contMoveBack = document.querySelector('body');
contMove.addEventListener('keyup', e=>{
    contMove.style.marginLeft = '0%';
})


// SCROLL
const allWords = document.querySelectorAll('body .text-content p');
allWords.forEach(item =>{
    item.addEventListener('scroll', e=>{
        item.style.display = 'none';
        item.preventDefault;
    })
})

// RESIZE
window.addEventListener('resize', e=>{
    const noMore = document.querySelectorAll('body p');
    noMore.style.display = 'none';
})

//MOUSEOVER
const signUp = document.querySelectorAll('div .btn');
signUp.forEach(item =>{
    item.addEventListener('select', e=>{
        const wholePg = document.querySelector('body');
        wholePg.style.visibility = 'hidden';
        e.stopPropagation();
    })
    e.stopPropagation();
})
