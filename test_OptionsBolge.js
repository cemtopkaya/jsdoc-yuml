
/**
 * @interface IHede
 */
class IHede {
    /**
     * @returns {string} dönüş tipi
     */
    get publicMethod() { return 12; }

    /**
     * @param {string} v
     */
    set publicMethod(v) { this.pubmet_ = v; }

    /**
     * 
     * @param {string} _a 
     * @returns {string}
     */
    calis(_a) {
        return 12;
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
 * 
 */
class Deneme{
    /**
     * 
    /**
     * Creates an instance of Deneme.
     * @memberof Deneme
     */
    constructor(){
        
        /** @type {string} */
        this.tipli = '';

        /** @type {string} 
         * @public
         */
        this.tipliPublic = '';

        /**
         * @private {string}
         */
        this.prayvite = '';

        /** @type {string} 
         * @private
         */
        this.tipliPrivate = '';

        /** @property {string} */
        this.properti = '';

        /** 
         * @property {string} 
         * @type  {string} 
         */
        this.tipliProperti = '';

        /** 
         * @member {string}
         */
        this.duzMember ='';
    }
}


/**
 * 
 * @constructor
 * @extends {IHede} asds
 */
class OptionsBolge extends IHede {

    /**
     * @param {*} enjeksiyon 
     * @param {*} usesParam 
     */
    constructor(enjeksiyon, usesParam) {
        super();

        /**
         * @prop {UsesOlsunTipi} PubPropString Aciklamam
         * @public
         */
        this.PubPropString = usesParam;

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
     * @returns {DışarıdanAtananOkunan}
     */
    get PubGetSetHede() { return null; }

    /**
     * @param {DışarıdanAtananOkunan} value
     */
    set PubGetSetHede(value) { }

    /**
     * @returns {DışarıdanOkunan} 
     */
    get PubGetHede() { return null; }

    /**
     * @public
     * @param {DepartmanTipi} departmentName 
     * @returns {(User[])}
     */
    publicMethod(departmentName) { return null; }

    /**
     * @private
     * @param {string} departmentName 
     * @returns {(User[])}
     */
    privateMethod(departmentName) { return null; }

    /**
     * @public
     * @static
     * @param {string} param1 
     * @returns {Option}
     */
    static getStaticMethod(param1) { return null; }


    /**
     * @public
     * @static
     * @returns {Option}
     */
    static get ReadOnlyMember() { return null; }


    /**
     * @public
     * @static
     * @param {string} param1 
     */
    static set WriteOnlyMember(param1) { }


    /**
     * @public
     * @static
     * @returns {Option}
     */
    static get StaticReadOnlyMember() { return null; }


    /**
     * @public
     * @static
     * @param {string} param1 
     */
    static set StaticWriteOnlyMember(param1) { }

    /**
     * @static
     * @public
     * @returns {string} dönsün dünya
     */
    static get StaticMember() { return null; }

    /**
     * @static
     * @public
     * @param {string} value set dünya
     */
    static set StaticMember(value) { return null; }

}

/**
 * @prop {string} StaticMember
 * @static
 * @public
 */
OptionsBolge.PublicStaticMember = "aaaa";