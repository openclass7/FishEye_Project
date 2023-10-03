

 function photographerTemplate(data) {
    const { name, portrait,city,country,tagline,price,id } = data;
    console.log(data)

    const picture = `assets/photographers/${portrait}`;

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
            return article =   `<div class="infos">
                                    <h2 class="title2"  </h2>
                                    <div class="localisation-tagline">
                                        <p class="localisation">${city}, ${country}</p>
                                        <p class="tagline">${tagline}</p>
                                    </div>
                                </div>
                                <button class="contact_button" id="contact-button" r >Contactez-moi</button>
                                <img src="${picture}" alt="Photo de ${name}" /> `;
        }
        


   
    return { city, country, name, portrait, price, tagline, picture, getUserCardDOM, getPhotographerInfos  };
  
}