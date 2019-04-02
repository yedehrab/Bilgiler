# Computer Networks and Technologies

- Drive üzerindeki yedeklemeye erişmek için [buraya 📂](https://drive.google.com/open?id=1rgSo9gVGWsB9WtAEfxZHv_uAdAni560a) tıklamalısın.
- Dersle alternatif bir kaynak için bu [video serisine 📺](https://www.youtube.com/playlist?list=PL1XUdfGZZ4rQ0UPDx__7W4LmeLab227vb) kitap için [bu siteye 🌐](http://www-net.cs.umass.edu/kurose-ross-ppt-6e/) bakabilirsin.

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

Youtube üzerindeki eğitim ve slatylar hakkında alınan notlarım.

### Temel Terimler

| Terim             | Açıklama                                                      |
| ----------------- | ------------------------------------------------------------- |
| ISP               | İnternet servis sağlayıcıları                                 |
| Packets           | İnternet üzerinde gönderilen veriler                          |
| Protocols         | Packet* aktarım kuralları ve hiyerarşisi                      |
| Routers ve Switch | Packet*'ların yönlendirilmesini sağlarlar                     |
| Client            | Ağa bağlandığımzı araç (bilgisayarımız)                       |
| Server            | Ağ hizmetini sunan, sunucu                                    |
| Host              | End system, son server* ya da client*                         |
| RFS, IETF         | İnternet standartları                                         |
| Stream            | Veri akışı                                                    |
| Upstream          | Bizden internete stream*                                      |
| Downstream        | İnternetten bize stream*                                      |
| Bandwitdh         | Bant genişliği, saniye aktarılan bit (1sn de olan streaming*) |
| Transmission rate | Saniyede aktarılan bit                                        |

### Network Structure (Ağ Yapısı)

| Terim                           | Açıklama                                                    |
| ------------------------------- | ----------------------------------------------------------- |
| Network Edge                    | Ağdaki uç noktaları ele alır (bilgisayarlar ve uygulamalar) |
| Access networks, physical media | Kablolu ve kablosuz iletişim bağlantıları                   |
| Network Core                    | Birbirine bağlı router'lar ve internet (network of network) |

- Edge router: İnternete ilk adımın atıldığı yönlendiriciler (routers)

![network sturcture](imgs/network%20structures.png)

### Network Edge

Bizden internete olan gerçekleşen adımları ele alır.

| Yöntem          | Açıklama                                        | Örnek             |
| --------------- | ----------------------------------------------- | ----------------- |
| Hosts System    | Host*'lar arası iletişim                        | Web, email        |
| Client / Server | Client* istekte bulunur, server* karşılık verir | Web browsers      |
| Peer to peer    | Neredeyse hiç server* kullanılmaz               | Skype, BitTorrent |

#### Access Network (Bağlantı Türleri)

- Dial Up: Telefon çalışırken modem, modem çalışırken telefonun çalışmadığı eski bir sistem.
- DSL: Splitter* ile telefon ve internet eş zamanlı kullanabilmekte.
  - ADSL: Asimetrik anlamındadır, download ve upload hızı farklı olur.
- Wireless LAN: Ev içerisindeki kablasuz ağlar: WiFi
- Wide-Area wireless acces: Mobil operatörler tarafından sunulan ağlar: 3G, 4G, LTE

#### Physcial Media (Fiziksel Veri İşlemleri)

Fiziksel verilerin (bit*lerin) aktarılmasını ele alır.

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

### Network Core

Birbirine bağlı çok sayıda router*'dan oluşur. Network of network olarak da tabir edilen interneti ele alır.

| Aktarım Yöntemi   | Açıklama                                               |
| ----------------- | ------------------------------------------------------ |
| Circuit Switching | Her arama için özel devre kullanılır, telefon ağı gibi |
| Packet Switching  | Veri ağa ayrık packet*'lar halinde gönderilir          |

### Packet Switching (Paket Anahtarlama)

Host

## Ders1 Bölüm2: Packet, Delay and

Host* uygulama katmanındaki verileri ufak packet'lara* çeviriyor ve router* yardımıyla gitmesi gereken yer bulunup gönderiliyor ve her packet* tam kapasitede gönderiliyor.