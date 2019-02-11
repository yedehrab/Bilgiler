# Uygulama Notları

Sık kullandığım uygulamalar için öneri ayarlarım (bir nevi kendime de yedek :D)

## VS Code

### Kısayollar

* `CTRL` + `P` Dosya arama
  * `#` İle çalışma dizininde arayabilirsin
  * `?` ile yardım alabilirsin
* `CTRL` + `I` Satırı seçme
* `CTRL` + `X` Satırı kesme

### Faydalı Eklentiler

* `Base16 Tomorrow Dark+` Karanlık tema
* `Code Runner` Run butonu ekleme
* `Material Icon Theme` Dosya ikon teması
* `Visual Studio IntelliCode - Preview` AI ile en sık kullanılan metodları önerir
  * 2 kez `CTRL` + `SPACE` yaparsanız detaylarını da gösterir
* `Docker` Docker
* *Code Snippets* eklentileri
  * Dil'e özel kısaltmalar

### Editör ayarlarım

> Sol alt köşedeki `ayarlar` simgesi -> Sağ üst köşedeki `{}` simgesine tıklayıp oraya bunlardan istediklerini kopyalayabilirsin.

#### Görüntü Ayarları

```json
{
    "telemetry.enableTelemetry": false,
    "window.menuBarVisibility": "toggle",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Base16 Tomorrow Dark",
    "editor.fontWeight": "500",
    "editor.fontSize": 13.7,
    "window.titleBarStyle": "custom",
    "editor.fontFamily": "Consolas, 'Courier New', monospace",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "terminal.integrated.fontFamily": "Consolas, 'Courier New', monospace",
}
```

#### Code Runner Ayarları

