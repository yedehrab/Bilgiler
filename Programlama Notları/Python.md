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
  - [Ana Değişkenler](#ana-de%C4%9Fi%C5%9Fkenler)
  - [Ek Değişkenler](#ek-de%C4%9Fi%C5%9Fkenler)
  - [Değersiz Değişken Tanımalma](#de%C4%9Fersiz-de%C4%9Fi%C5%9Fken-tan%C4%B1malma)
  - [Sabit Değerler (Constants)](#sabit-de%C4%9Ferler-constants)
  - [Değişkenler Arası Takılama (Casting)](#de%C4%9Fi%C5%9Fkenler-aras%C4%B1-tak%C4%B1lama-casting)
  - [String İşlemleri](#string-i%CC%87%C5%9Flemleri)
  - [Değişken Tipleri için Ek Kaynak](#de%C4%9Fi%C5%9Fken-tipleri-i%C3%A7in-ek-kaynak)
- [Operatörler](#operat%C3%B6rler)
  - [Aritmatik Operatörler](#aritmatik-operat%C3%B6rler)
    - [Ek Aritmatik Operatörler](#ek-aritmatik-operat%C3%B6rler)
  - [Karşılaştırma Operatörleri](#kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma-operat%C3%B6rleri)
  - [Mantıksal Operatörler](#mant%C4%B1ksal-operat%C3%B6rler)
  - [Bit Düzeyinde Operatörler](#bit-d%C3%BCzeyinde-operat%C3%B6rler)
  - [Kimlik Belirleme Operatörleri](#kimlik-belirleme-operat%C3%B6rleri)
    - [Kimlik Belirleme Operatörleri Örneği](#kimlik-belirleme-operat%C3%B6rleri-%C3%B6rne%C4%9Fi)
  - [Üyelik Operatörleri](#%C3%BCyelik-operat%C3%B6rleri)
    - [Üyelik Operatörleri Örneği](#%C3%BCyelik-operat%C3%B6rleri-%C3%B6rne%C4%9Fi)
- [If / Else Koşul (Constraints) Yapısı](#if--else-ko%C5%9Ful-constraints-yap%C4%B1s%C4%B1)
- [Döngüler (Loop)](#d%C3%B6ng%C3%BCler-loop)
  - [For Döngüsü](#for-d%C3%B6ng%C3%BCs%C3%BC)
  - [While Döngüsü](#while-d%C3%B6ng%C3%BCs%C3%BC)
  - [Range Fonksiyonu](#range-fonksiyonu)
- [Break / Continue](#break--continue)
- [Fonksiyonlar](#fonksiyonlar)
  - [Fonksiyon İskeleti](#fonksiyon-i%CC%87skeleti)
  - [Fonksiyon Örneği](#fonksiyon-%C3%B6rne%C4%9Fi)
  - [Fonksyion Dökümantasyonu](#fonksyion-d%C3%B6k%C3%BCmantasyonu)
  - [Fonksyion Varsayılan Parametreler](#fonksyion-varsay%C4%B1lan-parametreler)
  - [Fonksiyonlarda Keyfi Parametreler](#fonksiyonlarda-keyfi-parametreler)
  - [Özyineleyen Fonksiyonlar](#%C3%B6zyineleyen-fonksiyonlar)
    - [Özyineleyen Fonksiyonların Avantajları](#%C3%B6zyineleyen-fonksiyonlar%C4%B1n-avantajlar%C4%B1)
    - [Özyineleyen Fonksiyonların Zararları](#%C3%B6zyineleyen-fonksiyonlar%C4%B1n-zararlar%C4%B1)
- [Lambda Fonksiyonlar](#lambda-fonksiyonlar)
  - [Filter ile Lambda Kullanımı](#filter-ile-lambda-kullan%C4%B1m%C4%B1)
  - [Map ile Lambda Kullanımı](#map-ile-lambda-kullan%C4%B1m%C4%B1)
- [Global, Local ve Nonlocal Kavramları](#global-local-ve-nonlocal-kavramlar%C4%B1)
  - [Global, Local ve Nonlocal Kavramlarına Örnek](#global-local-ve-nonlocal-kavramlar%C4%B1na-%C3%B6rnek)
- [Modüller](#mod%C3%BCller)
  - [Modül Kullanım Örnekleri](#mod%C3%BCl-kullan%C4%B1m-%C3%B6rnekleri)
  - [Python Modül Dosyaları](#python-mod%C3%BCl-dosyalar%C4%B1)
    - [Sistemin Python Modüllerine Bakma](#sistemin-python-mod%C3%BCllerine-bakma)
  - [Modül İçinde Tanımlanan İsimleri Alma](#mod%C3%BCl-i%CC%87%C3%A7inde-tan%C4%B1mlanan-i%CC%87simleri-alma)
- [Paketler (Package)](#paketler-package)
  - [Paketten ve Modül Örnekleri](#paketten-ve-mod%C3%BCl-%C3%B6rnekleri)
- [Sayılar, Sayılar Arası Dönüşüm ve Matematik](#say%C4%B1lar-say%C4%B1lar-aras%C4%B1-d%C3%B6n%C3%BC%C5%9F%C3%BCm-ve-matematik)
  - [Tabanlı Sayılar](#tabanl%C4%B1-say%C4%B1lar)
  - [Ondalıklı Sayılar (Decimals / Floats)](#ondal%C4%B1kl%C4%B1-say%C4%B1lar-decimals--floats)
    - [Decimal Float Kullanımları ve Farkı](#decimal-float-kullan%C4%B1mlar%C4%B1-ve-fark%C4%B1)
  - [Kesirli Sayılar (Fractions)](#kesirli-say%C4%B1lar-fractions)
    - [Kesirli Sayılarla İşlemler](#kesirli-say%C4%B1larla-i%CC%87%C5%9Flemler)
  - [Matematik İşlemleri](#matematik-i%CC%87%C5%9Flemleri)
    - [Matematikte Rastgelelik](#matematikte-rastgelelik)
- [Class](#class)
  - [Class Anahtar Kelimeleri](#class-anahtar-kelimeleri)
  - [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi)
  - [Metodlu Class Örneği](#metodlu-class-%C3%B6rne%C4%9Fi)
    - [Obje Özelliği Silme](#obje-%C3%B6zelli%C4%9Fi-silme)
    - [Class Silme](#class-silme)
  - [Scopes and Namespaces](#scopes-and-namespaces)
- [Komut Satırından Python](#komut-sat%C4%B1r%C4%B1ndan-python)
- [Colab Üzerinden Python](#colab-%C3%BCzerinden-python)
  - [Python Değişkenlerinin Bash Üzerinde Kullanımı](#python-de%C4%9Fi%C5%9Fkenlerinin-bash-%C3%BCzerinde-kullan%C4%B1m%C4%B1)
  - [Colab için Harici Bağlantılar](#colab-i%C3%A7in-harici-ba%C4%9Flant%C4%B1lar)
- [Karma Linkler](#karma-linkler)
- [Harici Kaynaklar](#harici-kaynaklar)

## Yazım Kuralları

- Her python dosyasına **modül** denir
  - `import` ile dahil edilirler
  - `.` ile içlerine erişilir
- Class isimleri için **camel case** yazım kuralı geçerlidir
  - Boşluk karakteri **harfi büyüterek** temsil edilir
  - `camelCase`
- Geri kalanlar için **snake case** yazım kuralı geçerlidir
  - Boşluk karakteri `_` ile temsil edilir
  - `snake_case`
- Girintiler (`\t` karakteri) `{}` işlevi görür
- `:` karakteri ile yeni bir scope (alt alan) açılır
  - `for`, `def` gibi döngü veya metod işlemlerinde kullanırlır
- Metotlar arasında 2 satır bırakılır
- Metodların en son satırları boş olmalıdır (return için)
- Kodun en son satırı boş olmalıdır (End of File)

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

> Döngü veya metotların *içleri doldurulana* kadar yer kaplayıcı olarak `pass` kullanılır.

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

### Ana Değişkenler

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

### Değersiz Değişken Tanımalma

```py
degersiz = None
```

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

## Operatörler

### Aritmatik Operatörler

| Operatör         | Açıklama                                |
| ---------------- | --------------------------------------- |
| `+, -, /, *`     | 4 işlem                                 |
| `=`              | Atama işlemi                            |
| `a, b = c, d`    | Tek satırda çoklu atama                 |
| `+=, -=, /=, *=` | Kendisiyle işleme sokup kendisine atama |
| `<operatör>=`    | Kendisiyle işleme sokup kendisine atama |
| `( )`            | Parantej ile öncelik belirleme          |

> `<operatör>` herhangi bir operatörü temsil eder.

#### Ek Aritmatik Operatörler

| Operatör | Açıklama             | Örnek     | Çıktı |
| -------- | -------------------- | --------- | ----- |
| `%`      | Mod alma işlemi      | `6 % 2`   | 0     |
| `**`     | Kuvvet alma          | `6 ** 2`  | 36    |
| `//`     | Kalansız bölümü alma | `13 // 2` | 6     |

### Karşılaştırma Operatörleri

| Operatör | Açıklama   | Örnek    | Çıktı   |
| -------- | ---------- | -------- | ------- |
| `>`      | Büyük      | `3 > 2`  | `True`  |
| `<`      | Küçük      | `3 < 2`  | `False` |
| `==`     | Eşit       | `3 == 3` | `True`  |
| `!=`     | Eşit değil | `2 != 2` | `False` |
| `>=`     | Büyük eşit | `2 >= 5` | `False` |
| `<=`     | Küçük eşit | `2 <= 2` | `True`  |

### Mantıksal Operatörler

| Operatör | Açıklama    | Örnek            | Çıktı   |
| -------- | ----------- | ---------------- | ------- |
| `and`    | Ve işlemi   | `True and False` | `False` |
| `or`     | Veya işlemi | `False or True`  | `True`  |
| `not`    | Değili      | `not False`      | `True`  |

### Bit Düzeyinde Operatörler

| Operatör | Açıklama      | Örnek                     |
| -------- | ------------- | ------------------------- |
| `&`      | Ve            | `x & y = 0 (0000 0000)`   |
| `|`      | Veya          | `x | y = 14 (0000 1110)`  |
| `~`      | Değili        | `~ x = -11 (1111 0101)`   |
| `^`      | XOR           | `x ^ y = 14 (0000 1110)`  |
| `>>`     | Sağa kaydırma | `x >> 2 = 2 (0000 0010)`  |
| `<<`     | Sola kaydırma | `x << 2 = 40 (0010 1000)` |

### Kimlik Belirleme Operatörleri

| Operatör | Açıklama                  | Örnek                     | Çıktı   |
| -------- | ------------------------- | ------------------------- | ------- |
| `is`     | Aynı objeye işaret etme   | `[1, 2, 3] and [1, 2, 3]` | `False` |
| `is not` | Farklı objeye işaret etme | `1  is not 1`             | `False` |

> Ek değişkenlerde objelerin adresleri farklı olduğunda ilk çıktı `False` olur.

#### Kimlik Belirleme Operatörleri Örneği

```py
x1 = 5
y1 = 5
x2 = 'Hello'
y2 = 'Hello'
x3 = [1,2,3]
y3 = [1,2,3]

# Output: False
print(x1 is not y1)

# Output: True
print(x2 is y2)

# Output: False
print(x3 is y3)
 ```

### Üyelik Operatörleri

| Operatör | Açıklama    | Örnek        | Çıktı   |
| -------- | ----------- | ------------ | ------- |
| `in`     | Anahtar var | `5 in x`     | `False` |
| `not in` | Anahtar yok | `1 not in x` | `False` |

> `x = [1, 2, 3, 4]`

#### Üyelik Operatörleri Örneği

```py
x = 'Hello world'
y = {1:'a',2:'b'}

print('H' in x) # True
print('hello' not in x) # True (h'si büyük değil)
print(1 in y) # True
print('a' in y) # False ('a' bir değerdir anahtar değildir)
```

## If / Else Koşul (Constraints) Yapısı

- `:` ile if / else satırı sonlandırılır
- `Tab` kadar boşluk atılırsa if scope*'u içerisinde olur

```py
num = float(input("Sayı giriniz: "))
if num >= 0:
    if num == 0:
        print("Sıfır")
    elif num == 1:
        print("Bir")
    else:
        print("Pozitif sayı")
else:
    print("Negatif sayı")
```

## Döngüler (Loop)

### For Döngüsü

```py
sayilar = [6, 5, 3, 8, 4, 2, 5, 4, 11]
toplam = 0 # Toplam değeri tutacak değişken

for sayi in sayilar: # Liste üzerinde döngü ile ilerleme
  toplam = toplam + sayi

print("Toplam değer:", sum) # Toplam Değer: 48
```

### While Döngüsü

```py
sayac = 0

while sayac < 3:
    print("Döngü içinde")
    sayac = sayac + 1
else:
    print("Döngü dışında")
```

```out
Döngü içinde
Döngü içinde
Döngü içinde
Döngü dışında
```

### Range Fonksiyonu

```py
print(range(10)) # range(0, 10)
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(range(2, 8))) # [2, 3, 4, 5, 6, 7]
print(list(range(2, 20, 3))) #  [2, 5, 8, 11, 14, 17]
```

## Break / Continue

```py
for deger in "string":
    if deger == "i":
        break # Döngüyü sonlandırır
    if deger == "t"
        continue # Döngüdeki adımı sonlandırır
    print(deger)

print("Son")
```

```out
s
r
Son
```

## Fonksiyonlar

### Fonksiyon İskeleti

```py
def function_name(parameters):
  """docstring"""
  statement(s)
```

### Fonksiyon Örneği

```py
def greet(name):
  """This function greets to
  the person passed in as
  parameter"""
  print("Hello, " + name + ". Good morning!")
```

### Fonksyion Dökümantasyonu

```cmd
>>> print(greet.__doc__)
This function greets to
  the person passed into the
  name paramete
```

### Fonksyion Varsayılan Parametreler

```py
def greet(name, msg = "Good morning!"):
   """
   This function greets to
   the person with the
   provided message.

   If message is not provided,
   it defaults to "Good
   morning!"
   """

   print("Hello",name + ', ' + msg)

greet("Kate") # Varsayılan parametreyi kullanma
greet("Bruce","How do you do?") # Sıralı parametre verme
greet("Bruce", msg="Naber") # İşaretleyerek paremetre verme
```

### Fonksiyonlarda Keyfi Parametreler

```py
def greet(*names):
   """This function greets all
   the person in the names tuple."""

   # names is a tuple with arguments
   for name in names:
       print("Hello",name)

greet("Monica","Luke","Steve","John")
```

> `*` ön eki ile ile kaç tane isim gelirse o kadar kullanıyoruz.

### Özyineleyen Fonksiyonlar

```py
def calc_factorial(x):
    """This is a recursive function
    to find the factorial of an integer"""

    if x == 1:
        return 1
    else:
        return (x * calc_factorial(x-1))

num = 4
print("The factorial of", num, "is", calc_factorial(num))
```

```out
calc_factorial(4)              # 1st call with 4
4 * calc_factorial(3)          # 2nd call with 3
4 * 3 * calc_factorial(2)      # 3rd call with 2
4 * 3 * 2 * calc_factorial(1)  # 4th call with 1
4 * 3 * 2 * 1                  # return from 4th call as number=1
4 * 3 * 2                      # return from 3rd call
4 * 6                          # return from 2nd call
24                             # return from 1st call
```

#### Özyineleyen Fonksiyonların Avantajları

- Özyineleyen fonksiyonlar kodun daha temiz ve zarif gözükmesini sağlar
- Karmaşık bir görev alt görevlere ayrılarak rahat çözülebilir
- İç içe döngülere göre daha iyidir

#### Özyineleyen Fonksiyonların Zararları

- Bazı durumlarda anlaşılabilmesi zordur
- Uzun tekrarlarda çok fazla vakit ve zaman harcarlar
- Hata ayıklama oldukça zordur

## Lambda Fonksiyonlar

```py
double = lambda x: x * 2 # lambda fonksiyon


def double(x): # Fonksiyon
   return x * 2
```

### Filter ile Lambda Kullanımı

Sadece koşulu sağlayan değerleri döndürür.

```py
listem = [1, 5, 4, 6, 8, 11, 3, 12]

cift_listem = list(filter(lambda x: (x%2 == 0) , listem))
print(cift_listem) # [4, 6, 8, 12]
```

### Map ile Lambda Kullanımı

Her eleman için işlem yapar.

```py
listem = [1, 5, 4, 6, 8, 11, 3, 12]

katlanmis_listem = list(map(lambda x: x * 2 , listem))
print(katlanmis_listem) # Output: [2, 10, 8, 12, 16, 22, 6, 24]
```

## Global, Local ve Nonlocal Kavramları

| Kavram     | Açıklama                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------- |
| `global`   | Tüm modülde geçerli değişkenler                                                             |
| `local`    | Fonksiyonların içerisindeki yerel değişkenler                                               |
| `nonlocal` | Modül ile fonksiyon arasında kalan, genellikle iç içe fonksiyonlarda kullanılan değişkenler |

### Global, Local ve Nonlocal Kavramlarına Örnek

```py
x = 5 # Global

def fonksiyonum():
  x = 3 # Nonlocal
  

  def degisitirici():
    x = 1 # Local

```

## Modüller

Her python dosyasına modül denir.

- `import` ile dahil edilirler
- `.` ile içlerindekilere erişilir

### Modül Kullanım Örnekleri

- Python aynı modülü birden fazla kez `import` etmez
  - Kullanıcı birden fazla `import` işlemi yaparsa tepki vermez
- Baştan `import` edilmek istenirse `imp.reload(modül)` şeklinde kullanılır

```py
import math # Doğrudan öodülü alma
print("Pi: ", math.pi) # Pi: 3.141592653589793
```

```py
import math as m # Modülü özel isimlendirme
print("Pi: ", m.pi) # Pi: 3.141592653589793
```

```py
from math import pi # Modül içinden özel değeri alma
print("Pi: ", pi) # Pi: 3.141592653589793
```

```py
from math import * # Modül içindeki her şeyi alma
print("Pi: ", pi) # Pi: 3.141592653589793
```

### Python Modül Dosyaları

Modül dosyalarının aranma yerleri:

- Çalışılan dizin
- Ortam değişkenlerindeki `PYTHONPATH` değişkeni değeri
- Kuruluma bağlı varsayılan dizin

#### Sistemin Python Modüllerine Bakma

```py
>>> import sys
>>> sys.path
['',
'C:\\Python33\\Lib\\idlelib',
'C:\\Windows\\system32\\python33.zip',
'C:\\Python33\\DLLs',
'C:\\Python33\\lib',
'C:\\Python33',
'C:\\Python33\\lib\\site-packages']
```

### Modül İçinde Tanımlanan İsimleri Alma

```py
>>> dir(example)
['__builtins__',
'__cached__',
'__doc__',
'__file__',
'__initializing__',
'__loader__',
'__name__',
'__package__',
'add']
```

```py
>>> import example
>>> example.__name__
'example'
```

```py
>>> a = 1 # Modül değişkenlerine ekleniyor
>>> b = "hello" # Modül değişkenlerine ekleniyor
>>> import math # Modül değişkenlerine ekleniyor
>>> dir()
['__builtins__', '__doc__', '__name__', 'a', 'b', 'math', 'pyscripter']
```

## Paketler (Package)

- Birden fazla modülü içinde barındırır
- `.` ile modüllere erişilir
  - Tekrar `.` atılırsa modülün içindekilere erişilir

### Paketten ve Modül Örnekleri

```py
import Game.Level.start
```

```py
from Game.Level import start
```

```py
from Game.Level.start import select_difficulty
```

## Sayılar, Sayılar Arası Dönüşüm ve Matematik

### Tabanlı Sayılar

| Taban  | Ön ek           | Örnek                | Çıktı         |
| ------ | --------------- | -------------------- | ------------- |
| 2'lik  | `0b` ya da `0B` | `print(0b1101011)`   | 107           |
| 8'lik  | `0o` ya da `0O` | `print(0xFB + 0b10)` | 253 (251 + 2) |
| 16'lık | `0x` ya da `0X` | `print(0o15)`        | 13            |

### Ondalıklı Sayılar (Decimals / Floats)

```py
>>> (1.1 + 2.2) == 3.3
False
>>> 1.1 + 2.2
3.3000000000000003
```

```py
import decimal

print(0.1) # 0.1
print(decimal.Decimal(0.1)) # Decimal('0.1000000000000000055511151231257827021181583404541015625')
```

```py
from decimal import Decimal as D

print(D('1.1') + D('2.2')) #  Decimal('3.3')
print(D('1.2') * D('2.50')) # Decimal('3.000')
```

#### Decimal Float Kullanımları ve Farkı

- Decimal daha fazla bellek kaplar
- Finansal işlemlerde decimal tercih edilir

### Kesirli Sayılar (Fractions)

```py
import fractions

print(fractions.Fraction(1.5)) # 3/2
print(fractions.Fraction(5)) # 5
print(fractions.Fraction(1,3)) # 1/3
```

```py
import fractions

# Floatlar virgülden sonra da sayı barındırdığından dolayı farklı sonuç verir
print(fractions.Fraction(1.1)) # 2476979795053773/2251799813685248
print(fractions.Fraction('1.1')) # 11/10
```

#### Kesirli Sayılarla İşlemler

```py
from fractions import Fraction as F

print(F(1,3) + F(1,3)) # 2/3
print(1 / F(5,6)) # 6/5
print(F(-3,10) > 0) # False
print(F(-3,10) < 0) # True
```

### Matematik İşlemleri

```py
import math

print(math.pi) # 3.141592653589793
print(math.cos(math.pi)) # -1.0
print(math.exp(10)) # 22026.465794806718
print(math.log10(1000)) # .0
print(math.sinh(1)) # 1.1752011936438014
print(math.factorial(6)) # 720
```

#### Matematikte Rastgelelik

```py
import random

x = ['a', 'b', 'c', 'd', 'e']

print(random.randrange(10,20)) # Rastgele 10, 20 arasında sayı yazdırma
print(random.choice(x)) # Rastgele seçim yapma
random.shuffle(x) # Karıştrma
print(x) # Karışım sonucunu yazma
print(random.random()) # Rastgele eleman yazma
```

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

## Komut Satırından Python

```py
import argparse

def main():
    # Initiate argument parser
    parser = argparse.ArgumentParser(
        description="Sample TensorFlow XML-to-CSV converter")
    parser.add_argument("-i",
                        "--inputDir",
                        help="Path to the folder where the input .xml files are stored",
                        type=str)
    parser.add_argument("-o",
                        "--outputFile",
                        help="Name of output .csv file (including path)", type=str)
    args = parser.parse_args()

    if args.inputDir is None:
        args.inputDir = os.getcwd()

    if args.outputFile is None:
        args.outputFile = args.inputDir + "/labels.csv"

    assert (os.path.isdir(args.inputDir))

    xml_df = xml_to_csv(args.inputDir)
    xml_df.to_csv(
        args.outputFile, index=None)
    print('Successfully converted xml to csv.')

if __name__ == '__main__':
    main()
```

## Colab Üzerinden Python

| Operator | Açıklama               |
| -------- | ---------------------- |
| `!`      | Bash komutları ön eki  |
| `%`      | Bash dizini ön eki (?) |

### Python Değişkenlerinin Bash Üzerinde Kullanımı

| Operatör         | Açıklama                        | Örnek                   | Çıktı  |
| ---------------- | ------------------------------- | ----------------------- | ------ |
| `$<değişken>`    | Tek değişkenler için kullanılır | `!echo $filename`       | test   |
| `{<pyton_kodu>}` | Python kodu için kullanılır     | `{"{}.test".format(1)}` | 1.test |

### Colab için Harici Bağlantılar

- [Download to Drive](https://colab.research.google.com/drive/1Cb6KcdbUHgmtmI1A86iDsJWJFClD_IeQ)

## Karma Linkler

- [String işlemleri](https://sites.google.com/site/egitimbilgileri/home/a---python---twisted---qt/03---string-islemleri)

## Harici Kaynaklar

- [Learn Python Programming](https://www.programiz.com/python-programming)
- [Python Türkçe Başlangıç](https://github.com/fuatbeser/python-notlarim/blob/master/python_turkce_baslangic.ipynb)
- [Should I use underscores or camel case for Python?](https://www.quora.com/Should-I-use-underscores-or-camel-case-for-Python)
- [Top 10 Python Libs 2017](https://tryolabs.com/blog/2017/12/19/top-10-python-libraries-of-2017/)
- [Tensorflow Object Detection API](https://buildmedia.readthedocs.org/media/pdf/tensorflow-object-detection-api-tutorial/latest/tensorflow-object-detection-api-tutorial.pdf)