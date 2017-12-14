
/**
 * Test sınıf
 */
class Ihale {

    /**
     * @param {DBType} client
     * */
    constructor(client) {
        if (this.constructor === Ihale) {
            throw new TypeError('Abstract sınıflardan nesne yaratılamaz!');
        }
        /**
         * Protected gibi düşünülebilir
         * @type {DBType}
         * @public
         */
        this._client = client;
    }


    /**
     * Tahtada değiştirilen ihale yeniden orjinal haline döndürülmek isteniyor
     * @param _ihale_id
     * @param _tahta_id
     * @returns {*} */
    f_db_ihale_orjinale_don(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Silinen ihaleleri getirir
     * @param {number|string} _tahta_id
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {*}
     */
    f_db_ihale_silinen_tumu(_tahta_id, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Silinen ihale toplamını getirir
     * @param _tahta_id
     * @returns {*}
     */
    f_db_ihale_silinen_toplami(_tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Silinen ihale id lerini getirir
     * @param _tahta_id
     * @param _sayfalama
     * @returns {*}
     */
    f_db_ihale_silinen_idler(_tahta_id, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı sildiği kayıdı geri almak isteyebilir.
     * @param _ihale_id
     * @param _tahta_id
     * @returns {*}
     */
    f_db_ihaleyi_silinenden_cikar(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtalar arasında özel ihalelerin paylaşılması sağlanır.
     * @param {{From:integer, To:integer[], Ids: integer[]}} _paylas
     * @returns {*}
     */
    f_db_paylas(_paylas) { throw new Error('Uygulanması gereken metod!'); }

    f_db_tahta_ihale_gruplama(_tahta_id, _kurum_id, _onay_durum_id, _para_id, _tarih1, _tarih2) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İndexlenmiş (tahtanın anahtarına uygun) ihaleleri tarih aralığında göre indexlenmiş haliyle buluyoruz
     * @param {number|string} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale} _opts
     * @returns {*}
     */
    f_db_indexli_tarihine_gore_grupla(_tahta_id, _tarih1, _tarih2, _opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihaleleri tarihlerine göre gruplaması sağlanır
     * Tarih aralığı verilmezse tüm ihaler verilirse tarih aralığındaki ihaleler tarih ve toplamlarına göre array olarak döner
     * @param {number} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale} _opts
     * @returns {*}
     */
    f_db_tarihine_gore_grupla(_tahta_id, _tarih1, _tarih2, _opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihaleleri tarihlerine göre listeler
     * Tarih aralığı verilmezse tüm ihaler verilirse tarih aralığındaki ihaleler array olarak döner
     * @param {number} _tahta_id
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {OptionsIhale=} _opts
     * @returns {*}
     */
    f_db_tumu_tarih_araligindakiler(_tahta_id, _tarih1, _tarih2, _opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın görebileceği ihale idlerini tarihlerine göre listeler
     * Tarih aralığı verilmezse tüm ihale idler verilirse tarih aralığındaki ihale idler array olarak döner
     * @param {number|string}  _tahta_id
     * @param {number|string}  _tarih1
     * @param {number|string}  _tarih2
     * @param {boolean=} _tariheGoreDesc=false
     * @param {URLQueryPOCO_Sayfalama=} _sayfalama
     * @returns {*}
     */
    f_db_idler_aktif_tarih_araligindakiler(_tahta_id, _tarih1, _tarih2, _tariheGoreDesc, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }


    /**
         *
         * @typedef IslemTipi
         * @prop {string} EKLE
         * @prop {string} GUNCELLE
         * @prop {string} SIL
         */

    /**
     *
     * @param {string} _anahtar
     * @param {string|number|object} _nesne
     * @param {string|number=} _kul_id
     * @param {IslemTipi} _islem_tipi
     * @returns {*}
     */
    f_db_log_ekle(_anahtar, _nesne, _kul_id, _islem_tipi) {
        throw new TypeError('Uygulanması gereken metot!');
    };

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
    * @param {(number|string|number[]|Array.<string>)=} op1
    * @param {number|string|number[]|string[]} [op2]
    * @param {number|string|number[]|string[]} [opdef=2]
    * @param {number|string|number[]|string[]} man1
    * @param {URLQueryPOCO} _urlQuery
    * @param {OptionsIhale} _opts
    * @returns {LazyLoadingResponsePOCO}
    */
    f_db_tahta_ihale_rapor_bilgileri(_tahta_id, _kurum_id, _urun_id, _urlQuery, _opts) { throw new Error('Uygulanması gereken metod!'); }


    /**
     * özel tip adı
     * @typedef IhaleUsulHede işte sana tip def
     * @property {string} Adi adı bilsi 
     * @property {number} Id id bilgisi
     */

     
    /**
     * İhale dünyasındaki kayıtları eklememizi sağlar(apiden usuller.json dan veri alınır)
     * @param {IhaleUsulHede[]} _ihale_usulleri
     * @returns {number}
     */
    f_db_ihale_usullerini_ekle(_ihale_usulleri) { throw new Error('Uygulanması gereken metod!'); }


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
    prom(_tahta_id, _urun_id, _onay_durum_id, _parabirim_id, _tarih1, _tarih2) { throw new Error('Uygulanması gereken metod!'); }
    

    /**
     * İhale usullerini döner
     * @returns {*}
     */
    f_db_ihale_usul_tumu() { throw new Error('Uygulanması gereken metod!'); }

    /**
     * 
     * @param {number} _tahta_id 
     * @param {number} _ihale_id 
     * @param {SayfalamaPOCO} _sayfalama
     * @returns {} 
     */
    f_db_teklif_idleri(_tahta_id, _ihale_id, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihaleye ait teklifleri bulur
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     * @param {URLQueryPOCO} _arama
     * @returns {Promise}
     */
    f_db_teklif_tumu(_tahta_id, _ihale_id, _arama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhale/leri yapan kurum bilgisini döner
     * @param {number|number[]|string|string[]} ihale_id
     * @returns {*}
     */
    f_db_yapan_kurum(ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale bilgilerinin kurum bilgilerini getiriyoruz
     * @param {Ihale[]|Ihale} _ihaleler
     * @returns {*}
     */
    f_db_ihaleyi_yapan_kurum_kontrol(_ihaleler) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhaleyi yapan kurum bilgisi değiştirildiğinde genel ihaleyi eziyoruz??
     * @param ihale_id
     * @param kurum_id
     * @returns {*}
     */
    f_db_yapan_kurum_guncelle(ihale_id, kurum_id) { throw new Error('Uygulanması gereken metod!'); }

    f_db_kurum_tumu(tahta_id, ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    f_db_guncellendi_teklif_kontrol(_tahta_id, _eskiIhale_id, _yeniIhale_id) { throw new Error('Uygulanması gereken metod!'); }

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
    f_db_kalem_tumu(ihale_id, tahta_id, opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhale ile ilişkili kalem id lerini döner (temp setine ekler> TEMP + ":" + TAHTA + ":" + _tahta_id + ":" + IHALE + ":" + _ihale_id + ":" + KALEM)
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @returns {*}
     */
    f_db_aktif_kalem_idler(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhale ile ilişkili kalemleri sayfalama yapısına göre getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     * @param {object} _arama
     * @returns {*}
     */
    f_db_kalemleri_by_page(_ihale_id, _tahta_id, _arama) { throw new Error('Uygulanması gereken metod!'); }

    f_db_sbihale_id(sb_ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihalenin şehrini getirir
     * @param {number|string|number[]|string[]} _sehir_id
     * @returns {SehirPOCO}
     */
    f_db_ihale_sehri(_sehir_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale veya ihalelerin şehir bilgilerini de ekleyerek geri döner
     * @param {Ihale|Ihale[]} _ihaleler
     * @returns {Ihale|Ihale[]}
     */
    f_db_ihale_sehir_kontrol(_ihaleler) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihalenin bölgesini getirir
     * @param {number|string|number[]|string[]} _bolge_id
     * @returns {*}
     */
    f_db_ihale_bolgesi(_bolge_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın id den bilgilerini getirir
     * @param {number|number[]|string|string[]} _ihale_id
     * @param {number} _tahta_id
     * @param {OptionsIhale=} _opts
     * @returns {*}
     */
    f_db_id(_ihale_id, _tahta_id, _opts) { throw new Error('Uygulanması gereken metod!'); }

    f_db_tumu(_tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtaya ait ihaleleri varsa idleri döner.
     * Tahtanın görebileceği tüm ihale idlerini döner(silinmeyen,gizlenmeyen,ezilmeyen yani aktifler)
     * (özel ∪ genel) - (silinen ∪ gizlenen ∪ ezilen)
     * smembers tahta:401:ihale
     * @param {number} _tahta_id
     * @returns {*}
     */
    f_db_tahta_ihale_idler_aktif(_tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tüm tahtalardan görülebilecek genel ihaleler listesi
     * @param {OptionsIhale} _opts
     * @returns {*}
     */
    f_db_tumu_genel(_opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İki tarih aralığında yapılma tarihine göre tahta ile ilişkili tüm aktif ihaleleri çeker
     * @param tarih1_gettime
     * @param tarih2_gettime
     * @param _tahta_id
     * @param _opts
     * @param _sayfalama
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_yapilmaTarihi_Araliginda(tarih1_gettime, tarih2_gettime, _tahta_id, _opts, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    f_db_sistemeEklenmeTarih_Araliginda(tarih1_gettime, tarih2_gettime, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın ihalelerini sıralayarak ve sayfalayarak döner.
     * Tahtanın ihalelerini çek,
     * Sıralama türüne göre ihalelerin Sorted Set indeksiyle kesiştir
     * Sıralama yönüne göre(asc/desc)
     * Sayfalama özelliklerine göre
     * @param _tahta_id
     * @param _arama
     * @param _opts
     * @returns {Promise|LazyLoadingResponse}
     */
    f_db_tahta_ihale_idler_sort_page(_tahta_id, _arama, _opts) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Ihale kaydedilir ve db'de oluşan şekliyle geri döner
     * @param {IhaleESPOCO} es_ihale
     * @param {IhaleDBPOCO} db_ihale
     * @param {number} kurum_id
     * @param {number} tahta_id
     * @param {number} _kul_id
     * @returns {Promise}
     */
    f_db_ekle(es_ihale, db_ihale, kurum_id, tahta_id, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    f_db_tahta_ihale_guncelle(es_ihale, db_ihale, tahta_id, kurum_id, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihale dünyasında iptal edilen ihale idlerini getirir
     * @returns {*}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhale_idler() { throw new Error('Uygulanması gereken metod!'); }

    /**
     * iptal edilen ihale idlerini ihale tarihi aralığında istenirse sayfalı şekliyle getirir(ihale tarihine göre tersten sıralanmış haliyle)
     * @param _tarih1
     * @param _tarih2
     * @param _sayfalama
     * @returns {Promise}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhale_idlerTariheGore(_tarih1, _tarih2, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * iptal edilen ihale idlerini ihale tarihi aralığındaki toplamını getirir(toplam iptal edilen ihale sayısı)
     * @param _tarih1
     * @param _tarih2
     * @returns {Promise}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhaleToplamiTariheGore(_tarih1, _tarih2) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhale dünyasında iptal edilen ihaleleri tarih aralığına göre getirir
     * @param _tarih1
     * @param _tarih2
     * @param _sayfalama
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_ihaleDunyasinda_iptalEdilenIhalelerTariheGore(_tarih1, _tarih2, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Genel tabloya ihale ekleme.
     * @param _ihale_id yeni oluşturacaksan 0 varolanı redise eklemeye çalışıyorsak 0 dan farklı bir değer gelir
     * @param _es_ihale
     * @param _db_ihale
     * @param _kullanici_id
     * @returns {*}
     */
    f_db_ekle_genel(_ihale_id, _es_ihale, _db_ihale, _kullanici_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Geneldeki ihaleyi güncelliyoruz. Provider: IhaleDunyasi.net
     * @param _es_ihale
     * @param _db_ihale
     * @param _kul_id
     * @returns {*}
     */
    f_db_guncelle_ihaleDunyasindan(_es_ihale, _db_ihale, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Genele ihale ekliyoruz. Provider: IhaleDunyasi.net
     * @param _es_ihale
     * @param _db_ihale
     * @param _kul_id
     * @returns {*}
     */
    f_db_ekle_ihaleDunyasindan(_es_ihale, _db_ihale, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihale dünyasından çekilen ihaleleri redis2 ye ekliyoruz
     * @param {IhaleESPOCO} _es_ihale
     * @returns {*}
     */
    f_db_ekle_ihaleDunyasindan2(_es_ihale) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Elastic den çekilen ihale bilgisini redise ekler
     * @param _ihale_id
     * @param _es_ihale
     * @param _db_ihale
     * @param _kul_id
     */
    f_db_ekle_elasticten(_ihale_id, _es_ihale, _db_ihale, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    f_db_tahta_ihale_sil(_ihale_id, _tahta_id, _kul_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale_id genel ihale setinde ise 1 değilse 0 döner
     * @param {number} _ihale_id
     */
    f_db_genel_kontrol(_ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * ihalenin satırlarını yenisine kopyala
     * önce geneldekileri
     * sonra tahtaya eklenmiş özel kalemleri varsa tablonun adını yeni ihale_id si ile değiştir
     *
     * satırın onay durumlarını düzenliyoruz
     * @param {number} tahta_id
     * @param {number} yeni_ihale_id
     * @param {number} orj_ihale_id
     * @returns {*}
     */
    f_db_guncellendi_satir_kontrol(tahta_id, yeni_ihale_id, orj_ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada gizlediği ihaleyi tekrardan listede görmek isterse geri alıyoruz
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     */
    f_db_tahta_ihale_gizlenen_sil(_tahta_id, _ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada görmek istemediği ihaleleri gizleyebilir, böylece listede gizlenenler görünmeyecektir.
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     */
    f_db_tahta_ihale_gizlenen_ekle(_tahta_id, _ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen ihale idlerini getirir
     * @param {number} _tahta_id
     */
    f_db_tahtanin_gizlenen_ihale_idleri(_tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen ihalelerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     */
    f_db_tahtanin_gizlenen_ihaleleri(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen kalem idlerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     */
    f_db_tahtanin_gizlenen_kalem_idleri(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın gizlenen kalemlerini getirir
     * @param {number} _ihale_id
     * @param {number} _tahta_id
     */
    f_db_tahtanin_gizlenen_kalemleri(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada takip ettiği ihalelerden çıkartabilir
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     */
    f_db_tahta_ihale_takip_sil(_tahta_id, _ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Kullanıcı tahtada takip ettiği ihaleleri belirleyebilir.
     * @param {number} _tahta_id
     * @param {number} _ihale_id
     */
    f_db_tahta_ihale_takip_ekle(_tahta_id, _ihale_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Genel ihale id takip edilenler setinde ise 1 değilse 0 döner
     * @param {number} _tahta_id
     * @param {IhalePOCO} _ihale
     * @returns {*}
     */
    f_db_takipte_mi(_tahta_id, _ihale) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Gelen ihale bilgilerinin takipte olup olmadığını belirtiyoruz
     * @param {number} _tahta_id
     * @param {Array|Ihale} _ihaleler
     * @returns {*}
     */
    f_db_takip_kontrol(_tahta_id, _ihaleler) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takipteki ihale idlerini getirir
     * @param {number} _tahta_id
     * @param {string} _sonucAnahtari
     * @param {number} _tarih1
     * @param {number} _tarih2
     * @param {boolean} _desc
     * @param {URLQueryPOCO_Sayfalama} _sayfalama
     */
    f_db_tahtanin_takipteki_ihale_idleri(_tahta_id, _sonucAnahtari, _tarih1, _tarih2, _desc, _sayfalama) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Tahtanın takipteki ihalelerini getirir
     * @param {number|integer} _tahta_id
     */
    f_db_tahtanin_takipteki_ihaleleri(_tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhalenin takipteki kalem idlerini getirir
     * @param _ihale_id
     * @param _tahta_id
     * @returns {*}
     */
    f_db_tahtanin_takipteki_kalem_idleri(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * İhalenin takipteki kalemlerini buluyoruz
     * @param _ihale_id
     * @param _tahta_id
     * @returns {LazyLoadingResponsePOCO}
     */
    f_db_ihalenin_takipteki_kalemleri(_ihale_id, _tahta_id) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Elastic de kayıtlı ihale idlerini çekip elastic:ihale setine ekler
     */
    f_db_elastic_ihale_idlerini_cek() { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Rediste olan elastic de olmayan ihale kayıtlarını elastic e ekliyoruz
     * @returns {*}
     */
    f_db_ihale_ekle_elastic() { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Elastic de kayıtlı ihale idlerini çekip elastic:ihale setine ekler
     * @param _ay
     * @param _yil
     * @returns {*}
     */
    f_db_elastic_ihaleleri_cek(_ay, _yil) { throw new Error('Uygulanması gereken metod!'); }

    /**
     * Elastic de kayıtlı ihaleleri redise ekler
     * @returns {Promise}
     */
    f_db_ihale_ekle_elastic_to_redis(_ay, _yil) { throw new Error('Uygulanması gereken metod!'); }

}

var i = new Ihale()
i.prom()