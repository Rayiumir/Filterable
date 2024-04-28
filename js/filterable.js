/**!
 * Filterable v1.0.0
 * A simple, lightweight library for Filter the Items
 *
 * @copyright Copyright 2024 Rayiumir Limited.
 * @author    Raymond Baghumian.
 * @link      https://github.com/Rayiumir/Filterable
 *
 */

// Select all Filter Buttons and Cards
const filterableButtons = document.querySelectorAll(".filterable button");
const filterableCards = document.querySelectorAll(".cards .card");

// Define the Cards Function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate Over Each Filterable Card
    filterableCards.forEach(card => {
        // Adding "hide" Class to Hide the Card Inintially
        card.classList.add("hide");
        //Check if the Card Matches the Selected Filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

//Adding Click Event Listener to Each Fillter Button
filterableButtons.forEach(button => button.addEventListener("click", filterCards));