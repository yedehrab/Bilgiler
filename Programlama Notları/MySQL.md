# MySQL

MySQL workbench üzerinden SQL editörünü kullanabilirsin.

## Veri tipleri

| Değişken Tipi | Açıklama | Not |
|---------------|----------|-----|
| `BIT` |  0-1 (True - False) verilerini tutar. | Değer atanırken tırnaksız atanır |
| `INT` | Tam sayı değeri tutar | Basmak sayısı 1 için 0-9 arası |
| `ENUM` | Özel değişken oluşturma | Değerler tırnaklı olarak atanır |

> Örnekler için [değişkenler](#De%C4%9Fi%C5%9Fkenler) kısmına bakabilirsin.

## Where Operatörleri

Detaylar için [buraya](https://www.tutorialspoint.com/sql/sql-operators.htm) tıklayabilirsin.

## Tablo İşlemleri

* [Ekleme](http://www.mysqltutorial.org/mysql-add-column/)

### Karma Notlar

* [Var olan tabloya varsayılan değerli bir sütun ekleme](https://stackoverflow.com/a/92123)

## Temel Fonksiyonlar

| Fonksiyon | Özelliği |
|:---------:|----------|
| `MAX` | En yüksek değeri bulur |
| `MİN` | En düşük değeri bulur |
| `AVG` | Ortalama değeri bulur |
| `COUNT` | Adet saysını hesaplar |
| `SUM` | Toplam değeri hesaplar |
| `CONCAT` | Verilen metinleri birleştirir |

> Örnekler için [temel fonksiyon örnekleri](#Temel%20Fonksiyon%20%C3%96rnekleri) kısmına bakabilirsin.

## Gruplama

---

`GROUP BY` ile yapılır.

* Tekrarlı verileri göstermez.
* `DISTINCT` anahtar kelimesini kullanmaya gerek kalmaz.

> Gruplama yapılmazsa tek sorgu ekrana basılır.

![gruplama](/images/group-by.jpg)

## Stored Function

---

Detaylı bilgi için [buraya](http://www.mysqltutorial.org/mysql-stored-function/) tıklayaibilirsin.

```SQL
DROP FUNCTION IF EXISTS [FunctionName];
CREATE FUNCTION [FunctionName]([ParamName] [ParamType]) RETURNS [ReturnType]
    DETERMINISTIC
BEGIN
    DECLARE [paramName] [param_type];

    RETURN ( [select_query] );
END;

-- Kullanım Şekli
SELECT
    [FunctionName]([Param])
FROM
    [Table] as [TableNewName]`;
```

---

* `DROP FUNCTION IF EXIST` Fonksiyon daha önceden var ise kaldırır.
* `CREATE FUNCTION` Fonksiyon oluşturma
* `RETURNS` Fonksiyonun değer döndürmesi
* `BEGIN` Fonksiyon başlangıcı
* `DECLARE` Fonksiyona özgü değişken tanımlama alanı
* `END` Fonksiyon sonu

---

* **[FunctionName]**: *Fonksiyonun ismi, örn: GetProductName*
* **[ParamName]**: *Parametre ismi, örn: name*
* **[ParamType]**: *Int, Varchar, Float ...*
* **[ReturnType]**: *Fonksiyonun döndüreceği sütunun özelliği, Örn: Varchar(64), int(11), double*
* **Deterministic**: *Aynı girdiler için her zaman aynı değeri üretir.*
* **[select_query]**: *Örn: SELECT * from table;*
  * ***[ReturnType]** ile aynı olmak zorundadır.*

## Debug Bilgileri

---

### Join

`INNER JOIN` hataları test etmek için `LEFT JOIN` kullanılır. Bu hatalar:

* Boş veri döndürmesi

olabilir.


### Explain

Sorgu ile ilgili detayları gösterir.

```SQL
explain SELECT * from table;
```

![explain-select](/images/explain-select.jpg)

## Optimizasyon

Optimizasyon sorgunun hızlı sonuç vermesi için gereklidir. Optimizasyon işlemleri için:

* Indexleme
* Key ile birleştirme (inner join)
* Ek fonksiyonları kaldırma
* `explain` anahtar kelimesi ile sorgu detaylarına bakma

gibi işlemlere başvurulur.

> 5s'den kısa sorgular kabul edilebilir hızdadır.

### Ek Kaynaklar

Optimizasyon hakkında detaylı bilgi için [buraya](https://www.sitepoint.com/optimize-mysql-indexes-slow-queries-configuration/) tıklayabilirsiniz.

* [MySQL'de sorguların hızlı çalışması için ne yapılmalıdır?](https://uzmanim.net/soru/mysql-de-sorgularin-hizli-calismasi-icin-ne-yapilabilir/790)
* [Indexleme neden yapılır?](https://www.sinanbozkus.com/veritabanlarinda-indexleme-mantigi/#more-78)

## Karma Notlar

* [Getting Last Record](https://dzone.com/articles/get-last-record-in-each-mysql-group)
* [Select içinde if kullanma](https://stackoverflow.com/a/63480)
* [Koşullu Sayma](https://stackoverflow.com/a/9798978)
* [En yüksek değer sahip satırı alma](https://stackoverflow.com/a/11913444)
* [Sadece en yüksek değere eşit olan satırları alma](https://stackoverflow.com/a/7745635) <- Optimize Edilmiş

## Örnekler

### Değişkenler

```sql
ALTER TABLE [tablo ismi] ADD COLUMN [sütun ismi] BIT DEFAULT 0; -- veya False
ALTER TABLE [tablo ismi] ADD COLUMN [sütun ismi] INT(1) DEFAULT 1;
ALTER TABLE [tablo ismi] ADD COLUMN [sütun ismi] ENUM('0', '1') DEFAULT '0';
```

> Yönelmek için [veri tipleri](#Veri%20tipleri) linkine tıklayabilirsin.

### Temel Fonksiyon Örnekleri

```SQL
SELECT MAX(*) FROM Ogrenci;
SELECT MIN(*) FROM Ogrenci;
SELECT AVG(*) FROM Ogrenci;
SELECT COUNT(*) FROM Ogrenci;
SELECT ... WHERE CONCAT("product_id=", "208") = "product_id=208";
```

> Yönelmek için [temel fonksiyonlar](#Temel%20Fonksiyonlar) yazısına bakabilirsin.

### Karma MySQL sorgusu örnekleri

```SQl
SELECT COUNT(if(`crr`.`return_reason_id` = 14, `crr`.`return_reason_id`, null)) from ...
```

> Koşul sağlanırsa sayar.


![mysql-ex1](/images/mysql-ex-1.jpg)
