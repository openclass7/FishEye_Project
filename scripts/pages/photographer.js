
async function getPhotographers() 
{
       let url=("./data/photographers.json")
       const response = await fetch(url);
       const data = await response.json();
       return data
   }
   getPhotographers()





   async function displayData(photographers,mediaData) {
       const photographersSection = document.querySelector(".photograph-header");
        const sectionPhotographerMedia = document.querySelector('.photograph-content');

       photographers.forEach((photographer) => {
       const userCardDOM = photographerTemplate(photographer).getPhotographerInfos();
       photographersSection.innerHTML += userCardDOM;
        
       });
       
       mediaData.forEach((Media) => {  
          const userCardDOM_ = photographerTemplate_2(Media).templatePhotographerMedia();
           sectionPhotographerMedia.innerHTML += userCardDOM_;
       
       });

   }



   async function init() {
       const  photographers_data  = await getPhotographers();
       const  photographers=photographers_data.photographers  
      
       console.log(photographers)
   
       const id = window.location.search.split('id=')[1];
       console.log(id);
       const photographer = !id ? photographers : photographers.filter(photographer => photographer.id == id);



       const  mediaData=photographers_data.media  
       console.log(mediaData);
       const Media = !id ? mediaData : mediaData.filter(media => media.photographerId==id);
       console.log(Media)

      let nameForm=document.getElementById("name_form")
       nameForm.innerHTML=photographer[0].name
       console.log(nameForm);
      
       displayData(photographer,Media);
   }
   
   init();
 

 
   

  










// //Mettre le code JavaScript lié à la page photographer.html


// async function displayPhotographers() { 
//     let url=(`./data/photographers.json `)
//     const response = await fetch(url);
//     const data = await response.json();
//     // let photographers= data.photographers;
//     // console.log(data)

//     // //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//     //  function displayPhotographerProfil(data) {
//         let photographersData = data.photographers;
//         console.log(photographersData);
//         // console.log(photographers);
//         const id = window.location.search.split('id=')[1];
//     console.log(id);
//         const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
//         console.log(photographers )
//         console.log(photographers[0].name)
//         console.log(photographers[0].city)
//         // console.log(photographers[0].alt)
//         console.log(photographers[0].portrait)
        
//         const alif= photographersData.filter(photographer => photographer.id );
//         const baa= photographersData.filter(photographer => photographer.id == id);
//         console.log(alif);
//         console.log(baa);

//        let nameForm=document.getElementById("name_form")
//        nameForm.innerHTML=photographers[0].name
//         // console.log(nameForm);
      

          
 
//        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
//         // new Modal().modal(photographersData);
//         // new Form().fields();
//     }
//     displayPhotographers()
//     //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

//     // let id=photographers.id
//     // console.log(id)
        
//     //     console.log(photographers[1].id)
//     //     console.log(photographers[0])
//     //     console.log(photographers)
  

//     // let photographs_header= document.getElementsByClassName("photograph-header")
    
//     // for(let photograph_header of photographs_header){
//     //     console.log(photograph_header)
//     //     photograph_header.innerHTML+=`
//     //     <a href=""><img src="" alt="photograph-header"></a>
//     //     <p id="location">${photographers[0].country} ${photographers[0].city} </p>
//     //     <p id="tagline">${photographers[0].tagline} </p>
//     //     `
//     // }
        
       
        
  














    



