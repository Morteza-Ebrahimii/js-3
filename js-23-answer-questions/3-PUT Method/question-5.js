//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.


   DATA = {
   firstName: "Lufy",
   lastName: "monkey. D",
   phoneNumber: "(945) 635-3854"
  }

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

fetch("https://65bf347f25a83926ab94a153.mockapi.io/company/users/6", {
  method: "PUT",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    firstName : "Lufy",
    lastName : "monkuy. D",
    phoneNumber : "(945) 635-3854"
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

//*To be continue...
