# Computer Networks and Technologies

Dersle alternatif bir kaynak için bu [video serisine 📺](https://www.youtube.com/playlist?list=PL1XUdfGZZ4rQ0UPDx__7W4LmeLab227vb) bakabilirsin.

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
