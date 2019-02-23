# Anaconda <!-- omit in toc -->

Yapay zeka, veri analizi, makine öğrenimi gibi işlemler için gerekli olan paketleri hazır halde sunan ve onları yöneten bir uygulamadır.

> Anaconda ile yerel PC üzerinden çalışmak yerine, kurulumlarla uğraşmamak adına [Google Colab](https://colab.research.google.com/) hizmetini kullanabilirisin.

## İçerikler <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Faydaları](#faydalar%C4%B1)
- [Anaconda Kurulumu](#anaconda-kurulumu)
- [Paket ve Kütüphane Kullanımı](#paket-ve-k%C3%BCt%C3%BCphane-kullan%C4%B1m%C4%B1)
  - [Conda Yardımcısını Güncelleme](#conda-yard%C4%B1mc%C4%B1s%C4%B1n%C4%B1-g%C3%BCncelleme)
  - [Conda ile Tüm Paketleri Güncelleme](#conda-ile-t%C3%BCm-paketleri-g%C3%BCncelleme)
  - [Temel Condo Kullanımı](#temel-condo-kullan%C4%B1m%C4%B1)
    - [Condo Örnek Kullanımı](#condo-%C3%B6rnek-kullan%C4%B1m%C4%B1)
  - [Numpy Kurulumu](#numpy-kurulumu)
  - [OpenCV Kurulumu](#opencv-kurulumu)
  - [Tensorflow Kurulumu](#tensorflow-kurulumu)
  - [Keras Kurulumu](#keras-kurulumu)
  - [Python Utils Kurulumu](#python-utils-kurulumu)
- [Sanal Ortam İşlemleri](#sanal-ortam-i%CC%87%C5%9Flemleri)
  - [Sanal Ortam Oluşturma](#sanal-ortam-olu%C5%9Fturma)
  - [Sanal Ortamı Aktif Etme](#sanal-ortam%C4%B1-aktif-etme)
  - [Sanal Ortamı Pasif Etme](#sanal-ortam%C4%B1-pasif-etme)
  - [Sanal Ortamı Kaldırma](#sanal-ortam%C4%B1-kald%C4%B1rma)
- [Karma Paketler ve Kurulumları](#karma-paketler-ve-kurulumlar%C4%B1)
  - [Tesseract](#tesseract)
  - [Selenium](#selenium)
  - [Pillow (Python Image Library)](#pillow-python-image-library)
- [Hata Notları](#hata-notlar%C4%B1)
  - [Conda SSL Hatası](#conda-ssl-hatas%C4%B1)
    - [Windows Üzerinden Ağ Sıfırlam](#windows-%C3%BCzerinden-a%C4%9F-s%C4%B1f%C4%B1rlam)
    - [Manuel OpenSSL Kurulumu](#manuel-openssl-kurulumu)
    - [Conda ile Networkx İndirme](#conda-ile-networkx-i%CC%87ndirme)
    - [SSL Ek Hata Linkleri](#ssl-ek-hata-linkleri)
- [PyCharm Üzerinden Anaconda](#pycharm-%C3%BCzerinden-anaconda)
  - [PyCharm Projeyi Derlemek için Yapılandırma Ayarlama](#pycharm-projeyi-derlemek-i%C3%A7in-yap%C4%B1land%C4%B1rma-ayarlama)
  - [PyCharm Üzerinden Sanal Conda Ortam Oluşturma](#pycharm-%C3%BCzerinden-sanal-conda-ortam-olu%C5%9Fturma)

## Faydaları

- NPM (node package manager) gibi sanal bir ortam oluşturup python kütüphanelerinin yönetimini sağlar.
  - `conda` komutu ve **Anaconda Promt** yardımıyla ile yönetimi sağlar.
- Veri bilimi ve yapay zeka konuları için sık kullanılan kütüphaneler ön yüklenmiş olarak gelir.
  - Tekrar indirmeye normal şartlar altında gerek kalmaz.

## Anaconda Kurulumu

- İndirmek için [buraya](https://hub.docker.com/r/continuumio/anaconda3/) tıklayabilirsin.
  - *Yükleme sırasında PATH'e eklemeyin* !
- Docker üzerine indirmek için [buraya](https://hub.docker.com/r/continuumio/anaconda3/) tıklayabilirsin
- Anaconda'yı windowsda kullanmak için **Anaconda Prompt**'u kullanman gerekmekte!
  - *Aksi halde değişik sorunlarla karşılaşırsınız. (SSL error vs.)*
- Dökümantasyonu için [buraya](https://docs.anaconda.com/) tıklayabilirsin.

## Paket ve Kütüphane Kullanımı

Paket kurulumları `conda` komutu yardımıyla yapılır.

- Tüm bu işlemlerin **Anaconda Prompt** üzerinde yapıldığına emin olun!
- Sanal ortama yükleme yapılmadan önce sanal ortamın **aktif edilmesi** gerekmektedir!

### Conda Yardımcısını Güncelleme

```cmd
conda update -n base -c defaults conda
```

### Conda ile Tüm Paketleri Güncelleme

```cmd
conda update --all
```

### Temel Condo Kullanımı

```cmd
conda install <ayarlar> <framework | package | lib>
conda install -c <depo-ismi> <frameword vs.>
```

#### Condo Örnek Kullanımı

```cmd
conda install -c conda-forge python-socketio
conda install -c anaconda  flask
```

### Numpy Kurulumu

```cmd
conda install -c anaconda numpy
```

### OpenCV Kurulumu

```cmd
conda install -c conda-forge opencv
```

### Tensorflow Kurulumu

```cmd
conda install -c conda-forge tensorflow
```

### Keras Kurulumu

```cmd
conda install -c conda-forge keras
```

### Python Utils Kurulumu

```cmd
pip install utils
```

## Sanal Ortam İşlemleri

Sanal ortamlar üzerine çalışmak istediğimiz projeler için kurulur ve gerekmediği vakit kaldırılır. Projelerin paketleri arasında çakışma olmasını engeller.

### Sanal Ortam Oluşturma

```cmd
conda create --name <ortam_ismi>
conda create --name myenv
```

> Ortam *Anaconda3/env* dizinine kaydedilir.

### Sanal Ortamı Aktif Etme

```cmd
conda activate <ortam_ismi>
conda activate myenv
```

> Ortam seçildiğinde (base) yazan kısımda (`<ortam_ismi>`) yazar.

### Sanal Ortamı Pasif Etme

```cmd
conda deactivate
```

### Sanal Ortamı Kaldırma

```cmd
conda env remove --name <ortam_ismi>
```

> Anaconda Prompt `base` ortamına geri döner.

## Karma Paketler ve Kurulumları

### Tesseract

Resimden yazıyı çekmek için kullanılır.

```cmd
conda install -c mcs07 tesseract
conda install -c jim-hart pytesseract
```

> [Pillow (Python Image Library)](#pillow-python-image-library) paketinin de indirimlesi gerekebilir.

### Selenium

Web siteleri üzerinde işlem yapmak için kullanılır.

```cmd
conda install -c conda-forge selenium
conda install -c clinicalgraphics selenium-chromedriver
```

### Pillow (Python Image Library)

Python resim kütüphanesi resim işlemleri için kullanılır.

```cmd
conda install -c anaconda pillow
```

## Hata Notları

### Conda SSL Hatası

#### Windows Üzerinden Ağ Sıfırlam

Windows 10'daki  `Ağı Sıfırla` ayarını deneyin

- Ayarlar (*Options*)
- Ağ ve İnternet (*Network & Internet*)
- Durum sekmesi (*Status tab*)
- Sayfanın en altına bakın (*Ağı Sıfırla / Network Reset*)
- Şimdi Sıfırla (*Reset Now*)

> Bu işlem kaydedilmiş WI-FI şifrelerini de silecektir.

#### Manuel OpenSSL Kurulumu

Kurulum sayfasına gitmek için [buraya](https://slproweb.com/products/Win32OpenSSL.html) tıklayabilirsin.

> Kaynak için [buraya](https://github.com/conda/conda/issues/8046#issuecomment-450515815) tıklayabilirsin.

#### Conda ile Networkx İndirme

```cmd
conda install -c anaconda networkx
```

#### SSL Ek Hata Linkleri

- [How to install the most recent version of OpenSSL on Windows 10 in 64 Bit](https://www.cloudinsidr.com/content/how-to-install-the-most-recent-version-of-openssl-on-windows-10-in-64-bit/)
- [Conda update failed: SSL error: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed](https://stackoverflow.com/a/35804869/9770490)
- [Setting SSL Verify](https://github.com/ContinuumIO/anaconda-issues/issues/494#issuecomment-155097614)

## PyCharm Üzerinden Anaconda

### PyCharm Projeyi Derlemek için Yapılandırma Ayarlama

Çalıştırma butonu üzerinden (`SHIFT` + `F9`) projeyi çalıştırmak için:

- Derleme butonu yanındaki `seçme kutusuna` tıklayın
- `Edit Configuration`
- Sol üstten `+` butonuna basıns
  - `Python`
- `Script Path:` kısmından çalıştırmak istediğiniz **.py** uzantılı dosyayı seçin
- `OK`

### PyCharm Üzerinden Sanal Conda Ortam Oluşturma

- `CTRL` + `ALT` + `S` ile ayarlara girin
- `Project: imgtotext`
  - `Project: Interpeter`
- Sağ üstteki `ayarlar butonu`na tıklayın
  - `Add`
  - `Conda Enviroment`
  - `OK`
- `+` butonu ile ek paket kurulumu yapabilirsiniz (*İsteğe Bağlı*)
