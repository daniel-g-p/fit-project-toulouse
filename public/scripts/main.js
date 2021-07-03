const conceptArrows = document.querySelectorAll(".concept__chevron");
const conceptName = document.querySelectorAll(".concept__name");
const conceptElements = [];

conceptArrows.forEach(a => a.addEventListener("click", () => {
    const activeName = document.querySelector(".concept__name--active");
    const activeNumber = Number(activeName.classList.value.replace(/[^\d.]/g, ''));
    let nextNumber = activeNumber + 1;
    if (a.classList.contains("concept__chevron--left")) {
        nextNumber -= 2;
    }
    if (nextNumber > conceptName.length) {
        nextNumber = 1;
    } else if (nextNumber === 0) {
        nextNumber = conceptName.length;
    }
    const nextName = document.querySelector(`.concept__name--${nextNumber}`);
    console.log(nextNumber);
    nextName.classList.add("concept__name--active");
    activeName.classList.remove("concept__name--active");
}));