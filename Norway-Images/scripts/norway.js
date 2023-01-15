/*(async function ()) {
/*const clockContainer = document.querySelector('.clock');
function updateClock () {
clockContainer.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000); */
/*
let region = 1;
const response = await fetch('forecast.json');
const products = await response.json();
renderForecast(forecast);
} */

/*
async function weatherForecast () {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=60.472024&lon=8.468946&appid=9049f90db361271300a108febe8ed053');
  const weatherForecast = await response.json();
  document.querySelector('.check-weather').addEventListener('click', weatherForecast);
}
weatherForecast (); */

/* !!!!!!
(async function () {

let response = await fetch('forecast.json');
let forecast = await response.json();
renderForecast(forecast, 1);
document.querySelector('.check-weather').addEventListener('click', weatherForecast);

async function weatherForecast() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=9049f90db361271300a108febe8ed053');
    forecast = await response.json();
  }
 })();
*/ !!!!!!!
 /*
let response = await fetch('forecast.json')
let forecast = await response.json();
document.querySelector('.check-weather').addEventListener('click', weatherForecast);
}
weatherForecast();

/*
const weatherType = document.querySelector('.weather').value;


/*const region = weather.region[regionType];
renderForecast(weatherType, region); 





/*
const button = document.querySelector('.check-weather');
const inputValue = document.querySelector('weather-input-value');
const weatherName = document.querySelector('.weather-name');
const weatherDescription = document.querySelector('.weather-description');
const weatherTemperature = document.querySelector('.temperature');


   button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9049f90db361271300a108febe8ed053') 
    .then(Response => response.json())
    .then(data => console.log(data))
 
    .catch(err => alert("Wrong city name"))
   })();

*/
   async function weatherForecast() {
     
   }

   
/*
      
      const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); 

  document.querySelector('.btn').addEventListener('click', sendEmail);
  
  function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "marichkabilo@gmail.com",
    Password : "4CEE9882CC4DE29B1E2ABC899A23D690B83B",
    To : 'marichkapobihushka@gmail.com',
    From : document.querySelector("#email").value,
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.querySelector("#name").value
           + "<br> email: " + document.querySelector("#email").value
           + "<br> phone: " + document.querySelector("#phone").value
           + "<br> datepicker: " + document.querySelector("#datepicker").value
}).then(
message => {
    return alert(message);
  }
);
}   

/*

  function sendMSG(e) {

  e.preventDefault();


  const name = document.querySelector("#name"),
  const phone = document.querySelector("#phone"),
  const email = document.querySelector("#email"),
  const datepicker = document.querySelector("#datepicker");

  // Function Send e-mail

  Email.send({
    SecureToken : "3b42acaa-1ae5-45b7-b0a8-a0d531fd5200",
    To : 'marichkablo@gmail.com',
    From : email.value,
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.querySelector("#name").value
    + "<br> email: " + document.querySelector("#email").value
    + "<br> phone: " + document.querySelector("#phone").value
    + "<br> datepicker: " + document.querySelector("#datepicker").value
}).then(
  message => alert(message)
);
}

//event Listener
document.querySelector('.btn').addEventListener('click', sendMSG);
  
/*form.addEventListener('.btn', sendMSG) */




/* old variant */

/*
const name = document.querySelector("#name");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const datepicker = document.querySelector("#datepicker"); 

  document.querySelector('.btn').addEventListener('click', sendEmail);
  
  function sendEmail() {
      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "marichkabilo@gmail.com",
      Password : "4CEE9882CC4DE29B1E2ABC899A23D690B83B",
      To : 'marichkapobihushka@gmail.com',
      From : email.value,
      Subject : "New Contact Form Enquiry",
      Body : "name: " + document.querySelector("#name").value
             + "<br> email: " + document.querySelector("#email").value
             + "<br> phone: " + document.querySelector("#phone").value
             + "<br> datepicker: " + document.querySelector("#datepicker").value
  }).then(
  message => {
      return alert("Your details are successfully submitted");
    }
  );
  } */
