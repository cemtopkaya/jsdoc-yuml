/**
 * Class representing a dot.
 * @extends Nokta
 */
class Sinif extends Nokta {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        super(x,y)
        
        // ...
        /** @property {number} */
        this.Width = width;
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }


    /**
     * Set the dot's width.
     * @param {number} value The dot's width, in pixels.
     */
    setWidth(value) {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}
