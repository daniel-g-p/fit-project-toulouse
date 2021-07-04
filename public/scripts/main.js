const conceptArrows = document.querySelectorAll(".concept__chevron");
const conceptName = document.querySelectorAll(".concept__name");
const conceptOverlay = document.querySelector(".concept__overlay");
const conceptElements = [];

conceptArrows.forEach(a => a.addEventListener("click", () => {
    a.classList.toggle("unclickable");
    const activeName = findElement("concept__name", "active");
    const activeNumber = Number(activeName.classList.value.replace(/[^\d.]/g, ''));
    const activeImage = findElement("concept__image", activeNumber);
    const activeWhy = findElement("concept__why", activeNumber);
    const activeHow = findElement("concept__how", activeNumber);
    let nextNumber = activeNumber + 1;
    if (a.classList.contains("concept__chevron--left")) {
        nextNumber -= 2;
    }
    nextNumber = adaptIndexToArray(nextNumber, conceptName);
    const nextName = findElement("concept__name", nextNumber);
    const nextImage = findElement("concept__image", nextNumber);
    const nextWhy = findElement("concept__why", nextNumber);
    const nextHow = findElement("concept__how", nextNumber);
    nextName.classList.toggle("concept__name--active");
    activeName.classList.toggle("concept__name--active");
    nextImage.classList.toggle("concept__image--active");
    activeWhy.classList.toggle("concept__why--exit");
    activeHow.classList.toggle("concept__how--exit");
    activeImage.classList.toggle("concept__image--active");
    conceptOverlay.classList.replace(`concept__overlay--${activeNumber}`, `concept__overlay--${nextNumber}`);
    setTimeout(() => {
        nextWhy.classList.toggle("concept__why--enter");
        nextHow.classList.toggle("concept__how--enter");
        activeWhy.classList.replace("concept__why--exit", "concept__why--enter");
        activeHow.classList.replace("concept__how--exit", "concept__how--enter");
        a.classList.toggle("unclickable");
    }, 500);
}));

const adaptIndexToArray = (num, arr) => {
    if (num > arr.length) {
        return 1;
    } else if (num === 0) {
        return arr.length;
    } else return num;
}

const findElement = (classname, modifier) => {
    return document.querySelector(`.${classname}--${modifier}`);
}