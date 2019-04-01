# Linux

Öneri Distro: `deepin`

## Grub Menüyü Atlama

- `sudo nano /etc/default/grub` ile grub yapılandırma dosyasını açın
- En alt kısmına `GRUB_HIDDEN_TIMEOUT=0` yazın ve `GRUB_TIMEOUT=0` yapın
- `CTRL` + `X` e basın ve `Y` tuşuna basarak kayıt edin
- `sudo update-grub` ile yine grub ayarlarını aktifleştirin

## Terminal Numaları

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

## Faydalı Bilgiler ve Uygulamalar

### Window Manager Controls

Uygulamaların durumlarını kontrol eden `wmctrl` adlı komuttur.

- `wmctrl -xa <uygulama_komutu>` uygulama açıksa ekrana getirir.
- `wmctrl -xc <uygulama_komutu>` uygulamayı kibarca kapatma
- `wmctrl -lxG` açık olan uygulamalar hakkında bilgi basar.

### Uygulamaların Terminal Komutlarını öğrenme

Alttaki komutu yazdıktan sonra pencerenin üstüne tıklamanız yeterlidir.

```sh
xprop | grep WM_CLASS
```

## Process İşlemleri

| Komut   | Açıklama                 |
| ------- | ------------------------ |
| `pgrep` | PID (process id) Bulma   |
| `kill`  | PID öldürme, sonlandırma |

### Process Id (PID) Bulma

```sh
pgrep [option] <pattern>
```