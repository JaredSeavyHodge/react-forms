
const SaveToLocal = ( ) => {
    let elements = document.querySelectorAll("div[contenteditable]");
    
    for (let i = 0; i < elements.length; i++) {
        localStorage.setItem("cells"+i.toString(), elements[i].innerHTML);
    }
}

export default SaveToLocal