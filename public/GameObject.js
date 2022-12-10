export class GameObject
{
    constructor(x, y, type, sprite)
    {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.type = type;
    }

    HitBox()
    {
        console.log("Not implemented");
    }

    getDrawInfo()
    {
        return {src: this.sprite.src, sx: this.sprite.getSx(), sy: this.sprite.getSy(), x: this.sprite.x, y: this.sprite.y}
    }

    printGameObject()
    {
        console.log("Game object of type", Type, ". Position: (", this.x, ",", this.y, ")");
    }
}