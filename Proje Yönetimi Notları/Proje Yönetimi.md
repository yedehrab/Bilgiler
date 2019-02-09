# Proje Yönetimi

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