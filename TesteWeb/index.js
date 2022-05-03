class MobileNavbar{
    constructor (icons, navList, navLinks) {
        this.icons = document.querySelector(icons);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.icons.classList.toggle(this.activeClass);
        this.animateLinks(); // Animando os links toda vez que clicar.
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => { // esse método forEach permite falar com cada link individualmente
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`);
        });
    }

    //index/7 + 0.3s - Digite cada index, posição, por 7 e o valor que der soma mais 0,3 e são interpretados como milisegundos.

    addClickEvent(){
        this.icons.addEventListener("click", this.handleClick);
    }
    
    init(){

        if(this.icons){
            this.addClickEvent();
        }

        return this;
    }
}
const mobileNavbar = new MobileNavbar (".icons", ".nav-list", ".nav-list li"); 

mobileNavbar.init();