# Python <!-- omit in toc -->

Farkı bir kaynak için [buraya](https://github.com/fuatbeser/python-notlarim/blob/master/python_turkce_baslangic.ipynb) tıklayabilirsin.

## İçerik <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Veri Tipleri](#veri-tipleri)
  - [Veri Tipleri Kaynakları](#veri-tipleri-kaynaklar%C4%B1)
- [Class](#class)
  - [Class Anahtar Kelimeleri](#class-anahtar-kelimeleri)
  - [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi)
  - [Metodlu Class Örneği](#metodlu-class-%C3%B6rne%C4%9Fi)
    - [Obje Özelliği Silme](#obje-%C3%B6zelli%C4%9Fi-silme)
    - [Class Silme](#class-silme)
  - [Scopes and Namespaces](#scopes-and-namespaces)
- [Karma Linkler](#karma-linkler)

## Veri Tipleri

| Tip      | Açıklama         | Örnek              |
| -------- | ---------------- | ------------------ |
| bool     | 2'li değer, bit  | `True`             |
| int      | Sayı             | `1`                |
| float    | Virgüllü sayı    | `1.2`              |
| complex  | Karmaşık sayılar | `2+3j`             |
| str      | String, metin    | `"Hello"`          |
| function | Fonksyion        | `def func(param):` |

### Veri Tipleri Kaynakları

- [Basic Data Types in Python](https://realpython.com/python-data-types/)

## Class

### Class Anahtar Kelimeleri

| Anhatar    | Açıklama                               | Örnek                                               |
| ---------- | -------------------------------------- | --------------------------------------------------- |
| `self`     | Diğer dillerdeki `this` anlamına gelir | [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi) |
| `__init__` | Constructer fonksiyonudur              | [Basit Class Örneği](#basit-class-%C3%B6rne%C4%9Fi) |
| `def function(param):`| Fonksiyon tanımalama | [Metodlu Class Örneği](#metodlu-class-%C3%B6rne%C4%9Fi) |

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