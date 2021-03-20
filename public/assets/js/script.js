

// Submit button

const submitBurger = document.getElementById("submitBurger");

if (submitBurger) {
    submitBurger.addEventListener("submitBtn", (e) => {
        e.preventDefault();

        let newBurger = document.getElementById("newBurger").value.trim();

        console.log("button clicked");
        
    });

    console.log(newBurger);

    
};