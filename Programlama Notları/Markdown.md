# Markdowns

Ek kaynak için [buraya](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) tıklayabilirsin.

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

### Bağlantı Verme

Link işlemleri için bilgiler. Kaynak için [buraya](https://css-tricks.com/snippets/html/mailto-links/) tıklayabilirsin.

| İstek | Anahtar |
|---------|----------|
| Site | <https://...> |
| Mail | <mailto:...> |
| Aynı dizinden | ./... |
| Bir üst dizinden | ../... |
| Telefon | <tel:> |

> Bağlantı verme işlemlerinde özel karakter kullanmak için kodlama yapmanız gerekmekte. Kodlama yapan online site için [buraya](https://www.urlencoder.org/) tıklaytabilirsin.

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

## Kaynaklar

* <https://html.com/attributes/a-href/>