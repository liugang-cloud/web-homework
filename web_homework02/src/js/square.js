let img_list = document.getElementsByClassName("face_img")

function rotate(num) {
    let container = document.getElementsByClassName("container")[0];
    let front = document.getElementsByClassName("front")[0]
    let left = document.getElementsByClassName("left")[0]
    let right = document.getElementsByClassName("right")[0]
    let bottom = document.getElementsByClassName("bottom")[0]
    let top = document.getElementsByClassName("top")[0]
    front.children[0].classList.add("hidden")
    switch (num) {
        case 1:
            container.classList.add("up");
            bottom.children[0].classList.remove("hidden");
            break;
        case 2:
            container.classList.add("down")
            top.children[0].classList.remove("hidden");
            break;
        case 3:
            container.classList.add("lef");
            left.children[0].classList.remove("hidden");
            break;
        case 4:
            container.classList.add("righ");
            right.children[0].classList.remove("hidden");
            break;
        default:
            break;
    }
}

function init() {
    let front = document.getElementsByClassName("front")[0]
    let container = document.getElementsByClassName("container")[0];
    container.classList.value = "container";
    front.children[0].classList.remove("hidden");
    for (let i = 1; i < img_list.length; i++) {
        img_list[i].classList.add("hidden")
    }

}