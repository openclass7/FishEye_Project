   
    
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

        let photographers 
        // let media 
        // let photographers=data.photographers
        // let media=data.media
        
        
        // console.log(media)
       return photographers=data.photographers
        // media=data.media;
     
    }

    getPhotographers()
//  console.log(photographers)

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
         
            const userCardDOM = photographerTemplate(photographer).getUserCardDOM();
            // const photographerModel = photographerTemplate(photographer);
            // const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        // const { photographers } = await getPhotographers();
        const  photographers  = await getPhotographers();
     
        console.log(photographers)
        console.log(photographers[1].name)
        console.log(photographers[0].portrait)
       
        displayData(photographers);
    }
    
    init();
    //----------------
    function photographerTemplate(data) {
        const { name, portrait,city,country,tagline,price } = data;
        console.log(name,portrait,tagline)
    
        const picture = `assets/photographers/${portrait}`;
    
        function getUserCardDOM() {
            const article = document.createElement( 'article' );
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            const h2 = document.createElement( 'h2' );
            h2.textContent = name ;
            const p_location = document.createElement( 'p' );
            p_location.classList.add("location");
            p_location.textContent =`${city} , ${country}` ;
            const p_tagline = document.createElement( 'p' );
            p_tagline.classList.add("tagline");
            p_tagline.textContent = tagline ;
            const p_price = document.createElement( 'p' );
            p_price.classList.add("price");
            p_price.textContent = `${price}€/jour` ;
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p_location);
            article.appendChild(p_tagline);
            article.appendChild(p_price);
            return (article);
        }
        return { name, picture, getUserCardDOM }
        // return { name, picture, getUserCardDOM }
    }
    

   
   
   
   
   
   
   
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
    
