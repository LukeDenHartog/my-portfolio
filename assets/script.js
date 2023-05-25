secondParagraph = document.getElementById('second-paragraph');
readMoreButton = document.getElementById('read-more');
readMoreButton.addEventListener("click", showMore);
readLessButton = document.getElementById('read-less')
readLessButton.addEventListener("click", showLess)


function showMore() {
    secondParagraph.classList.remove("hide-display");
    readMoreButton.classList.add("hide-display");
    readLessButton.classList.remove("hide-display")
}

function showLess() {
    readLessButton.classList.add("hide-display");
    secondParagraph.classList.add("hide-display")
    readMoreButton.classList.remove("hide-display");
}