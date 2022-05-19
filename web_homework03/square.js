function rotate(num) {
    let container = document.getElementsByClassName("container")[0];
    switch (num) {
        case 1:
            container.classList.add("up")
            break;
        case 2:
            container.classList.add("down")
            break;
        case 3:
            container.classList.add("lef")
            break;
        case 4:
            container.classList.add("righ")
            break;
        default:
            break;
    }
}

function init() {
    let container = document.getElementsByClassName("container")[0];
    container.classList.value = "container"
}