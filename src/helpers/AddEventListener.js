import { useEffect } from "react"
import saveToLocal from "./saveToLocal";


 const AddEventListener = (element, event, callback) => {
    const elements = document.querySelectorAll(element);
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, saveToLocal);
    }
 }

 export default AddEventListener