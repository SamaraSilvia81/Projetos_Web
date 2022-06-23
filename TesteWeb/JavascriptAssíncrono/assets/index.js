Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "BhV170YumKMxyCFkQ9y1ex878F9DMJHXrE2VEs0S", // This is your Application ID
  "6Mpu5fKN884D1SpKZt9NtyL82p88rOFN16yRCuBY" // This is your Javascript key
);

const imgBtn = document.getElementById("btnImg");
let localPhoto = document.getElementById("photo")
let fotosEscolhidas = [];

const getPhoto = async() =>{

    const Villians = Parse.Object.extend('Villians');
    const query = new Parse.Query(Villians);

    try{
        const results = await query.find();
        for(const object of results){

            const Arlequina = object.get('Arlequina');
            fotosEscolhidas.push(Arlequina);
        }
        

        console.log(Arlequina);
        console.log(fotosEscolhidas);

    }catch(error){
        console.error('Error while fetching villians',error);
    }
};

const exibirPhoto = async(evt) =>{

    getPhoto;

    for(let i = 0;i<getPhoto;i++){

        if(evt == true){
            localPhoto = fotosEscolhidas[i];
        }
    }

    //console.log(localPhoto);
}

imgBtn.onclick = (evt) => exibirPhoto(evt);
exibirPhoto(); // Para o site já começar com uma imagem.
