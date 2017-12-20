const  {DBType} = require('./class_dbType_es');
const { LazyLoadingResponsePOCO,
    BolgePOCO,
    SehirPOCO,
    IhaleESPOCO,
    IhaleDBPOCO,
    IhalePOCO,
    OnayDurumuPOCO,
    AnahtarKelimePOCO,
    URLQueryPOCO_Sayfalama,
    URLQueryPOCO_Tarih,
    URLQueryPOCO,
    KurumESPOCO,
    KurumDBPOCO,
    KurumPOCO,
    RolPOCO,
    TahtaGenelPOCO,
    UrunDBPOCO,
    UyariDBPOCO, AD, BolgeRoluPOCO, CRUD, DosyaEkiPOCO, DovizKuruPOCO, EkranGorunurluguPOCO, FB, GoogleMapIhaleSayisiPOCO, GP, GrafikDonut_UrunTeklifOnayPOCO,
    GrafikDonutPOCO, HaberPOCO, IhaleDunyasiPOCO,
    IhaleProvidersPOCO, KalemDBPOCO, KalemESPOCO, KalemPOCO, KullaniciAyarPOCO, KullaniciBrowserPOCO, KullaniciDBPOCO, KullaniciESPOCO, KullaniciGirisPOCO,
    KullaniciKayitPOCO, KullaniciPOCO, KullaniciSessionPOCO, LoginProviders, PaylasIdsPOCO, ProfilPOCO, SistemMesajlariPOCO, TahtaAjandaPOCO,
    TahtaPOCO, TahtaRoluPOCO, TW, UlkePOCO, URLQueryPOCO_Kriter, URLQueryPOCO_Siralama, UrunESPOCO, UrunPOCO, UrunTeklifOnayPOCO,
    UyariKriter, UyariPOCO, UyariSonucPOCO, UyeDavetPOCO, UyePOCO, YetkiBolgePOCO, YetkiTahtaPOCO } = require("../lib/ES6/index");





/**
 * 
 * @abstract
 */
