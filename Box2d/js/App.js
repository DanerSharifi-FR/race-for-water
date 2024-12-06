document.addEventListener('DOMContentLoaded', (event) => {

    const tileSize = 64;
    var canva = document.getElementById('gipCanvas');
    canva.width = tileSize * 12;
    canva.height = tileSize * 8;
    const ctx = canva.getContext('2d');

    class Tile {
        constructor(x, y, type) {
            this.x = x;
            this.y = y;
            this.type = type;
        }

        renderTile(xOffset, yOffset) {
            switch (this.type) {
                case 'pike':
                    ctx.beginPath();
                    ctx.moveTo((this.x) * tileSize + xOffset + tileSize / 2, this.y * tileSize + yOffset); // Top point
                    ctx.lineTo((this.x) * tileSize + xOffset, this.y * tileSize + yOffset + tileSize); // Bottom left
                    ctx.lineTo((this.x) * tileSize + xOffset + tileSize, this.y * tileSize + yOffset + tileSize); // Bottom right
                    ctx.closePath();
                    ctx.fillStyle = 'darkred'; // color for triangular pikes
                    ctx.fill();
                    ctx.strokeStyle = 'blue'; // border color for triangular pikes
                    ctx.stroke();
                    break;
                case 'block':
                    ctx.fillStyle = 'brown'; // color for squary blocks
                    ctx.fillRect((this.x) * tileSize + xOffset, (this.y) * tileSize + yOffset, tileSize, tileSize);
                    ctx.strokeStyle = 'black'; // color for the edge
                    ctx.strokeRect((this.x) * tileSize + xOffset, (this.y) * tileSize + yOffset, tileSize, tileSize);
                    break;
                case 'air':
                    // Air might be transparent, so no fill required
                    ctx.clearRect((this.x + xOffset) * tileSize, (this.y) * tileSize + yOffset, tileSize, tileSize);
                    break;
                default:
                    console.error('Unknown tile type');

            }
        }
    }

    class Map {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.map = [];
            for (let y = 0; y < 8; y++) {
                for (let x = 0; x < 13; x++) {
                    let type = (y < 6) ? 'air' : 'block';
                    this.map.push(new Tile(x, y, type));
                }
            }

        }

        render() {
            this.map.forEach(tile => {
                tile.renderTile(this.x, this.y);
            });
        }

        update() {
            this.x -= 4; // Moving the tiles more to the left to create a quicker motion effect
            if (this.x <= -tileSize) {
                this.genColomn();
                this.x += tileSize;
            }
        }

        genColomn() {
            this.map = this.map.filter(tile => tile.x > 0);
            this.map.forEach(tile => tile.x--);

            // Add new column of tiles on the right
            const newColumnX = this.map.reduce((max, tile) => Math.max(max, tile.x), -1) + 1;
            for (let y = 0; y < 8; y++) {
                let type = (y < 6) ? 'air' : 'block';
                if(this.fineToPut(newColumnX) && y===5 && Math.random()<0.8){
                    type = 'pike';
                }
                this.map.push(new Tile(newColumnX, y, type));
            }
        }

        fineToPut(newColumnX){

            const pikeCount = this.map.filter(tile => tile.y === 5 && tile.type === 'pike').length;
            const lastColumnWithPike = this.map.filter(tile => tile.type === 'pike').reduce((maxX, tile) => Math.max(maxX, tile.x), -1);



            var istGoot= pikeCount < 3 && (lastColumnWithPike === (newColumnX - 1) || pikeCount === 0);
            if(istGoot && pikeCount === 0)
                cpt++;

            return istGoot;
        }

    }

    class Player {
        constructor() {
            this.x = 100;
            this.y = 200;
            this.jumping = false;
            this.falling = false;
            this.gravity = 0.4; // pixels per frame
            this.spacePressed = false;
        }

        render() {
            ctx.fillStyle = 'transparent';
            ctx.fillRect(this.x, this.y, 64, 64);
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, 64, 64);
        }

        update(map) {
            this.yVelocity = this.yVelocity || 0;

            // Adjust gravity when space is pressed during fall
            const effectiveGravity = (this.spacePressed) ? (this.gravity / 2) : this.gravity;

            // Apply gravity to velocity
            this.yVelocity += effectiveGravity;

            // Update player position based on velocity
            this.y += this.yVelocity;

            // Check if the player hits a block or pike on the map
            for (let tile of map.map) {
                if (this.collidesWith(tile, tileSize)) {
                    if (tile.type === 'block') {
                        if (this.yVelocity > 0) { // Falling
                            this.y = tile.y * tileSize - 64; // Align the player on top of the block
                            this.falling = false;
                            this.jumping = false;
                            this.yVelocity = 0;
                        }
                    } else if (tile.type === 'pike') {
                        defeat();
                        break;
                    }
                }
            }
        }

        collidesWith(tile, tileSize) {
            let pX1 = this.x, pY1 = this.y,
                pX2 = this.x +  tileSize, pY2 = this.y + tileSize;
            let tX1 = tile.x * tileSize, tY1 = tile.y * tileSize,
                tX2 = tile.x * tileSize + tileSize, tY2 = tile.y * tileSize + tileSize;

            return !(pX2 <= tX1 || pX1 >= tX2 || pY2 <= tY1 || pY1 >= tY2);
        }

        jump() {
            if (!this.jumping && !this.falling) {
                this.jumping = true;
                this.yVelocity = -10; // Initial jump velocity
            }
        }
    }

    var player = new Player();

    var map = new Map();
    map.render();
    player.render();

    var cpt=0;

    function gameLoop() {
        // Clear the canvas
        ctx.clearRect(0, 0, canva.width, canva.height);

        // Render the map and the player
        map.update();
        map.render();
        player.update(map); // Ensure player update is called before render
        player.render();

        if(cpt>20)
            win();
        // Call the gameLoop again on the next animation frame
        requestAnimationFrame(gameLoop);
    }

    function win(){
        console.log("win");
    }

    function defeat(){
        console.log("defeat");
    }

// Start the game loop
    gameLoop();


    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            player.jump();
            player.spacePressed = true;
        }
    });

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            player.spacePressed = false;
        }
    });

});


