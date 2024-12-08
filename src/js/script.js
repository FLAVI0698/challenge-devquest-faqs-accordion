const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        const itemAnterior = document.querySelector(".ativa");
        item.classList.toggle("ativa");
        if (itemAnterior) {
            itemAnterior.classList.remove("ativa");
        }
    })

})
