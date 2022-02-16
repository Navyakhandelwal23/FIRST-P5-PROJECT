function preload(){
}

function setup(){
    canvas= createCanvas(640,480)
    canvas.position(110,250)
    video= createCapture(VIDEO)
    video.hide()
    tint_color=""
}

function draw(){
    image(video,140,70,300,300)
    tint(tint_color)

    fill("red")
    stroke("red")
    rect(120,60,350,10)

    fill("blue")
    stroke("blue")
    rect(120,370,350,10)

    fill("green")
    stroke("green")
    rect(140,50,10,350)

    fill("yellow")
    stroke("yellow")
    rect(440,50,10,350)

    fill("pink")
    stroke("pink")
    circle(430,30,50,50)


   

    fill("maroon")
    stroke("maroon")
    circle(170,30,50,50)

  





    fill("red")
    stroke("red")
    circle(180,410,50,50)

    fill("blue")
    stroke("blue")
    circle(430,410,50,50)
}

function filter_tint(){
    tint_color= document.getElementById("color-name").value
}

function take_snapshot(){
    save("photo.png")
}

