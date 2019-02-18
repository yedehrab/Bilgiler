# Jetbrains IDEs

* [DataGrip](https://www.jetbrains.com/datagrip/)

## Kısayolar

Detaylar için [buraya](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html) tıklayabilirsin.

* `CTRL` + `CTRL` Komut çalıştırma
* `SHIFT` + `SHIFT` Kod içerisinde arama yapma
* `CTRL` + `SHUFT` + `ALT` + `L` Açık olan dosyayı formatlama / biçimlendirme
* `CTRL` + `SHUFT` + `L` Tüm kodu otamatik derleme

### Metin Kısayolları

* `CTRL` + `X` Satırı kesme
* `CTRL` + `D` Satırı hemen altına kopyalam (dublicate)
* `CTRL` + `SHIFT` + `/` Yorum satırına çevirme

### Denıg Kısayolları

* `ALT` + `F8` Dobug modunda iken kod derleme arayüzü

### Git Kısayolları

* `CTRL` + `K` Commit
* `CTRL` + `SHIFT` + `K` Push

## Git Yönetimi

* `JetBrain IDE` - `Check out from Version Control` - `Git`
  * *Url:* Proje URL'idir. (Adress çubuğunda yazan metin)
  * *Directory:* Proje yolunudur. (projenin/konumu)
* `Test` & `Clone`

## Pluginler (Eklenti gibi)

Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

* `CTRL` + `ALT` + `S` kısmından `Plugin` sekmesinde istediğiniz iklentileri bulabilirsiniz.

## Faydalı Ayarlar

### Font Ayarları

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Font` kısmında
  * *Font:* `Consolas`
  * *Size:* `12`
  * *Line spacing:* `1.0`

### Interpreter (Derleyici) Değiştirme

Sanal environment gibi durumlarda system yerine onların derleyicisini kullanma

* `CTRL` + `ALT` + `S` yaptıktan sonra `Project: <project name> | Project Interpreter` sayfasında `Ayarlar Butonu | Add` kısmına basarak derleyicinizi değiştirebilirsiniz.

### Configuration (Yapılandırma) Ayarları

> Projenizi IDE üzerinde çalıştırabilmek için bu ayarı yapmanız gerekmekte.

* Sağ üst kısımdaki yeşin `Run` butonunun solundaki alandan `Edit Configuration`ı seçin.
* Sol üst köşedeki `+` butonuna basın
* Derlemek istediğiniz dili | uygulamayı seçin (*Örn: Python | PyCharm için*)
* Dosya derleyeceksiniz *Script* kısmına `dosyanın yolunu` yazın.
* *Python Interpreter* kısmında yorumlayıcıyı seçin, ayarlanmadıysa `Interpreter (Derleyici) Değiştirme` aşamasında (üst aşamada) nasıl ayarlayacağınıza bakabilirsiniz.

### Dökümantasyon Önizle

Fareyle kodun üzerinize geldiğiniz *açıklamalarını* ve dökümantasyonlarını gösterecektir.

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | General | Other` başlığı altında `Show quick documentation on mouse move` kısmını seçin ve süreyi `500` yapın.

### Dictionaries

Dillere özgü sözlükleri indirmek için [buraya](https://drive.google.com/open?id=1UAGLGvwv_zLBzH7zH1oGRvYhzzP67M4k) tıklayabilirsin.

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Spelling | Dictionaries | Custom Dictionaries` başlığı altında `+` butonuna basıp `.dic` uzantılı sözlük dosyanı ekleyin.

> Sözlüğün çalışabilmesi için `hunspell` plugin'ini indirmeniz gerekmekte. Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

### Spellcheck Kaldırma

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Inspection | Spelling | Typo | Process comments` ile yorum satırlarını kontrol etmesini kaldırabilirsin.

## Karma Notlar

* [Şifre değiştirme](https://stackoverflow.com/a/37959112)

> Sayfa başındaki işaretçilere yönlenmek için [buraya](#Y%C3%B6nlendirme) tıklayabilirsin.