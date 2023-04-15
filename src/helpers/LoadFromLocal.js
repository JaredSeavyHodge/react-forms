import { useEffect } from "react";

const LoadFromLocal = ( ) => {
    let elements = document.querySelectorAll("div[contenteditable]");
    
    for (let i = 0; i < elements.length; i++) {
        let value = localStorage.getItem("cells"+i);
        if (value) {
            elements[i].innerHTML = value;
        }
    }
}

export default LoadFromLocal