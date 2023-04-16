
const saveToLocal = ( ) => {
    let elements = document.querySelectorAll("div[contenteditable]");
    let dateInput = document.getElementById("date");

    for (let i = 0; i < elements.length; i++) {
        localStorage.setItem("cells"+i.toString(), elements[i].innerHTML);
    }
    localStorage.setItem("date", dateInput.value);
}

export default saveToLocal