Path değiştirme örneği detayına [buraya](https://stackoverflow.com/questions/50689210/how-to-setup-code-runner-in-visual-studio-code-for-python) tıklayarak ulaşabilirsin.

```json
"code-runner.executorMap": {
    "python": "$pythonPath -u $fullFileName",
},
```

### Kısayollar

* `ALT` + `SHIFT` + `F` Yazıları uzantıya göre formatlama
* `CTRL` + `"` Gömülü terminali gösterme / gizleme

## Chrome

### Ektension

* [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb) `->` Reklam engelleme
* [Pop up Blocker for Chrome](https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche) `->` Popup (Açılır pencere) engelleme *özeliikle film izleyenler için oldukça faydalı*
* [God Mode for Whatsapp](https://chrome.google.com/webstore/detail/god-mode-for-whatsapp/cgdfebhnckdgckcjhidjnochmahdohad) `->` Whatsapp wep yerine oldukça kullanışlı ve ek özelliklere sahip popup
* [Temp Mail](https://chrome.google.com/webstore/detail/temp-mail-disposable-temp/inojafojbhdpnehkhhfjalgjjobnhomj) `->` Geçici mail oluşturma eklentisi. 15s de mail onaylama imkanı sunuyor. *Özellikle kayıt ol diye baskılayan sitelere girenlere tavsiye*
* [Run Javascript](https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao) `->` Seçtiğiniz sayfalara girdiğinizde otomatik olarak JS derleme
* [Google Çeviri](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb) `->` Çeviri

## Adress Çubuğu Anahtarları

[Buraya](chrome://settings/searchEngines) tıklayarak gerekli ayarların olduğu kısma girin. 

> Çıkan ekranda Diğer arama motorları kısmında `Ekle` butonuna basın.

**Çıkan Menüde:**

* `Arama motoru ismi` *Kendi verdiğimiz isim*
* `Anahtar` *Adres çubuğuna yazınca alttaki sorguyu çalıştıracak*
* `Sorgu` URL veya sorgu URL olabilir size kalmış.

*Örnek Kullanım:*

* Tureng
* -t
* http://tureng.com/tr/turkce-ingilizce/%s

> %s sonrasındaki metin anlamına gelmekte. Örn; -t Help (*Help `%s` olan yere yazılır.*)

## Jetbrains IDEs

* [DataGrip](https://www.jetbrains.com/datagrip/)

### Kısayolar

Detaylar için [buraya](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html) tıklayabilirsin.

* `CTRL` + `CTRL` Komut çalıştırma
* `SHIFT` + `SHIFT` Kod içerisinde arama yapma
* `CTRL` + `SHUFT` + `ALT` + `L` Açık olan dosyayı formatlama / biçimlendirme
* `CTRL` + `SHUFT` + `L` Tüm kodu otamatik derleme

#### Metin Kısayolları

* `CTRL` + `X` Satırı kesme 
* `CTRL` + `D` Satırı hemen altına kopyalam (dublicate)
* `CTRL` + `SHIFT` + `/` Yorum satırına çevirme

#### Denıg Kısayolları

* `ALT` + `F8` Dobug modunda iken kod derleme arayüzü

#### Git Kısayolları

* `CTRL` + `K` Commit
* `CTRL` + `SHIFT` + `K` Push

### Git Yönetimi

* `JetBrain IDE` - `Check out from Version Control` - `Git`
  * *Url:* Proje URL'idir. (Adress çubuğunda yazan metin)
  * *Directory:* Proje yolunudur. (projenin/konumu)
* `Test` & `Clone`

### Pluginler (Eklenti gibi)

Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

* `CTRL` + `ALT` + `S` kısmından `Plugin` sekmesinde istediğiniz iklentileri bulabilirsiniz.

### Faydalı Ayarlar

#### Font Ayarları

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Font` kısmında
  * *Font:* `Consolas`
  * *Size:* `12`
  * *Line spacing:* `1.0`

#### Interpreter (Derleyici) Değiştirme

Sanal environment gibi durumlarda system yerine onların derleyicisini kullanma

* `CTRL` + `ALT` + `S` yaptıktan sonra `Project: <project name> | Project Interpreter` sayfasında `Ayarlar Butonu | Add` kısmına basarak derleyicinizi değiştirebilirsiniz.

#### Configuration (Yapılandırma) Ayarları 

> Projenizi IDE üzerinde çalıştırabilmek için bu ayarı yapmanız gerekmekte.

* Sağ üst kısımdaki yeşin `Run` butonunun solundaki alandan `Edit Configuration`ı seçin.
* Sol üst köşedeki `+` butonuna basın
* Derlemek istediğiniz dili | uygulamayı seçin (*Örn: Python | PyCharm için*)
* Dosya derleyeceksiniz *Script* kısmına `dosyanın yolunu` yazın.
* *Python Interpreter* kısmında yorumlayıcıyı seçin, ayarlanmadıysa `Interpreter (Derleyici) Değiştirme` aşamasında (üst aşamada) nasıl ayarlayacağınıza bakabilirsiniz.

#### Dökümantasyon Önizle

Fareyle kodun üzerinize geldiğiniz *açıklamalarını* ve dökümantasyonlarını gösterecektir.

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | General | Other` başlığı altında `Show quick documentation on mouse move` kısmını seçin ve süreyi `500` yapın.

#### Dictionaries

Dillere özgü sözlükleri indirmek için [buraya](https://drive.google.com/open?id=1UAGLGvwv_zLBzH7zH1oGRvYhzzP67M4k) tıklayabilirsin.

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Spelling | Dictionaries | Custom Dictionaries` başlığı altında `+` butonuna basıp `.dic` uzantılı sözlük dosyanı ekleyin.

> Sözlüğün çalışabilmesi için `hunspell` plugin'ini indirmeniz gerekmekte. Plugin kurma detayı için [buraya](https://www.jetbrains.com/help/idea/managing-plugins.html) tıklayabilirsin.

#### Spellcheck Kaldırma

* `CTRL` + `ALT` + `S` yaptıktan sonra `Editor | Inspection | Spelling | Typo | Process comments` ile yorum satırlarını kontrol etmesini kaldırabilirsin.

#### Karma Notlar

* [Şifre değiştirme](https://stackoverflow.com/a/37959112)
