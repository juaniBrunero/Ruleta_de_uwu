
let textos = [
  "Sin mira",
  "Marshall",
  "Ares",
  "Solo Pistolas",
  "Solo W",
  "FPS 29",
  "No Saltar",
  "Sin Habilidades",
  "Agachaito",
  "Duplico DPI"
]

let ancho, alto, circulo, n, titulos, ang, acum

function setup() {
  ancho = windowWidth
  alto = windowHeight

  createCanvas(ancho, alto)
  angleMode(DEGREES)

  frameRate(30);

  titulos = textos.length

  ang = floor(360 / titulos)
  acum = 0

  circulo = alto - 40

  noStroke()
  selectWinner()
}

function draw() {
  fill(0)
  triangle(ancho-50, (alto/2) - 30, ancho-50, (alto/2) + 30, ancho-120, (alto/2));

  if(acum <= (n * ang) + ang/2){
    spin()
    acum += ang / 2
  }
}

function selectWinner(){
  let f = 30

  n = floor(random(f, f + titulos))
}

function spin(){
  push()
  textAlign(CENTER)
  translate(ancho/2 - 50, alto/2)
  rotate(acum)
  textSize(28)
  for (var i = 0; i < titulos; i++) {
    //fill(120 + 125 * (i / titulos ))
    (i%2 == 0)? fill(200, 20, 20) : fill(0)
    arc(0, 0, circulo, circulo, 0, ang, PIE);
    rotate(ang/2)
    fill(255)
    text(textos[i], circulo/4 + 10, 14)
    rotate(ang/2)
  }
  pop()
}
