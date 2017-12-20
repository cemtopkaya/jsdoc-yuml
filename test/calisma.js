/**
 * 
 */
class Calisma {


    /**
     * @constructor
     * @param {DBType} client
     * @returns {void}
     * */
    constructor(client) {
        if (this.constructor === Calisma) {
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
     * İhaleyi yapan kurum bilgisi değiştirildiğinde genel ihaleyi eziyoruz??
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