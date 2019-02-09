# Markdowns

## Kullanım Örnekleri

Detaylar için [buraya](https://guides.github.com/features/mastering-markdown/) tıklayabilirsin.

> HTML etiketlerini destekler.

* `CTRL` + `Ü` ve * `CTRL` + `Ğ` İle *.md* uzantılı dosyalarda maddesel hale sokabilirsiniz. ( `Ğ` girinti azaltma, `Ü` gitinti arttırma.)
* `*[metin]*` Metni italik (eğik) yazma
* `**[metin]**` Metni bold (kalın) yazma
* `` karakteri ile metni biçimlendirmeden uzak tutup, özel gösterebilirsin. (`örnek`)
* `[metin](url)` yapısı ile metne link verebilirsin.
* `![resim_açıklaması][resim_urli]` yapısı ile yazına resim yerleştirebilirsin.

### Tablo Oluşturma

```markdown
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## Ek Notlar

### Linklerde Özel Karakter Sorunu

Linklerde özel karakter kullanımı için ek bir şifrelemeye gerek vardır.

> Onilne kodlama sitesi için [buraya](https://www.urlencoder.org/) tıklayabilirsin. Siteye yol verini kopyalayıp *encoded* demeniz yeterli

* `%20` Boşluk karakteri

#### Kullanım Kodu

```md
Boşluklu örnek olan Tablo Oluşturma alanına gitmek için [buraya](#MySQL%20Yapısı) tıklayın.
```

#### Örnek Çıktı

*Boşluklu örnek olan Tablo Oluşturma alanına gitmek için [buraya](#MySQL%20Yapısı) tıklayın.*