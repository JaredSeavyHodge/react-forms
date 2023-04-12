
const saveToLocal = ( ) => {
    let elements = document.querySelectorAll("div[contenteditable]");
    
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        localStorage.setItem(i.toString(), elements[i].innerHTML);
    }
    // for (let i = 0; i < inputs.length; i++) {
    //     localStorage.setItem(i, inputs[i].innerHTML);
    // }
}

export default saveToLocal