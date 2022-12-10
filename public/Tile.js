export class Tile
{
    constructor(sprite)
    {
        this.sprite = sprite;
    }

    getDrawInfo()
    {
        return {src: this.sprite.src, sx: this.sprite.getSx(), sy: this.sprite.getSy(), x: this.sprite.x, y: this.sprite.y}
    }
}