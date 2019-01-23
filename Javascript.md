# Javascript

Javascript DOM komutlarını özetleyen bir derlemedir.

## Temel Bilgiler

* [For Each Kullanımı](https://stackoverflow.com/a/9329476)
* [Array](https://www.w3schools.com/js/js_arrays.asp)

## DOM Bilgileri

* [Dosya indirme](https://www.w3schools.com/jsref/prop_anchor_download.asp) | [URL ile indirme](https://stackoverflow.com/a/34694012)

## HTML Elemanı Alma

* `Id` *Kimlik verisi*
* `Tag` *a, div, i, p, input, article ...*
* `Class` *Css dosyasındaki classları ifade eden alanlar*
* `Name` *Inputlarda sıklıkla kullanınlan alanlar*

```javascript
document.getElementById('id'); // HTML elemanı döndürür (object)
document.getElementsByTagName('tag_name');  // HTML elemanları dizisi döndürür (HTMLCollection)
document.getElementsByClassName('class_name'); // HTML elemanları dizisi döndürür (HTMLCollection)
document.getElementsByName('name');  // HTML elemanları dizisi döndürür (HTMLCollection)
```

### HTMLCollection'u array'e dönüştürmek

```javascript
const array = [...htmlCollection] // array: Array objesidir
array.forEach(element => { // Arraydeki her bir elemanı işleme
    // element.method()
});
```

### HTML Attribute Alma

*Tag* özellikleri olarak geçer. Örn; src, href, data-thumb-url, ...

> <a class="" href="" ...> </a> Tag içindeki kısımlar (class, href)

```javascript
document.getElementById('id').getAttribute('attribute') // Özelliğin değerini döndürür (string)
```
