/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
const get = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.stypicode.com/users");
    const data = await res.json();  
    return data;
  } catch (error) {
    throw new Error("errorrrrrrrrrr");
  }
};

get()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error( error);
  });
