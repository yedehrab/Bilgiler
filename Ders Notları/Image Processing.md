# Görüntü İşleme <!-- omit in toc -->

Ders matlab üzerinden işlenmektedir.

## İçerikler <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz

- [Ders Hakkında](#ders-hakk%C4%B1nda)
- [Ders İçerikleri](#ders-i%CC%87%C3%A7erikleri)
- [Görüntü İyileştirme Metodları](#g%C3%B6r%C3%BCnt%C3%BC-i%CC%87yile%C5%9Ftirme-metodlar%C4%B1)
  - [Histogram Germe](#histogram-germe)
    - [Pythonda Histogram Germe İşlemi](#pythonda-histogram-germe-i%CC%87%C5%9Flemi)
  - [Histogram Eşitleme](#histogram-e%C5%9Fitleme)
- [Harici Bağlantılar](#harici-ba%C4%9Flant%C4%B1lar)

## Ders Hakkında

- Yoklama: Yok
- Ödev: %20 etkilemekte
  - En az 5 ödev olacak.
  - Aksis üzerinden verilecek

## Ders İçerikleri

Ders içerikleri drive üzerinden yedeklenmektedir, [buraya](https://drive.google.com/open?id=1Ma1V8w584R9ISva9XpH9OQcr2wsrmS20) tıklayarak erişebilirsin.

## Görüntü İyileştirme Metodları

Çok koyu ya da çok açık görüntüler üzerinde uygulanır.

| Metod              | Açıklama                                                |
| ------------------ | ------------------------------------------------------- |
| Histogram Germe    | Verilerin aralığını arttırma işlemi                     |
| Histogram Eşitleme | Her renk değeri için eşit sayıda pixel olmasını sağlama |

### Histogram Germe

Pixel değerlerinin aralığını genişletme işlemi olarak da bilinir.

- Resmin sahip olduğu en düşük ve en yüksek pixel değeri bulunur
  - $eski_{max}, eski_{min}$
- İstenen en yüksek ve en düşük pixel aralıkları belirlenir
  - Genelde 0, 255 değerleri seçilir
  - $yeni_{max}, yeni_{min}$
- Her bir pixel, yeni başlangıç ve bitiş noktasına göre değerler alır

$$
yeni_i = ((yeni_{max} - yeni_{min}) / (eski_{max} - eski_{min})) . (eski_i - eski_{min}) + yeni_{min}
$$

#### Pythonda Histogram Germe İşlemi

```py
def histogram_stretching(image, new=(0, 255)):
    """
    Histogram Germe işlemi
    :param image: Resmin numpy dizisi
    :param new: Yeni pixel min, max değerleri
    :return: Gerilmiş resim
    """
    # Resmi tek boyuta indirgeme
    flatten_img_np = image.reshape(-1)

    # Histogram germe denklemi
    old = flatten_img_np.min(), flatten_img_np.max()
    for i in range(0, len(flatten_img_np)):
        flatten_img_np[i] = (difference(new) / difference(old)) * (flatten_img_np[i] - old[0]) + new[0]

    # Aynı boyutlardaki yeni resmi oluşturma
    return flatten_img_np.reshape(image.shape)
```

> $i$ harfi resmin **i. pixel değerini** temsil eder.

### Histogram Eşitleme

Her bir parlaklık seviyesi için aynı sayıda pixel bulunmasını sağlayarak resmin pixellerinin dengeli (uniform) dağılımda olması amaçlanır.

- Her pixel ton değerinin resmin içinde hangi oranda olduğu $p_r(r_k)$ hesaplanır
  - $p_r(r_k) = n_k / n$
    - $n$: toplam pixel sayısı
    - $n_k$: k. pixel sayısı
- Kümülatif olasılık fonksiyonu $s_k$ hesaplanır
  - $s_k = T(r_k) = \sum_{j=0}^k n_j / n$
- Ters dönüşüm yapılarak, hangi renk tonu yerine hangisinin geleceği hesaplanır
  - $r_k = T^-(s_k) = (L - 1) * T(r_k)$
    - $L$: Toplam pixel sayısı

> Ek kaynak için [buraya](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_histograms/py_histogram_equalization/py_histogram_equalization.html) bakabilirsin.

## Harici Bağlantılar

- [Python ile Görüntü İşleme: Histogram, Normalleştirilmiş Histogram ve Histogram Eşitleme](https://medium.com/@sddkal/python-ile-g%C3%B6r%C3%BCnt%C3%BC-i%CC%87%C5%9Fleme-histogram-normalle%C5%9Ftirilmi%C5%9F-histogram-ve-histogram-e%C5%9Fitleme-3d0052174f1f)