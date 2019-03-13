# Jetbrains IDEs <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Kısayolar](#k%C4%B1sayolar)
  - [Metin Kısayolları](#metin-k%C4%B1sayollar%C4%B1)
  - [Denıg Kısayolları](#den%C4%B1g-k%C4%B1sayollar%C4%B1)
  - [Git Kısayolları](#git-k%C4%B1sayollar%C4%B1)
- [Git Yönetimi](#git-y%C3%B6netimi)
- [Pluginler (Eklenti gibi)](#pluginler-eklenti-gibi)
- [Faydalı Ayarlar](#faydal%C4%B1-ayarlar)
  - [Font Ayarları](#font-ayarlar%C4%B1)
  - [Interpreter (Derleyici) Değiştirme](#interpreter-derleyici-de%C4%9Fi%C5%9Ftirme)
  - [Configuration (Yapılandırma) Ayarları](#configuration-yap%C4%B1land%C4%B1rma-ayarlar%C4%B1)
  - [Ek Ortam Değişkenileri Tanımlama](#ek-ortam-de%C4%9Fi%C5%9Fkenileri-tan%C4%B1mlama)
  - [Dökümantasyon Önizle](#d%C3%B6k%C3%BCmantasyon-%C3%B6nizle)
  - [Dictionaries](#dictionaries)
  - [Spellcheck Kaldırma](#spellcheck-kald%C4%B1rma)
- [Karma Notlar](#karma-notlar)

## Kısayolar

Detaylar için [buraya](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html) tıklayabilirsin.

- `CTRL` + `CTRL` Komut çalıştırma
- `SHIFT` + `SHIFT` Kod içerisinde arama yapma
- `CTRL` + `SHUFT` + `ALT` + `L` Açık olan dosyayı formatlama / biçimlendirme
- `CTRL` + `ALT` + `L` Tüm kodu otamatik derleme
- `CTRL` + `ALT` `O` Import'ları optimize etme

### Metin Kısayolları

- `CTRL` + `X` Satırı kesme
- `CTRL` + `D` Satırı hemen altına kopyalam (dublicate)
- `CTRL` + `SHIFT` + `/` Yorum satırına çevirme

### Denıg Kısayolları

- `ALT` + `F8` Dobug modunda iken kod derleme arayüzü

### Git Kısayolları

- `CTRL` + `K` Commit
- `CTRL` + `SHIFT` + `K` Push

## Git Yönetimi

- `JetBrain IDE` - `Check out from Version Control` - `Git`
  - *Url:* Proje URL'idir. (Adress çubuğunda yazan metin)
  - *Directory:* Proje yolunudur. (projenin/konumu)
- `Test` & `Clone`

## Pluginler (Eklenti gibi)

Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

- `CTRL` + `ALT` + `S` kısmından `Plugin` sekmesinde istediğiniz iklentileri bulabilirsiniz.

## Faydalı Ayarlar

### Font Ayarları

- `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Font` kısmında
  - *Font:* `Consolas`
  - *Size:* `12`
  - *Line spacing:* `1.0`

### Interpreter (Derleyici) Değiştirme

Sanal environment gibi durumlarda system yerine onların derleyicisini kullanma

- `CTRL` + `ALT` + `S` yaptıktan sonra `Project: <project name> | Project Interpreter` sayfasında `Ayarlar Butonu | Add` kısmına basarak derleyicinizi değiştirebilirsiniz.

### Configuration (Yapılandırma) Ayarları

> Projenizi IDE üzerinde çalıştırabilmek için bu ayarı yapmanız gerekmekte.

- Sağ üst kısımdaki yeşin `Run` butonunun solundaki alandan `Edit Configuration`ı seçin.
- Sol üst köşedeki `+` butonuna basın
- Derlemek istediğiniz dili | uygulamayı seçin (*Örn: Python | PyCharm için*)
- Dosya derleyeceksiniz *Script* kısmına `dosyanın yolunu` yazın.
- *Python Interpreter* kısmında yorumlayıcıyı seçin, ayarlanmadıysa `Interpreter (Derleyici) Değiştirme` aşamasında (üst aşamada) nasıl ayarlayacağınıza bakabilirsiniz.

### Ek Ortam Değişkenileri Tanımlama

- Üst sekmeden `Run` kısmına gelin
- `Edit Configuration` yazısına tıklaıyn
- Yapılandırma ayarınızı seçin
  - Yoksa `+` ile yeni bir tane oluşturun
- `Environment Variables` kısmında en sağdaki dosya simgesine tıklayın
- `+` ile yeni ortam değişkeninizi ekletin

> Windows için cmd ortam değişkeni ayarlama yapısı `set name=value;value` şeklindedir.

### Dökümantasyon Önizle

Fareyle kodun üzerinize geldiğiniz *açıklamalarını* ve dökümantasyonlarını gösterecektir.

- `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | General | Other` başlığı altında `Show quick documentation on mouse move` kısmını seçin ve süreyi `500` yapın.

### Dictionaries

Dillere özgü sözlükleri indirmek için [buraya](https://drive.google.com/open?id=1UAGLGvwv_zLBzH7zH1oGRvYhzzP67M4k) tıklayabilirsin.

- `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Spelling | Dictionaries | Custom Dictionaries` başlığı altında `+` butonuna basıp `.dic` uzantılı sözlük dosyanı ekleyin.

> Sözlüğün çalışabilmesi için `hunspell` plugin'ini indirmeniz gerekmekte. Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

### Spellcheck Kaldırma

- `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Inspection | Spelling | Typo | Process comments` ile yorum satırlarını kontrol etmesini kaldırabilirsin.

## Karma Notlar

- [Şifre değiştirme](https://stackoverflow.com/a/37959112)
- [DataGrip](https://www.jetbrains.com/datagrip/)

> Sayfa başındaki işaretçilere yönlenmek için [buraya](#Y%C3%B6nlendirme) tıklayabilirsin.