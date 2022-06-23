Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "BhV170YumKMxyCFkQ9y1ex878F9DMJHXrE2VEs0S", // This is your Application ID
  "6Mpu5fKN884D1SpKZt9NtyL82p88rOFN16yRCuBY" // This is your Javascript key
);

const div = document.getElementById("photoArlequina");
let fotosEscolhidas = [];

function gerarLista() {

  for (let i = 0; i < fotosEscolhidas.length; i++) {

    const btImg = document.createElement("button");
    btImg.id = "btnImg";

    const btTxt = document.createTextNode("Change Photo");

    btImg.appendChild(btTxt);

    btImg.onclick = (evt) => handleClickBtImg(evt,img,img2,img3,img4,img5,img6,img7,img8);

    const img = document.createElement("img");
    const img2 = document.createElement("img2");
    const img3 = document.createElement("img3");
    const img4 = document.createElement("img4");
    const img5 = document.createElement("img5");
    const img6 = document.createElement("img6");
    const img7 = document.createElement("img7");
    const img8 = document.createElement("img8");
  
    img.id = "photo";
    img2.id = "photo";
    img3.id = "photo";
    img4.id = "photo";
    img5.id = "photo";
    img6.id = "photo";
    img7.id = "photo";
    img8.id = "photo";

    img.src = fotosEscolhidas[0+i];

    if(btImg.onclick){
        for(let y = 1;y<fotosEscolhidas.length;i++){
            img.src = fotosEscolhidas[i+y];
        }
    }

    img2.src = fotosEscolhidas[1];
    img3.src = fotosEscolhidas[2];
    img4.src = fotosEscolhidas[3];
    img5.src = fotosEscolhidas[4];
    img6.src = fotosEscolhidas[5];
    img7.src = fotosEscolhidas[6];
    img8.src = fotosEscolhidas[7];

    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img5.style.display = "none";
    img6.style.display = "none";
    img7.style.display = "none";
    img8.style.display = "none";

    div.appendChild(img);
    div.appendChild(img2);
    div.appendChild(img3);
    div.appendChild(img4);
    div.appendChild(img5);
    div.appendChild(img6);
    div.appendChild(img7);
    div.appendChild(img8);
    div.appendChild(btImg);
    btImg.appendChild(btTxt);
    div.appendChild(fotosEscolhidas);
  }
}

const fetchFotos = () => {

    const Villians = Parse.Object.extend('Villians');
    const query = new Parse.Query(Villians);

  query
    .find()
    .then((results) => {
      fotosEscolhidas = [];
      for (const object of results) {

        const Arlequina = object.get("Arlequina").url();
        fotosEscolhidas.push(Arlequina);
      }
      gerarLista();
    })
    .catch((error) => {
      console.error("Error while fetching Villians", error);
    });
};


const handleClickBtImg = (evt,img,img2,img3,img4,img5,img6,img7,img8) => {

    if(evt == true){
        img.style.display = "none";
        img2.style.display = "block";
        img3.style.display = "block";
        img4.style.display = "block";
        img5.style.display = "block";
        img6.style.display = "block";
        img7.style.display = "block";
        img8.style.display = "block";
        console.log("Troca de Imagem Feita com Sucesso!!!!")
    }
};

fetchFotos();