class Anahtar {
    /**
     * @param {DBType} client
     * @returns {void}
     */
    constructor(client) {
        if (this.constructor === Anahtar) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Gelen anahtar _id ye göre db de kayıtlı bilgiyi döner
     * @param {string} _id
     * @returns {Promise} await kullanılabilir.
     */
    f_db_anahtar_val(_id) {        
        console.log('Uygulanmayan metot');
        return new TypeError("Uygulanması gereken metod!");
    }

    /**
    * Gelen anahtar kelimeye göre db de kayıtlı anahtar_id yi bilgiyi döner
    * @param {(string|Array.<string>)} _anahtarKelime
    * @returns {Promise}
    */
    f_db_anahtar_key(_anahtarKelime) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * Tahtaya ait anahtar ekleme işi
    * @param {string} _anahtarKelime
    * @returns {Promise}
    */
    f_db_anahtar_ekle(_anahtarKelime) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * Ürünü indekslenene ekle
    * @param {number} anahtar_id 
    * @param {(string|number)} urun_id 
    * @returns {Promise}
    */
    f_db_anahtar_index_ekle_urun(anahtar_id, urun_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * Ürünü indekslenenden sil
    * @param {number} anahtar_id 
    * @param {number} urun_id
    * @returns {Promise}
    */
    f_db_anahtar_index_sil_urun(anahtar_id, urun_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * Anahtara göre indekslenen ihale idlerini getir
    * @param {number} anahtar_id
    * @returns {Promise}
    */
    f_db_anahtar_index_ihale(anahtar_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * İhaleyi indekslenene ekle
    * @param {number} anahtar_id 
    * @param {(string|string[]|number|number[])} ihale_id 
    * @returns {Promise}
    */
    f_db_anahtar_index_ekle_ihale(anahtar_id, ihale_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * İhaleyi indekslenenden sil
    * @param {number} anahtar_id 
    * @param {number} ihale_id 
    * @returns {Promise}
    */
    f_db_anahtar_index_sil_ihale(anahtar_id, ihale_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
    * Kalemi indekslenenlere ekle
    * @param {number} anahtar_id 
    * @param {(string|string[]|number|number[])} kalem_id 
    * @returns {Promise}
    */
    f_db_anahtar_index_ekle_kalem(anahtar_id, kalem_id) {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
    * Kalemin index id sini sil
    * @param {number} anahtar_id 
    * @param {number} kalem_id 
    * @returns {Promise}
    */
    f_db_anahtar_index_sil_kalem(anahtar_id, kalem_id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}

/** 
 * @abstract 
 */
class Bolge {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     */
    constructor(client) {
        if (this.constructor === Bolge) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         */
        this._client = client;
    }

    /**
     * Bölgeye ait tüm ihaleleri getirir
     * @param {(number|string)} _bolge_id
     * @returns {Promise}
     */
    f_db_bolge_ihaleleri_tumu(_bolge_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölgeye bağlı ihaleleri sayfalı şekilde getirir
     * @override
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _bolge_id
     * @param {(number|string)} _sayfa
     * @param {(number|string)} _satirSayisi
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_bolge_ihaleleri(_tahta_id, _bolge_id, _sayfa, _satirSayisi, _tarih1, _tarih2) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge ihalesi ekle
     * @param {number} _bolge_id
     * @param {(number|number[])} _ihale_id
     * @returns {Promise}
     */
    f_db_bolge_ihalesi_ekle(_bolge_id, _ihale_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge ihalesi sil
     * @param {number} _bolge_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_bolge_ihalesi_sil(_bolge_id, _ihale_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölgeden şehir ilişkisini kaldırıyoruz
     * @param {number} _sehir_id
     * @param {number} _bolge_id
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_bolge_sehir_sil(_sehir_id, _bolge_id, _tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge ile ilişkili şehir ekleniyor
     * @param {(number|string|number[]|string[])} _sehir_idler
     * @param {(number|string)} _bolge_id
     * @returns {Promise}
     */
    f_db_bolge_sehir_ekle(_sehir_idler, _bolge_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge/lerin bilgisini döner
     * @param {(number|number[]|string|string[])} _id Bolgenin ID bilgisi
     * @param {OptionsBolge=} _opts
     * @returns {Promise}
     */
    f_db_bolge_id(_id, _opts) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölgeye bağlı şehirleri getirir
     * @param {(string|number)} _id
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_bolge_sehirleri(_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge/lerin eklenmesi sağlanır
     * @param {(BolgePOCO|BolgePOCO[])} _bolge
     * @param {(number|string)=} _tahta_id tahta id yoksa genele ekliyodur, son true ise ve tahta id varsa genele sıfırdan büyükse de tahtanın bölgelerine ekle
     * @param {boolean=} _json eğer true ise jsondan çekiliyordur. id yi arttırmıyoruz json içindeki Id değerini kullanıyoruz
     * @returns {Promise}
     */
    f_db_bolge_ekle(_bolge, _tahta_id, _json) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     *
     * Bölgelerin redis 2 ye eklenmesini sağlar
     * @param {(BolgePOCO|BolgePOCO[])} _bolge
     * @returns {Promise}
     */
    f_db_bolge_ekle2(_bolge) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {BolgePOCO} _bolge 
     * @param {number} _tahta_id 
     * @returns {Promise}
     */
    f_db_bolge_guncelle(_bolge, _tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {number} _bolge_id 
     * @param {number} _tahta_id 
     * @returns {Promise}
     */
    f_db_bolge_sil(_bolge_id, _tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Genel bölgeleri içerir
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_bolge_genel() {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Bölge adından bölge objesini buluyoruz
     * @param {string} _adi
     * @returns {Promise}
     */
    f_db_bolge_bul_adindan(_adi) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class CopKutusu {

    /**  
     * @constructor
     * @param {DBType} client 
     * @returns {void}
     */
    constructor(client) {
        if (this.constructor === CopKutusu) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Tahta silme işleminde yapılacak adımlar
     * 1-Tahtaya ait sistemde kayıtlı ihale  let mı? >> Varsa silemezsin
     * 2-Tahtaya ait sistemde kayıtlı teklif  let mı? >> Varsa silemezsin
     * 3-Tahtayı sil
     * @override
     * @param {number} _tahta_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_tahta_sil(_tahta_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * İhale silme işleminde yapılacak adımlar
     * 1-Kullanıcının yetkisi  let mı >> yoksa işlem yapma
     * 2-Silinmek istenen ihale Genel kurum mu? >> evetse işlem yapma
     * 3-İhaleye ait sistemde kayıtlı teklif  let mı? >> Varsa silemezsin
     * 4-İhaleyi sil
     * @override
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_ihale_sil(_tahta_id, _ihale_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kalem silme işleminde yapılacak adımlar
     * 1-Kullanıcının yetkisi  let mı >> yoksa işlem yapma
     * 2-Silinmek istenen kalem Genel kurum mu? >> evetse işlem yapma
     * 3-Kaleme ait sistemde kayıtlı teklif  let mı? >> Varsa silemezsin
     * 4-Kalemi sil
     * @override
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {number} _kalem_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_kalem_sil(_tahta_id, _ihale_id, _kalem_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kurum silme işleminde yapılacak adımlar
     * 1-Kullanıcının yetkisi  let mı >> yoksa işlem yapma
     * 2-Silinmek istenen kurum Genel kurum mu? >> evetse işlem yapma
     * 3-Kurumun teklifi  let mı? >> Varsa silemezsin
     * 4-Kurumu sil
     * @override
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_kurum_sil(_tahta_id, _kurum_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kurum silme işleminde yapılacak adımlar
     * 1-Kullanıcının yetkisi  let mı >> yoksa işlem yapma
     * 3-Ürünün teklifi  let mı? >> Varsa silemezsin
     * 4-Ürünü sil
     * @override
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_urun_sil(_tahta_id, _urun_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Teklif silme işleminde yapılacak adımlar
     * 1-Kullanıcının yetkisi  let mı >> yoksa işlem yapma
     * 2-Teklifi sil
     * @override
     * @param {number} _tahta_id
     * @param {number} _teklif_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_cop_teklif_sil(_tahta_id, _teklif_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

}


/**
 * @abstract
 */
class Dikkat {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Dikkat) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * 
     * 
     * @param {(number)} _kul_id 
     * @param {boolean} _yeni 
     * @param {boolean} _silinen 
     * @param {boolean} _okunan 
     * @returns {Promise}
     */
    f_dikkat_toplam(_kul_id, _yeni, _silinen, _okunan) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number)} _kul_id 
     * @param {boolean} _yeni 
     * @param {boolean} _silinen 
     * @param {boolean} _okunan 
     * @param {number} _iSayfa 
     * @param {number} _iAdet 
     * @returns {Promise}
     */
    f_dikkat_tumu(_kul_id, _yeni, _silinen, _okunan, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @returns {Promise}
     */
    f_dikkat_ekle(kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @param {boolean} yeni 
     * @param {boolean} silinen 
     * @param {boolean} okunan 
     * @returns {Promise}
     */
    f_dikkat_guncelle(kul_id, id, yeni, silinen, okunan) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @returns {Promise}
     */
    f_dikkat_sil(kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Doviz {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Doviz) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Sistemde kayıtlı son kur değerlerini çekiyoruz(kurla işi olanlar bu bilgileri kullanarak hesap yapabilecek)
     * @returns {Promise}
     */
    f_db_son_kurlari_getir() {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {number} _adet 
     * @param {number} _iKurDeger_id 
     * @returns {Promise}
     */
    f_db_doviz_kurlari_cek(_adet, _iKurDeger_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Önce sistemde kayıt olup olmadığı kontrol edilir,
     * varsa son id den büyük kayıtları çekip ekler
     * yoksa tümünü çekip ekler
     * @param {number} _adet
     * @returns {Promise}
     */
    f_db_doviz_kurlari_cek_ekle(_adet) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(DovizKuruPOCO[])} _dovizKurlari 
     * @returns {Promise}
     */
    f_db_doviz_kurlari_ekle(_dovizKurlari) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Vt de kayıtlı son kurdeger_id değerini verir.
     * @returns {Promise}
     */
    f_db_son_kur_deger_id() {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number|string)} _paraBirim_id 
     * @param {(number|string)} _kurTipi_id  
     * @param {number} _tarih1 
     * @param {number} _tarih2 
     * @returns {Promise}
     */
    f_db_doviz_tarih_araligindaki_kurlari_getir(_paraBirim_id, _kurTipi_id, _tarih1, _tarih2) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Gorev {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Gorev) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }



    // region ihale görevleri
    /**
     * İhaleye bağlı görev toplamını döner
     * @param {(number)} _ihale_id
     * @returns {Promise.<number>}
     */
    f_db_ihale_gorev_toplam(_ihale_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * İhaleye bağlı görevlerini döner
     * @param {(number)} _ihale_id
     * @param {(number)} _iSayfa sayfa
     * @param {(number)}_iAdet sayfada gösterilecek adet
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_ihale_gorev_tumu(_ihale_id, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }
    // endregion

    // region kullanıcı görevleri
    /**
     * Kullanıcı görev toplamını döner
     * @param {(number)} _kul_id
     * @param {boolean} _tumu tümü isteniyorsa true
     * @param {boolean} _biten bitenler isteniyorsa true
     * @returns {Promise.<number>}
     */
    f_db_kullanici_gorev_toplam(_kul_id, _tumu, _biten) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kullanıcı görevlerini döner
     * @param {(number)} _kul_id
     * @param {boolean} _tumu tümü isteniyorsa true
     * @param {boolean} _biten bitenler isteniyorsa true
     * @param {(number)} _iSayfa sayfa
     * @param {(number)}_iAdet sayfada gösterilecek adet
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_kullanici_gorev_tumu(_kul_id, _tumu, _biten, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kullanıcının görevlerini ve her bir göreve ait son detay bilgisini dönüyoruz
     * @param {(number)} _kul_id
     * @param {boolean} _tumu tümü isteniyorsa true
     * @param {boolean} _biten bitenler isteniyorsa true
     * @param {(number)} _iSayfa sayfa
     * @param {(number)}_iAdet sayfada gösterilecek adet
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_gorev_son_detay_bilgisi_ile(_kul_id, _tumu, _biten, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }
    // endregion



    /**
     * Göreve ait detayları sayfalı şekilde getirir, sayfalama belirtilmemişse tüm kayıtlar çekilir(son eklenenden ilk eklenene doğru)
     * @param {number} _gorev_id
     * @param {number=} _iSayfa
     * @param {number=} _iAdet
     * @returns {Promise.<Array>}
     */
    f_db_gorev_detay_tumu(_gorev_id, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Görevle ilgili detayların eklenmesi sağlanır
     * @param {number} _gorev_id
     * @param {{ Yuzde:number, Aciklama:string, Tarih:string, Saat:string, Kullanici_Id: number, Kullanici:Object }} _detay
     * @returns {Promise}
     */
    f_db_gorev_detay_ekle(_gorev_id, _detay) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @returns {Promise}
     */
    f_db_kullanici_gorev_ekle(kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(string|number)} _ihale_id 
     * @param {number} _id 
     * @returns {Promise}
     */
    f_db_ihale_gorev_ekle(_ihale_id, _id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Görev bilgisini döner
     * @param {(string|number)} _id
     * @param {OptionsGorev=} _opts
     * @returns {Promise}
     */
    f_db_gorev_id(_id, _opts) {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
     * Görevi bitti olarak güncelliyoruz
     * @param {(string|number)} kul_id
     * @param {(string|number)} id
     * @returns {Promise}
     */
    f_db_kullanici_gorev_guncelle(kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Haber {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Haber) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * Kullanıcıya veya tahtaya gelen tüm aktif durumdaki haberleri çeker
     * @param {number} tahta_id
     * @param {number} kul_id
     * @param {boolean} _eklenen
     * @param {boolean} _silinen
     * @param {boolean} _okunan
     * @returns {Promise}
     */
    f_db_haber_tumu(tahta_id, kul_id, _eklenen, _silinen, _okunan) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Yeni haber ekle kullanıcıya ekleniyorsa kul_id dolu tahtaya ekleniyorsa tahta_id dolu olmalıdır(sıfırdan farklı)
     * @param {number} tahta_id
     * @param {number} kul_id
     * @param {HaberPOCO} haber
     * @returns {Promise}
     */
    f_db_haber_ekle(tahta_id, kul_id, haber) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number|string)} tahta_id 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @param {boolean} eklenen 
     * @param {boolean} silinen 
     * @param {boolean} okunan 
     * @returns {Promise}
     */
    f_db_haber_guncelle(tahta_id, kul_id, id, eklenen, silinen, okunan) {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
     * 
     * 
     * @param {(number|string)} tahta_id 
     * @param {(number)} kul_id 
     * @param {number} id 
     * @returns {Promise}
     */
    f_db_haber_sil(tahta_id, kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Ihale {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Ihale) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * Tahtada değiştirilen ihale yeniden orjinal haline döndürülmek isteniyor
     * @param {(string|number)} _ihale_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise} 
     */
    f_db_ihale_orjinale_don(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ihaleleri getirir
     * @param {(number|string)} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_ihale_silinen_tumu(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ihale toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_silinen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ihale id lerini getirir
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise}
     */
    f_db_ihale_silinen_idler(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği kayıdı geri almak isteyebilir.
     * @param {(string|number)} _ihale_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_ihaleyi_silinenden_cikar(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtalar arasında özel ihalelerin paylaşılması sağlanır.
     * @param {PaylasIdsPOCO} _paylas
     * @returns {Promise}
     */
    f_db_ihale_paylas(_paylas) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(string|number)} _kurum_id 
     * @param {number} _onay_durum_id 
     * @param {number} _para_id 
     * @param {number} _tarih1 
     * @param {number} _tarih2 
     * @returns {Promise}
     */
    f_db_tahta_ihale_gruplama(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İndexlenmiş (tahtanın anahtarına uygun) ihaleleri tarih aralığında göre indexlenmiş haliyle buluyoruz
     * @param {(number|string)} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale} _opts
     * @returns {Promise}
     */
    f_db_ihale_indexli_tarihine_gore_grupla(_tahta_id, _tarih1, _tarih2, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihaleleri tarihlerine göre gruplaması sağlanır
     * Tarih aralığı verilmezse tüm ihaler verilirse tarih aralığındaki ihaleler tarih ve toplamlarına göre array olarak döner
     * @param {number} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale} _opts
     * @returns {Promise}
     */
    f_db_ihale_tarihine_gore_grupla(_tahta_id, _tarih1, _tarih2, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihaleleri tarihlerine göre listeler
     * Tarih aralığı verilmezse tüm ihaler verilirse tarih aralığındaki ihaleler array olarak döner
     * @param {number} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale=} _opts
     * @returns {Promise}
     */
    f_db_ihale_tumu_tarih_araligindakiler(_tahta_id, _tarih1, _tarih2, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihale idlerini tarihlerine göre listeler
     * Tarih aralığı verilmezse tüm ihale idler verilirse tarih aralığındaki ihale idler array olarak döner
     * @param {(number|string)}  _tahta_id
     * @param {(number|string)}  _tarih1
     * @param {(number|string)}  _tarih2
     * @param {boolean=} _tariheGoreDesc=false
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_idler_aktif_tarih_araligindakiler(_tahta_id, _tarih1, _tarih2, _tariheGoreDesc, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
       * @typedef IhaleUsul Param olsun deyyu
       * @prop {number} Id
       * @prop {string} Adi
       */


    /**
     * İhale dünyasındaki kayıtları eklememizi sağlar(apiden usuller.json dan veri alınır)
     * @param {(IhaleUsul[])} _ihale_usulleri
     * @returns {number}
     */
    f_db_ihale_usullerini_ekle(_ihale_usulleri) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale dünyasındaki kayıtları redis2 de tutmamızı sağlar
     * @param {(IhaleUsul[])} _ihale_usulleri
     * @returns {number}
     */
    f_db_ihale_usullerini_ekle2(_ihale_usulleri) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale usullerini döner
     * @returns {Promise}
     */
    f_db_ihale_usul_tumu() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {number} _tahta_id 
     * @param {number} _ihale_id 
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise}
     */
    f_db_ihale_teklif_idleri(_tahta_id, _ihale_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * ihaleye ait teklifleri bulur
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {URLQueryPOCO} _arama
     * @returns {Promise}
     */
    f_db_ihale_teklif_tumu(_tahta_id, _ihale_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale/leri yapan kurum bilgisini döner
     * @param {(number|number[]|string|string[])} ihale_id
     * @returns {Promise}
     */
    f_db_ihale_yapan_kurum(ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale bilgilerinin kurum bilgilerini getiriyoruz
     * @param {(Ihale[]|Ihale)} _ihaleler
     * @returns {Promise}
     */
    f_db_ihaleyi_yapan_kurum_kontrol(_ihaleler) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhaleyi yapan kurum bilgisi değiştirildiğinde genel ihaleyi eziyoruz??
     * @param {(number|string)} ihale_id
     * @param {(number|string)} kurum_id
     * @returns {Promise}
     */
    f_db_ihale_yapan_kurum_guncelle(ihale_id, kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    
    /**
     * 
     * @param {(number|string)} _tahta_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_ihale_kurum_tumu(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Ihaleye bağlı kalemleri getir. Genel olarak ihalenin kalemleri ve ihalenin tahta üstünde ezilmiş kalemlerini
     * birleştirerek getirir.
     * @example
     * ihale:101:kalemler + tahta:401:ihale:101:kalemleri
     *
     * @param {number} ihale_id - ihale_id'ye ait satırları getir
     * @param {number} tahta_id - Tahta içinde ihale_id ye ait ezilmiş satırları da getirmek için
     * @param {OptionsKalem=} opts
     * @returns {Promise}
     */
    f_db_ihale_kalem_tumu(ihale_id, tahta_id, opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale ile ilişkili kalem id lerini döner (temp setine ekler> TEMP + ":" + TAHTA + ":" + _tahta_id + ":" + IHALE + ":" + _ihale_id + ":" + KALEM)
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_aktif_kalem_idler(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale ile ilişkili kalemleri sayfalama yapısına göre getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @param {Object} _arama
     * @returns {Promise}
     */
    f_db_ihale_kalemleri_by_page(_ihale_id, _tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} sb_ihale_id 
     * @returns {Promise}
     */
    f_db_ihale_sbihale_id(sb_ihale_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Gelen ihale veya ihalelerin şehir bilgilerini de ekleyerek geri döner
     * @param {(Ihale|Ihale[])} _ihaleler
     * @returns {(Ihale|Ihale[])}
     */
    f_db_ihale_sehir_kontrol(_ihaleler) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Tahtanın id den bilgilerini getirir
     * @param {(number|number[]|string|string[])} _ihale_id
     * @param {number} _tahta_id
     * @param {OptionsIhale=} _opts
     * @returns {Promise}
     */
    f_db_ihale_id(_ihale_id, _tahta_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya ait ihaleleri varsa idleri döner.
     * Tahtanın görebileceği tüm ihale idlerini döner(silinmeyen,gizlenmeyen,ezilmeyen yani aktifler)
     * (özel ∪ genel) - (silinen ∪ gizlenen ∪ ezilen)
     * smembers tahta:401:ihale
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_idler_aktif(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tüm tahtalardan görülebilecek genel ihaleler listesi
     * @param {OptionsIhale} _opts
     * @returns {Promise}
     */
    f_db_ihale_tumu_genel(_opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İki tarih aralığında yapılma tarihine göre tahta ile ilişkili tüm aktif ihaleleri çeker
     * @param {number} tarih1_gettime
     * @param {number} tarih2_gettime
     * @param {(string|number)} _tahta_id
     * @param {OptionsIhale} _opts
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_ihale_yapilmaTarihineGore(tarih1_gettime, tarih2_gettime, _tahta_id, _opts, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Tahtanın ihalelerini sıralayarak ve sayfalayarak döner.
     * Tahtanın ihalelerini çek,
     * Sıralama türüne göre ihalelerin Sorted Set indeksiyle kesiştir
     * Sıralama yönüne göre(asc/desc)
     * Sayfalama özelliklerine göre
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO} _arama
     * @param {OptionsIhale} _opts
     * @returns {Promise.<LazyLoadingResponse>}
     */
    f_db_tahta_ihale_idler_sort_page(_tahta_id, _arama, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ihale kaydedilir ve db'de oluşan şekliyle geri döner
     * @param {IhaleESPOCO} es_ihale
     * @param {IhaleDBPOCO} db_ihale
     * @param {number} kurum_id
     * @param {number} tahta_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_ihale_ekle(es_ihale, db_ihale, kurum_id, tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {IhaleESPOCO} es_ihale 
     * @param {IhaleDBPOCO} db_ihale 
     * @param {(number|string)} tahta_id 
     * @param {(string|number)} kurum_id 
     * @param {(number)} _kul_id 
     * @returns {Promise}
     */
    f_db_tahta_ihale_guncelle(es_ihale, db_ihale, tahta_id, kurum_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * ihale dünyasında iptal edilen ihale idlerini getirir
     * @returns {Promise}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhale_idler() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * iptal edilen ihale idlerini ihale tarihi aralığında istenirse sayfalı şekliyle getirir(ihale tarihine göre tersten sıralanmış haliyle)
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhale_idlerTariheGore(_tarih1, _tarih2, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * iptal edilen ihale idlerini ihale tarihi aralığındaki toplamını getirir(toplam iptal edilen ihale sayısı)
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {Promise}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhaleToplamiTariheGore(_tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }



    /**
     * Geneldeki ihaleyi güncelliyoruz. Provider: IhaleDunyasi.net
     * @param {IhaleESPOCO} _es_ihale
     * @param {IhaleDBPOCO} _db_ihale
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_guncelle_ihaleDunyasindan(_es_ihale, _db_ihale, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Genele ihale ekliyoruz. Provider: IhaleDunyasi.net
     * @param {IhaleESPOCO} _es_ihale
     * @param {IhaleDBPOCO} _db_ihale
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_ihale_ekle_ihaleDunyasindan(_es_ihale, _db_ihale, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * ihale dünyasından çekilen ihaleleri redis2 ye ekliyoruz
     * @param {IhaleESPOCO} _es_ihale
     * @returns {Promise}
     */
    f_db_ihale_ekle_ihaleDunyasindan2(_es_ihale) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Elastic den çekilen ihale bilgisini redise ekler
     * @param {(string|number)} _ihale_id
     * @param {IhaleESPOCO} _es_ihale
     * @param {IhaleDBPOCO} _db_ihale
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_ihale_ekle_elasticten(_ihale_id, _es_ihale, _db_ihale, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(string|number)} _ihale_id 
     * @param {(number|string)} _tahta_id 
     * @param {(number)} _kul_id 
     * @returns {Promise}
     */
    f_db_tahta_ihale_sil(_ihale_id, _tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale_id genel ihale setinde ise 1 değilse 0 döner
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_ihale_genel_kontrol(_ihale_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kullanıcı tahtada gizlediği ihaleyi tekrardan listede görmek isterse geri alıyoruz
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_gizlenen_sil(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği ihaleleri gizleyebilir, böylece listede gizlenenler görünmeyecektir.
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_gizlenen_ekle(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen ihale idlerini getirir
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_tahtanin_gizlenen_ihale_idleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen ihalelerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_tahtanin_gizlenen_ihaleleri(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen kalem idlerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_tahtanin_gizlenen_kalem_idleri(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen kalemlerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_tahtanin_gizlenen_kalemleri(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada takip ettiği ihalelerden çıkartabilir
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_takip_sil(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada takip ettiği ihaleleri belirleyebilir.
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_takip_ekle(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Genel ihale id takip edilenler setinde ise 1 değilse 0 döner
     * @param {number} _tahta_id
     * @param {IhalePOCO} _ihale
     * @returns {Promise}
     */
    f_db_ihale_takipte_mi(_tahta_id, _ihale) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale bilgilerinin takipte olup olmadığını belirtiyoruz
     * @param {number} _tahta_id
     * @param {(Array|Ihale)} _ihaleler
     * @returns {Promise}
     */
    f_db_ihale_takip_kontrol(_tahta_id, _ihaleler) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takipteki ihale idlerini getirir
     * @param {number} _tahta_id
     * @param {string} _sonucAnahtari
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {boolean} _desc
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise}
     */
    f_db_ihale_tahtanin_takipteki_ihale_idleri(_tahta_id, _sonucAnahtari, _tarih1, _tarih2, _desc, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takipteki ihalelerini getirir
     * @param {(number)} _tahta_id
     * @returns {Promise}
     */
    f_db_ihale_tahta_takipteki_ihale_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhalenin takipteki kalem idlerini getirir
     * @param {(string|number)} _ihale_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahtanin_takipteki_kalem_idleri(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhalenin takipteki kalemlerini buluyoruz
     * @param {(string|number)} _ihale_id
     * @param {(string|number)} _tahta_id
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_ihalenin_takipteki_kalemleri(_ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Elastic de kayıtlı ihale idlerini çekip elastic:ihale setine ekler
     * @returns {Promise}
     */
    f_db_elastic_ihale_idlerini_cek() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Rediste olan elastic de olmayan ihale kayıtlarını elastic e ekliyoruz
     * @returns {Promise}
     */
    f_db_ihale_ekle_elastic() { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Elastic de kayıtlı ihaleleri redise ekler
     * @param {number} _ay
     * @param {number} _yil
     * @returns {Promise}
     */
    f_db_ihale_ekle_elastic_to_redis(_ay, _yil) { return new TypeError('Uygulanması gereken metod!'); }

}



/**
 * @abstract
 */
class Ileti {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Ileti) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Kullanıcının ileti toplamı
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_ileti_toplam(_kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Kullanıcı ileti detaylarını getir(son eklenenden ilk eklenene doğru)
     * @param {(number)} _kul_id
     * @param {(number)} _iSayfa 
     * @param {(number)} _iAdet 
     * @returns {Promise}
     */
    f_db_ileti_tumu(_kul_id, _iSayfa, _iAdet) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Yeni ileti bilgisi ekle
     * @param {(string|number)} kul_id
     * @param {(string|number)} id
     * @returns {Promise}
     */
    f_db_ileti_ekle(kul_id, id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Kalem {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Kalem) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     *  Elastic de kayıtlı kalem idlerini çekip elastic:kalem setine ekler 
     * @returns {Promise}
     */
    f_db_elastic_kalem_idlerini_cek() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Rediste olan ancak elastic de olmayan kalemleri elastic e ekliyoruz
     *
     * @returns {Promise}
     */
    f_db_kalem_ekle_elastic() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtada değiştirilen kalemi yeniden orjinal haline döndürülmek isteniyor
     * @param {(number)} _kalem_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_orjinale_don(_kalem_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {number} _kalem_id 
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_anahtarina_gore_indeksli_urun_idler(_kalem_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahta anahtar kelimelerine göre indekslenmiş kalem idlerini getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_indeksli_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın anahtar kelimelerine uygun indekslenmiş kalem idlerini getirir
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _ihale_id
     * @returns {Promise}
     */
    f_db_kalem_indeksli_idler_ihaleye_bagli(_tahta_id, _ihale_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İndeksli kalemleri sayfalı getirir
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<LazyLoadingResponse>}
     */
    f_db_kalem_indeksliler_by_page(_tahta_id, _ihale_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kalemin bağlı oldugu ihale bilgisini getirir
     * @param {(number)} _kalem_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_ihalesi(_kalem_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * 
     * 
     * @param {KalemPOCO} _kalem 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_kalem_takipte_mi(_kalem, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kalemin/kalemlerin takipte olup olmadığını bulup geri döner
     * @param {(string|number)} _tahta_id
     * @param {(KalemPOCO[])} _kalemler
     * @returns {Promise}
     */
    f_db_kalem_takip_kontrol(_tahta_id, _kalemler) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Takip edilecek kalem setinden çıkar
     * @param {(string|number)} _tahta_id
     * @param {number} _kalem_id
     * @returns {Promise}
     */
    f_db_tahta_kalem_takip_sil(_tahta_id, _kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Takip edilecek kalem setine ekle
     * @param {(string|number)} _tahta_id
     * @param {(number)} _kalem_id
     * @returns {Promise}
     */
    f_db_tahta_kalem_takip_ekle(_tahta_id, _kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtada takip edilen tüm kalemleri getirir
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_kalem_takip_tumu(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takip edilen kalem id lerini getirir
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_kalem_takip_idler(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *  Tahtanın takip ettiği ve tüm kalem sayılarını getirir
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO} _arama
     * @returns {GrafikDonutPOCO}
     */
    f_db_kalem_takip_toplami(_tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada gizlediği kalemi tekrardan listede görmek isterse geri alıyoruz
     * @param {number} _tahta_id
     * @param {number} _kalem_id
     * @returns {Promise}
     */
    f_db_kalem_gizlenen_sil(_tahta_id, _kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği kalemleri gizleyebilir, böylece listede gizlenenler görünmeyecektir.
     * @param {number} _tahta_id
     * @param {number} _kalem_id
     * @returns {Promise}
     */
    f_db_kalem_gizlenen_ekle(_tahta_id, _kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği kalem listesini dönüyoruz.
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_gizlenen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gizlenen kalem toplamını getirir
     * @param {(string|number)} _tahta_id
     * @param {number} _tarih
     * @returns {Promise}
     */
    f_db_kalem_gizlenen_toplami(_tahta_id, _tarih) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_kalem_gizlenen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği silinen kalem listesini dönüyoruz.
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_silinen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen kalem toplamını getirir
     * @param {(string|number)} _tahta_id
     * @param {number} _tarih
     * @returns {GrafikDonutPOCO}
     */
    f_db_kalem_silinen_toplami(_tahta_id, _tarih) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın silinen kalem idlerini içerir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kalem_silinen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği kayıdı geri almak isteyebilir.
     * @param {(number)} _kalem_id
     * @param {(string|number)} _ihale_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kalemi_silinenden_cikar(_kalem_id, _ihale_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kaleme ait onay durum tarihçesi getirilir.(kullanıcı durum değiştirdikçe bu sete eklenir)
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kalem_id
     * @returns {Promise}
     */
    f_db_kalem_onay_durum_tarihcesi(_tahta_id, _kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {(number|number[]|string|string[])} _kalem_id
     * @param {number} _tahta_id - Tahta id bilgisi olmak zorunda
     * @returns {Promise}
     */
    f_db_kalem_onay_durumu(_kalem_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kalemin onay durumunu değiştirmemizi sağlar. Örneğin teklifti sonra katılıyoruza çekildi.
     * Bu durumda önce teklif setinden kaldırmalı sonra katılıyoruz setine eklemeliyiz
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {number} _kalem_id
     * @param {OnayDurumuPOCO} _onay
     * @returns {Promise}
     */
    f_db_kalem_onay_durumu_guncelle(_tahta_id, _ihale_id, _kalem_id, _onay) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kaleme bağlı teklifler idlerini getirir
     * @param {string} _sonucAnahtari
     * @param {number} _tahta_id
     * @param {number} _kalem_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_kalem_teklif_idleri(_sonucAnahtari, _tahta_id, _kalem_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kaleme bağlı tekliflerini getirir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kalem_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_kalem_teklif_tumu(_tahta_id, _kalem_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği kalem idlerini döner
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Tarih=} _tarih
     * @returns {Promise}
     */
    f_db_tahta_kalem_idler_aktif(_tahta_id, _tarih) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {(number|number[]|string|string[])} kalem_id
     * @param {number} _tahta_id
     * @param {OptionsKalem=} _opts
     * @returns {Promise}
     */
    f_db_kalem_id(kalem_id, _tahta_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(string|number)} _ihale_id 
     * @param {(KalemDBPOCO[])} _ihaleKalemleri 
     * @param {(number)} _kul_id 
     * @returns {Promise}
     */
    f_db_kalemleri_ekle(_ihale_id, _ihaleKalemleri, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Yeni kalem ekle (genel kalem-ihale dünyasından çekilen..vb)
     * @param {(string|number)} _ihale_id
     * @param {KalemDBPOCO} _kalem
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kalem_ekle(_ihale_id, _kalem, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya yeni kalem ekle
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _ihale_id
     * @param {KalemESPOCO} _es_kalem
     * @param {KalemDBPOCO} _db_kalem
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kalem_ekle_tahta(_tahta_id, _ihale_id, _es_kalem, _db_kalem, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kalemin güncellenmesi sğlanır
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _ihale_id
     * @param {KalemESPOCO} _es_kalem
     * @param {KalemDBPOCO} _db_kalem
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kalem_guncelle(_tahta_id, _ihale_id, _es_kalem, _db_kalem, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Bu kalem genel kalemler setinde ise 1 değilse 0 döner
     * @param {(number)} _kalem_id
     * @returns {Promise}
     */
    f_db_kalem_genel_kontrol(_kalem_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kalem silindiğinde aşağıdaki adımlar gerçekleşir:
     * > tahtanın özel kalemlerinden silinir (aktiften kaldırılır pasife eklenir.)
     * > kaleme ait teklifler varsa silinir
     * > kalem ihale ilişkisi silinir (hdel kalem:ihale 201)
     * @param {number} _kalem_id
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_kalem_sil_tahta(_kalem_id, _tahta_id, _ihale_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * kaleme bağlı anahtar kelimeleri getirir
     * @param {(number|number[]|string|string[])} _kalem_id
     * @param {number} _tahta_id
     * @returns {(AnahtarKelimePOCO[])}
     */
    f_db_kalem_anahtar_tumu(_kalem_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * kalemle ilişkili anahtar eklenmesi sağlanır.
     * @param {number} _tahta_id
     * @param {number} _kalem_id
     * @param {AnahtarKelimePOCO} _anahtar
     * @returns {Promise}
     */
    f_db_kalem_anahtar_ekle(_tahta_id, _kalem_id, _anahtar) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(number|string)} _kalem_id  
     * @param {(number|string)} _anahtar_id 
     * @returns {Promise} 
     */
    f_db_kalem_anahtar_sil(_tahta_id, _kalem_id, _anahtar_id) { return new TypeError('Uygulanması gereken metod!'); }

}


/**
 * @abstract
 */
class Kullanici {
    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Kullanici) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Kullanıcının oturum durumunu getirir
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_kullanici_oturum_durumu(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kullanıcının oturum durumunu ekle(online-offline..vb)
     * @param {number} _kul_id
     * @param {number} _durum_id
     * @returns {Promise}
     */
    f_db_kullanici_oturum_durumu_ekle(_kul_id, _durum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının sahip ve üye olduğu aktif tahtalarını getirir
     * @param {(string|number)} kul_id
     * @returns {Promise}
     */
    f_db_kullanici_tahta_idleri(kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtalarını dizi içinde nesneler olarak dönecektir
     * @param {(number|string)} _kul_id
     * @param {OptionsTahta=} _opts
     * @returns {Promise}
     */
    f_db_kullanici_tahtalari(_kul_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği tahtayı yeniden aktife çekmek istiyor
     * @param {(number)} _kul_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kullanici_silinen_tahtalardan_cikar(_kul_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının silinen tahtalarını çekiyoruz
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kullanici_silinen_tahtalari_tumu(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının aktif ve silinen tahtalarına göre toplamları bulunur
     * @param {(number)} _kul_id
     * @returns {Promise.<GrafikDonutPOCO>}
     */
    f_db_kullanici_silinen_tahta_toplami(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının silinen tahta idlerini buluyoruz
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kullanici_silinen_tahta_idleri(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * KULLANICI İŞLEMLERİ(EKLE-SİL-GÜNCELLE-TUMU)
     * @param {boolean} aktif
     * @returns {Promise}
     */
    f_db_kullanici_tumu(aktif) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * id lere göre kullanıcıları buluyoruz
     * @param {(string[]|number[])} _idler
     * @returns {Promise}
     */
    f_db_kullanici_tumu_idye_gore(_idler) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının ayar bilgisini çek
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kullanici_ayar(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ayar bilgisi ekle
     * @param {(number)} _kul_id
     * @param {KullaniciAyarPOCO} _ayar
     * @returns {Promise}
     */
    f_db_kullanici_ayar_ekle(_kul_id, _ayar) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı ve ayar bilgilerinin çekilmesi sağlanır
     * @param {(number)} _kul_id
     * @param {OptionsKullanici=} _opts, Kullanıcı bilgilerinin detaylarını çekip çekmemek için ayarları içerir
     * @returns {Promise}
     */
    f_db_kullanici_id(_kul_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kullanıcının bilgileri Tahta Üyesi olma durumuna göre çeker
     * @param {(number|number[]|string|string[])} _uye_id
     * @param {number} _tahta_id
     * @param {OptionsUye=} _opts
     * @returns {Promise}
     */
    f_db_uye_id(_uye_id, _tahta_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Birden fazla kullanıcı id için bilgilerinin oluşturulması sağlanır(kullanıcı genel ve ayar bilgileri)
     * @param {(number[])} _arr_kullanici_idleri
     * @returns {Promise}
     */
    f_db_kullanici_idler(_arr_kullanici_idleri) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number)} _kul_id 
     * @param {string} _token 
     * @returns {Promise}
     */
    f_db_kullanici_refresh_token_ekle(_kul_id, _token) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number)} _kul_id
     * @returns {Promise} 
     */
    f_db_kullanici_refresh_token(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı eposta adresiyle, varsa kullanıcı bilgisi döner
     * @param {string} _eposta  Kullanıcı adı olarak e-posta adresini kullanıyoruz.
     * @returns {Promise}
     */
    f_eposta_to_db_kullanici_id(_eposta) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} _userPrincipalName 
     * @returns {Promise}
     */
    f_AD_to_db_kullanici_id(_userPrincipalName) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} fb_id 
     * @returns {Promise}
     */
    f_FACEBOOK_id_to_db_kullanici_id(fb_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} tw_id 
     * @returns {Promise}
     */
    f_TWITTER_id_to_db_kullanici_id(tw_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} gp_id 
     * @returns {Promise}
     */
    f_GPLUS_id_to_db_kullanici_id(gp_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} _eposta 
     * @returns {Promise}
     */
    f_db_kullanici_LOCAL_eposta(_eposta) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı eposta adresiyle, varsa kullanıcı bilgisi döner
     * @param {string} _principleName {String} - Kullanıcı adı olarak e-posta adresini kullanıyoruz.
     * @returns {Promise}
     */
    f_db_kullanici_AD_principleName(_principleName) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} fb_id 
     * @returns {Promise}
     */
    f_db_kullanici_FACEBOOK_id(fb_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} gp_id 
     * @returns {Promise}
     */
    f_db_kullanici_GPLUS_id(gp_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {string} tw_id 
     * @returns {Promise}
     */
    f_db_kullanici_TWITTER_id(tw_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının sistemde kayıtlı olup olmadığı kontrol edilir, yoksa null döner
     * @param {KullaniciPOCO} kullanici
     * @returns {Promise}
     */
    f_db_kullanici_kontrol(kullanici) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {KullaniciDBPOCO} kullanici 
     * @returns {Promise}
     */
    f_db_kullanici_ekle(kullanici) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {KullaniciDBPOCO} kullanici 
     * @returns {Promise}
     */
    f_db_kullanici_guncelle(kullanici) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {number} kullanici_id 
     * @returns {Promise}
     */
    f_db_kullanici_sil(kullanici_id) { return new TypeError('Uygulanması gereken metod!'); }

}


/**
 * @abstract 
 */
class Kurum {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Kurum) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Favori kurumlarına ekle
     * @param {(string|string[]|number[]|number)} _kurum_id
     * @param {(number)} _kul_id
     * @returns {Promise}
     *  */
    f_db_favori_kurum_ekle(_kurum_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Favori kurumlarından çıkar
     * @param {(number|string)} _kurum_id
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_favori_kurum_sil(_kurum_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının favori kurum idleri
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_favori_kurum_idler(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının tahtada görebileceği favori kurum idlerini getir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kul_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_kullanici_favori_kurum_idleri(_tahta_id, _kul_id, _sayfalama) { 
        return new TypeError('Uygulanması gereken metod!'); 
    }

    /**
     * Kullanıcının tahtada görebileceği favori kurumlarını getir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kul_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_tahta_kullanici_favori_kurumlari(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Elastic de kayıtlı kurum idlerini çekip elastic:kurum setine ekler
     * @returns {Promise}
     */
    f_db_elastic_kurum_idlerini_cek() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Rediste olan elastic de olmayan kurum kayıtlarını elastic e ekliyoruz
     * @returns {Promise}
     */
    f_db_kurum_ekle_elastic() { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kurumun kazanç trendini hesaplar(tarih-toplam kazanç)
     * Hangi ayda kaç para kazanıldığını dönmüş oluyoruz örn {Key:5,Miktar:15,Count:17.65} anlamı 5.ayda 17.65 kazanılmış toplamda 15 adet için(kalem miktarı)
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kurum_id
     * @param {(number|string)} _teklif_para_id
     * @param {(number|string)} _hesaplanacak_para_id
     * @param {(number|string)} _kur_tipi_id
     * @param {URLQueryPOCO=} _arama
     * @returns {Promise}
     */
    f_db_kurum_kazanc_trendi(_tahta_id, _kurum_id, _teklif_para_id, _hesaplanacak_para_id, _kur_tipi_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Tahtada kurumun ürüne verdiği teklifleri getirir(tarihe göre tersten sıralanmış olarak çekilir)
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {number} _urun_id
     * @param {number} _para_id
     * @param {number} _onay_id SABIT.ONAY_DURUM.teklif tipinde olacak
     * @param {number=} _tarih1
     * @param {number=} _tarih2
     * @param {number=} _sayfa
     * @param {number=} _satir
     * @param {boolean=} _tariheGoreTerstenSirala
     * @returns {Promise}
     */
    f_db_kurumun_urune_verdigi_teklifler(_tahta_id, _kurum_id, _urun_id, _para_id, _onay_id, _tarih1, _tarih2, _sayfa, _satir, _tariheGoreTerstenSirala) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * @typedef UrunTeklifFiyat
     * @prop {(number[]|string[])} Tarih
     * @prop {(number[])} Fiyat
     */


    /**
     * Tahtada kurumun ürüne verdiği teklif fiyatlarını getirir
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {number} _urun_id
     * @param {number} _para_id
     * @param {number} _onay_id
     * @param {number=} _tarih1
     * @param {number=} _tarih2
     * @param {number=} _sayfa
     * @param {number=} _satir
     * @returns {Promise.<UrunTeklifFiyat>}
     */
    f_db_kurumun_urune_verdigi_teklif_fiyatlari(_tahta_id, _kurum_id, _urun_id, _para_id, _onay_id, _tarih1, _tarih2, _sayfa, _satir) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kurumun teklif verdiği kalemleri buluyoruz
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {number} _onay_durum_id
     * @param {number} _para_id
     * @param {number=} _tarih1
     * @param {number=} _tarih2
     * @returns {Promise}
     */
    f_db_kurumun_teklif_verdigi_kalemler(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kurumun teklif verdiği kalemleri buluyoruz
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {number} _para_id
     * @param {number=} _tarih1
     * @param {number=} _tarih2
     * @returns {Promise}
     */
    f_db_kurumun_teklif_verdigi_kalemler_toplami(_tahta_id, _kurum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kurumun teklif verdiği ihale bilgilerini döner
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {(number|SABIT.ONAY_DURUM.teklif)} _onay_durum_id
     * @param {number} _para_id
     * @param {number=} _tarih1
     * @param {number=} _tarih2
     * @returns {Promise}
     */
    f_db_kurumun_teklif_verdigi_ihaleler(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _kurum_id
     * @param {number} _onay_id
     * @param {(number|string)} _para_id
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {Promise.<{Key: number, Count: number}>}
     */
    f_db_kurumun_ihale_gunlerine_gore_katildigi_ihale_toplamlari(_tahta_id, _kurum_id, _onay_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _kurum_id
     * @param {(number|string)} _para_id
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {Promise}
     */
    f_db_kurumun_teklif_verdigi_ihaleler_toplami(_tahta_id, _kurum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(string|number)} _kurum_id 
     * @param {number} _onay_durum_id 
     * @param {number} _para_id 
     * @param {number} _tarih1 
     * @param {number} _tarih2 
     * @returns {Promise}
     */
    f_db_kurum_teklif_verdigi_ihaleleri_tarihe_gore_grupla(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Genel onay durumuna göre (kazandı-iptal..vb) kurumun tekliflerini döner
     * @param {(number)} _tahta_id
     * @param {(number)} _kurum_id
     * @param {(number|SABIT.ONAY_DURUM.teklif)=} _onay_durum_id
     * @param {(number)} _para_id
     * @param {OptionsTeklif} _opts
     * @param {URLQueryPOCO=} _arama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_kurumun_teklifleri_detay(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _opts, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İki tarih aralığındaki kurumun teklif verdiği teklif bilgilerini döner
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @param {(number|SABIT.ONAY_DURUM.teklif)} _onay_durum_id
     * @param {number} _para_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @returns {Promise}
     */
    f_db_kurumun_teklifleri_toplam(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {number} _tahta_id 
     * @param {number} _kurum_id 
     * @returns {Promise}
     */
    f_db_kurumun_iliskili_urun_idleri(_tahta_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kuruma ait sistemde kayıtlı ürünleri getirir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kurum_id
     * @param {(number|string)} _kul_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_kurum_urun_tumu(_tahta_id, _kurum_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tüm aktif kurumların ID bilgilerini döner
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<Array>}
     */
    f_db_aktif_kurum_idleri(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Bu metod genel kurumları veya
     * tahtalaya bağlı tüm >> özel + (aktif genel - silinen genel) - (ezilen genel + silinen özel+gizlenen özel) kurumları getirir
     * @param {number} _tahta_id
     * @param {number} _kul_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_kurum_tumu(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtada eklenen özel aktif(silinmemiş) kurumları getirir
     * @param {(string|number)} _tahta_id
     * @param {(number)} _kul_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_kurum_tahta_aktif(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtada eklenen özel aktif (silinmemiş) kurum idlerini getirir(genel kurum idleri yok)
     * @param {(string|number)} _tahta_id
     * @param {number} _baslangic
     * @param {number} _bitis
     * @returns {Promise}
     */
    f_db_kurum_tahta_aktif_idler(_tahta_id, _baslangic, _bitis) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kurum bilgisini döner
     * @param {(number|number[]|string|string[])} _kurum_id
     * @param {(number|string)=} _kul_id
     * @param {OptionsKurum=} _opts
     * @returns {Promise}
     */
    f_db_kurum_id(_kurum_id, _kul_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Kurum ekleme tek tek de olabilir array şeklinde de olabilir.
     * Gelen parametrenin tipine göre kontrol edilip kurumlar eklenebilir.
     * Genel veya tahtaya ait özel kurum olup olmama durumuna göre eklenir.
     * @param {(KurumDBPOCO|KurumDBPOCO[])} _kurum
     * @param {number=} _tahta_id
     * @param {(number|string)} _kul_id
     * @returns {Promise}
     */
    f_db_kurum_ekle(_kurum, _tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Genel kurum bilgisi ezilip, Tahtaya yeni (özel) kurum eklenmesi sağlanır. Geriye yeni oluşan veya mevcut özel kurum bilgisi promise döner.
     * Bunu her kurum işleminden önce çağırmalıyız.
     * Özel kurum ise yeni kurum bilgileri hash e eklenerek geriye yeni bilgileri ile döner
     *
     * Kurumun güncellemesi adım adım şöyledir
     * 1-eski kurum_id si tahtanın ezilen kurumları setine eklenir
     * 2-yeni kurum eklenir
     * 3-tahtanın kurumları setine eklenir
     * @param {number} _tahta_id
     * @param {KurumESPOCO} _es_kurum
     * @param {KurumDBPOCO} _db_kurum
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_kurum_guncelle(_tahta_id, _es_kurum, _db_kurum, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gelen kurum_id genel kurum setinde ise 1 değilse 0 döner
     * @param {number} _kurum_id
     * @returns {Promise}
     */
    f_db_kurum_genel_kontrol(_kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kurum silme işlemi
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _kurum_id
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_kurum_sil(_tahta_id, _kurum_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Eğer ihaleDunyasi_kurum_id daha önce kaydedilmemişse kayıt edeceğiz
     * @param {KurumDBPOCO} _db_kurum
     * @param {(number|number|string)} _iIhaleDunyasiKurumId
     * @param {!boolean=} _bKayitliysaKurumBilgisiniGetir kurum bilgisini dönmesini istiyorsa true yoksa false
     * @param {!boolean=} _bKayitliysaGuncelle kurum bilgisinin güncellenmesi isteniyorsa true yoksa false
     * @returns {Promise.<KurumPOCO|number|number>}
     */
    f_db_kurum_ekle_ihaleDunyasindan(_db_kurum, _iIhaleDunyasiKurumId, _bKayitliysaKurumBilgisiniGetir, _bKayitliysaGuncelle) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Eğer ihaleDunyasi_kurum_id daha önce kaydedilmemişse kayıt edeceğiz
     * @param {KurumDBPOCO} _db_kurum
     * @param {(number|string)} _iIhaleDunyasiKurumId
     * @returns {KurumPOCO}
     */
    f_db_kurum_ekle_ihaleDunyasindan2(_db_kurum, _iIhaleDunyasiKurumId) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * ihale dünyasında kayıtlı kurum id bilgisine göre redisteki kurumu çekiyoruz
     * @param {number} _iIhaleDunyasiKurumId
     * @returns {Promise}
     */
    f_db_kurum_getir_ihaleDunyasindan2(_iIhaleDunyasiKurumId) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * kurum idx i ata
     * @param {(string|number)} _kurum_id
     * @returns {Promise}
     */
    f_db_kurum_idx_ekle(_kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtalar arasında özel kurumların paylaşılması sağlanır.
     * @param {PaylasIdsPOCO} _paylas
     * @returns {Promise}
     */
    f_db_kurum_paylas(_paylas) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği gizlenen kurum listesini dönüyoruz.
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_kurum_gizlenen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gizlenen kurum toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kurum_gizlenen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_kurum_gizlenen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği silinen kurum listesini dönüyoruz.
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_kurum_silinen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen kurum toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {*|GrafikDonutPOCO}
     */
    f_db_kurum_silinen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen kurum id lerini getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kurum_silinen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği kayıdı geri almak isteyebilir.
     * @param {(string|number)} _kurum_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_kurumu_silinenden_cikar(_kurum_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kurumun yaptığı ihale idlerini getirir
     * @param {number} _kurum_id 
     * @returns {Promise}
     */
    f_db_kurumun_ihale_idleri(_kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

}




// /**
// * @typedef {string} LogIslem Loglama için işlemin tipi
// * @readonly
// * @property {string} EKLE "ekle"
// * @property {string} GUNCELLE "guncelle"
// * @property {string} SIL "sil"
// */

/**
 * @enum {LogIslem} işlem türleri
 */
const LogIslem = {
    EKLE: 'ekle',
    GUNCELLE: 'guncelle',
    SIL: 'sil'
};

/**
 *
 * @abstract
 */
class Log {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Log) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     *
     * @param {string} _anahtar anahtar kelimeyi içerir
     * @param {(string|Object|number)} _nesne loglanacak obje
     * @param {number=} _kul_id kullanıcı idsi
     * @param {LogIslem} _islem_tipi LogIslem tipinde enum
     * @returns {Promise}
     */
    f_db_log_ekle(_anahtar, _nesne, _kul_id, _islem_tipi) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 *
 * @abstract
 */
class Olay {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Olay) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * 
     * @returns {Promise}
     */
    f_db_tetiklenecek_olay_tumu() {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * GERÇEKLEŞEN_OLAY_KUYRUĞU'na OLAY ekleme
     * @param {string} _olay
     * @param {number} _nesne_id
     * @returns {Promise.<number>}
     */
    f_db_olay_kuyruguna_ekle(_olay, _nesne_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * gerçekleşen olay kuyrugundan çıkar
     * @param {string} _olay
     * @param {(number|number[])} _nesne_idler
     * @returns {Promise}
     */
    f_db_olay_kuyrugundan_sil(_olay, _nesne_idler) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * sistemde kayıtlı tüm olayları çek
     * @returns {OLAY|{ROL_EKLENDI, ROL_GUNCELLENDI, ROL_SILINDI, URUN_EKLENDI, URUN_GUNCELLENDI, URUN_SILINDI, KURUM_EKLENDI, KURUM_GUNCELLENDI, KURUM_SILINDI, IHALE_EKLENDI, IHALE_GUNCELLENDI, IHALE_SILINDI, IHALE_TARIHI_ERTELENDI, KALEM_EKLENDI, KALEM_GUNCELLENDI, KALEM_SILINDI, KALEM_DURUMU_GUNCELLENDI, TAHTA_ANAHTAR_EKLENDI, TAHTA_ANAHTAR_SILINDI, URUN_ANAHTAR_EKLENDI, URUN_ANAHTAR_SILINDI, TEKLIF_EKLENDI, TEKLIF_GUNCELLENDI, TEKLIF_SILINDI, TEKLIF_DURUMU_GUNCELLENDI}}
     */
    f_db_olay_tumu() {
        return new TypeError('Uygulanması gereken metod!');
    }

     /**
     * DB de olaylar anahtarı oluşmamışsa yaratılacak
     * Olay anahtarını başlatıp içine eventleri koyacağız
     * @returns {Promise}
     */
    f_init_db_olay() {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 *
 * @abstract
 */
class Rol {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Rol) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    //region ROLLER
    /**
     * Tahtaya ait rolleri getirir(tahtanın ve bölgenin rollerini içerir)
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_rol_tumu(_tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Tahtaya ait rolleri içerir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_rol_tahta(_tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Tahtada tanımlanan bölgeye ait rolleri içerir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_rol_bolge(_tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    //endregion

    //region ROL_İD
    /**
     * Rol id/lerden rol bilgisi getirir
     * @param {(number|string|number[]|string[])} _id
     * @returns {Promise}
     */
    f_db_rol_id(_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    //endregion

    //region ROL EKLE-GÜNCELLE-SİL
    /**
     * Bir veya daha fazla rolü ekleyerek, tahta ile ilişkilendirmemizi eklememizi sağlar
     * @param {(RolPOCO|RolPOCO[])} _roller
     * @param {number} _tahta_id
     * @param {number=} _kullanici_id
     * @returns {Promise}
     */
    f_db_rol_ekle(_roller, _tahta_id, _kullanici_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     *
     * @param {RolPOCO} _rol
     * @param {(number|string)=} _tahta_id
     * @param {(number|string)=} _kul_id
     * @returns {Promise}
     */
    f_db_rol_guncelle(_rol, _tahta_id, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Tahtadan rol_id yi çıkaracak
     * @param {number} _tahta_id
     * @param {number} _rol_id
     * @param {(number[])=} _arrKul_id
     * @returns {(Promise.<Array>)}
     */
    f_db_rol_sil_tahta(_tahta_id, _rol_id, _arrKul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }
    //endregion    
}


/**
 * @abstract
 */
class Sehir {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Sehir) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * Tüm şehirleri çek. LazyLoadingResponse döner
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_sehir_tumu() {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Şehir bilgilerini döner
     * @param {(number|number[]|string|string[])} _id
     * @returns {Promise}
     */
    f_db_sehir_id(_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     *
     * @param {(SehirPOCO|SehirPOCO[])} _sehirler
     * @param {boolean} _json eğer true ise jsondan çekiliyordur. id yi arttırmıyoruz json içindeki Id değerini kullanıyoruz
     * @param {(number|string)=} _tahta_id
     * @returns {(Promise[])}
     */
    f_db_sehir_ekle(_sehirler, _json, _tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     *
     * @param {(SehirPOCO|SehirPOCO[])} _sehirler
     * @returns {(Promise[])}
     */
    f_db_sehir_ekle2(_sehirler) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Şehrin bölge/lerini buluyoruz
     * @param {number} _sehir_id
     * @param {number} _tahta_id
     * @returns {Promise<BolgePOCO|BolgePOCO[]>}
     */
    f_db_sehir_bolgesi(_sehir_id, _tahta_id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Tahta {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Tahta) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     *  Kullanıcı tahtada gizlediği kurumu tekrardan listede görmek isterse geri alıyoruz
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @returns {Promise}
     *  */
    f_db_tahta_kurum_gizlenen_sil(_tahta_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği kurum gizleyebilir, böylece listede gizlenenler görünmeyecektir.
     * @param {number} _tahta_id
     * @param {number} _kurum_id
     * @returns {Promise}
     */
    f_db_tahta_kurum_gizlenen_ekle(_tahta_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * tahtada kayıtlı AKTİF(silinmeyen) uyarılar id lerini döner
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_uyarilar_idleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * tahtada kayıtlı AKTİF(silinmeyen) uyarılar listesini döner
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_uyarilar_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takip ettiği ihale listesini ihale bilgileriyle getirir
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_tahta_ihale_takip_tumu(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takip edilen ihale id lerini getirir
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_ihale_takip_idler(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {URLQueryPOCO} _arama 
     * @returns {Promise}
     */
    f_db_tahta_ihale_takip_toplami(_tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın indexli ihale id lerini döner
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_indeksli_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Bu metod tahtanın takip edilen ve indekslenen(tahta anahtalarına uygun olan ihaleler) ihale idlerini getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_indekslenen_ve_takip_edilen_ihale_idleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * İki tarih aralığındaki ihale bilgilerini getirir.
     * Örn. Akdeniz Üniversitesinin ihalelerini listelemek isterse,
     *  (tahtanın ihaleleri) KESIŞIM (kurumun ihaleleri)
     * Örn. Belli bir ürün için çıkan ihaleleri isterse,
     *  (tahtanın ihaleleri) KESIŞIM (ürünün ihaleleri)
     * Örn. hem belli bir ürün hem belli bir kurum ihalelleri istenirse,
     *  (tahtanın ihaleleri) KESIŞIM (ürünün ihaleleri) KESIŞIM (kurumun ihaleleri)
     * @param {(number|string)} _tahta_id
     * @param {(number|string)=} _kurum_id
     * @param {(number|string|number[]|string[])=} _urun_id
     * @param {URLQueryPOCO} _urlQuery
     * @param {OptionsIhale} _opts
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_tahta_ihale_rapor_bilgileri(_tahta_id, _kurum_id, _urun_id, _urlQuery, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İki tarih aralığındaki ihale bilgilerini getirir.
     * Örn. Akdeniz Üniversitesinin ihalelerini listelemek isterse,
     *  (tahtanın ihaleleri) KESIŞIM (kurumun ihaleleri)
     * Örn. Belli bir ürün için çıkan ihaleleri isterse,
     *  (tahtanın ihaleleri) KESIŞIM (ürünün ihaleleri)
     * Örn. hem belli bir ürün hem belli bir kurum ihalelleri istenirse,
     *  (tahtanın ihaleleri) KESIŞIM (ürünün ihaleleri) KESIŞIM (kurumun ihaleleri)
     * @param {(number|string)} _tahta_id
     * @param {(number|string)=} _kurum_id
     * @param {(number|string|number[]|string[])=} _urun_id
     * @param {URLQueryPOCO} _urlQuery
     * @param {string} _anahtar
     * @returns {Promise.<(number[]|string[])>}
     */
    f_db_tahta_ihale_rapor_kesisen_ihale_idleri(_tahta_id, _kurum_id, _urun_id, _urlQuery, _anahtar) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * tahtanın anahtar kelimelerine göre indeksli ihaleleri getir
     * @param {number} _tahta_id
     * @param {OptionsIhale=} _opts
     * @param {URLQueryPOCO=} _arama
     * @returns {Promise} LazyLoadingResponse
     */
    f_db_tahta_ihale_indeksli_tahta_anahtarKelimelerineGore(_tahta_id, _opts, _arama) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * İndekslenmiş ihalelerin tarihe göre sıralanmış halini temp de tutulması sağlanır
     * @param {number} _tahta_id
     * @param {URLQueryPOCO} _arama
     * @returns {Promise}
     */
    f_db_tahta_ihale_indeksli_idler_tarihe_gore_sirali(_tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İki tarih aralığında anahtara göre indekslenmiş ihaleleri getirir
     * @param {(string|number)} _tahta_id
     * @param {URLQueryPOCO} _arama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_tahta_ihale_indeksli_ihaleler_tarihe_gore_sirali(_tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İndekslenmiş ihalelerin detaylarını getirir
     * Tarihi geçen:       10
     * Teklif verilebilir: 90 gibi değerleri döneceğiz
     * @param {number} _tahta_id
     * @param {URLQueryPOCO} _arama
     * @returns {Promise.<{Toplam: number, Gecerli: number, Gecersiz:number}>}
     */
    f_db_tahta_ihale_indeksli_toplami(_tahta_id, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği ihalelerin listesini ihale bilgileriyle dönüyoruz.
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_ihale_gizlenen_tumu(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gizlenen ihale toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_ihale_gizlenen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Tahtanın gizlenen ihale id lerini içerir
     * @param {(number|string)} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_ihale_gizlenen_idler(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {TahtaAjandaPOCO} _ajanda 
     * @returns {Promise}
     */
    f_db_tahta_ajanda_ekle(_tahta_id, _ajanda) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_tahta_ajanda_sil(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_tahta_ajandasi(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya eposta ve rolleriyle DAVET eklenmesi.
     * <pre>
     * HS > tahta:401:uye   :  Kullanıcı EPOSTA adresini, rolleriyle tutar. > eposta | arrRoller > 80 | [1,3,4]
     * HSET  tahta:401:uye  eposta  [1,3,4]
     * </pre>
     * @param {number} _tahta_id
     * @param {{EPosta:string, Rol_Id:number, UID:string}} _yetkisiyleDavetli
     * @returns {Promise}
     */
    f_db_tahta_davet_ekle(_tahta_id, _yetkisiyleDavetli) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Daveti kontrol et ve geçerliyse "session.ss.davet.Gecerli = true" diye işaretlenmesine yardımcı ol
     * @param {number} _tahta_id
     * @param {string} _davet_id
     * @param {string} _eposta
     * @returns {Promise}
     */
    f_db_tahta_davet_eposta(_tahta_id, _davet_id, _eposta) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahta_id ye yapılmış UID li davetin tüm bilgisini döner
     * @param {(string|number)} _tahta_id
     * @param {number} _davetId
     * @returns {Promise}
     */
    f_db_tahta_davet(_tahta_id, _davetId) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_davetleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya eklenmiş davetin eposta adresi vasıtasıyla silinmesi.
     * <pre>
     * HS > tahta:401:davet   :  Davetli EPOSTA adresi ile tüm davetliler içinde arama yapılır ve bulunduğunda UID ile hdel yapılır
     * HDEL  tahta:401:uye  bulunanDavet.UID
     * </pre>
     * @param {number} _tahta_id
     * @param {string} _eposta
     * @returns {Promise}
     */
    f_db_tahta_davet_sil(_tahta_id, _eposta) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın üyesine bağlı bölge ve o bölgede tanımlı rolünü kayıt ediyoruz
     * @param {(string|number)} _tahta_id
     * @param {number} _uye_id
     * @param {(BolgeRoluPOCO[])} _bolgeRolleri [bolge_id,rol_id] şeklinde array olarak gelir örn [1,2]
     * @returns {Promise}
     */
    f_db_tahta_uye_bolge_rolu_ekle(_tahta_id, _uye_id, _bolgeRolleri) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın üyesine bağlı bölge ve o bölgede tanımlı rolünü kayıt ediyoruz
     * @param {(string|number)} _tahta_id
     * @param {number} _uye_id
     * @param {number} _bolge_id
     * @returns {Promise}
     */
    f_db_tahta_uye_bolge_rolu_sil(_tahta_id, _uye_id, _bolge_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * tahtanın üyesine ait genel tahta rolü belirliyoruz
     * örn tahta 1 de üye 11 idli kullanıcı admin rolüne sahip gibi
     * @param {(string|number)} _tahta_id
     * @param {number} _uye_id
     * @param {number} _rol_id
     * @returns {Promise}
     */
    f_db_tahta_uye_rol_ekle(_tahta_id, _uye_id, _rol_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * Tahtaya bağlı üyelerin eklenmesi.
     * HS > tahta:401:uye   :  Kullanıcı ID sini rolleriyle tutar. > kullanici_id | arrRoller > 80 | [1,3,4]
     * @param {number} _tahta_id
     * @param {{ Kullanici_Id:number, Rol_Id:number }} _yetkisiyleKullanici
     * @returns {Promise}
     */
    f_db_tahta_uye_ekle(_tahta_id, _yetkisiyleKullanici) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın üyelerinden çıkartıyoruz
     * @param {(string|number)} _tahta_id
     * @param {number} _uye_id
     * @returns {Promise}
     */
    f_db_tahta_uye_sil(_tahta_id, _uye_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {number} _tahta_id
     * @param {OptionsUye=} _opts, Üyelerin hangi bilgilerini istiyoruz
     * @returns {Promise}
     */
    f_db_tahta_uyeleri(_tahta_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * x rolüne sahip tahtanın üyelerini döner
     * @param {number} _tahta_id
     * @param {number} _rol_id
     * @returns {Promise}
     */
    f_db_tahta_uyeleri_x_rolune_sahip(_tahta_id, _rol_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahta ile ilişkili kullanıcı id leri
     * @param {number} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_aktif_tahta_uye_idleri(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Tahta ile ilişkili kurum id yi döner
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_kurumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Sistemdeki tüm tahta nesnelerini lerini döner
     * @returns {Promise}
     */
    f_db_tahta_tumu() { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * ID si verilmiş tahta nesnesini döner
     * @param {(number|number[]|string|string[])} _tahta_id
     * @param {OptionsTahta=} _opts, Tahtanın hangi bilgilerini istiyorsak seçebiliriz
     * @returns {Promise}
     */
    f_db_tahta_id(_tahta_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı üye olduğu tahtadan ayrılmak isteyebilir, listeden çıkartıyoruz
     * @param {number} _tahta_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_tahtadan_ayril(_tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtalar'a yeni tahta ekler, oluşturan kullanıcıyla ilişkilendirir.
     * <pre>
     * INCR IDX
     * HSet Tahta _tahta
     * SADD Kullanici:X:Tahta:Sahip IDX
     * </pre>
     * @param {TahtaGenelPOCO} _tahta_db
     * @param {(RolPOCO[])} _temel_roller
     * @param {(BolgePOCO[])} _fmc_bolgeler
     * @param {(SehirPOCO[])} _sehirler
     * @param {(AnahtarKelimePOCO[])} _fmc_anahtarlar
     * @param {(KurumDBPOCO[])} _fmc_firmalar
     * @param {(number|string)=} _kul_id
     * @returns {Promise}
     */
    f_db_tahta_ekle(_tahta_db, _temel_roller, _fmc_bolgeler, _sehirler, _fmc_anahtarlar, _fmc_firmalar, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahta ile ilişkili kurum ekliyoruz
     * @param {(string|number)} _tahta_id
     * @param {(string|number)} _kurum_id
     * @returns {Promise}
     */
    f_db_tahtaya_kurum_ekle(_tahta_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Veriyi güncellemeden önceki hali çekilir ve LOG alanına atılır.
     * Güncellenecek nesnenin tarih bilgisi işlemin saati olarak güncellenir ve HSET ile işlem tamamlanır.
     * @param {TahtaGenelPOCO} _tahta_db
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_tahta_guncelle(_tahta_db, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silme eyleminde objenin son halini LOG a kaydedilir.
     * Silinirken tahta nesnesi içindeki tarih bilgisi güncellenir ve del:true özelliği eklenir ve hash içine kaydedilir
     * Tahta silindiğinde HASH içindeki bilgi kalır ve sadece güncellenirken(tarih ve del props)
     * Silinen Tahtalar setine eklenir.
     *
     * @param {number} _tahta_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_tahta_sil(_tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya ait teklifler varsa idleri döner
     * smembers tahta:401:teklif
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_teklif_idleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtaya ait kurumları varsa idleri döner
     * smembers tahta:401:kurum
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_tahta_kurum_idleri(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtanın anahtar kelimelerini döner
     * @param {number} _tahta_id
     *  @example
     * [{Id:1,AnahtarKelime:'diyalizer'}]
     * @returns {Promise}
     */
    f_db_tahta_anahtar_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahta ile ilişkili anahtar eklenmesi sağlanır
     * @param {number} _tahta_id
     * @param {(AnahtarKelime|AnahtarKelime[])} _anahtar
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_tahta_anahtar_ekle(_tahta_id, _anahtar, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(number|string)} _anahtar_id  
     * @param {(number)} _kul_id 
     * @returns {Promise}
     */
    f_db_tahta_anahtar_sil(_tahta_id, _anahtar_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_tahta_bolge_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtada oluşturulan özel bölgeleri içerir
     * @param {(string|number)} _tahta_id
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_tahta_bolge_ozel(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

}


/**
 * 
 * @abstract 
 */
class Teklif {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Teklif) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * Teklif bilgisini döner
     * @param {(number|number[]|string|string[])} _teklif_id
     * @param {(number|string)} _tahta_id
     * @param {OptionsTeklif=} _opts
     * @param {(number|string)=} _kul_id
     * @returns {Promise}
     */
    f_db_teklif_id(_teklif_id, _tahta_id, _opts, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
     * Teklif ekler
     * 
     * @param {number} _tahta_id 
     * @param {number} _teklif 
     * @param {number=} _kul_id 
     * @returns {Promise}
     */
    f_teklif_ekle(_tahta_id, _teklif, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Teklif güncellendiğinde hash yeniden oluşturulur
     * Kurumu değişti ise yeni değeri teklif:x:kurum tablosuna eklenir
     * Satırı değişti ise yeni değeri teklif:x:kalem tablosuna eklenir
     * Durumu 2 ise kazandı olarak belirlenir. Hem satırın kazananı hem de tahtanın kazanan teklifleri tablosuna kayıt eklenir.
     * Durumu 3 ise iptal edildiği belirtilir. Hem satırın iptal edileni hem de tahtanın iptal edilen teklifleri tablosuna kayıt eklenir.
     * @param {number} _tahta_id
     * @param {Object} _teklif
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_teklif_guncelle(_tahta_id, _teklif, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Teklifin onay durumunu güncelle
     * @param {number} _tahta_id
     * @param {number} _teklif_id
     * @param {number} _onay_durumu_id
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_teklif_durum_guncelle(_tahta_id, _teklif_id, _onay_durumu_id, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Teklif silinirken yapılacak işlemler
     result.dbQ.srem(result.kp.tahta.ssetTeklifleri(_tahta_id, true), _teklif_id),
     result.dbQ.sadd(result.kp.tahta.ssetTeklifleri(_tahta_id, false), _teklif_id),
     result.dbQ.srem(result.kp.kalem.ssetTeklifleri(_satir_id), _teklif_id),
     result.dbQ.srem(result.kp.ihale.ssetTeklifleri(_ihale_id), _teklif_id),
     result.dbQ.srem(result.kp.urun.ssetTeklifleri(_tahta_id, urun_Id), _teklif_id),
     result.dbQ.del(result.kp.teklif.setKurumu(_teklif_id)),
     result.dbQ.del(result.kp.teklif.setSatiri(_teklif_id))
     result.dbQ.srem(result.kp.kalem.ssetFiyatlari(_satir_id), teklif.Fiyat)
     * @param {number} _teklif_id
     * @param {number} _tahta_id
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_teklif_sil(_teklif_id, _tahta_id, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class Urun {
    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Urun) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * Rediste olan elastic de olmayan kurum kayıtlarını elastic e ekliyoruz
     * 
     * @param {number} _tahta_id 
     * @returns {Promise}
     */
    f_db_urun_ekle_elastic(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Favori ürünlerine ekle
     * @param {(string|string[]|number[]|number)} _urun_id
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_favori_urun_ekle(_urun_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Favori ürünlerinden çıkar
     * @param {(number|string)} _urun_id
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_favori_urun_sil(_urun_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının favori ürün idleri
     * @param {(number)} _kul_id
     * @returns {Promise}
     */
    f_db_favori_urun_idler(_kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının tahtada görebileceği favori ürün idlerini getir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kul_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise}
     */
    f_db_tahta_kullanici_favori_urun_idleri(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcının tahtada görebileceği favori ürünleri getir
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _kul_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_tahta_kullanici_favori_urunleri(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürüne ait teklifler dizisi döner
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @returns {Promise}
     */
    f_db_urun_teklifleri(_tahta_id, _urun_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürününün teklif edildiği TÜM fiyatlar
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @param {number} _parabirim_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @returns {(Promise[])}
     */
    f_db_urunun_teklif_verildigi_fiyatlari(_tahta_id, _urun_id, _parabirim_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Ürünün onay durumuna göre teklif fiyatlarını getir geriye [{Durum:string,Tarih:Array,Fiyat:Array}] döner
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @param {number} _onay_durum_id
     * @param {number} _parabirim_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @returns {Promise.<Array.<{Durum:string,Tarih:Array,Fiyat:Array}>>}
     */
    f_db_urunun_teklif_fiyatlari_onay_durumuna_gore(_tahta_id, _urun_id, _onay_durum_id, _parabirim_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * İhale tarihine göre ürünle katıldığı teklif varsa o güne 1 yazılır yoksa 0
     * @param {(string|number)} _tahta_id
     * @param {(number|string)} _urun_id
     * @param {number} _onay_id
     * @param {(number|string)} _para_id
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {Promise}
     */
    f_db_urunle_teklif_verilen_ihale_sayisi(_tahta_id, _urun_id, _onay_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }



    /**
     * Ürüne verilen tekliflerle istenen durumdaki tekliflerin kesişimi alırsak ürünün tekliflerini bulabiliriz.
     * @param {number}_tahta_id
     * @param {number}_urun_id
     * @param {number} _onay_durum_id
     * @param {number} _para_id
     * @param {OptionsTeklif} _opts
     * @param {URLQuery=} _arama
     * @returns {Promise.<LazyLoadingResponsePOCO>}
     */
    f_db_urunun_teklif_detaylari(_tahta_id, _urun_id, _onay_durum_id, _para_id, _opts, _arama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünün onay durum para birimine göre teklif idlerini döner
     * @param {(number|string)} _tahta_id
     * @param {(number|string)} _urun_id
     * @param {(number|string)} _onay_durum_id
     * @param {(number|string)} _para_id
     * @param {number=} _tarih1 başlangıç tarihi
     * @param {number=} _tarih2 bitiş tarihi
     * @param {number=} _baslangic x adet isteniyorsa başlangıç indexi
     * @param {number=} _bitis x adet kadar istendiği bilgisi
     * @returns {Promise}
     */
    f_db_urun_teklif_idleri(_tahta_id, _urun_id, _onay_durum_id, _para_id, _tarih1, _tarih2, _baslangic, _bitis) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünün verildiği teklif idleri
     * @param {(string|number)} _tahta_id
     * @param {(number|string)} _urun_id
     * @param {number} _onay_durum_id - Eğer 1 ise kazanan teklif_id leri, 0 ise kazanan, atılan, reddedilen tekliflerin id lerini dönecek
     * @param {(number|string)} _para_id
     * @param {(number|string)} _tarih1
     * @param {(number|string)} _tarih2
     * @returns {Promise}
     */
    f_db_urunun_teklif_toplami(_tahta_id, _urun_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünle ilişkilendirilmiş kurum bilgilerini döner. Yani bu listede üretici satıcı bayi her türlü kurum bilgisi mevcuttur
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @returns {Promise}
     */
    f_db_urun_iliskili_kurum_tumu(_tahta_id, _urun_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünle ilişkili firma ekliyoruz
     * @function
     * @param {(number|string|number)} _tahta_id
     * @param {(number|number[]|string|string[])} _urun_id
     * @param {(number|string|number)} _kurum_id
     * @returns {Promise.<string|number>}
     */
    f_db_urun_iliskili_kurum_ekle(_tahta_id, _urun_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünle ilişkili firmayı sil
     * @param {(string|number)} _tahta_id
     * @param {(number|string)} _urun_id
     * @param {(string|number)} _kurum_id
     * @returns {Promise}
     */
    f_db_urun_iliskili_kurum_sil(_tahta_id, _urun_id, _kurum_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     *
     * @param {number} _tahta_id
     * @param {number} _kul_id
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     * @returns {Promise.<LazyLoadingResponse>}
     */
    f_db_urun_tumu(_tahta_id, _kul_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {number} _tahta_id 
     * @param {URLQueryPOCO_Sayfalama} _sayfalama 
     * @returns {Promise}
     */
    f_db_urun_aktif_urun_idleri(_tahta_id, _sayfalama) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürün/lerin üretici bilgileri
     * @param {(number|number[]|string|string[])} _urun_id
     * @returns {Promise}
     */
    f_db_urun_ureticisi(_urun_id) { return new TypeError('Uygulanması gereken metod!'); }


    /**
     * Ürün/lerin bilgisini getirir
     * @param {(number|number[]|string|string[])} _urun_id
     * @param {number} _tahta_id
     * @param {(number|string)} _kul_id
     * @param {OptionsUrun=} _opts
     * @returns {Promise}
     */
    f_db_urun_id(_urun_id, _tahta_id, _kul_id, _opts) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürün ekleme 1 veya 1den fazla ürün listesinin (array) eklenmesi şeklinde olabilir.
     * @param {(UrunDB[])} _db_urun
     * @param {(number|string)} _uretici_id
     * @param {(number|string)} _tahta_id
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_urun_ekle(_db_urun, _uretici_id, _tahta_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürün güncellenirlen kurumunun değişip değişmediğini kontrol ediliyoruz
     * Değişmişse eski kurumun ürünleri listesinden çıkarıp yenisine ekliyoruz
     result.dbQ.srem(result.kp.kurum.ssetUrunleri(_tahta_id, _eski.Id), _urun.Id),
     result.dbQ.sadd(result.kp.kurum.ssetUrunleri(_tahta_id, _yeni.Id), _urun.Id)
     * @param {number} _tahta_id
     * @param {UrunDBPOCO} _db_urun
     * @param {number=} _uretici_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_urun_guncelle(_tahta_id, _db_urun, _uretici_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürün silinirken tahtanın özel ürünleri setinden çıkartıyoruz
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @param {number=} _kul_id
     * @returns {Promise}
     */
    f_db_urun_sil(_tahta_id, _urun_id, _kul_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürüne bağlı anahtar kelimeleri getirir
     * @param {(number|number[]|string|string[])} _urun_id
     * @param {number} _tahta_id
     * @returns {Promise.<Array.<AnahtarKelimePOCO>>}
     */
    f_db_urun_anahtar_tumu(_urun_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Ürünle ilişkili anahtar eklenmesi sağlanır.
     * @param {number} _tahta_id
     * @param {number} _urun_id
     * @param {AnahtarKelimePOCO} _anahtar
     * @returns {Promise}
     */
    f_db_urun_anahtar_ekle(_tahta_id, _urun_id, _anahtar) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(number|string)} _urun_id 
     * @param {(number|string)} _anahtar_id  
     * @returns {Promise}
     */
    f_db_urun_anahtar_sil(_tahta_id, _urun_id, _anahtar_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Tahtalar arasında özel ürünlerin paylaşılması sağlanır.
     * @param {PaylasIdsPOCO} _paylas
     * @returns {Promise}
     */
    f_db_urun_paylas(_paylas) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ürün toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise.<GrafikDonutPOCO>}
     */
    f_db_urun_silinen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ürün idlerini getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_urun_silinen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Silinen ürün bilgilerini detaylarıyla getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_urun_silinen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği kayıdı geri almak isteyebilir.
     * @param {(string|number)} _urun_id
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_urunu_silinenden_cikar(_urun_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği ürünlerin listesini ihale bilgileriyle dönüyoruz.
     * @param {number} _tahta_id
     * @returns {Promise}
     */
    f_db_urun_gizlenen_tumu(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * Gizlenen ürün toplamını getirir
     * @param {(string|number)} _tahta_id
     * @returns {Promise}
     */
    f_db_urun_gizlenen_toplami(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_urun_gizlenen_idler(_tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _urun_id 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_urun_gizlenen_ekle(_urun_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _urun_id 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_urun_gizlenen_sil(_urun_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

    /**
     * 
     * 
     * @param {(number|string)} _urun_id 
     * @param {(number|string)} _tahta_id 
     * @returns {Promise}
     */
    f_db_urunun_ihale_idleri(_urun_id, _tahta_id) { return new TypeError('Uygulanması gereken metod!'); }

}


/**
 * @abstract
 */
class Uyari {

    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Uyari) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * sistemde kayıtlı tüm AKTİF uyarılar listesini döner
     * @returns {Promise}
     */
    f_db_uyarilar_tumu() {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
     * Uyarı/ların bilgisini bul
     * @param {(number|number[]|string|string[])} _uyari_id
     * @param {(number|string)} _tahta_id
     * @param {OptionsUyari=} _opt
     * @returns {Promise}
     */
    f_db_uyari_id(_uyari_id, _tahta_id, _opt) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Uyarı ekle
     * @param {number} _tahta_id
     * @param {UyariDBPOCO} _uyari
     * @returns {Promise}
     */
    f_db_uyari_ekle(_tahta_id, _uyari) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {(number|string)} _tahta_id 
     * @param {(number|string)} _uyari_id 
     * @returns {Promise}
     */
    f_db_uyari_kopyala(_tahta_id, _uyari_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * Uyarıyı güncelle
     * @param {number} _tahta_id
     * @param {UyariDBPOCO} _uyari
     * @returns {Promise}
     */
    f_db_uyari_guncelle(_tahta_id, _uyari) {
        return new TypeError('Uygulanması gereken metod!');
    }


    /**
     * Uyarıyı sil
     * @param {number} _tahta_id
     * @param {number} _uyari_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_uyari_sil(_tahta_id, _uyari_id, _kul_id) {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 * @abstract
 */
class UyariServisi {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === UyariServisi) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }

    /**
     * Tüm oluşturulan uyarıları çekip işleme göre tetikler.
     * @returns {Promise}
     */
    f_db_uyarilari_cek_calistir() {
        return new TypeError('Uygulanması gereken metod!');
    }
}


/**
 *
 * @abstract
 */
class Yorum {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Yorum) {
            return new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @prop {DBType} _client
         * @public
         */
        this._client = client;
    }


    /**
     * 
     * 
     * @param {number} _id 
     * @returns {Promise}
     */
    f_db_yorum_id(_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {number} tahta_id 
     * @param {number} kul_id 
     * @param {number} yorum 
     * @returns {Promise}
     */
    f_db_yorum_ekle(tahta_id, kul_id, yorum) {
        return new TypeError('Uygulanması gereken metod!');
    }

    /**
     * 
     * 
     * @param {number} tahta_id 
     * @param {number} yorum_id 
     * @returns {Promise}
     */
    f_db_yorum_sil(tahta_id, yorum_id) {
        return new TypeError('Uygulanması gereken metod!');
    }

}

module.exports = {
    Anahtar, Bolge, CopKutusu, Dikkat, Doviz, Gorev, Haber, Ihale, Ileti,
    Kalem, Kurum, Kullanici, Log, Olay, Rol, Sehir, Tahta, Teklif, Urun,
    Uyari, UyariServisi, Yorum,
    LogIslem
};

