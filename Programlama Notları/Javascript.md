# Javascript

Javascript DOM komutlarını özetleyen bir derlemedir.

## İndeksleme

* [Temel Bilgiler](#Temel%20Bilgiler)
* [DOM Bilgileri](#DOM%20Bilgileri)
  * [Dosya İndirme İşlemleri](#Dosya%20%C4%B0ndirme%20%C4%B0%C5%9Flemleri)
    * [URI ile indirme](#URI%20ile%20dosya%20indirme)
    * [Çoklu URL ile indirme](#%C3%87oklu%20URL%20ile%20indirme)
    * [JSON olarak indirme](#JSON%20olarak%20indirme)
    * [Ek Notlar](#Ek%20Notlar)
  * [HTML Elemanı Alma](#HTML%20Eleman%C4%B1%20Alma)
    * [HTMLCollection'u array'e dönüştürmek](#HTMLCollection%27u%20array%27e%20d%C3%B6n%C3%BC%C5%9Ft%C3%BCrmek)
    * [HTML Attribute Alma](#HTML%20Attribute%20Alma)
    * [HTML elemanının alt elemanlarını alma](#HTML%20eleman%C4%B1n%C4%B1n%20alt%20elemanlar%C4%B1n%C4%B1%20alma)
    * [HTML Elemanının Konumunu Alma](#HTML%20Eleman%C4%B1n%C4%B1n%20Konumunu%20Alma)
  * [Sayfa İşlemleri](#Sayfa%20%C4%B0%C5%9Flemleri)
  * [Zamanlayıcı](#Zamanlay%C4%B1c%C4%B1)
* [Karma Linkler](#Karma%20Linkler)

## Temel Bilgiler

* [For Each Kullanımı](https://stackoverflow.com/a/9329476)
* [Array](https://www.w3schools.com/js/js_arrays.asp)

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

## DOM Bilgileri

Notların linklerine bakmak için [buraya](#Ek%20Notlar) tıklayabilirsin.

### Dosya İndirme İşlemleri

**Chrome** `click()` metodunu  destekleyemeyebiliyor.. 😭 (*Edge kullanınız.* 😏)

> **Popup Blocker** gibi eklentiler ekliyse kapatmanız gerekmekte.

#### URI ile dosya indirme

Geçici HTMLElement ile bu işlemi yapabiliriz.

```js
function downloadURI(uri, name) {
    const link = document.createElement("a");

    link.download = name;
    link.href = uri;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    delete link;
}
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

#### Çoklu URL ile indirme

```js
function downloadArrayUrlWithKey(array, key) {
    array.forEach(element => {
        const url = element[key];
        const fileName = url.split("/").pop();

        downloadURI(url, fileName);  
        sleep(100); // Bekleme olmazsa chrome her dosyayı indirmiyor
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

#### JSON olarak indirme

Verilen json objesi istenen isimle indiren fonksiyon. Detayları için [buraya](https://stackoverflow.com/a/30800715) tıklayabilirsin.

```javascript
/**
 * JSON objesi indirme
 * @param {JSON} exportObj İndirilecek JSON objesi
 * @param {string} exportName İndirilen dosyanın ismi
 */
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
```

**Kullanımı:**

```js
var exampleData = {
    "name" : "temp"
}

downloadObjectAsJson(exampleData, "champs.json");
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

#### Ek Notlar

* [Dosya indirme](https://www.w3schools.com/jsref/prop_anchor_download.asp) | [URL ile indirme](https://stackoverflow.com/a/34694012)

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### HTML Elemanı Alma

```javascript
document.getElementById('id'); // HTML elemanı döndürür (object)
document.getElementsByTagName('tag_name');  // HTML elemanları dizisi döndürür (HTMLCollection)
document.getElementsByClassName('class_name'); // HTML elemanları dizisi döndürür (HTMLCollection)
document.getElementsByName('name');  // HTML elemanları dizisi döndürür (HTMLCollection)
```

* `Id` *Kimlik verisi*
* `Tag` *a, div, i, p, input, article ...*
* `Class` *Css dosyasındaki classları ifade eden alanlar*
* `Name` *Inputlarda sıklıkla kullanınlan alanlar*

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### HTML elemanının alt elemanlarını alma

```js
document.getElementById('id').childNodes;
```

* `Id` *Kimlik verisi*
* `document.getElementById('id')` *HTMLElemanı*

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### HTMLCollection'u array'e dönüştürmek

```javascript
const array = [...htmlCollection] // array: Array objesidir
array.forEach(element => { // Arraydeki her bir elemanı işleme
    // element.method()
});
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### HTML Attribute Alma

*Tag* özellikleri olarak geçer. Örn; src, href, data-thumb-url, ...

> <a class="" href="" ...> </a> Tag içindeki kısımlar (class, href)

```javascript
document.getElementById('id').getAttribute('attribute') // Özelliğin değerini döndürür (string)
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### HTML Elemanının Konumunu Alma

```js
document.getElementById('id').getBoundingClientRect();
```

* `Id` *Kimlik verisi*

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### Sayfa İşlemleri

```js
window.scrollBy(x, y); // Verilen değer kadar kayma
window.scrollTo(x, y); // Verilen değere gitme

window.scrollBy(5, 100); // Örnek kaydırma
window.scrollTo(5, 100); // Örnek atlama
```

* `x` Yatay konum
* `y` Dikey konum

```js
function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10); // 10ms de bir kaydırma
}
```

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

### Zamanlayıcı

Kaynak için [buraya](https://www.w3schools.com/jsref/met_win_settimeout.asp) tıklayabilirsin.

```js
setTimeout(func, delay); // Temel kullanım
setTimeout(function(){ alert('Hello'); }, 2000); // Fonksiyonu içeride tanımlama
setTimeout(help, 2000); // Fonksiyonu dışarıda tanımlama
setTimeout(function(){ help(1); help(2); }, 2000); // Paremetreli fonksyion kullanma

clearTimeout(); // Zamanlayıcıları temizleme
```

* `func` Paremetresiz fonksiyon
* `delay` Gecikme süresi (ms)

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.

## Karma Linkler

* [Callback yerine Async Kullanma](https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99)
* [Async & Await](https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c)
* [Sayfanın en altına inmek](https://stackoverflow.com/a/11715670)

> İndeksleme alanına yönelmek için [buraya](#%C4%B0ndeksleme) tıklayabilirsin.