// Elements
const lettercontainer = document.getElementById('letter-container');
const valerio = document.getElementById('valerio');
const heart = document.getElementById('heart');
const letterbuttons = document.getElementById('letter-buttons');
const finaltext = document.getElementById('final-text');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');
const lettertitle = document.getElementById('letter-title');
const envelopecontainer = document.getElementById('envelope-container');


// Click Envelope

envelopecontainer.addEventListener('click', () => {
    envelopecontainer.style.display = 'none';
    lettercontainer.style.display = 'flex';
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add('open');
    }, 50);
});

let yesScale=1
yesbtn.style.position = 'relative';
yesbtn.style.transformOrigin = 'center center';
yesbtn.style.transition = 'transform 0.3s ease';

nobtn.addEventListener('click', () => {
    yesScale+= 1.67;

    if (yesbtn.style.position !== 'fixed') {
        yesbtn.style.position = 'fixed';
        yesbtn.style.left = '50%';
        yesbtn.style.top = '50%';
        yesbtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesbtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

yesbtn.addEventListener('click', () => {
    lettertitle.textContent = "SUPAAAAA!";

    Image.src="heart.gif";

    document.querySelector(".letter-window").classList.add('final');

        letterbuttons.style.display = 'none';
        finaltext.style.display = 'block';
});




