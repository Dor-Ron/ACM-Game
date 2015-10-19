/* global PIXI */
'use strict';

/////////////////////
////////Setup////////
/////////////////////                width, height
var renderer = PIXI.autoDetectRenderer(650, 700); //we'll play with this later, in original height > width as oppose to most games...
document.body.appendChild(renderer.view);

//aliases.... we'll add more as we import more classes
var Container = PIXI.Container,
    Graphics = PIXI.Graphics,
    loader = PIXI.loader;  //might need this one later

var stage = new Container();



/////////////////////
///////Drawing///////
/////////////////////
var paddle = new Graphics();
paddle.beginFill(0xFFFFFF); //white 
paddle.drawRect(0, 0, (renderer.view.width/3)-10, 20); //width a bit less than screen size, height of 20px
paddle.endFill();
paddle.x = 10;
paddle.y = renderer.view.height - 25; //25px from bottom, regardless of canvas size
stage.addChild(paddle);


/////////////////////
//////Rendering//////
/////////////////////
renderer.view.style.border = "10px solid gray";
renderer.render(stage);