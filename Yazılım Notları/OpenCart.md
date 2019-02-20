# OpenCart <!-- omit in toc -->

**PHP** dilini baz alan E-Ticaret uygulamasının sitesine erişmek için  [buraya](https://www.opencart.com/index.php?route=common/home) tıklayabilirsin.

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [Model View Controller Yapısı](#model-view-controller-yap%C4%B1s%C4%B1)
- [CSS dosyaları](#css-dosyalar%C4%B1)
- [Ana sayfaya satır ekleme](#ana-sayfaya-sat%C4%B1r-ekleme)
- [Form Ekleme](#form-ekleme)
- [Filtreleme](#filtreleme)
- [Karma Kodlar](#karma-kodlar)
  - [MySQL Yapısı](#mysql-yap%C4%B1s%C4%B1)
  - [Checkbox Kullanımı](#checkbox-kullan%C4%B1m%C4%B1)
  - [MVC Yapısı](#mvc-yap%C4%B1s%C4%B1)
    - [Modeli yükleme](#modeli-y%C3%BCkleme)
    - [Veriyi modelden alma](#veriyi-modelden-alma)
    - [Veriyi view'a gönderme](#veriyi-viewa-g%C3%B6nderme)
  - [Form Kodları](#form-kodlar%C4%B1)
    - [Entry ekleme](#entry-ekleme)
    - [Form verisi oluşturma](#form-verisi-olu%C5%9Fturma)

## Model View Controller Yapısı

> MVC hakkında bilgi sahibi olmak istersen [buraya](../Proje%20Y%C3%B6netimi%20Notlar%C4%B1/Proje%20Y%C3%B6netimi#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

- Lazım ise veri tabanında `[name]` adı verilen sütun oluşturulur.
  - MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.

> `[Name]` bir değişken ismidir. *Örn: product_info*

- **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  - `add*`, `edit*` metodlarındaki mySQL sorguları (*Insert, Update*) güncellenir
  - Dosya ve dizin yolları:
    - *...\webadmin\model*
    - *...\model*
    - *...\webadmin\model \ `dizin` \ `dosya adı`.php*
- **Controller** dizinindeki uygun dosyadan model yüklenir.
  - Model yüklenir. Kod örneği için [buraya](#Modeli%20y%C3%BCkleme) tıklayabilirsin.
  - Veri modelden alınır. Kod örneği için [buraya](#Veriyi%20modelden%20alma) tıklayabilirsin.
  - View'a veriyi gönderme: Kod örneği için [buraya](#Veriyi%20view%27a%20g%C3%B6nderme) tıklayabilirsin.
  - Dosya ve dizin yolları:
    - *...\webadmin\controller*
    - *...\controller*
    - *...\webadmin\controller\ `dizin` \ `dosya adı`.php*
  > `$data` değikeni içindeki veriler *view*'a iletilir.
- **View** dizinindeki TPL uzantılı dosya üzerinde görsel düzenleme yapılır.
  - Dosya ve dizin yolları:
    - *...\webadmin\view*
    - *...\view*
    - *...\webadmin\view\ `dizin`\ `dosya adı`.tpl*

## CSS dosyaları

C:\xampp\htdocs\ecommerce2\catalog\view\asset\style\custom.scss

## Ana sayfaya satır ekleme

- Lazım ise veri tabanında `[name]` adı verilen sütun oluşturulur.
  - MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.
- View için değişken oluşturma. Kaynak kod örneği için [buraya](#Controller%27da%20view%20i%C3%A7in%20de%C4%9Fi%C5%9Fken%20olu%C5%9Fturma) tıklayabilirsin.
  - View kısmında  `$[veri ismi]` olarak kullanabilirsin.

## Form Ekleme

- Veri tabanında `[name]` adı verilen sütun oluşturulur.
  - MySQL sorgu örneği için [buraya](#MySQL%20Yapısı) tıklayın.

  > `[Name]` bir değişken ismidir. *Örn: product_info*

- **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  > MySQL üzerindeki verileri sorgular yardımıyla projeye ekleyen yapıdır.
  - `add*`, `edit*` metodlarındaki mySQL sorguları (*Insert, Update*) güncellenir
  - *Örnek Yol: webadmin\model*
  - *Örn: C:\xampp\htdocs\ecommerce2\webadmin\model\sale\special_promotions.php*

- **Controller** dizinindeki Uygun dosyanın `getForm` metodunda entry değişkenlerini ve verileri oluşturma
  > Veriler $data değişkeni ile *.tpl* uzantılı dosyaya aktarılır.
  - Entry eklenir. Kaynak kodu için [buraya](#Entry%20ekleme) tıklayabilirsin.
  - Veri oluşturma. Kaynak kod için [buraya](#Form%20verisi%20olu%C5%9Fturma) tıklayabilirsin.
  - *Örnek Yol: webadmin\controller*
  - *Örn: C:\xampp\htdocs\ecommerce2\webadmin\controller\sale\special_promotions.php*
- **Languages** dizinindeki PHP uzantılı dil dosyası üzerinde değişken oluşturulur.
  > Dillere özgü metinler oluşturmak adına kullanılır.
  - *Örnek Yol: webadmin\language\turkish*
  - *Örn: ecommerce2\webadmin\language\turkish\sale\special_promotions.php*
- **View template** dizinindeki *.tpl* uzantılı dosya üzerinde görsel düzenleme yapılır.
  > Front-end kısmıdır.
  - `tr` satırı kopyalanıp, `name` değerleri `entry_[name]` yapısı ile alınır
  - *Örn: ecommerce2\webadmin\view\template\sale\special_promotions_form.tpl*

## Filtreleme

$results = $this->model_sale_order->getOrders($data);

- **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  > MySQL üzerindeki verileri sorgular yardımıyla projeye ekleyen yapıdır.
  - `get*s`, `getTotal*s` metodlarındaki mySQL sorguları güncellenir. Kaynak kodu için [buraya](#Filtreleme%20Sorgusu) tıklayabilirsin.
    > `$data` değişkeninin kullanıldığı alanlar güncellenir.
  - *Örnek Yol: webadmin\model*
  - *Örn: C:\xampp\htdocs\ecommerce2\webadmin\model\sale\order.php*
- **Controller** dizinindeki Uygun dosyanın `getList` metodunda filtreleme değişkenlerini (filters) ve verileri oluşturma
  > Veriler $data değişkeni ile *.tpl* uzantılı dosyaya aktarılır.
  - Filtreleme değişkeni (filter) eklenir. Kaynak kodu için [buraya](#Filtreleme%20de%C4%9Fi%C5%9Fkeni%20olu%C5%9Fturma) tıklayabilirsin.
  - Veri (data) oluşturma. Kaynak kod için [buraya](#Filtreleme%20verisini%20olu%C5%9Fturma) tıklayabilirsin.
  - *Örnek Yol: webadmin\controller*
  - *Örn: C:\xampp\htdocs\ecommerce2\webadmin\controller\sale\order.php*

- **View** kısmında filtre ekleme alanı oluştulur. Kaynak kod için [buraya](#Filtre%20Alan%C4%B1%20Ekleme) tıklayabilirsin.
  - Filtreleme butonunun js kısmındaki `filter()` metodunda güncelleme yapılır. Kaynak kod için [buraya](#Filtreleme%20filter%28%29%20metodu) tıklayabilirsin.

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

> MVC yapısına yönelmek için [buraya](#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

#### Veriyi modelden alma

```php
$[veri adı] = $this->[model]->[get metodu]();
```

> MVC yapısına yönelmek için [buraya](#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

#### Veriyi view'a gönderme

```php
$this->data['[name]'];
```

> MVC yapısına yönelmek için [buraya](#Model%20View%20Controller%20Yap%C4%B1s%C4%B1) tıklayabilirsin.

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
    $this->data['[name]'] = $[değişken]['[name]'];
} else {
    $this->data['[name]'] = 0; // Default value
}
```

- `[değişken]` Model ile alınan mySQL verilerini tutan değişken
  > Tablo değişkeni için `$special_promotion` veya `$order_info` örnek olabilir.
- `[name]` MySQL sütun ismi
  > Sütun ismi için `$product_info` örnek olabilir.

> Veri oluşturulmazsa `TLP` (front-end) kısmında görmez.

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

## Filtreleme Kodları

> Filtre ekleme alanına gitmek için [buraya](#Filtreleme) tıklayabilirsin.

### Filtre Alanı Ekleme

```php
<?php
<select name="filter_[names]">
    <?php foreach ($[names] as $[name]) { ?>
        <?php if ($[name]['[name_id]'] == $[name_id]) { ?>
        <option value="<?php echo $[name][[name_id]]; ?>" selected="selected"><?php echo $[name]['name']; ?></option>
        <?php } else { ?>
        <option value="<?php echo $[name][[name_id]]; ?>"><?php echo $[name]['name']; ?></option>
        <?php } ?>
    <?php } ?>
</select>
```

### Filtreleme değişkeni oluşturma

```php
if (isset($this->request->get['[filter_name]'])) {
    $[filter_[name]] = $this->request->get['filter_name'];
} else {
    $filter_store_id = null;
}
```

- `[name]` MySQL sütununua eş değer değişken ismidir.

### Filtreleme verisini oluşturma

```php
$data = array(
    'filter_[name]' => $filter_[name];
);
```

- `[name]` MySQL sütununua eş değer değişken ismidir.

> Data verisinde birden fazla değişken olabilir. Örn:

```php
$data = array(
    'filter_store_id'        => $filter_store_id,
    'filter_store_name'      => $filter_store_name,
    'filter_order_id'        => $filter_order_id,
    'filter_customer'        => $filter_customer,
    'filter_order_status_id' => $filter_order_status_id,
    'filter_total'           => $filter_total,
    'filter_date_added'      => $filter_date_added,
    'filter_date_modified'   => $filter_date_modified,
    'filter_payment_method'  => $filter_payment_method,
    'filter_[name]'          => $filter_[name],
    'sort'                   => $sort,
    'order'                  => $order,
    'start'                  => ($page - 1) * $this->config->get('config_admin_limit'),
    'limit'                  => $this->config->get('config_admin_limit')
);
```

### Filtreleme URL'i oluşturma

```php
if (isset($this->request->get['filter_[name]'])) {
    $url .= '&filter_[name]=' . $this->request->get['filter_[name]'];
}
```

> Her `$url = '';` aşaması için üstteki yapılır.

```php
$this->data['filter_[name]'] = $filter_[name];
```

- `[name]` MySQL sütununua eş değer değişken ismidir.

### Filtreleme Sorgusu

```php
if (!empty($data['filter_[name]'])) {
    $sql .= " AND [tablo].[name] = '" . $this->db->escape($data['filter_[name]']) . "'";
}
```

### Filtreleme filter() metodu

```php
var filter_[name] = $('select[name=\'filter_[name]\']').val();

if (filter_[name]) {
    url += '&filter_[name]=' + encodeURIComponent(filter_[name]);
}
```

- `[name]` MySQL sütununua eş değer değişken ismidir.