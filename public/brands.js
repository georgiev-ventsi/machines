const myImage = document.getElementById("husqvarna-logo");
const myDiv = document.getElementById("hva-category-container");

myDiv.style.display = 'none';

myImage.onclick = function showHideCategories() {
    if (myDiv.style.display !== 'none') {
        myDiv.style.display = 'none';
        myImage.style.maxWidth = '30%';
        myImage.style.maxHeight = '10%';
    } else {
        myDiv.style.display = 'inline-flex';
        myImage.style.maxWidth = '40%';
        myImage.style.maxHeight = '12%';
    }
};