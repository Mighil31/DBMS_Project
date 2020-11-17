const scroll=document.querySelector('.DC .Scroll');
const UpdatePersonalButton=document.querySelector('.DC .Details .Personal .Update');
const FormCloseButton=document.querySelector('.DC .Details .Personal .UpdateInfo .Close');
const Form = document.getElementById("Form");
const PersonalDetails=document.querySelector('.DC .Details .Personal');
const UpdateFormButton=document.querySelector('.DC .Details .Personal .UpdateInfo .Submit');
function scrollFunction(){
    
    if(window.pageYOffset>300){
      scroll.style.opacity="0";
    }
    else{
      scroll.style.opacity="1";
    }
}

window.onscroll=scrollFunction;
//AOS INITIALISTAION
AOS.init({
  duration: 800,
  easing: 'ease-out-back',
  delay: 100,
});

function GetPersonalInfo(e) {
    
    e.preventDefault();
    
    var i;
    var Response={
        "Name":"",
        "Email":"",
        "Address":"",
    
    }
    Response.Name=Form.elements[1].value;
    Response.Email=Form.elements[2].value;
    Response.Address=Form.elements[3].value;
    UpdatePersonalInfo(Response);
  }
function UpdatePersonalInfo(Response){
  PersonalDetails.querySelector('#Name');
  let Name=PersonalDetails.querySelector('#Name .Value');
  let Email=PersonalDetails.querySelector('#Email .Value');
  let Address=PersonalDetails.querySelector('#Address .Value');
  Name.innerHTML=Response.Name;
  Email.innerHTML=Response.Email;
  Address.innerHTML=Response.Address;
}


UpdateFormButton.addEventListener('click',
    GetPersonalInfo
   );




UpdatePersonalButton.addEventListener('click',openForm);
FormCloseButton.addEventListener('click',closeForm);




function closeForm(e){
    e.preventDefault();
    Form.style.display="none";
}
function openForm(e){
    e.preventDefault();
    
    Form.style.display="inherit"; 
    
}
