
/**
 * @class
 */
class OptionsBolge {

    /**
     * @constructor
     */
    constructor() {

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
    }

    /**
     * @public
     * @param {string} departmentName 
     * @return {(User[])}
     */
    publicMethod(departmentName) {

    }

    /**
     * @private
     * @param {string} departmentName 
     * @return {(User[])}
     */
    privateMethod(departmentName) {

    }

    /**
     * @public
     * @static
     * @param {string} param1 
     * @return {Option}
     */
    static getStaticMethod(param1) {
        return { Adi: 1 };
    }

    
    /**
     * @public
     * @static
     * @return {Option}
     */
   static get ReadOnlyMember() {
        return { Adi: 1 };
    }

    
    /**
     * @public
     * @static
     * @param {string} param1 
     */
   static set WriteOnlyMember(param1) {
        return { Adi: 1 };
    }

    
    /**
     * @public
     * @static
     * @return {Option}
     */
   static get StaticReadOnlyMember() {
        return { Adi: 1 };
    }

    
    /**
     * @public
     * @static
     * @param {string} param1 
     */
   static set StaticWriteOnlyMember(param1) {
        return { Adi: 1 };
    }

    /**
     * @static
     * @public
     * @return {string} dönsün dünya
     */
    static get StaticMember(){
        return 'asdads';
    }

    /**
     * @static
     * @public
     * @param {string} value set dünya
     */
    static set StaticMember(value){
        return 'asdads';
    }

}

/**
 * @prop {string} StaticMember
 * @static
 * @public
 */
OptionsBolge.PublicStaticMember = "aaaa";