# Javascript

Javascript DOM komutlarını özetleyen bir derlemedir.

## Temel Bilgiler

* [For Each Kullanımı](https://stackoverflow.com/a/9329476)
* [Array](https://www.w3schools.com/js/js_arrays.asp)

## DOM Bilgileri

Notların linklerine bakmak için [buraya](#Ek%20Notlar) tıklayabilirsin.

### Dosya İndirme İşlemleri

> **Chrome** `click()` metodunu  destekleyemeyebiliyor.. 😭 (*Edge kullanınız.* 😏) 

>**Popup Blocker** gibi eklentiler ekliyse kapatmanız gerekmekte.


#### URI ile indirme

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

**Çoklu URL indirme:**

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

#### Ek Notlar

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

## Karma Linkler

* [Callback yerine Async Kullanma](https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99)
* [Async & Await](https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c)