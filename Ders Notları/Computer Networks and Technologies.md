# Computer Networks and Technologies <!-- omit in toc -->

- Drive üzerindeki yedeklemeye erişmek için [buraya 📂](https://drive.google.com/open?id=1rgSo9gVGWsB9WtAEfxZHv_uAdAni560a) tıklamalısın.
- Dersle alternatif bir kaynak için bu [video serisine 📺](https://www.youtube.com/playlist?list=PL1XUdfGZZ4rQ0UPDx__7W4LmeLab227vb) kitap için [bu siteye 🌐](http://www-net.cs.umass.edu/kurose-ross-ppt-6e/) bakabilirsin.

> **[RFC](https://www.ietf.org/rfc/rfc2616.txt)** her şeyin olduğu bir dökümandır.

## İçerikler <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönelebilirsin.

- [Sınav Hakkında](#s%C4%B1nav-hakk%C4%B1nda)
- [Giriş](#giri%C5%9F)
  - [Temel Terimler](#temel-terimler)
  - [Network Structure (Ağ Yapısı)](#network-structure-a%C4%9F-yap%C4%B1s%C4%B1)
  - [Network Edge](#network-edge)
    - [Access Network (Bağlantı Türleri)](#access-network-ba%C4%9Flant%C4%B1-t%C3%BCrleri)
    - [Physcial Media (Fiziksel Veri İşlemleri)](#physcial-media-fiziksel-veri-i%CC%87%C5%9Flemleri)
      - [Fiber Optik Kablo](#fiber-optik-kablo)
    - [Radya Bağlantı](#radya-ba%C4%9Flant%C4%B1)
      - [Satellite (Uydu Bağlantısı)](#satellite-uydu-ba%C4%9Flant%C4%B1s%C4%B1)
  - [Network Core](#network-core)
    - [Circuit Switching (Devre Anahtarlama)](#circuit-switching-devre-anahtarlama)
    - [Packet Switching (Paket Anahtarlama)](#packet-switching-paket-anahtarlama)
    - [Packet Yönteminin Circuit Switching Yöntemine Göre Farkı](#packet-y%C3%B6nteminin-circuit-switching-y%C3%B6ntemine-g%C3%B6re-fark%C4%B1)
  - [Internet Structure (Internet Alt yapısı)](#internet-structure-internet-alt-yap%C4%B1s%C4%B1)
    - [Interter Tiers](#interter-tiers)
    - [Paketlerin iletimi](#paketlerin-iletimi)
    - [Packet Delay & Loss (Gecikme ve Kayıp)](#packet-delay--loss-gecikme-ve-kay%C4%B1p)
    - [Packet Switching Delay](#packet-switching-delay)
    - [Internet Delay](#internet-delay)
    - [Protocol Layers (Protokol Katmanları)](#protocol-layers-protokol-katmanlar%C4%B1)
    - [Internet Protocol Stack (TCP / IP)](#internet-protocol-stack-tcp--ip)
      - [ISO / OSI Reference Model](#iso--osi-reference-model)
    - [Encapsulation (Kapsüllemi)](#encapsulation-kaps%C3%BCllemi)
  - [Network Security](#network-security)
    - [Kötü Niyetli Uygulamalar](#k%C3%B6t%C3%BC-niyetli-uygulamalar)
      - [Trojan Horse](#trojan-horse)
      - [Worm](#worm)
      - [Virus](#virus)
      - [Spyware Malwawre](#spyware-malwawre)
    - [Kötü Niyetli Saldırılar](#k%C3%B6t%C3%BC-niyetli-sald%C4%B1r%C4%B1lar)
      - [DoS](#dos)
      - [Packet Sniffing (Paket Yakalama)](#packet-sniffing-paket-yakalama)
      - [IP Spoofing (IP Aldatmacası)](#ip-spoofing-ip-aldatmacas%C4%B1)
  - [Internetin Geçmişi](#internetin-ge%C3%A7mi%C5%9Fi)
- [Application Layer (Uygulama Katmanı)](#application-layer-uygulama-katman%C4%B1)
  - [Network* Uygulaması Oluşturmak](#network-uygulamas%C4%B1-olu%C5%9Fturmak)
  - [Application Architectures (Uygulama Mimarileri)](#application-architectures-uygulama-mimarileri)
    - [Client-Server Architecture](#client-server-architecture)
    - [Pear-to-Pear Architecture (Kişiden kişiye Mimarisi)](#pear-to-pear-architecture-ki%C5%9Fiden-ki%C5%9Fiye-mimarisi)
    - [Client-Server ve Peer-to-Peer Karışımı](#client-server-ve-peer-to-peer-kar%C4%B1%C5%9F%C4%B1m%C4%B1)
  - [Processes Communicating (İletişim Sistemleri)](#processes-communicating-i%CC%87leti%C5%9Fim-sistemleri)
    - [Socket Yapısı](#socket-yap%C4%B1s%C4%B1)
    - [Adressing Processes (İşlemleri Adresleme)](#adressing-processes-i%CC%87%C5%9Flemleri-adresleme)
  - [Transport Service](#transport-service)
- [Ders 2](#ders-2)
- [Transport Servise Requirements](#transport-servise-requirements)
- [internet Transport Protocols Services](#internet-transport-protocols-services)
  - [TCP](#tcp)
  - [UDP](#udp)

## Sınav Hakkında

- 1, 2, 3, 4.1, 4.2 numaralı Chapter*'lardan sorumluyuz
- Sınav formatı karışıktır.
- 2.3 ve 2.7 dahil değildir

## Giriş

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

![network_core](imgs/network_core.png)

| Aktarım Yöntemi   | Açıklama                                               |
| ----------------- | ------------------------------------------------------ |
| Circuit Switching | Her arama için özel devre kullanılır, telefon ağı gibi |
| Packet Switching  | Veri ağa ayrık packet*'lar halinde gönderilir          |

#### Circuit Switching (Devre Anahtarlama)

Bandwitdh* parçalara bölünür, her parça sadece kendi sahibi tarafından kullanılır.

- Genellikle telefon hatlarında kullanılır
- Garantili performans sunar
- Kaynaklar paylaşılmaz, kullanılmayanlar boşta bekler (verimsiz)
- Frekans ve Zaman bölme olarak iki yöntemi vardır. (FDM, TDM)

![fdm_tdm](imgs/fdm_tdm.png)

#### Packet Switching (Paket Anahtarlama)

Hostlar* çok yüksek miktarda gelen veriyi parçalayarak yollarlar, her bir parçaya **packets** denir. Her bir packet* tam bandwitdh* kullanır ve host tarafından **tamamlanmadan** yollanmaz (storage & forward).

- Packet*'ların bir sırası yoktur
- Her bilgisayar packet* iletimi için aynı yolu kullanır
- Kaynaklar boşta kalmaz. (verimli)
- Her bir packet* $L$ kadar bit içeriyor ve transmission rate* $R$ ise transmission delay $D=L/R$ formülü ile bulunur
- Kaynak çekişmesi olabilir. (olumsuz)
  - Toplamk kaynak talebi kullanılanı aşabilir
  - Trafik sıkışıklığı, packet*'in kuyruğu ve bağlatıyı kullanmak için beklemesi
  - Packet*'lar aynı anda bir yönlendiriciye iletirilir
    - Buffer'ı yetmezse packet* kaybı olur

![packet_switching](imgs/packet_switching.png)

#### Packet Yönteminin Circuit Switching Yöntemine Göre Farkı

- Basit, arama algoritmalarının kurulmaına gerek yoktur
- Kaynaklar paylaşıldığından ağı daha fazla kullanıcı kullanabilir
- Güvenilir veri transferi ve sıkışıklık için protokellere ihtiyaç vardır.
  - Yoksa verilerinizi çalarlar 🙁

### Internet Structure (Internet Alt yapısı)

#### Interter Tiers

Her bir katman üst katmanının müşterisidir.

| Tier (Katman) | Açıklama                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------- |
| Tier-1*       | Global ISP* evrensel servis sağlayıcılarıdır. Birbirlerine bağlıdırlar Örn: Superonline, TTNet |
| Tier-2*       | Regional ISP* bölgesel servis sağlayıcılarıdır. Birbirlerine değil Tier-1*'e bağlıdırlar       |
| Tier-3*       | Son kullanıcı ağlarıdır, Tier-2*'e bağlanırlar                                                 |

![isps](imgs/ısps.png)

#### Paketlerin iletimi

Paketler tier-3*'ten tier-1*'e ardından hedef tier-3*'e doğru yol izlerler.

![packet_forwarding](imgs/packet_forwarding.png)

- Router*'lar arası verilerin yayıldığı alana **pipe** denir
- Kalın bağlantılarda (links) veri aktarımı daha fazladır
- Ince alanlara **bottleneck link** denir

![throughput](imgs/throughput.png)

#### Packet Delay & Loss (Gecikme ve Kayıp)

Packet*'lar router*'ın buffer* (arrabellek) alanında kuytukta beklerler

- Gelen packet* sayısı çıkandan fazla ise fazlalık packet*'lar buffer*'a konulur
- Buffer* yeterli alana sahip değilse packet* atılır, kayıp packet*'lar önceki node*'dan tekrar istenir

![packet_loss](imgs/packet_loss_delay.png)

#### Packet Switching Delay

| Sebep             | Açıklama                                        |
| ----------------- | ----------------------------------------------- |
| Nodel Processing  | Hatalı bitlerin kontrol edildiği aşama          |
| Queueing Delay    | Buffer*'da sıralanmanın olduğu aşama            |
| Transmisson Delay | Yayılım için packet*'ların router*'a iletilmesi |
| Propagation Delay | Router*'daki paketlerin yayılması               |

![caravan_analogy](imgs/caravan_analogy.png)
![caravan_analogy2](imgs/caravan_analogy2.png)

#### Internet Delay

Traceroute programı kaynaktan hedefe yol üzerinde bulunan router*'lardaki gecikmenin ölçümünü sağlar.

- Windows için tracert
- Linux için tracepath

![tracepath](imgs/tracepath.png)

#### Protocol Layers (Protokol Katmanları)

Ağ yapıları karmaşıktır. Bilgisayarlar, routers*, protocols* ... Katman yapısıyla:

- Karmaşık sistem parçalarının ilişkilerini tanımlamaya olanak sağlar
- Modüler olması sistemin bakımını ve güncelleştirilmesini kolaylaştırır
  - Bir katmandaki servis uygulamasını değiştirmek, sistemi etkilemez

#### Internet Protocol Stack (TCP / IP)

| Öge         | Açıklama                                                                  |
| ----------- | ------------------------------------------------------------------------- |
| application | Ağ uygulamalarını destekleyen uygulamalar                                 |
| transport   | Veri aktarımı, TCP, UDP                                                   |
| netowrk     | Kaynaktan hedefe datagram*'ları yönlendirir: IP, yönlendirme protokolleri |
| link        | Komşu ağ elemanları arasında veri transferi: PPP, Ethernet                |
| physical    | Hattaki (wire*) bitler                                                    |

![ips](imgs/ips.png)

##### ISO / OSI Reference Model

Internet protocol stack*'te bu katmanlar yoktur, gerekirse program ile uygulanır

| Ek Öğe       | Açıklama                                                                                |
| ------------ | --------------------------------------------------------------------------------------- |
| presentation | Uygulamaların verilerin anlamlarını yorumlamasını sağlar: encryption*, compression* ... |
| session      | Senkronizasyon, denetim veri değişimi ...                                               |

![iso_osi](imgs/iso_osi.png)

#### Encapsulation (Kapsüllemi)

Veri transferleri encapsulation* ile yapılamktadır.

![encopsulation](imgs/encapsulation.png)

### Network Security

Hiçbir protocol* güvenlik tedbirleri barındırmaz. 📛

#### Kötü Niyetli Uygulamalar

##### Trojan Horse

Faydalı yazılımların gizli bir parçasıdır, web sayfalarında bulunur. (Acitve-x, plugin)

##### Worm

Pasif olarak alınan nesnenin kendini çalıştırması ile bulaşır, çoğalır diğer bilgisayarlara da yayılır.

##### Virus

Alınan nesne ile bulaşır (e-posta). Nesne açıldığında virus* bulaşır, çoğalır diğer bilgisayarlara da yayılır.

##### Spyware Malwawre

Casus yazılımlar olarak da bilinir. Klavye tuş basımlarını ve girdiğimiz web sitelerinin bilgilerini çalar.

#### Kötü Niyetli Saldırılar

##### DoS

Denial of service olarak da bilinir. Saldırganların kaynağa çok fazla packet* göndererek erişim dışı bırakmasıdır.

![dos](imgs/dos.png)

##### Packet Sniffing (Paket Yakalama)

Yerel ağa bağlı bir ağ kartından *Wireshark* uygulaması ile başka packet*'ler de yakalanır

![packet_sniffing](imgs/packet_sniffing.png)

##### IP Spoofing (IP Aldatmacası)

Yanlış IP adresiyle packet* gönderilir

![ip_spoofing](imgs/ip_spoofing.png)

### Internetin Geçmişi

[Buradaki](https://drive.google.com/drive/folders/1d3JzZlHNYqeE3RryDVdAyHKTSmSykjGt) slaytın 62. sayfasına bakarak erişebilirsin.

<!-- TODO -->

## Application Layer (Uygulama Katmanı)

![network_apps](imgs/network_apps.png)

### Network* Uygulaması Oluşturmak

Farkı *end systems* (son kullanıcı sistemleri) üzeründe  çalıştırılır. Örneğin, web server yazılımı ağ üzerinden web browser yazılımı ile bağlantı kurar

> Temel ağ cihazları kullanıcı programlarını çalıştırmaz. 😔

### Application Architectures (Uygulama Mimarileri)

2 farklı yapı kullanılmaktadır; client-server, peer-to-peer (P2P)

#### Client-Server Architecture

Server Özellikleri:

- Her zaman açık
- *Static IP* (değişmeyen, kalıcı IP)

*Client* özellikleri:

- Belirlenen zamanlarda *server* ile iletişim kurabilirler
- *Dynamic IP*
- Birbiri ile iletişim kuramazlar

#### Pear-to-Pear Architecture (Kişiden kişiye Mimarisi)

- *Server* her zaman açık değildir
- Rastgele *end system*'lerle doğrudan iletişim olur (arada *server* olmaz)
- Bilgisayarlar zaman zaman bağlanabilir ve *dynamic IP* kullanabilirler

> Yönetmesi oldukça zordur.

#### Client-Server ve Peer-to-Peer Karışımı

![client_p2p](imgs/client-p2p.png)

### Processes Communicating (İletişim Sistemleri)

| İşlem          | Açıklama                                              |
| -------------- | ----------------------------------------------------- |
| Process        | Bir bilgisayarda çalışan programlar, yapılan işlemler |
| Client Process | İletişimi başlatan *process*'ler                      |
| Server Process | Bağlantıyı bekleyen *process*'ler                     |

#### Socket Yapısı

*IP* adresi ve *port* numarasından oluşan, *process*'lerin alınıp / verildiği kısma **socket** adı verilir.

- *Client* *process*'i kapının dışına koyar, *server* *process*'i kapıdan içeri alır
  - Buradaki kapı olarak adlandırılan *socket*'tir

#### Adressing Processes (İşlemleri Adresleme)

Mesajların alınması için *process*'in bir tanımlayıcısı (*identifier*) olması gerekmektedir. Tanımlayıcı:

- *IP* adresi, örn: 128.119.245.12
- *Port* numarası, örn: 80

içerir.

Örnek *port* numaraları:

- *HTTP* server: 80
- *Mail* server: 25

> Windows için `ipconfig`, linux için `ifconfig` ile IP adresinizi öğrenebilirsiniz.

### Transport Service

| Özellik        | Açıklama                                                                         |
| -------------- | -------------------------------------------------------------------------------- |
| Data Integrity | Metin aktarımlarında çok önemlidir, ses gibi verilerim aktarılmasında önemsizdir |
| Timing         | Ses aktarımlarında gecikmenin en az olması gereklidir.                           |
| Throughput     | Multimedya uygulamaları etkili olmak için daha az veri kullanmayı tercihi eder   |
| Security       | Şifreleme ve verinin değiştirilmemesini ele alır                                 |

![trans_services](imgs/trans_services.png)

## Ders 2

2.19.2019 tarihli ders

## Transport Servise Requirements

Hepsi her durum için geçerli olmaz.

- Mail gibi platformlarda veri bütünlüğü,
- Oyun gibi interaktif platformlarda zaman duyarlılığı,
- Anlık veri işlemelerinde taşınan yük önemlidir.

| Terim          | Türkçesi          |
| -------------- | ----------------- |
| throughput     | Taşınan yük       |
| data loss      | Veri kaybı        |
| time sensitive | Zaman duyarlılığı |

## internet Transport Protocols Services

> Not: *Protokolleri hiç biri (core design) güvenlik ile ilgili özellikler barındırmaz. Sonradan bunlara uyumlu olacak şekilde güvenlik sistemleri entegre edilir.*

### TCP

> RFC dökümantasyonu için [buraya](https://tools.ietf.org/html/rfc793) tıklayın.

- Reliable Transport
- Flow control
- Congestion control
- Does not provide
- Connection-oriented

### UDP

Yayıncılıkta tercih ediliyor.

- Varıp varmadığıyla ilgilenmiyor. Gitmezse tekrar yolluyor.
- Hız için tercih edilir.
- Olumsuz geri dönüş yoktur.
- Sender ile reciver asla birbirleriyle iletişimde değidir.
