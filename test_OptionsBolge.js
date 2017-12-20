
/**
 * @interface IHede
 */
class IHede {
    /**
     * @returns {string} dönüş tipi
     */
    get publicMethod() { return 12; }

    set publicMethod(v) { }

    /**
     * 
     * @param {string} _a 
     * @returns {string}
     */
    calis(_a) {
    }
}

/**
 * 
 * @implements {IHede} IHede
 */
class implemented extends IHede {

    /**
     * @constructor
     * @returns {void}
     */
    constructor() {
        super();
        /**
         * @property {string} Adi
         */
        this.Adi = 'adi bu';
    }

    /**
     * @returns {void} dönsün dünya
     */
    parametresizMetod() {

    }
}




/**
 * @class
 * @extends IHede işte implement eder
 */
class OptionsBolge extends IHede {

    /**
     * @constructor
     * @param {ContructorInjection} enjeksiyon
     * @param {UsesOlsunTipi} usesParam 
     */
    constructor(enjeksiyon, usesParam) {

        /**
         * @prop {string} PubPropString Aciklamam
         * @public
         */
        this.PubPropString = '';

        /**
         * @prop {string} PrivPropString Aciklamam
         * @private
         */
        this.PrivPropString = '';


        /**
         * @prop {ContructorInjection} PubPropString Aciklamam
         * @public
         */
        this.PubHedeProp = enjeksiyon;
    }

    /**
     * @return {DışarıdanAtananOkunan}
     */
    get PubGetSetHede() { }

    /**
     * @param {DışarıdanAtananOkunan} value
     */
    set PubGetSetHede(value) { }

    /**
     * @return {DışarıdanOkunan} 
     */
    get PubGetHede() { }

    /**
     * @public
     * @param {DepartmanTipi} departmentName 
     * @return {(User[])}
     */
    publicMethod(departmentName) { }

    /**
     * @private
     * @param {string} departmentName 
     * @return {(User[])}
     */
    privateMethod(departmentName) { }

    /**
     * @public
     * @static
     * @param {string} param1 
     * @return {Option}
     */
    static getStaticMethod(param1) { }


    /**
     * @public
     * @static
     * @return {Option}
     */
    static get ReadOnlyMember() { }


    /**
     * @public
     * @static
     * @param {string} param1 
     */
    static set WriteOnlyMember(param1) { }


    /**
     * @public
     * @static
     * @return {Option}
     */
    static get StaticReadOnlyMember() { }


    /**
     * @public
     * @static
     * @param {string} param1 
     */
    static set StaticWriteOnlyMember(param1) { }

    /**
     * @static
     * @public
     * @return {string} dönsün dünya
     */
    static get StaticMember() {
        return 'asdads';
    }

    /**
     * @static
     * @public
     * @param {string} value set dünya
     */
    static set StaticMember(value) {
        return 'asdads';
    }

}

/**
 * @prop {string} StaticMember
 * @static
 * @public
 */
OptionsBolge.PublicStaticMember = "aaaa";