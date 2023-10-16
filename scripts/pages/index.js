  async function getPhotographers() 
 {
        let url=("./data/photographers.json")
        const response = await fetch(url);
        const data = await response.json();
        return data
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
         document.getElementById("profil-link",()=>{
                            console.log("eeeeeeeeee")
         })
    }

    async function init() {
        const  photographers_data  = await getPhotographers();
        const  photographers=photographers_data.photographers  
        console.log(photographers)
        console.log(photographers[1].name)
        console.log(photographers[0].portrait)
       
        displayData(photographers);
    }
    
    init();
  

  
    

   