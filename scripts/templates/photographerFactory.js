

 function photographerTemplate_2(mediaData) {
    const { photographerId, title,image,video,likes } = mediaData;

console.log(mediaData)


function templatePhotographerMedia(){
    return article = `
    

   <article class="photographers_media">                           
        <a href="#"  >
        <figure>
            <img  width="100%"  class="media_photos" src="./assets/photographersGallery/${photographerId}/${image}" />
            <video width="100%"  class="media_videos"  >
                <source src="./assets/photographersGallery/${photographerId}/${ video}" type="video/mp4">
            </video>
        </figure>     
        </a>

        <figcaption>
            <h2>${  title}</h2>
                <div >
                    <span class="like">${ likes}</span> 
                    <button class="like" type="button"  >
                         
                         <i style="font-size:24px" class="fa">&#xf08a;</i>
                    </button> 
                </div>
        </figcaption>
    </article> `
     
    }
return { photographerId, title,image,video,likes, templatePhotographerMedia  };

 }


 //-------------------------------------------------------
 function photographerTemplate(data) {
    const { name, portrait,city,country,tagline,price,id } = data;
    
    console.log(data)
    
    const picture = `assets/photographersGallery/portrait/${portrait}`;

 function getUserCardDOM() {
        return article = ` 	<article  aria-label="profil de ${name}">
								<a href="photographer.html?id=${id}"   id="profil-link-${id}" class="profil-link">
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
        
//afficher les médias de chaque photographe



   
    // return { city, country, name, portrait, price, tagline, picture, getUserCardDOM };
    return {  city, country, name, portrait, price, tagline, picture, getUserCardDOM, getPhotographerInfos  };
  
}