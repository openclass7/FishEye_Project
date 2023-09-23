   
    
//1111111111111111111111111111111111111111111111
    //    async  function getData(){
    //             let url=("./data/photographers.json")
    //             const response = await fetch(url);
    //             const data = await response.json();

    //             const dataPhotographers=data.photographers
    //             const dataMedia=data.media
              
    //             console.log(data)
    //             console.log(dataPhotographers)
    //             console.log(dataMedia)
    //             console.log(dataPhotographers[1].name)
    //             console.log( typeof data)
    //             return data;
    //     }
    //  getData()
//22222222222222222222222222222222222222222
    //    async  function getData(){
    //             let url=("./data/photographers.json")
    //             const response = await fetch(url);
    //             const data = await response.json();

    //             const dataPhotographers=data.photographers
    //             const dataMedia=data.media
    //             getDataPhotographes(data)
           
    //             // return data;
    //           }

    //           getData()

    //         function getDataPhotographes(data){
               
    //         }
    //         getDataPhotographes()
//3333333333333333333333333333333333333333333333333333333333333            





    
    //    async  function getData(){
    //         try{
    //             const response = await fetch("./data/photographers.json");
    //             const data = await response.json();
    //             return data;
    //         } catch(err){
    //             // throw new Error(err);
    //         }
    //     }
    //  getData()
    // 
   
   
 //-----------------------------------------------------------------------**
       async function getPhotographers() {
        // //66666666666666666666666666666666666666666666666666666666666666666
        // // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

        // let photographers = [
        //     {
        //         "name": "Ma data test",
        //         "id": 1,
        //         "city": "Paris",
        //         "country": "France",
        //         "tagline": "Ceci est ma data test",
        //         "price": 400,
        //         "portrait": "account.png"
        //     },
        //     {
        //         "name": "Autre data test",
        //         "id": 2,
        //         "city": "Londres",
        //         "country": "UK",
        //         "tagline": "Ceci est ma data test 2",
        //         "price": 500,
        //         "portrait": "account.png"
        //     },
        // ]
        // // et bien retourner le tableau photographers seulement une fois récupéré
        // return ({
        //     photographers: [...photographers, ...photographers, ...photographers]})
        // //6666666666666666666666666666666666666666666666666666666666666666666666666

        let url=("./data/photographers.json")
        const response = await fetch(url);
        const data = await response.json();

        let photographers=data.photographers
        let media=data.media
        
        console.log(photographers)
        console.log(media)
       return photographers 
     
    }




    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        // const { photographers } = await getPhotographers();
        const  photographers  = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    

   
   
   
   
   
   
   
 //////////////////////////////////////////////////////////////////////////////////////////////////////
 
 
   // async function getPhotographers() {
    //     // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    //     // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    //     let photographers = [
    //         {
    //             "name": "Ma data test",
    //             "id": 1,
    //             "city": "Paris",
    //             "country": "France",
    //             "tagline": "Ceci est ma data test",
    //             "price": 400,
    //             "portrait": "account.png"
    //         },
    //         {
    //             "name": "Autre data test",
    //             "id": 2,
    //             "city": "Londres",
    //             "country": "UK",
    //             "tagline": "Ceci est ma data test 2",
    //             "price": 500,
    //             "portrait": "account.png"
    //         },
    //     ]
    //     // et bien retourner le tableau photographers seulement une fois récupéré
    //     return ({
    //         photographers: [...photographers, ...photographers, ...photographers]})
    // }

    // async function displayData(photographers) {
    //     const photographersSection = document.querySelector(".photographer_section");

    //     photographers.forEach((photographer) => {
    //         const photographerModel = photographerTemplate(photographer);
    //         const userCardDOM = photographerModel.getUserCardDOM();
    //         photographersSection.appendChild(userCardDOM);
    //     });
    // }

    // async function init() {
    //     // Récupère les datas des photographes
    //     const { photographers } = await getPhotographers();
    //     displayData(photographers);
    // }
    
    // init();
    
