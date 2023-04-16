const loadFromLocal = ( ) => {
    let elements = document.querySelectorAll("div[contenteditable]");
    let dateInput = document.getElementById("date");

    for (let i = 0; i < elements.length; i++) {
        let value = localStorage.getItem("cells"+i);
        if (value) {
            elements[i].innerHTML = value;
        }
    }
    let date = localStorage.getItem("date");
    if (date) {
        dateInput.value = date;
    }
}

export default loadFromLocal