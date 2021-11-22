const homeHeader = document.getElementById('home-header');
const aboutHeader = document.getElementById('about-header');
const blogHeader = document.getElementById('blog-header');
const contactHeader = document.getElementById('contact-header');

document.addEventListener('DOMContentLoaded', () => {
    switchTabs('home', 'home-header');
});

homeHeader.addEventListener('click', () => {
    window.location.hash = '#home';
});
aboutHeader.addEventListener('click', () => {
    window.location.hash = '#about';
});
blogHeader.addEventListener('click', () => {
    window.location.hash = '#blog';
});
contactHeader.addEventListener('click', () => {
    window.location.hash = '#contact';
});

window.onhashchange = function() {
    switch(window.location.hash) {
        case '#home':
            switchTabs('home' , 'home-header');
            break;
        case '#about':
            switchTabs('about' , 'about-header');
            break;
        case '#blog':
            switchTabs('blog' , 'blog-header');
            break;
        case '#contact':
            switchTabs('contact' , 'contact-header');
            break;
    }
};

function switchTabs(tabID, headerID) {
    let tabContent = document.getElementsByClassName("tab-content");
    let tabHeader = document.getElementsByClassName('tab-header');
    for (let i = 0; i < tabContent.length; i++) {
        if (tabContent[i].id !== tabID) {
            tabContent[i].style.display = "none";
        } else {
            tabContent[i].style.display = "block";
        }
    }

    for(let i = 0; i < tabHeader.length; i++) {
        if(tabHeader[i].id === headerID) {
            tabHeader[i].style.backgroundColor = "#8c8b8b";
        } else {
            tabHeader[i].style.backgroundColor = "#555";
        }
    }

}