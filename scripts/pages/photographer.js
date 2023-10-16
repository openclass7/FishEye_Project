//Mettre le code JavaScript lié à la page photographer.html


async function displayPhotographers() { 
    let url=(`./data/photographers.json `)
    const response = await fetch(url);
    const data = await response.json();
 
    let photographersData = data.photographers;
    //récupérer l'id de la page photographers
    const id = window.location.search.split('id=')[1];
    
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
      
        const sectionPhotographerProfil = document.querySelector('.photograph-header');
        const templatePhotographerProfil = `
            <article class="profil_photograph">
                <div class=' infos_photograph'>
                    <h2>${photographers[0].name}</h2>
                    <p class=" city_photograph">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class=" tagline_photograph">${photographers[0].tagline}</p>
                    
                </div>
                <button id="contact_button"   onclick="displayModal()">Contactez-moi</button>
                <a href='#' ><img src="./assets/photographersGallery/portrait/${photographers[0].portrait}"  }"></a>
            </article>
            `

          

       sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
      
    }
    displayPhotographers()
 
