const homeHeader = document.getElementById('home-header');
const aboutHeader = document.getElementById('about-header');
const blogHeader = document.getElementById('blog-header');
const contactHeader = document.getElementById('contact-header');

document.addEventListener('DOMContentLoaded', () => {
    switchTabs('home', 'home-header');
});

homeHeader.addEventListener('click', () => {
    switchTabs('home', 'home-header');
});
aboutHeader.addEventListener('click', () => {
    switchTabs('about', 'about-header');
});
blogHeader.addEventListener('click', () => {
    switchTabs('blog', 'blog-header');
});
contactHeader.addEventListener('click', () => {
    switchTabs('contact' , 'contact-header');
});

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