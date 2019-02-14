# OpenCart

**PHP** dilini baz alan E-Ticaret uygulamasının sitesine erişmek için  [buraya](https://www.opencart.com/index.php?route=common/home) tıklayabilirsin.

## Model View Controller Yapısı

> MVC hakkında bilgi sahibi olmak istersen [buraya](../Proje%20Y%C3%B6netimi%20Notlar%C4%B1/Proje%20Y%C3%B6netimi#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

* Lazım ise veri tabanında `[name]` adı verilen sütun oluşturulur.
  * MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.

> `[Name]` bir değişken ismidir. *Örn: product_info*

* **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  * `add*`, `edit*` metodlarındaki mySQL sorguları (*Insert, Update*) güncellenir
  * Dosya ve dizin yolları:
    * *...\webadmin\model*
    * *...\model*
    * *...\webadmin\model \ `dizin` \ `dosya adı`.php*
* **Controller** dizinindeki uygun dosyadan model yüklenir.
  * Modeli yüklenir. Kod örneği için [buraya](#Modeli%20y%C3%BCkleme) tıklayabilirsin.
  * Veri modelden alınır. Kod örneği için [buraya](#Veriyi%20modelden%20alma) tıklayabilirsin.
  * View'a veriyi gönderme: `$this->data['[name]'];`
  * Dosya ve dizin yolları:
    * *...\webadmin\controller*
    * *...\controller*
    * *...\webadmin\controller\ `dizin` \ `dosya adı`.php*
* **View** dizinindeki TPL uzantılı dosya üzerinde görsel düzenleme yapılır.
  * Dosya ve dizin yolları:
    * *...\webadmin\view*
    * *...\view*
    * *...\webadmin\view\ `dizin`\ `dosya adı`.tpl*

## CSS dosyaları

C:\xampp\htdocs\ecommerce2\catalog\view\asset\style\custom.scss

## Ana sayfaya satır ekleme

* Lazım ise veri tabanında `[name]` adı verilen sütun oluşturulur.
  * MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.
* View için değişken oluşturma. Kaynak kod örneği için [buraya](#Controller%27da%20view%20i%C3%A7in%20de%C4%9Fi%C5%9Fken%20olu%C5%9Fturma) tıklayabilirsin.
  * View kısmında  `$[veri ismi]` olarak kullanabilirsin.

## Form Ekleme

* Veri tabanında `[name]` adı verilen sütun oluşturulur.
  * MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.

  > `[Name]` bir değişken ismidir. *Örn: product_info*

* **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  * `add*`, `edit*` metodlarındaki mySQL sorguları (*Insert, Update*) güncellenir
  * *Örnek Yol: webadmin\model*
  * *Örn: C:\xampp\htdocs\ecommerce2\webadmin\model\sale\special_promotions.php*

* **Controller** dizinindeki Uygun dosyanın `getForm` metodunda entry değişkenlerini ve verileri oluşturma
  * Entry eklenir. Kaynak kodu için [buraya](#Entry%20ekleme) tıklayabilirsin.
  * Veri oluşturma. Kaynak kod için [buraya](#Form%20verisi%20olu%C5%9Fturma) tıklayabilirsin.
  * *Örnek Yol: webadmin\controller*
  * *Örn: C:\xampp\htdocs\ecommerce2\webadmin\controller\sale\special_promotions.php*
* **Languages** dizinindeki PHP uzantılı dil dosyası üzerinde değişken oluşturulur.
  * *Örnek Yol: webadmin\language\turkish*
  * *Örn: ecommerce2\webadmin\language\turkish\sale\special_promotions.php*
* **View template** dizinindeki TPL uzantılı dosya üzerinde görsel düzenleme yapılır.
  * `tr` satırı kopyalanıp, `name` değerleri `entry_[name]` yapısı ile alınır
  * *Örn: ecommerce2\webadmin\view\template\sale\special_promotions_form.tpl*

## Karma Kodlar

### MySQL Yapısı

```SQL
ALTER TABLE [Tablo] ADD COLUMN [Sütun] [Değişken Tipi] DEFAULT [Varsayılan Değeri] AFTER [Önceki Sütun];
ALTER TABLE [Tablo] DROP COLUMN [Sütun];

SELECT [ID], [Sütun] FROM [Tablo] WHERE [ID] = [Sayı];
UPDATE [Tablo] SET [Sütun] = [Değişken Tipine Uygun Değer] WHERE [ID] = [Sayı];
```

### Checkbox Kullanımı

OpenCard form verisine checkbox ekleme yapısı

```html
<tr>
    <td><?php echo $entry_[name]; ?></td>
    <td>
        <input type="checkbox" name="[name]" value="1" <?php if($[name]) echo 'checked="checked"'; ?> />
    </td>
</tr>
```

> `name` Değişken ismi

### MVC Yapısı

> MVC yapısına yönelmek için [buraya](#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

#### Modeli yükleme

```php
$this->load->model('catalog/manufacturer');
```

#### Veriyi modelden alma

```php
$[veri adı] = $this->[model]->[get metodu]();
```

### Form Kodları

> Form Ekleme alnına yönelmek için [buraya](#Form%20Ekleme) tıklayabilirsin.

#### Entry ekleme

```php
$this->data['entry_[name]'] = $this->language->get('entry_[name]');
```

#### Form verisi oluşturma

 ```php
// special_promotion için örnek kod parçası
if (isset($this->request->post['[name]'])) {
    $this->data['[name]'] = $this->request->post['[name]'];
} elseif (!empty($special_promotion)) {
    $this->data['[name]'] = $special_promotion['[name]'];
} else {
    $this->data['[name]'] = 0; // Default value
}
```

> Veri oluşturulmazsa `TLP` (front-end) kısmında görmez. `$special_promotion` geçici örnektir.

### Controller'da view için değişken oluşturma

```php
$[veri ismi] = $this->model_catalog_manufacturer->getManufacturers();

foreach ($[veri ismi] as $[veri parçası]) {
    $this->data['[veri ismi]'][$[veri parçası]['[özellik1]']] = array(
        '[özellik2]' => $[veri parçası]['[özellik]'],
        '[özellik3]' => $[veri parçası]['[özellik]']
    );
}
```