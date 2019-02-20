# Proje Yönetimi <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Model View Controller Yapısı](#model-view-controller-yap%C4%B1s%C4%B1)
  - [Yapı düzenleme sırası](#yap%C4%B1-d%C3%BCzenleme-s%C4%B1ras%C4%B1)
- [Proje Oluşturma & Güncelleme Yapısı](#proje-olu%C5%9Fturma--g%C3%BCncelleme-yap%C4%B1s%C4%B1)
  - [Branch Prefix (Ön ek)](#branch-prefix-%C3%B6n-ek)
  - [Branch Naming Convention (Yazım kuralı)](#branch-naming-convention-yaz%C4%B1m-kural%C4%B1)
  - [Örnek Kullanım](#%C3%B6rnek-kullan%C4%B1m)
- [Faydalı Yazılımlar](#faydal%C4%B1-yaz%C4%B1l%C4%B1mlar)
  - [Yönetim Uygulamaları & Siteleri](#y%C3%B6netim-uygulamalar%C4%B1--siteleri)
  - [Web programlama](#web-programlama)
- [Değişken İsimlendirmeleri](#de%C4%9Fi%C5%9Fken-i%CC%87simlendirmeleri)

## Model View Controller Yapısı

Ek kaynak için [buraya](https://blog.koddit.com/yazilim/mvc-nedir-gercek-orneklerle-mvc-nedir-anlayalim/) tıklayabilirsin.

> Temel amaç *model* ile *view* katmanını ayırmaktır. Bu sayede tasarımı değiştireceğimiz zaman yapısal kodlarla uğraşmak zorunda kalmayız. (*model: back-end view: front-end denebilir*)

| Yapı Ögesi | Özet | Örnek |
|:------------:|:-------|:------|
| Model | Veriler ile ilgili işlemler | Veritabanına veri kaydedilmesi ve veritabanından alınması |
| View | Kullanıcıya görünen kısım | Anasayfa gibi web sayfaları |
| Controller | Model ile View arası bağlantı | Verinin web sayfasına aktarılması |

### Yapı düzenleme sırası

* **Model** kısmı düzenlenir.
* **Controller** üzerinde bağlantılar oluşturulur.
* **View** ile kullanıcıya sunulur.

## Proje Oluşturma & Güncelleme Yapısı

> Globallik adına ingilizce dili tercih edilmektedir.

* Her yeni ekleme için onu tanımlayan bir **branch** oluşturulur.
* **Merge Request** ile *master branch* kısmına eklenme talebi oluşturulur.
* Yönetici, talebi kontrol edip, onaylayarak projeye katar.

### Branch Prefix (Ön ek)

Temel yapı: `konu` / `detay veya dosya`

* `feature/<detail>` Yenilikler
* `bugfix/<detail>` Hata çözümleri
* `sf/<detail>` Tasarım değişikleri (Store front-end)

> Ardından merge request ile development ortamına bağlanma isteği oluşturulur.

### Branch Naming Convention (Yazım kuralı)

* Camel Case
* `<prefix>/thisIsExampleDetail`

### Örnek Kullanım

* sf/newBannerRow
* feature/excelPhp

## Faydalı Yazılımlar

### Yönetim Uygulamaları & Siteleri

| Uygulama İsmi   |      Açıklama      |
|-----------------|--------------------|
| [Github](https://github.com/) & [Gitlab](https://gitlab.com) | Kaynak kod yöneticisi |
| [Asana](https://asana.com/) | Proje yönetimi & Yapılacaklar Aşaması & İş aktarımı / eşleme |
| [Slack](https://slack.com/) | Takım yönetimi |

### Web programlama

| Uygulama İsmi   |      Açıklama      |
|-----------------|--------------------|
| [Git](https://git-scm.com/downloads) | Kaynak kod yönetimi |
| [PhpStorm](https://www.jetbrains.com/phpstorm/download/#section=windows) | Çok fonksiyonel PHP IDE |
| [Xammpp](https://www.apachefriends.org/tr/download.html) | Php için sunucu, veri tabanı vs. işlemleri sunan platform |
| [Nodejs](https://nodejs.org/en/download/) | Javascript kodlarını makine koduna çevir. Js'i sunucuda kullanma |
| [MySQL](https://www.mysql.com/downloads/) | Veri tabanı yönetimi |
| [Composer](https://getcomposer.org/download/) | Php paket yönetimi (NPM) | Nodejs) gibi |

## Değişken İsimlendirmeleri

|       İsim      |      Açıklama                                              |
|-----------------|------------------------------------------------------------|
| `NAME`_PREFİX   | Veri tabanı ön eki. *Örn: DB_PREFIX, BRANCH_PREFIX*        |
| Flag            | Checkbox gibi boolean değerleri tutan değişkenlerin adıdır |
|  |  |