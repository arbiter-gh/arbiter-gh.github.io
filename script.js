var options = {
    strings: ['Student', 'Coder', 'Developer', 'Designer' ],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
}

window.onload = () => {
    window.setTimeout(startTyping, 100)
}

function startTyping() {
    var typed = new Typed('.multitext', options)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).on('click', 'ul li', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

//let text = document.getElementById('email').innerHTML;
let text = 'rahulkumar397222@gmail.com'

const copyContent = async () => {
    
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
