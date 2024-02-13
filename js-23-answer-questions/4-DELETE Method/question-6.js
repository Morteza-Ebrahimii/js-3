//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */

fetch("https://65bf347f25a83926ab94a153.mockapi.io/company/users/6",{
    method : "DELETE" ,
    headers:{
        'Content-Type': 'application/json'
      },
      body : null
})
.then( res => {
    return res.json()
})
.then( data => {
    console.log(data);
})

//*End of story :)

