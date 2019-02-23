# Python <!-- omit in toc -->

> Ek kaynak için [harici kaynaklara](#harici-kaynaklar) bakmayı unutma

## İçerik <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Yazım Kuralları](#yaz%C4%B1m-kurallar%C4%B1)
- [Dökümantasyon](#d%C3%B6k%C3%BCmantasyon)
- [Anahtar Kelimeler (Keywords)](#anahtar-kelimeler-keywords)
  - [Fonksyion Oluşturma Anahtar Kelimeleri](#fonksyion-olu%C5%9Fturma-anahtar-kelimeleri)
    - [Fonksiyon Anahtar Kelimeleri](#fonksiyon-anahtar-kelimeleri)
- [Değişkenler](#de%C4%9Fi%C5%9Fkenler)
  - [Ek Değişkenler](#ek-de%C4%9Fi%C5%9Fkenler)
  - [Sabit Değerler (Constants)](#sabit-de%C4%9Ferler-constants)
  - [Değişkenler Arası Takılama (Casting)](#de%C4%9Fi%C5%9Fkenler-aras%C4%B1-tak%C4%B1lama-casting)
  - [String İşlemleri](#string-i%CC%87%C5%9Flemleri)
  - [Değişken Tipleri için Ek Kaynak](#de%C4%9Fi%C5%9Fken-tipleri-i%C3%A7in-ek-kaynak)
- [Aritmatik Operatörler](#aritmatik-operat%C3%B6rler)
  - [Ek Aritmatik Operatörler](#ek-aritmatik-operat%C3%B6rler)
- [Class](#class)
  - [Class Anahtar Kelimeleri](#class-anahtar-kelimeleri)
  - [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi)
  - [Metodlu Class Örneği](#metodlu-class-%C3%B6rne%C4%9Fi)
    - [Obje Özelliği Silme](#obje-%C3%B6zelli%C4%9Fi-silme)
    - [Class Silme](#class-silme)
  - [Scopes and Namespaces](#scopes-and-namespaces)
- [Karma Linkler](#karma-linkler)
- [Harici Kaynaklar](#harici-kaynaklar)

## Yazım Kuralları

- Class isimleri için **camel case** yazım kuralı geçerlidir
  - Boşluk karakteri **harfi büyüterek** temsil edilir
  - `camelCase`
- Geri kalanlar için **snake case** yazım kuralı geçerlidir
  - Boşluk karakteri `_` ile temsil edilir
  - `snake_case`
- Girintiler (`\t` karakteri) `{}` işlevi görür
- `:` karakteri ile yeni bir scope (alt alan) açılır
  - `for`, `def` gibi döngü veya metod işlemlerinde kullanırlır

> Daha fazla bilgi için harici linklerdeki [Should I use underscores or camel case for Python?](https://www.quora.com/Should-I-use-underscores-or-camel-case-for-Python) bağlantısına tıklayabilirsin.

## Dökümantasyon

- `'''` ile fonksiyonların üstüne dökümantasyon (açıklama) eklenir
- `#` ile koda yorum eklenir

```py
def func(a):
  """ 1 Değeri döndürür """
  return 1 # Döndürme keywordu
```

## Anahtar Kelimeler (Keywords)

Harici link için [buraya](https://www.programiz.com/python-programming/keyword-list) tıklayabilirsin.

| Anahtar | Anlamı                          |
| ------- | ------------------------------- |
| `pass`  | Tanımsız (null)                 |
| `is`    | Eşitlik (==)                    |
| `in`    | İçerisindeki elemanlar          |
| `with`  | Açık olduğu sürece anlamı taşır |

### Fonksyion Oluşturma Anahtar Kelimeleri

| Anahtar  | Oluştuma                   | Erişim        |
| -------- | -------------------------- | ------------- |
| Lambda   | `m_lambda = lambda x: x*2` | `m_lambda(2)` |
| Function | `def m_func(param):`       | `m_func(5)`   |

#### Fonksiyon Anahtar Kelimeleri

| Anahtar  | Anlamı                                            |
| -------- | ------------------------------------------------- |
| `return` | Veri döndürme                                     |
| `yield`  | Her çağırılmada tek bir veri döndürme (generator) |

## Değişkenler

| Tip     | Açıklama         | Örnek                 |
| ------- | ---------------- | --------------------- |
| bool    | 2'li değer, bit  | `True`                |
| int     | Sayı             | `1`                   |
| float   | Virgüllü sayı    | `1.2`                 |
| complex | Karmaşık sayılar | `2+3j`                |
| str     | String, metin    | `"Hello"` / `'Hello'` |

### Ek Değişkenler

| Tip                                                                   | Oluştuma                           | Erişim         |
| --------------------------------------------------------------------- | ---------------------------------- | -------------- |
| [List](https://www.programiz.com/python-programming/list)             | `liste = [1, 2]`                   | `liste[index]` |
| [Set](https://www.programiz.com/python-programming/set)               | `kume = {1.0, "Hello", (1, 2, 3)}` | `kume.add(1)`  |
| [Dictionary](https://www.programiz.com/python-programming/dictionary) | `site = {"adi":"yemreak"}`         | `site['adi']`  |
| [Tuple](https://www.programiz.com/python-programming/tuple)           | `konum = (1, 2)`                   | `x, y = konum` |

### Sabit Değerler (Constants)

Her karakter büyük harfler ile yazılırsa sabit değer olur.

**`sabitler.py` dosyası**

```py
PI = 3.14
YER_CEKIMI = 9.8
```

**`main.py` dosyası**

```py
import sabitler

print(sabitler.PI) # 3.14
print(sabitler.GRAVITY) # 9.8
```

### Değişkenler Arası Takılama (Casting)

```py
ondalikli = 5.8
tam = int(5.8) # 5 atanır
sonuc = int(7/3.5) # 2 atanır
sonuc = int(7/3) # 2 atanır
sonuc = float(7 / 3.5) # 2.0 atanır
sonuc = 7 / 3 # 2.33 atanır
```

### String İşlemleri

| Metot     | Açıklama         | Örnek                         | Çıktı                 |
| --------- | ---------------- | ----------------------------- | --------------------- |
| `len`     | Uzunluk          | `len("yemreak")`              | 7                     |
| `format`  | Formatlama       | `"X: {}, Y: {}".format(1, 2)` | `'X: 1, Y: 2'`        |
| `split`   | Parçalama        | `"ye mre ak".split(" ")`      | `['ye', 'mre', 'ak']` |
| `replace` | Metin değiştirme | `"yemreak".replace("ak", "")` | `'yemre'`             |

> Daha fazla bilgi için [buraya](https://www.programiz.com/python-programming/methods/string) bakabilirsin.

### Değişken Tipleri için Ek Kaynak

- [Basic Data Types in Python](https://realpython.com/python-data-types/)

## Aritmatik Operatörler

| Operatör         | Açıklama                                |
| ---------------- | --------------------------------------- |
| `+, -, /, *`     | 4 işlem                                 |
| `=`              | Atama işlemi                            |
| `a, b = c, d`    | Tek satırda çoklu atama                 |
| `+=, -=, /=, *=` | Kendisiyle işleme sokup kendisine atama |
| `( )`            | Parantej ile öncelik belirleme          |

### Ek Aritmatik Operatörler

| Operatör | Açıklama             | Örnek     | Çıktı |
| -------- | -------------------- | --------- | ----- |
| `%`      | Mod alma işlemi      | `6 % 2`   | 0     |
| `**`     | Kuvvet alma          | `6 ** 2`  | 36    |
| `//`     | Kalansız bölümü alma | `13 // 2` | 6     |

## Class

### Class Anahtar Kelimeleri

| Anhatar                | Açıklama                               | Örnek                                                   |
| ---------------------- | -------------------------------------- | ------------------------------------------------------- |
| `self`                 | Diğer dillerdeki `this` anlamına gelir | [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi)     |
| `__init__`             | Constructer fonksiyonudur              | [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi)     |
| `def function(param):` | Fonksiyon tanımalama                   | [Metodlu Class Örneği](#metodlu-class-%C3%B6rne%C4%9Fi) |

### Basit Class Örneği

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)
```

```cmd
John
36
```

### Metodlu Class Örneği

```py
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)

p1 = Person("John", 36)
p1.myfunc()
```

```cmd
Hello my name is John
```

#### Obje Özelliği Silme

```py
del p1.age
```

#### Class Silme

```py
del p1
```

### Scopes and Namespaces

```py
def scope_test():
    def do_local():
        spam = "local spam"

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"

    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)

scope_test()
print("In global scope:", spam)
```

```txt
After local assignment: test spam
After nonlocal assignment: nonlocal spam
After global assignment: nonlocal spam
In global scope: global spa
```

## Karma Linkler

- [String işlemleri](https://sites.google.com/site/egitimbilgileri/home/a---python---twisted---qt/03---string-islemleri)

## Harici Kaynaklar

- [Learn Python Programming](https://www.programiz.com/python-programming)
- [Python Türkçe Başlangıç](https://github.com/fuatbeser/python-notlarim/blob/master/python_turkce_baslangic.ipynb)
- [Should I use underscores or camel case for Python?](https://www.quora.com/Should-I-use-underscores-or-camel-case-for-Python)