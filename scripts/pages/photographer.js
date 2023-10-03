//Mettre le code JavaScript lié à la page photographer.html


async function getPhotographers2() { 
    let url=(`./data/photographers.json `)
    const response = await fetch(url);
    const data = await response.json();
    let photographers= data.photographers;
    console.log(data)

    let id=photographers.id
    console.log(id)
        
        console.log(photographers[1].id)
        console.log(photographers[0])
        console.log(photographers)
  

    let photographs_header= document.getElementsByClassName("photograph-header")
    
    for(let photograph_header of photographs_header){
        console.log(photograph_header)
        photograph_header.innerHTML+=`
        <a href=""><img src="" alt="photograph-header"></a>
        <p id="location">${photographers[0].country} ${photographers[0].city} </p>
        <p id="tagline">${photographers[0].tagline} </p>
        `
    }
        }
       
        
  
    getPhotographers2()













    



