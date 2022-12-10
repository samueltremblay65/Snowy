import {GameObject} from "./GameObject.js";

export class Character extends GameObject
{
    constructor(x, y, sprite)
    {
        super(x, y, "Character", sprite);
        console.log("Created character");

        this.points = 0;
    }

    move(x, y)
    {
        this.x += x;
        this.y += y;
        console.log("Not Implemented");
    }

    getScore()
    {
        return 100 * this.points();
    }
}