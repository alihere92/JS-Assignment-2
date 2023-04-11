function saveInputValue(event) {
    event.preventDefault(); // prevent form from submitting
    const inputValue = document.getElementById("inputValue").value;
    saveObjectToLocalStorage("myValue", inputValue);
    alert("Value saved to LocalStorage!");
  }
  
  function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
    