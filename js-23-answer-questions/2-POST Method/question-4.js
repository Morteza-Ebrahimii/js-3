// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];
/** WRITE YOUR CODE BELOW DOWN */

//****************************************************************************************** */

const postData = async () => {
  try {
    users.forEach(async (el) => {
      await fetch("https://65bf347f25a83926ab94a153.mockapi.io/company/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(el),
      });
      // console.log(el);
    });
  } catch (error) {
    // console.log(error);
  }
};
postData();

//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fName = event.target.fName.value;
  const lName = event.target.lName.value;
  const pNumber = event.target.pNumber.value;

  // console.log(fName);

  try {
    fetch("https://65bf347f25a83926ab94a153.mockapi.io/company/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        phoneNumber: pNumber,
      }),
    });
  } catch (error) {
    console.log(error);
  }

  event.target.fName.value = "";
  event.target.lName.value = "";
  event.target.pNumber.value = "";
});

// const newdev = () => {
//   const fName = form.fName.value;
//   const lName = form.lName.value;
//   const pNumber = form.pNumber.value;

//   newData = {
//     firstName: fName,
//     lastName: lName,
//     phoneNumber: pNumber,
//   };

//   form.fName.value = "";
//   form.lName.value = "";
//   form.pNumber.value = "";

//   // console.log(newData);
//   return newData;
// };

// const newDeve =  newdev();
// console.log(newdev());

// postValue = () => {
//   try {
//     fetch("https://65bf347f25a83926ab94a153.mockapi.io/company/users", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(newdev()),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log(postData());

const fucn = async () => {};
//*To be continue...
