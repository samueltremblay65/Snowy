export class Sprite
{
    constructor(src, dx, dy, x, y)
    {
        this.src = src;
        this.sx = dx;
        this.sy = dy;
        this.x = x;
        this.y = y;
    }

    getSx()
    {
        return this.sx;
    }

    getSy()
    {
        return this.sy;
    }
}