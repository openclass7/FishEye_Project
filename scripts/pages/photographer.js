
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
 

 

   function photographerTemplate_2(mediaData) {
    const { photographerId, title,image,video,likes } = mediaData;

    console.log(mediaData)


function templatePhotographerMedia(){
    if(image != undefined){
      html_injected= `<img   class="media_photos" 
       src="./assets/photographersGallery/${photographerId}/${image}" />`
    }else if( video != undefined){
       html_injected=
          `<video   class="media_videos"  >
               <source src="./assets/photographersGallery/${photographerId}/${ video}" 
                 type="video/mp4">
           </video>`
    }
    return  `<figure class="image_video">
                    ${html_injected}
                    <figcaption>
                        <h2>${  title}</h2>
                        <div >
                            <span class="like">${ likes}</span> 
                            <button class="like" type="button"  >
                                <i class="fa-regular fa-heart"></i>
                            </button> 
                        </div>
                    </figcaption>

                </figure>`
     
    }
return { photographerId, title,image,video,likes, templatePhotographerMedia  };

 }


 //-------------------------------------------------------
 function photographerTemplate(data) {
    const { name, portrait,city,country,tagline,price,id } = data;
    console.log(data)
    
    const picture = `assets/photographersGallery/portrait/${portrait}`;

    function getUserCardDOM() {
        return article = `
        <article  aria-label="profil de ${name}">
			<a href="photographer.html?id=${id}"   id="profil- link-${id}" class="profil-link">
			<div class="reflect">
			<img src="${picture}" alt="Photo de ${name}" aria-label="Photo de ${name}"/>
			</div>
			<h2>${name}</h2>
            </a>
            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/jour</p>
		</article> `;
          }


 function getPhotographerInfos () {
            return article =   
             `
                <article aria-label="Photographer Profil" class="profil_photograph">
                    <div class=' infos_photograph'>
                        <h2>${ name}</h2>
                        <p class=" city_photograph">${ city}, ${country}</p>
                        <p class=" tagline_photograph">${ tagline}</p>
                        
                    </div>
                    <button class="contact_button"   onclick="displayModal()">Contactez-moi</button>
                    <a href='#' title=' '><img src="./assets/photographersGallery/portrait/${portrait}"  }"></a>
                </article>
                `
      }
        
    return {  city, country, name, portrait, price, tagline, picture, getUserCardDOM, getPhotographerInfos  };
  
}
   