// function displayModal() {
//     const modal = document.getElementById("contact_modal");
// 	modal.style.display = "block";
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }
//---------------------------
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const modal = document.getElementById("contact_modal"); 


function displayModal () {
  const modal = document.getElementById("contact_modal");
	modal.style.display = "block";

}

function closeModal () {
     const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
  
}

// Gestion du submit
// const form = document.getElementById('contact_formulaire');
// form.addEventListener('submit', e => {
// 	const firstnameValue = document.getElementById('prenom').value;
// 	const lastnameValue = document.getElementById('nom').value;
// 	const emailValue = document.getElementById('email').value;
// 	const messageValue = document.getElementById('message').value;
// 	console.log({ firstnameValue, lastnameValue, emailValue, messageValue });
// 	e.preventDefault();
// });

//my work begins here 
//on crée des constants et des variables et on stock dedans des valeurs
//on accède à ces éléments par des méthodes tel getElementBy ID

const form=document.getElementById('contact_formulaire');
const firstName=document.getElementById('prenom');
const lastName=document.getElementById('nom');
const email=document.getElementById('email');
const theMessage=document.getElementById('message');
let emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let nameRegex= /^[a-zA-Z\-]+$/;
//on crée deux fonctions sentDenied dans le cas où les inputs ne sont pas valides
//et sentPermitted dans le cas où les imputs sont valides
 //on accède au div qui regroupe tout les inputs
//on accède aux 'span' et on change leur css et on leur attribue des messages 
//selon les validités ou non des inputs

function sentDenied(elt, message){
  // const input_in=document.querySelector("input","textarea")
  // inputValue=input_in.value
  const formDatas =elt.parentElement;
  const span =formDatas.querySelector('span');
  elt.border="solid 3px red";
  // elt.fontSize="50px";
  span.innerText=message;
  span.style.color="red";
  span.style.fontSize="40px";

}

function sentPermitted(elt){
  // const input_in=document.querySelector("input")
  // inputValue=input_in.value
  const formDatas =elt.parentElement;
  const span =formDatas.querySelector('span');
  elt.style.border="solid 3px lightgreen";
  span.innerText='';

}

   //si la valeur de l'input est vide ou ne corresponds pas au regex imposé
   //(firstName, lastName, email)ou le nombre de caractères est moins de 2 
   //(firstName, lastName)on fait appel à la fonction sentDenied et la
   // valeur 0 ou false est renvoyé,dans le cas contraire la fonction 
   //sentpermitted est appelée et la valeur 1 ou true est renvoyée

   //vérifier la validité du prénom firstname
   function  functionFName(){
        if (firstName.value ===''){
          sentDenied(firstName, 'Veuillez saisir un prénom');
          return false;
     }else if(nameRegex.test(firstName.value )===false) {
          sentDenied(firstName, 'Veuillez saisir un prénom valid');
          return false; 
        }
      else if(firstName.value.length<2) {
          sentDenied(firstName, 'Veuillez saissir un Prénom de 2 caractères ou plus');
          return false;
        }
      else{
          sentPermitted(firstName);
          return true;
        }
}
 //vérifier la validité du nom lastname
 function  functionLName(){
  if (lastName.value===''){
       sentDenied(lastName, 'Veuillez saissir un nom');
       return false;
  }else if(nameRegex.test(lastName.value)===false) {
       sentDenied(lastName, 'Veuillee saisir un nom valid');
       return false; 
     }
   else if(lastName.value.length<2) {
       sentDenied(lastName, 'Veuillez saissir un nom de plus 2 caractères');
       return false;
     }
   else{
       sentPermitted(lastName);
       return true;
     }
}

//vérifier la validité de l'email email
function  functionEmail(){
   if (email.value===''){
    sentDenied(email, 'Veuillez saissir un email');
    return false;
  }
  else if(emailRegex.test(email.value)===false) {
    sentDenied(email, 'Veuillez saissir un email valid');
    return false;
  } else{
    sentPermitted(email);
    return true;
  }
}
//vérifier le choix de la date de naissance brithday
function  functionTheMessage() {
  if(theMessage.value===''){
    sentDenied(theMessage,'Veuillez saisir un message');
    return false;
  } else{
    sentPermitted(theMessage);
    return true;
  }
}




//en écoutant l'évènement submit, on vérifie la validation de tout les 
//champs avant de fermer le formulaire et afficher un message de corfimation d'inscription

form.addEventListener('submit', (e)=>{
//on stop l'exécution de l'évènement avant la vérification de tout les champs
e.preventDefault();

 if(functionFName()===false){
  return false;
}else  if(functionLName()===false){
  return false;
}else if(functionEmail()===false) {
  return false;
}else if(functionTheMessage()===false){
  return false;
}else{ 
  //si tout est valide on ferme le mormulaire avec la méthode remove
  //avec affichage d'un message et d'un bouton pour fermer ce message
				
				// let modal=document.querySelector('.contact_modal');
				// let message1=document.createElement('p');
				//  message1.classList.add('message1-validation');
				//  message1.textContent='Merci pour voutre réservation';
				//  modal.appendChild(message1);
				//  let btnCloseModal=document.createElement('button');
				//  btnCloseModal.classList.add('btn-submit');
				//  btnCloseModal.textContent='Fermer';
				// modal.appendChild(btnCloseModal);

				//  btnCloseModal.addEventListener('click',function(){
				// modal.style.display="none";})
				
			 console.log( `Nom : ${firstName.value}\nPrénom : ${lastName.value}\nEmail : ${email.value}\nLe message :${theMessage.value} ` )
       form.reset();

;
} 
}); 




