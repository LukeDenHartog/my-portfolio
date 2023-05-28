secondParagraph = document.getElementById('second-paragraph');
readMoreButton = document.getElementById('read-more');
readMoreButton.addEventListener("click", showMore);
readLessButton = document.getElementById('read-less')
readLessButton.addEventListener("click", showLess)
aboutMeLine = document.querySelector('#first-line')



function showMore() {
    secondParagraph.classList.remove("hide-display");
    readMoreButton.classList.add("hide-display");
    readLessButton.classList.remove("hide-display");
    aboutMeLine.classList.remove('straight-line-divider');
    aboutMeLine.classList.add('straight-line-divider-500');
}

function showLess() {
    readLessButton.classList.add("hide-display");
    secondParagraph.classList.add("hide-display");
    readMoreButton.classList.remove("hide-display");
    aboutMeLine.classList.remove('straight-line-divider-500')
    aboutMeLine.classList.add('straight-line-divider')
}