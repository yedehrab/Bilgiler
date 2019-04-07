# Linux <!-- omit in toc -->

Birkaç distro örneği:

| Distro                            | İyi Yanı                                 | Kötü Yanı                           |
| --------------------------------- | ---------------------------------------- | ----------------------------------- |
| [ubuntu](https://www.ubuntu.com/) | Çok fazla kaynak ve bilgi desteği vardır | Arayüz tasarımı hususunda geridedir |
| [deepin](https://www.deepin.org/) | Çok şık bir arayüz tasarımına sahiptir   | Donanım ve bilgi desteği zayıftır   |

> Tüm distrolara [buradaki](https://distrowatch.com/) siteden bakabilirsin.

## İçerikler <!-- omit in toc -->

> `Home` tuşu ile yukarı yönelebilirsin.

- [Grub Menüyü Atlama](#grub-men%C3%BCy%C3%BC-atlama)
- [Linux Terminali Notları](#linux-terminali-notlar%C4%B1)
  - [Terminal Numaları](#terminal-numalar%C4%B1)
  - [Temel Terminal Komutları](#temel-terminal-komutlar%C4%B1)
  - [Kurulum Komutları](#kurulum-komutlar%C4%B1)
    - [Dpkg - Debian Paket Kurma](#dpkg---debian-paket-kurma)
    - [Tar dosyalarının kurulumları](#tar-dosyalar%C4%B1n%C4%B1n-kurulumlar%C4%B1)
  - [Kısayol oluşturma](#k%C4%B1sayol-olu%C5%9Fturma)
    - [Desktop kısayolu oluşturma](#desktop-k%C4%B1sayolu-olu%C5%9Fturma)
  - [Donanım Komutları](#donan%C4%B1m-komutlar%C4%B1)
- [Linux Değişkenleri](#linux-de%C4%9Fi%C5%9Fkenleri)
  - [Temel Değişkenler](#temel-de%C4%9Fi%C5%9Fkenler)
  - [Komut Çıktısını Ele Alma](#komut-%C3%A7%C4%B1kt%C4%B1s%C4%B1n%C4%B1-ele-alma)
- [Ubuntu 18.10 için Faydalı Bilgiler](#ubuntu-1810-i%C3%A7in-faydal%C4%B1-bilgiler)
  - [Ubuntu Kısayolları](#ubuntu-k%C4%B1sayollar%C4%B1)
    - [Dash / Dock Kısayolları](#dash--dock-k%C4%B1sayollar%C4%B1)
    - [Ekran Görüntüsü ve Kaydı Kısayolları](#ekran-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-ve-kayd%C4%B1-k%C4%B1sayollar%C4%B1)
  - [Gnome Eklentileri](#gnome-eklentileri)
    - [Ubuntu Üstteki Çubuğu Gizleme](#ubuntu-%C3%BCstteki-%C3%A7ubu%C4%9Fu-gizleme)
  - [Dash to Dock ile MacOS Durum Çubuğu Görünümü](#dash-to-dock-ile-macos-durum-%C3%A7ubu%C4%9Fu-g%C3%B6r%C3%BCn%C3%BCm%C3%BC)
- [Faydalı Bilgiler ve Uygulamalar](#faydal%C4%B1-bilgiler-ve-uygulamalar)
  - [Sıkıştırılmış Dosyaları Çıkarma](#s%C4%B1k%C4%B1%C5%9Ft%C4%B1r%C4%B1lm%C4%B1%C5%9F-dosyalar%C4%B1-%C3%A7%C4%B1karma)
  - [Media Player](#media-player)
  - [MTPaint](#mtpaint)
  - [Terminal Üzerinden Markdown to PDF](#terminal-%C3%BCzerinden-markdown-to-pdf)
  - [Terminal Üzerinden Çevirici](#terminal-%C3%BCzerinden-%C3%A7evirici)
  - [OnlyOffice Desktop](#onlyoffice-desktop)
  - [Window Manager Controls](#window-manager-controls)
  - [League of Legends](#league-of-legends)
  - [Uygulamaların Terminal Komutlarını öğrenme](#uygulamalar%C4%B1n-terminal-komutlar%C4%B1n%C4%B1-%C3%B6%C4%9Frenme)
  - [Kernel Güncelleme](#kernel-g%C3%BCncelleme)
- [Process İşlemleri](#process-i%CC%87%C5%9Flemleri)
  - [Process Id (PID) Bulma](#process-id-pid-bulma)

## Grub Menüyü Atlama

- `sudo nano /etc/default/grub` ile grub yapılandırma dosyasını açın
- En alt kısmına `GRUB_HIDDEN_TIMEOUT=0` yazın ve `GRUB_TIMEOUT=0` yapın
- `CTRL` + `S` e basarak kaytıt edin, `CTRL` + `X` ile çıkış yapın
- `sudo update-grub` ile yine grub ayarlarını aktifleştirin

## Linux Terminali Notları

Linux işletim sistemindeki komutlardır. Terminal üzerinden kernel'a bildirilir.

### Terminal Numaları

| Yöntem                        | Açıklama                                             |
| ----------------------------- | ---------------------------------------------------- |
| `<komut> --help`              | Komutlar için yardım metni                           |
| `TAB`                         | Kod tamamlama                                        |
| `cwd`                         | Çalışma dizini yolu                                  |
| `-`                           | Son çalışan dizine gitme                             |
| `~`                           | Home dizini                                          |
| `<komut>; <komut>;`           | Birden fazla komut işleme (birbirlerini beklemez)    |
| `<komut> && <komut>`          | 1. komut çalışırsa 2.'yi işleme                      |
| `<komut> || <komut>`          | 1. olmazsa 2. komutu işleme                          |
| `CTRL` + `R` `<aranan_terim>` | Önceki komutlarda arama yapma                        |
| `CTRL` + `Q`                  | Kitlenmiş terminali kurtarma                         |
| `CTRL` + `A`                  | Komutların satırının başına gelme                    |
| `CTRL` +`E`                   | Komut satırının sonuna gelme                         |
| `tail -f <dosya>`             | Dosyayı anlık olarak okuma                           |
| `cat` ve `less`               | Ufak ve büyük dosyaları okuma                        |
| `!$`                          | Bir önce kullanılan elamanı kullanma                 |
| `!!`                          | Bir önceki komutu kullanma                           |
| `alias`                       | Adlandırma (hatalı yazımları engelleyebilir)         |
| `CTRL` + `SHIFT` + `C`        | Kopyalama işlemi                                     |
| `CTRL` + `SHIFT` + `V`        | Yapıştırma işlemi                                    |
| `yes | <komut_ya_da_script>`  | İnteraktif veri isteyen işleme 'yes' verisi gönderme |
| `echo <metin> > <dosya>`      | Dosyaya metin yazma                                  |

### Temel Terminal Komutları

Detalar için [buraya](https://gist.github.com/sayz/1130312/a45b548b82ee459e05a9159ec532224757a2ca56) tıklayarak, açıklamalara ulaşabilirsin.

- `clear` Terminali temizleme
- `sudo -s` Terminali root yapma `exit` rootlu terminali kapatma
- `sudo apt-get install <paket_adi>` Paket kurulumu
- `sudo apt-get install --fix-broken` Hatalı kurulumları veya gerekli bağımlılıkları kurma
- `sudo apt-get purge <paket_adi>` paketadi paketini kaldirma
- `sudo apt-get purge <paket_adi>*` Bulunan dizinde paket ile başlayan tüm paketleri kaldırma
- `sudo apt-get purge '<paket_adi>*'` paket ile başlayan tüm paketleri ve alt bileşenlerini kaldırma
- `sudo apt-cache search <paket_adi>` Depoda paketadi arama işlemi

### Kurulum Komutları

İndirdiğimiz dosyaları kurmak için gerkeli olan bir dize komutlar.

#### Dpkg - Debian Paket Kurma

- `sudo dpkq -i deb_uzantılı.deb`
- `sudo apt-get install --fix-broken` (kurulum için gerekli paketleri kurma)
- `sudo apt-get autoremove` (gereksizleri kaldırma)

#### Tar dosyalarının kurulumları

Tar.gz uzantılı dosyayı bulup, sağ tıklayıp, buraya çıkar diyoruz. Ya da terminal yardımıyla arşivi çıkarın

```bash
tar xzf dosya.tar.gz -C ./dizin
cd dizin
```

> Terminat komutlarını kullandıysanız, direk alttaki komutları uygulayabilirisiniz.

Ardından çıkarılan dosyaların olduğu dizine girip, alttaki komutları yazıyoruz.

```sh
./configure
make -j $(nproc --all)
sudo make install
```

### Kısayol oluşturma

Detaylar için [buraya](https://manpages.debian.org/stretch/coreutils/ln.1.en.html) tıklayabilirsin.

```bash
sudo ln -s /dosya/yolu/ dosyaAdi
```

- `ln` İki dosya arasında link oluşturma
- `-s` Statik link yerine sembolik link oluşturma
- `/dosya/yolu` Örneğin /home/$USER
- `dosyaAdi` Oluşturulacak kısayolun ismi

#### Desktop kısayolu oluşturma

Text editörü açıp

```bash
gedit dosya/yolu.desktop
```

Alttaki alanda gerekli yerleri doldurun.

```txt
#!/usr/bin/env xdg-open

[Desktop Entry]
Version=1.0
Type=Application
Terminal=false
Exec=command to run here
Name=visible name here
Comment=comment here
Icon=icon path here
```

Son olarak dosyanın bulunduğu dizinde terminali açıp, dosyayı güvenilir olarak işaretleyin (?)

```bash
chmod +x dosyadi.desktop
```

### Donanım Komutları

- `nproc` İşlemci çekirdek sayısını gösterir.
- `uname -v` Kernel sürümünü gösterir
- `lspci` Donanum bilgilerini gösterir

## Linux Değişkenleri

İşletim sisteminde terminal için değişkenler mevcuttur.

- `export <değişken_adı>=<değer1>:<değer2>:<$<değişken_adı2>` şeklinde yeni değişken oluşturabilirsin
  - Oluşturduğun değişken açık olan terminale özgü olacaktır

### Temel Değişkenler

- `$HOME` Kullanıcının dizini /home/user
- `$USER` Kullanıcı adı

### Komut Çıktısını Ele Alma

Alttaki şekilde bir komutun sonucunu değişken olarak alıp görebilirsin. 

```bash
echo $(komut)
```

- `komut` Herhangi kullanılabilir komut (örn: nproc)
- Örnek Kullanım: `echo $(nproc)` İşlemcideki çekirdek sayısını gösterir

> Komutlar hakkında detaylı bilgi almak için [buraya](./Linux_Komutları.md) tıklayabilirsin.

## Ubuntu 18.10 için Faydalı Bilgiler

### Ubuntu Kısayolları

#### Dash / Dock Kısayolları

Dash / Dock ubuntudaki sık kullanılamlar çubuğunun adıdır.

| Kısayol                      | Açıklama                |
| ---------------------------- | ----------------------- |
| `SUPER` + `<SAYI>`           | Uygulamarı çalıştırma   |
| `SUPER` + `SHIFT` + `<SAYI>` | Uygulamayı gizleme      |
| `SUPER` + `CTRL` + `<SAYI>`  | Uygulamayı yeniden açma |

#### Ekran Görüntüsü ve Kaydı Kısayolları

Orjinal sayfayı görmek istiyorsan [buraya](https://help.ubuntu.com/stable/ubuntu-help/screen-shot-record.html) tıklayabilirsin.

| Kısayol                        | Açıklama                                          |
| ------------------------------ | ------------------------------------------------- |
| `PRINT SCREEN`                 | Ekran görüntüsü alma                              |
| `ALT` + `PRINT SCREEN`         | Üzerinde bulunduğumuz pencerenin görüntüsünü alma |
| `SHIFT`+ `PRINT SCREN`         | Seçilecek alnın görüntüsünü alma                  |
| `CTRL` + `ALT` + `SHIFT` + `R` | Ekranı komple kayıt eder                          |

> `CTRL` tuşuna da basılırsa `$HOME/Pictures` ya da `$HOME/Videos` dizinleri yerine panoya kayıt edilir.

### Gnome Eklentileri

Gnome eklentileri ile ubuntu distronuzu özelleştirebilirsiniz.

- `sudo apt install chrome-gnome-shell` ile chrome için gnome çekirdeğini kurun
- [Chrome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/gnome-shell-integration/) veya [Opera](https://addons.opera.com/en/extensions/details/gnome-shell-integration/) için gnome eklentisini kurun

#### Ubuntu Üstteki Çubuğu Gizleme

Gnome eklentisini kurduktan sonra [buradan](https://extensions.gnome.org/extension/545/hide-top-bar/) eklentiyi `ON/OFF` ile açıp kapatabilirsiniz.

### Dash to Dock ile MacOS Durum Çubuğu Görünümü

Tam ekranı kaplayan uzun görüntü yerine, içerdiği uygulama kadar yer kaplayan bir görüntü sağlar.

- `Ubuntu Software` uygulamasını açın
- `Dash to Dock` yazıp aratın ev indirin
- `Extension Settings` kısmından özelleştirebilirsiniz

## Faydalı Bilgiler ve Uygulamalar

### Sıkıştırılmış Dosyaları Çıkarma

Rar için `parsing filters unsupported` hatası geliyorsa, `unrar` paketini yüklemeniz gerekmektedir.

```sh
sudo apt-get install unrar
```

### Media Player

En çok sevilen oynatıcı olan `mpv`'i indirmek için:

```sh
sudo apt-get install mpv
```

> [Buraya](https://www.slant.co/topics/5260/~media-players-for-linux#3) bakarak diğerleri kıyaslayabilirisin.

### MTPaint

Microsoft MSPaint'e alternatif linux paint uygulamasıdır.

Kurulum:

```sh
suda apt-get install mtpaint
```

### Terminal Üzerinden Markdown to PDF

Gerekli paketleri alttaki komutlarla kuruyoruz.

```sh
sudo apt-get install pandoc texlive-latex-base texlive-fonts-recommended texlive-extra-utils
```

Kullanım:

```sh
pandoc MANUAL.txt --pdf-engine=xelatex -o example13.pdf
```

### Terminal Üzerinden Çevirici

Terminal üzerinden çevrimdışı şekilde çeviri yapmak için:

```sh
sudo apt-get install dictd
sudo apt-get install dict-freedict-tur-eng
sudo apt-get install dict-freedict-eng-tur
```

Diğer dilleri kurmak için:

```sh
sudo apt-cache search "dict-freedict"
```

Kullanım şekli:

```sh
dict "word"
```

- `<metin>` Çevirilecek metin

### OnlyOffice Desktop

MS Office alteratifi bir uygulamadır.

- `wget https://download.onlyoffice.com/install/desktop/editors/linux/onlyoffice-desktopeditors_amd64.deb` ile paketi indirin
- `sudo dpkg -i onlyoffice-desktopeditors_amd64.deb` paket kurulumunu deneyin
  - Hata olması durumunda `sudo apt-get install --fix-broken` komutunu kullanın ve tekrar paket kurulumunu deneyin

### Window Manager Controls

Uygulamaların durumlarını kontrol eden `wmctrl` adlı komuttur.

- `wmctrl -xa <uygulama_komutu>` uygulama açıksa ekrana getirir.
- `wmctrl -xc <uygulama_komutu>` uygulamayı kibarca kapatma
- `wmctrl -lxG` açık olan uygulamalar hakkında bilgi basar.

### League of Legends

```sh
sudo snap install --edge leagueoflegends --devmode
```

### Uygulamaların Terminal Komutlarını öğrenme

Alttaki komutu yazdıktan sonra pencerenin üstüne tıklamanız yeterlidir.

```sh
xprop | grep WM_CLASS
```

### Kernel Güncelleme

Kernel güncelleme yazım için [buraya](https://medium.com/@yyunussemree/linux-kernel-g%C3%BCncelleme-4ce3ce55de36) bakabilirsin.

## Process İşlemleri

| Komut   | Açıklama                 |
| ------- | ------------------------ |
| `pgrep` | PID (process id) Bulma   |
| `kill`  | PID öldürme, sonlandırma |

### Process Id (PID) Bulma

```sh
pgrep [option] <pattern>
```