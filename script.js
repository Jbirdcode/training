
function changeBackground() {
    let body = document.body
    let backgroundColor = window.getComputedStyle(body).getPropertyValue("background-image")
    console.log(backgroundColor)
    if (backgroundColor === "url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ0M2hvczZ3aGd4YzE5NW9yODl2Zmw3dHI5MHgxbGdncjJlOXZ5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2DZ7c7zrY1jO/giphy.gif)" 
        {
        console.log("check")
        body.style.backgroundColor = "rgb(52, 235, 134)"
    } else {
        body.style.backgroundColor = " url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ0M2hvczZ3aGd4YzE5NW9yODl2Zmw3dHI5MHgxbGdncjJlOXZ5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2DZ7c7zrY1jO/giphy.gif)"
    }
}

function changeFontSize() {
    let fontSize = window.getComputedStyle(document.body).getPropertyValue("font-size")
    if (fontSize === "15px") {
        document.body.style.fontSize = "40px"

    } else {
        document.body.style.fontSize = "15px"
    }
}

function changeTextColor() {
    let body = document.body
    let color = window.getComputedStyle(body).getPropertyValue("color")
    console.log(color)
    if (color === "rgb(255, 255, 255)") {
        body.style.color = "rgb(255, 0, 0)"
    } else {
        body.style.color = "rgb(255, 255, 255)"
    }
}