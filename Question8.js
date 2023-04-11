function saveObjectToLocalStorage(obj) {
    for (const [key, value] of Object.entries(obj)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    
    const newObj = {};
    for (const key of Object.keys(obj)) {
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    
    return newObj;
  }
  
  const myObject = {
    name: "Ali Hassan",
    age: 22,
    city: "Karachi"
  };
  
  const retrievedObject = saveObjectToLocalStorage(myObject);
  console.log(retrievedObject);