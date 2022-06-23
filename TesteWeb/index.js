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

function toggle(){
  const div = document.getElementById("campoAbout");
  const titulo = document.createElement("h3");
  const divAbout = document.createElement("div");
  const texto = document.createElement("p");
  const nomeSite = document.createElement("span")
  const linha = document.createElement("hr");

  div.innerHTML = "";

  const textNode = document.createTextNode("Olá, pequenos geeks e nerds. Meu nome é Samara Silvia e sabe eu sempre me considerei uma de vocês. Gosto muito do mundo das animações, HQS e clássico - bem vs mal -, principalmente a história por trás de cada vilão, suas motivações e psicológico. Então, pensei \"Por que não fazer um site dedicado a esses seres que nos proporcionam tanto aflição e divertimento\". Bom, dito e feito!! Aqui está um site inteirinho para eles, divertam-se e aproveitem esse maravilhoso ");
  const textNomeSite = document.createTextNode("World´s Villians.")
  const tituloNode = document.createTextNode("About Us");
  
  divAbout.id = "divAbout"
  texto.id = "textAbout";
  titulo.id = "tituloAbout";
  linha.id = "linhaAbout";
  nomeSite.id = "nomeSite";

  div.appendChild(divAbout);
  divAbout.appendChild(titulo);
  divAbout.appendChild(linha);
  divAbout.appendChild(texto);
  divAbout.appendChild(nomeSite);
  texto.appendChild(textNode);
  nomeSite.appendChild(textNomeSite);
  texto.appendChild(nomeSite);
  titulo.appendChild(tituloNode);

    if ( div.style.display != 'flex' ) {
      div.onclick = div.style.display = 'flex';
      console.log("Ativou")
    }
    else if(div.style.display != 'none'){
      div.onclick = div.style.display = 'none';
      console.log("Desativou")
    }
}


const sectionsWithCarousel = document.querySelectorAll(
    ".section-with-carousel"
  );
  
  for (const section of sectionsWithCarousel) {
    let slidesPerView = [1.5, 2.5, 3.5];
    if (section.classList.contains("section-with-left-offset")) {
      slidesPerView = [1.5, 2.5, 3.5];
    }
    const swiper = section.querySelector(".swiper");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
      spaceBetween: 15,
      loop: true,
      lazyLoading: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        prevEl: section.querySelector(".carousel-control-left"),
        nextEl: section.querySelector(".carousel-control-right")
      },
      breakpoints: {
        768: {
          slidesPerView: slidesPerView[1]
        },
        1200: {
          slidesPerView: slidesPerView[2]
        }
      }
    });
  }
  


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '250',
    width: '500',
    videoId: 'xWFNRzR8qiI',
  });
  player2 = new YT.Player('player2', {
    height: '250',
    width: '500',
    videoId: 'kFF3nBumIL8',
  });
};

