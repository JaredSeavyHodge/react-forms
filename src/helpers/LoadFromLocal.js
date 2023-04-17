const loadFromLocal = ( ) => {

    let elements = document.getElementsByClassName("activity-tile");
    console.log("Loading from local storage...")

    for (let i = 0; i < elements.length; i++) {
        let name = elements[i].firstChild.innerText;
        let value = localStorage.getItem(name);
        
        if (value) {
            let data = JSON.parse(value);
            let activity = data.activity;
            let objective = data.objective;
            let activityInput = elements[i].querySelector("input[name='activity']");
            console.log(activityInput)
            let objectiveInput = elements[i].querySelector("div[contenteditable]");
            if (activityInput) {
                activityInput.value = activity;
                activityInput.innerHTML = activity;
            } else {activityInput.value = ""}
            if (objectiveInput) {
                objectiveInput.innerHTML = objective;
            } else {objectiveInput.innerHTML = ""}
        }
    }
    console.log(JSON.parse(localStorage.getItem("Interest Activity 1")).objective)


    // let elements = document.querySelectorAll("div[contenteditable]");
    // let dateInput = document.getElementById("date");

    // for (let i = 0; i < elements.length; i++) {
    //     let value = localStorage.getItem("cells"+i);
    //     if (value) {
    //         elements[i].innerHTML = value;
    //     }
    // }
    // let date = localStorage.getItem("date");
    // if (date) {
    //     dateInput.value = date;
    // }
}

export default loadFromLocal