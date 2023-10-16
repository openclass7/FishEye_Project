

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

   
    return { city, country, name, portrait, price, tagline, picture, getUserCardDOM };
    
}