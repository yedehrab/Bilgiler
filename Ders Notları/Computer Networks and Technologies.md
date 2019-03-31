# Computer Networks and Technologies

Dersle alternatif bir kaynak için bu [video serisine 📺](https://www.youtube.com/playlist?list=PL1XUdfGZZ4rQ0UPDx__7W4LmeLab227vb) kitap için [bu siteye 🌐](http://www-net.cs.umass.edu/kurose-ross-ppt-6e/) bakabilirsin.

> **[RFC](https://www.ietf.org/rfc/rfc2616.txt)** her şeyin olduğu bir dökümandır.

## Ders 2

2.19.2019 tarihli ders

### Transport Servise Requirements

Hepsi her durum için geçerli olmaz.

- Mail gibi platformlarda veri bütünlüğü,
- Oyun gibi interaktif platformlarda zaman duyarlılığı,
- Anlık veri işlemelerinde taşınan yük önemlidir.

| Terim          | Türkçesi          |
| -------------- | ----------------- |
| throughput     | Taşınan yük       |
| data loss      | Veri kaybı        |
| time sensitive | Zaman duyarlılığı |

### internet Transport Protocols Services

> Not: *Protokolleri hiç biri (core design) güvenlik ile ilgili özellikler barındırmaz. Sonradan bunlara uyumlu olacak şekilde güvenlik sistemleri entegre edilir.*

#### TCP

> RFC dökümantasyonu için [buraya](https://tools.ietf.org/html/rfc793) tıklayın.

- Reliable Transport
- Flow control
- Congestion control
- Does not provide
- Connection-oriented

#### UDP

Yayıncılıkta tercih ediliyor.

- Varıp varmadığıyla ilgilenmiyor. Gitmezse tekrar yolluyor.
- Hız için tercih edilir.
- Olumsuz geri dönüş yoktur.
- Sender ile reciver asla birbirleriyle iletişimde değidir.

## Bilgisayar Ağları

Youtube üzerindeki eğitim hakkında alınan notlar.

- Bandwidth: Bant genişliği saniye saniyede aktarılan bit (1sn de akan veri)
  - Transmission rate: Saniyede aktarılan bit
- Router ve Switch: Paketlerin yönelendirilmesini sağlar
- Protokols: Packet* aktarım kuralları ve hiyerarşisi
- Host: End system, son sunucu olur (client ve server).
- Server: Sunucu
- Stream: Akış
- Upstream: Bizden internete veri akışı
- Downstream: İnternetten bize veri akışı

### Ders1 Bölüm1: Internet, Protocols, Hosts

#### Ağ Yapısı

| Terim                           | Açıklama                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| Network Edge                    | Host*                                                       |
| Access networks, physical media | İnternete ilk adımın atıldığı yere kadar ki kısım           |
| Network Core                    | Birbirine bağlı router'lar ve internet (network of network) |

- Edge router: İnternete ilk adımın atıldığı yönlendiriciler (routers)

![network sturcture](imgs/network%20structures.png)

#### Bağlantı Türleri

- Dial Up: Telefon çalışırken modem, modem çalışırken telefonun çalışmadığı eski bir sistem.
- DSL: Splitter* ile telefon ve internet eş zamanlı kullanabilmekte.
  - ADSL: Asimetrik anlamındadır, download ve upload hızı farklı olur.
- Wireless LAN: Ev içerisindeki kablasuz ağlar: WiFi
- Wide-Area wireless acces: Mobil operatörler tarafından sunulan ağlar: 3G, 4G, LTE

#### Veri İletimi

- Hostlar* çok yüksek miktarda gelen veriyi parçalayarak yollarlar, her bir parçaya **packets** denir.
- Kablo yapısı TP (twisted pair) iç içe sarmal 2 kablodur.
- Guided: yönetimli (kablo vs ile), unguided: dağınık olarak yayılan (radyo dalgaları) verilerdir.

##### Fiber Optik Kablo

- Cam içerisinde bilgiler ışık yoluyla aktarılır
- Işığın farklı frekanslarıyla birden fazla bilgi yollanabilir
- Işık hızıyla iletilir
- Elektromanyetik gürültüden etkilenmez
- Veri kaybı çok düşüktür

#### Radya Bağlantı

- LAN (WiFi)
- Wide-area (geniş alan bağlantıları) 3G, 4G

##### Satellite (Uydu Bağlantısı)

- Gecikmesi çok fazladır. (250ms)

## Ders1 Bölüm2: Packet, Delay and

Uç sunucu* uygulama katmanındaki verileri ufak paketlere* çeviriyor ve yönlendiriciler* yardımıyla gitmesi gereken yer bulunup gönderiliyor ve her paket tam kapasitede gönderiliyor.

### Paket Anahtarlama (Packet-Switching)

| Yöntem          | AÇıklama                                                                             |
| --------------- | ------------------------------------------------------------------------------------ |
| store and forwardt | Yönlendirici* 10bitlik paketi yönelendirmek için hepsini bekler ve öyle yönlendirir. |