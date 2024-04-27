/**!
 * Filterable v1.0.0
 * A simple, lightweight library for Filter the Items
 *
 * @copyright Copyright 2024 Rayiumir Limited.
 * @author    Raymond Baghumian.
 * @link      https://github.com/Rayiumir/Filterable
 *
 */


const filterableButtons = document.querySelectorAll(".filterable button");
const filterableCards = document.querySelectorAll(".cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterableButtons.forEach(button => button.addEventListener("click", filterCards));