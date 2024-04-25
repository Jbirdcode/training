
function changeBackground() {
    let body = document.body
    let backgroundImage = window.getComputedStyle(body).getPropertyValue("background-image")
    console.log(backgroundImage)
    if (backgroundImage === "url(\"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ0M2hvczZ3aGd4YzE5NW9yODl2Zmw3dHI5MHgxbGdncjJlOXZ5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2DZ7c7zrY1jO/giphy.gif\")") {
        console.log(backgroundImage)
        body.style.backgroundImage = "url(\"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjg1dHRtYzQwMTh6bHg4aGR3ZzlwYmlhdHh2MHIycjQ4cm1xZXd2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WWYSFIZo4fsLC/giphy.gif\")"
    } else {
        body.style.backgroundImage = "url(\"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ0M2hvczZ3aGd4YzE5NW9yODl2Zmw3dHI5MHgxbGdncjJlOXZ5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2DZ7c7zrY1jO/giphy.gif\")"
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