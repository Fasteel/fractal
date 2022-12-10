const WIDTH = 1000
const HEIGHT = 1000

const baseTriangle = [
  [WIDTH / 2, 0],
  [0, HEIGHT],
  [WIDTH, HEIGHT]
]

let lastDrawedPoint = null
let start = false

function setup() {
  cnv = createCanvas(WIDTH, HEIGHT);
  drawBaseTrianglePoint()
  drawPoint([WIDTH / 2, HEIGHT])
  cnv.mouseClicked(() => {
    start = true
  });
}

function draw() {
  if (!start) return

  for (i = 0; i < 1000; i++) {
    const randomIndex = getRandomBasePointIndex()
    const randomBasePoint = baseTriangle[randomIndex]
    const diffWidth = lastDrawedPoint[0] < randomBasePoint[0] ? randomBasePoint[0] - lastDrawedPoint[0] : lastDrawedPoint[0] - randomBasePoint[0]
    const diffHeight = lastDrawedPoint[1] < randomBasePoint[1] ? randomBasePoint[1] - lastDrawedPoint[1] : lastDrawedPoint[1] - randomBasePoint[1]
    drawPoint([
      (diffWidth / 2) + (randomBasePoint[0] >= lastDrawedPoint[0] ? lastDrawedPoint[0] : randomBasePoint[0]), 
      (diffHeight / 2) + (randomBasePoint[1] >= lastDrawedPoint[1] ? lastDrawedPoint[1] : randomBasePoint[1])
    ])
  }
}

function drawPoint(coordinates) {
  point(...coordinates)
  lastDrawedPoint = coordinates
}

function drawBaseTrianglePoint() {
  point(...baseTriangle[0]);
  point(...baseTriangle[1]);
  point(...baseTriangle[2]);
}

function getRandomBasePointIndex() {
  return Math.floor(Math.random() * 3);
}