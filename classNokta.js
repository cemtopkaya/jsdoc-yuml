/**
 * Nokta sınıfı
 */
class Nokta {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        /**
         * @property {number} X x açıklaması
         */
        this.X = x;

        /** 
         * @prop {number} Y y bilgisi
         */
        this.Y = y;
    }


    /**
     * Koordinat bilgisini döner
     * @returns {{x:number, y:number}|number|Promise} x,y bilgisi
     */
    getCoordinate() {
        return { x: this.X, y: this.Y };
    }

    /**
     * Koordinat bilgisini döner
     * @param {number|string} a nümerik değer alır
     * @param {string} b alpha değer alır
     */
    setCoordinate(a, b) {
        return { x: this.X, y: this.Y };
    }

    /**
     * x,y tipinde koordinat bilgsini döner
     * @type {{x:number, y:number}} x,y bilgisi
     */
    get Point() {
        return getCoordinate();
    }

    /**
     * Koordinat bilgisini set eder
     * @type {{x:number, y:number}} value Koordinat bilgisidi
     * @ignore
     */
    set Point(value) {

    }

    /**
     * w-only member olsun
     * @param {string} value Atanacak string değeri
     */
    set WO(value) {

    }

    /**
     * r-only member olsun
     * @type {string} dönen tipi
     * @readonly
     */
    get RO() {
        return 'string dönsün';
    }
    

    /**
     * r-only member olsun
     * @return {string} dönen tipi
     */
    get Cem_return() {
        return 'string dönsün';
    }
}
