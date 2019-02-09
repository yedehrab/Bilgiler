# OpenCart

**PHP** dilini baz alan E-Ticaret uygulamasının [buraya](https://www.opencart.com/index.php?route=common/home) tıklayarak sitesine erişebilirsiz.

## Form Ekleme

> `[Name]` bir değişken ismidir. *Örn: product_info*

* Veri tabanında `[name]` adı verilen sütun oluşturulur.
  * MySQL sorgu örneği için [buraya](#MySQL%20Yapısı)

* **Controller** dizinindeki Uygun dosyanın `getForm` metodunda entry değişkenlerini ve verileri oluşturma
  * Entry ekleme: `$this->data['entry_[name]'] = $this->language->get('entry_[name]');`

  * Veri oluşturma:
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

  * *Örnek Yol: webadmin\controller*

  * *Örn: C:\xampp\htdocs\ecommerce2\webadmin\controller\sale\special_promotions.php*

* **Model** dizinindeki gerekli veri tabanı metodlarını güncelleme
  * `add*`, `edit*` metodlarındaki mySQL sorguları (*Insert, Update*) güncellenir
  * *Örnek Yol: webadmin\model*
  * *Örn: C:\xampp\htdocs\ecommerce2\webadmin\model\sale\special_promotions.php*

* **Languages** dizinindeki PHP uzantılı dil dosyası üzerinde değişken oluşturulur.
  * *Örnek Yol: webadmin\language\turkish*
  * *Örn: ecommerce2\webadmin\language\turkish\sale\special_promotions.php*

* **View template** dizinindeki TPL uzantılı dosya üzerinde görsel düzenleme yapılır.
  * `tr` satırı kopyalanıp, `name` değerleri `entry_[name]` yapısı ile alınır
  * *Örn: ecommerce2\webadmin\view\template\sale\special_promotions_form.tpl*

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

* `name` Değişken ismi