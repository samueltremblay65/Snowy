import {Character} from "./Character.js";
import { Sprite } from "./Sprite.js";
import { Tile } from "./Tile.js";

const socket = io();

socket.on("connect", () => {
    console.log(socket.id);
});

// Resource loading

const waterImage = new Image();
waterImage.src = "images/Water.png";

const grassImage = new Image();
grassImage.src = "images/Grass.png";

const characterImage = new Image();
characterImage.src = "images/character.png";

// Constant variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled= false

// Game constants
const tileSize = 32;
const CANVAS_HEIGHT = canvas.height / tileSize;
const CANVAS_WIDTH = canvas.width / tileSize;

// Drawing configurations
const waterTile = new Tile(new Sprite(waterImage, 0, 0, 16, 16));
const landTile = new Tile(new Sprite(grassImage, 0, 0, 16, 16));

const characterSprite = new Sprite(characterImage, 16, 16, 16, 16);

// Gameobjects
const character1 = new Character(10, 10, characterSprite);
const characters = [character1];

// Tiles and tile config


// Graphics functions
function getCoordinates(position)
{
    return {x: Math.floor(position.x / tileSize), y: Math.floor(position.y / tileSize)};
}

function drawTile(tile, x, y)
{
    const tileInfo = tile.getDrawInfo();
    ctx.drawImage(tileInfo.src, tileInfo.sx, tileInfo.sy, tileInfo.x, tileInfo.y, tileSize * x, tileSize * y, tileSize, tileSize);
}

function drawGameObject(gameObject)
{
    const drawInfo = gameObject.getDrawInfo();
    ctx.drawImage(drawInfo.src, drawInfo.sx, drawInfo.sy, drawInfo.x, drawInfo.y, tileSize * gameObject.x, tileSize * gameObject.y, tileSize, tileSize);
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Basic functions

function getMousePosition(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return {x: x, y: y};
}

// Game setup


// Composite draw functions
function drawWater()
{
    for(var i = 0; i < CANVAS_WIDTH; i++)
    {
        for(var j = 0; j < CANVAS_HEIGHT; j++)
        {
            drawTile(waterTile, i, j);
        }
    }
}

function drawLand()
{
    for(var i = 2; i < CANVAS_WIDTH - 2; i++)
    {
        for(var j = 2; j < CANVAS_HEIGHT - 2; j++)
        {
            drawTile(landTile, i, j);
        }
    }
}

function drawCharacter()
{
    drawGameObject(characters[0]);
}


// Game loop

setInterval(() => {
    clearCanvas();
    drawWater();
    drawLand();
    drawCharacter();
}, 50);
