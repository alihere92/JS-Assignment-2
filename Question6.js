function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject = { name: "John", age: 30 };
  saveObjectToLocalStorage("myObject", myObject);
    