import SaveToLocal from "./SaveToLocal";


 const AddEventListener = (element, event, callback) => {
    const elements = document.querySelectorAll(element);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, SaveToLocal);
    }
 }

 export default AddEventListener