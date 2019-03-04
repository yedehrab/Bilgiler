# Tensorflow  <!-- omit in toc -->

- Python dili üzerinde makine öğrenimi gibi işlemler için kullanılan kütüphanedir.
- *PDF* açıklaması için [buraya](https://buildmedia.readthedocs.org/media/pdf/tensorflow-object-detection-api-tutorial/latest/tensorflow-object-detection-api-tutorial.pdf) tıklayabilirsin.
- *Video* açıklaması için [buraya](https://youtu.be/COlbP62-B-U) tıklayabilirsin.

> Tüm komutlar **Anaconda Prompt** üzerinden yazılmalıdır.

## İçerikler <!-- omit in toc -->

- [Tensorflow Kurulumu](#tensorflow-kurulumu)
  - [Anaconda Kurulumu](#anaconda-kurulumu)
  - [Tensorflow CPU](#tensorflow-cpu)
    - [Sanal Ortam Oluşturma ve Üzerine Kurma](#sanal-ortam-olu%C5%9Fturma-ve-%C3%BCzerine-kurma)
    - [Kurulumu Test Etme](#kurulumu-test-etme)
- [Tensorflow Modellerinin Kurulumu](#tensorflow-modellerinin-kurulumu)
  - [Gereksinimlerin Kurulumu](#gereksinimlerin-kurulumu)
  - [Tensorflow Modellerinin İndirilmesi](#tensorflow-modellerinin-i%CC%87ndirilmesi)
  - [Protobuflarların İşlenmesi](#protobuflarlar%C4%B1n-i%CC%87%C5%9Flenmesi)
  - [Obje Algılama Kütüphanelerinin Derlenmesi ve Yüklenmesi](#obje-alg%C4%B1lama-k%C3%BCt%C3%BCphanelerinin-derlenmesi-ve-y%C3%BCklenmesi)
  - [Gerekli Ortam Değişkenlerinin Tanımlanması](#gerekli-ortam-de%C4%9Fi%C5%9Fkenlerinin-tan%C4%B1mlanmas%C4%B1)
  - [Modellerin Kurulumunu Test Etme](#modellerin-kurulumunu-test-etme)
- [LabelImg Kurulumu](#labelimg-kurulumu)
  - [LabelImg için Sanal Ortam Oluşturma](#labelimg-i%C3%A7in-sanal-ortam-olu%C5%9Fturma)
  - [LabelImg Paketlerini Kurma ve Derleme](#labelimg-paketlerini-kurma-ve-derleme)
  - [LabelImg Kurulumunu Test Etme](#labelimg-kurulumunu-test-etme)
- [Web Kamerası Kullanarak Obje Tespit Etme](#web-kameras%C4%B1-kullanarak-obje-tespit-etme)
- [Özelleştirilmiş Tensorflow Obje Algılayıcısı Eğitme](#%C3%B6zelle%C5%9Ftirilmi%C5%9F-tensorflow-obje-alg%C4%B1lay%C4%B1c%C4%B1s%C4%B1-e%C4%9Fitme)
  - [Hazırlık Aşamları ve Gidişat](#haz%C4%B1rl%C4%B1k-a%C5%9Famlar%C4%B1-ve-gidi%C5%9Fat)
  - [Çalışma Ortamını ve Eğitim Dosyalarını Ayarlama](#%C3%A7al%C4%B1%C5%9Fma-ortam%C4%B1n%C4%B1-ve-e%C4%9Fitim-dosyalar%C4%B1n%C4%B1-ayarlama)
    - [Çalışma Ortamının Hazırlanması](#%C3%A7al%C4%B1%C5%9Fma-ortam%C4%B1n%C4%B1n-haz%C4%B1rlanmas%C4%B1)
  - [Resim Etiketleme İşlemi](#resim-etiketleme-i%CC%87%C5%9Flemi)
  - [Etiket Haritası Oluşturma](#etiket-haritas%C4%B1-olu%C5%9Fturma)
  - [Tensorflow Kayıtları Oluşturma](#tensorflow-kay%C4%B1tlar%C4%B1-olu%C5%9Fturma)
    - [XML'i CSV'ye Çevirme](#xmli-csvye-%C3%A7evirme)
    - [CSV'yi Record'a Çevirme](#csvyi-recorda-%C3%A7evirme)
  - [Bağlantıları (pipeline) Yapılandırma](#ba%C4%9Flant%C4%B1lar%C4%B1-pipeline-yap%C4%B1land%C4%B1rma)
    - [Modellin İndirilmesi ve Gerekli Yere Taşınması](#modellin-i%CC%87ndirilmesi-ve-gerekli-yere-ta%C5%9F%C4%B1nmas%C4%B1)
    - [Modellin Yapılandırma Dosyaları](#modellin-yap%C4%B1land%C4%B1rma-dosyalar%C4%B1)
    - [Modelin Yapılandırma Dosyasını Düzenleme](#modelin-yap%C4%B1land%C4%B1rma-dosyas%C4%B1n%C4%B1-d%C3%BCzenleme)
  - [Modeli Eğitme](#modeli-e%C4%9Fitme)
    - [Çalışma Dizinini Oluşturma](#%C3%A7al%C4%B1%C5%9Fma-dizinini-olu%C5%9Fturma)
    - [Model Eğitimini Başlatma](#model-e%C4%9Fitimini-ba%C5%9Flatma)
    - [Eğitime Başladığında Gelen Örnek Çıktı](#e%C4%9Fitime-ba%C5%9Flad%C4%B1%C4%9F%C4%B1nda-gelen-%C3%B6rnek-%C3%A7%C4%B1kt%C4%B1)
    - [Eğitimi Etkileyen Faktörler](#e%C4%9Fitimi-etkileyen-fakt%C3%B6rler)
    - [Eğitim İşlemini TensorBoard Kullanarak Takip Etme](#e%C4%9Fitim-i%CC%87%C5%9Flemini-tensorboard-kullanarak-takip-etme)
    - [Sonuç Grafiğini Dışarı Aktarma](#sonu%C3%A7-grafi%C4%9Fini-d%C4%B1%C5%9Far%C4%B1-aktarma)
  - [Hata Notları ve Açıklamaları](#hata-notlar%C4%B1-ve-a%C3%A7%C4%B1klamalar%C4%B1)
- [Colab Üzerinden Tensorflow Modeli Kullanma](#colab-%C3%BCzerinden-tensorflow-modeli-kullanma)
- [Harici Bağlantılar](#harici-ba%C4%9Flant%C4%B1lar)

## Tensorflow Kurulumu

- Tensorflow anaconda üzerinden daha sağlıklı, taşınabilir ve verimli çalışabilmekte
- Anacondanın sanal ortamları paketlerin çakışmasını engelleyecektir
- Anaconda'nın tensorflowdaki avantajı için [buraya](https://www.anaconda.com/tensorflow-in-anaconda/) göz atabilirsin.

### Anaconda Kurulumu

- Anaconda kurulumu için [buraya](../Uygulama%20Notlar%C4%B1/Anaconda.md#anaconda-kurulumu) tıklayarak onun için hazırladığım dökümana erişebilirsin.

### Tensorflow CPU

- Bu kurulum CPU kurulumu olarak da geçmekte
- GPU kurulumu CPU'ya nazaran oldukça hızlı eğitim seçeneği sağlar
- GPU kurulumu için gereksinimleri sağlıyorsanız GPU kurulumu (tensorflow-gpu) yapmanız tavsiye edilir

#### Sanal Ortam Oluşturma ve Üzerine Kurma

```sh
conda create -n tensorflow_cpu tensorflow
```

#### Kurulumu Test Etme

Alttaki komnut ile 'Hello, TensorFlow!' çıktısın almanız gerekmektedir.

```sh
python -c
>>> import tensorflow as tf
>>> hello = tf.constant('Hello, TensorFlow!')
>>> sess = tf.Session()
>>> print(sess.run(hello))
```

## Tensorflow Modellerinin Kurulumu

- Modellere erişmek için [buraya](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md) tıklayabilirsin.
- Video üzerinden açıklama için [buraya](https://youtu.be/COlbP62-B-U) bakabilirsin.

### Gereksinimlerin Kurulumu

Tensorflow modellerini kullanabilmek için alttaki kurulumlara da ihtiyaç olabilmekte:

```sh
conda install -c anaconda opencv pillow lxml matplotlib jupyter protobuf pandas
```

### Tensorflow Modellerinin İndirilmesi

Alttaki talimatler ve komutlar yardımıyla tensorflow modellerini kurun:

- Modelleri indirmek için [buraya](https://github.com/tensorflow/models/archive/master.zip) tıklayabilirsin
- İstersen [buraya](https://github.com/tensorflow/models) tıklayarak github linkine erişebilirsin
- Modeller [tensorflow 1.8](https://github.com/tensorflow/tensorflow/tree/v1.8.0)'e göre yazılmıştır
  - *Not: Bu yeni sürümlerde çalışmayacağı anlamına gelmez*

```sh
# models-master.zip dizininde
powershell.exe Expand-Archive models-master.zip .
ren models-master models
mkdir %HOMEDRIVE%%HOMEPATH%\Tensorflow
move models %HOMEDRIVE%%HOMEPATH%\Tensorflow
cd %HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research\
```

> Bu adından sonrası `TensorFlow/models/research/` dizininde gerçekleştirilmelidir.

### Protobuflarların İşlenmesi

Protobuf dosyaları (`.proto` uzantılı olan dosyalar) python kodlanı oluşturmak için kullanılan dosyalardır.

> Protobuflarların işlenmesiyle `.py` uzantılı dosyalar oluşacaktır

```sh
# TensorFlow/models/research/ dizininde
for /f %i in ('dir /b object_detection\protos\*.proto') do protoc object_detection\protos\%i --python_out=.
```

### Obje Algılama Kütüphanelerinin Derlenmesi ve Yüklenmesi

```sh
# TensorFlow/models/research/ dizininde
python setup.py build
python setup.py install
```

### Gerekli Ortam Değişkenlerinin Tanımlanması

Eğer daha önceden tanımlı `PYTHONPATH` ortam değişkeniniz **yoksa ilk olan**, **varsa ikinci olan** komutu kullanın.

> Bu ortam değişkenlerinin **terminalin her açılışında yazılması** gerekmetedir.

```sh
set PYTHONPATH=%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research\slim
```

```sh
set PYTHONPATH=%PYTHONPATH%;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research\slim
```

### Modellerin Kurulumunu Test Etme

Jupyter notebook ile API'ları test etmemzi gerekmekte.

```sh
cd object_detection
jupyter notebook
```

> Jupyter notebook hakkında bilgi sahibi değilsen [buraya](https://www.youtube.com/watch?v=COlbP62-B-U&feature=youtu.be&t=7m23s) tıklayarak ne yapman gerektiğini öğrenebilirsin.

## LabelImg Kurulumu

- LabelImg tensorflow modelleri için etiketleme amaçlı kullanılmaktadır
- Resmi sitesi için [buraya](http://tzutalin.github.io/labelImg/) tıklayabilirsin

### LabelImg için Sanal Ortam Oluşturma

Tensorflow ortamının alt paketlerini etkilememsi için ek bir sanal ortamda kurulum sağlamalıyız.

```sh
conda create -n labelImg pyqt # QT grafik kütüphanesi
conda activate labelImg
conda install -c anaconda lxml
```

### LabelImg Paketlerini Kurma ve Derleme

Paketlerin kurulumu için alttaki talimatları sırayla uygulayın:

- LabelImg dosyalarını indirmek için [buraya](https://github.com/tzutalin/labelImg/archive/master.zip) tıklayın
- Diğer işlemler için indirdiğiniz dosya dizininde cmd açıp alttaki komutları yazın

```sh
# labelImg-master.zip dizininde
powershell.exe Expand-Archive labelImg-master.zip .
ren labelImg-master labelImg
mkdir %homedrive%%homepath%\Tensorflow\addons
move labelImg %homedrive%%homepath%\Tensorflow\addons
cd %homedrive%%homepath%\Tensorflow\addons\labelImg
pyrcc5 -o resources.py resources.qrc # QT grafiklerinin oluşturulması
```

> *'pyrcc5' is not recognized as an internal or external command* hatası gelirse, yüklediğiniz `pyqt` sürümüne göre komutu kullanın (`pyrcc<pyqt_sürümü_ilk_basamağı>`)

### LabelImg Kurulumunu Test Etme

```sh
conda activate tensorflow-cpu
cd %homedrive%%homepath%\Tensorflow\addons\labelImg
python labelImg.py
# python labelImg.py [IMAGE_PATH] [PRE-DEFINED CLASS FILE]
```

## Web Kamerası Kullanarak Obje Tespit Etme

Script dosyasına [buraya](Tensorflow%20Kaynaklar%C4%B1\detect_from_webcam.py) tıklayarak erişebilirsin

## Özelleştirilmiş Tensorflow Obje Algılayıcısı Eğitme

Özelleştirilmiş model eğitmek için alttakilerin yapılmış olması gerekmektedir:

- Tensorflow CPU veya GPU kurulumu
- Tensorflow modellerinin kurulumu
- labelImg kurulumu

### Hazırlık Aşamları ve Gidişat

- Çalışma ortamını ve eğitim dosyalarını ayarlama
- Resim veri setini hazırlama ve etiketleme
- Tf kayıtlarını veri kümesinden oluşturma
- Basit bir eğitim yapılandırması (pipeline)
- Modeli eğitme ve işlemlerini görüntüleme
- Modelin sonucu aktarma ve objeleri yakalama

### Çalışma Ortamını ve Eğitim Dosyalarını Ayarlama

Tensorflow kalsörümüzde ek klasörler oluşturuyoruz:

```sh
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\images\train
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\images\test
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\pre-trained-model
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\training
start %homedrive%%homepath%\Tensorflow\workspace\training_demo
```

#### Çalışma Ortamının Hazırlanması

Her bir klasör ve dosya tabloda listelenmiştir.

| İsim              | Açıklama                                                                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| annotations       | Veri setimiz için `.csv` ve `.record` dosyalarını içerir                                                                            |
| images            | Veri setimizdeki tüm resimleri ve **labelImg** ile etiketlendikten sonra oluşan`.xml` dosyalarını içerir                            |
| images\train      | Eğitim için kullanılacak olanları içerir                                                                                            |
| images\test       | Test için kullanılacak olanları içerir                                                                                              |
| pre-trained-model | Önceden eğitilmiş ve checkpoint oluşturulmuş modeli içerir                                                                          |
| training          | Eğitim için yapılandırma ayarlarını `.config`, etiket haritası olan `*.pbtxt` dosyasını ve eğitim sırasında oluşan dosyaları içerir |
| README.md         | Anlaşılabilirlik için ek açıklamalar içerir                                                                                         |

### Resim Etiketleme İşlemi

Etiketleme işlemini **labelImg** üzerinden yaptığımızdan **Anconda Prompt** ile işlemler yapmalıyız:

```sh
conda activate labelImg
cd %homedrive%%homepath%\Tensorflow\addons\labelImg
python labelImg.py ..\..\workspace\training_demo\images # çıktıları hedefleme
```

> LabelImg kullanımı için [bu videoya](https://www.youtube.com/watch?v=K_mFnvzyLvc&feature=youtu.be&t=9m13s) bakabilirsin.

### Etiket Haritası Oluşturma

- Alttaki komutla açılan dizinde `.pbtxt` uzantılı etiket haritası dosyasısı oluşturun
- Örnek dosya yapısı komutların altındadır.

```sh
cd %homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations
start .
```

```js
item {
  id: 1
  name: 'cat'
}
item {
  id: 2
  name: 'dog'
}
```

- `cat` ve `dog` etiket isimleridir

### Tensorflow Kayıtları Oluşturma

Tensorflow kayıtları `*.record` isimli dosyalardır.

- Her veri kümesi için olan `*.xml` dosyaları `*.csv` dosyalarına dönüştürülür
- Her `*.csv` dosyaları `*.record` dosyalarına dönüştürülür (TFRecord)
- İşleme başlmadan alttaki komutla gerekli klasör düzeni oluşturulur

```sh
mkdir %homedrive%%homepath%\Tensorflow\scripts\preprocessing
```

#### XML'i CSV'ye Çevirme

- Script dosyasını [buraya](Tensorflow%20Kaynaklar%C4%B1\xml_to_csv.py) tıklayarak indirmeli ve gerekli dizine alttaki komutla koymalıyız
- Komutları **Anaconda Prompt** üzerinden **tensorflow** ortamını aktif ederek uygulamayı unutmayın.

```sh
# Dosyanın indirildiği dizinde yazılmalı
ren <script_dosyası> xml_to_csv.py # yeniden adlandırma
move xml_to_csv.py %homedrive%%homepath%\Tensorflow\scripts\preprocessing
cd %homedrive%%homepath%\Tensorflow\scripts\preprocessing

# Create train data:
python xml_to_csv.py -i %homedrive%%homepath%\Tensorflow\workspace\training_demo\images\train -o %homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\train_labels.csv

# Create test data:
python xml_to_csv.py -i %homedrive%%homepath%\Tensorflow\workspace\training_demo\images\test -o %homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\test_labels.csv
```

- `<script_dosyası>` İndirdiğiniz script dosyasının adı
  - *Örn: xml_to_csv.py*

> Komut sonrasında `training_demo\annotations` dizininde `test_labels.csv` ve `train_labels.csv` adlı dosyalar oluşacaktır.

#### CSV'yi Record'a Çevirme

- Script dosyasını [buraya](Tensorflow%20Kaynaklar%C4%B1\generate_tfrecord.py) tıklayarak indirmeli ve gerekli dizine alttaki komutla koymalıyız
- Komutları **Anaconda Prompt** üzerinden **tensorflow** ortamını aktif ederek uygulamayı unutmayın.

```sh
# Dosyanın indirildiği dizinde yazılmalı
ren <script_dosyası> generate_tfrecord.py # yeniden adlandırma
move generate_tfrecord.py %homedrive%%homepath%\Tensorflow\scripts\preprocessing
cd %homedrive%%homepath%\Tensorflow\scripts\preprocessing

# Create train data:
python generate_tfrecord.py --label=<etiket> --csv_input=%homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\train_labels.csv
--img_path=%homedrive%%homepath%\Tensorflow\workspace\training_demo\images\train --output_path=%homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\train.record
# Create test data:
python generate_tfrecord.py --label=<etiket> --csv_input=%homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\test_labels.csv
--img_path=%homedrive%%homepath%\Tensorflow\workspace\training_demo\images\test
--output_path=%homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations\test.record
```

- `<script_dosyası>` İndirdiğiniz script dosyasının adı
  - *Örn: xml_to_csv.py*
- `<etiket>` Etiket ismi
  - *Örn: ship*

> Komut sonrasında `training_demo\annotations` dizininde `test.record` ve `train.record` adlı dosyalar oluşacaktır.

### Bağlantıları (pipeline) Yapılandırma

- Tensorflow'un resmi açıklaması için [buraya](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/configuring_jobs.md) tıklayabilirisin

#### Modellin İndirilmesi ve Gerekli Yere Taşınması

- Tensorflow önceden eğitilmiş modelleri indirmek için [buraya](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md#coco-trained-models-coco-models) tıklayabilrisin
- `.tar.gz` uzantılı olacağı için [winrar](https://www.win-rar.com/download.html?&L=0) ya da [7zip](https://www.7-zip.org/download.html) gibi ek uygulamalarla `buraya çıkart` demen gerekmekte
  - `Klasör'e çıkart` değil `buraya çıkart` diyeceksiniz.

> Klasör içinde aynı isimde başka klasör olmasın

```sh
# Modelin çıkartıldığı dizinde
cd <model_ismi>
move * %homedrive%%homepath%\Tensorflow\workspace\training_demo\pre-trained-model
move saved_model %homedrive%%homepath%\Tensorflow\workspace\training_demo\pre-trained-model
cd %homedrive%%homepath%\Tensorflow\workspace\training_demo\pre-trained-model
```

- `<model_ismi>` Seçip, indirdiğiniz `.tar.gz` uzantılı dosyanın adı
  - `TAB` tuşu ile dizindeki dosya adlarını tamamlayabilirsiniz
  - `*.tar.gz` uzantısı yazılmayacak
  - *Örn: ssd_inception_v2_coco_2018_01_28*
  - *Örn: ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync_2018_07_03*

#### Modellin Yapılandırma Dosyaları

Seçtiğiniz modelin `*.config` dosyasını `training_demo/training` klasörü altına kopyalamanız gerekmekte.

```sh
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\training

copy %homedrive%%homepath%\Tensorflow\models\research\object_detection\samples\configs\<model_ismi>.config %homedrive%%homepath%\Tensorflow\workspace\training_demo\training
```

- `<model_ismi>` Seçip, indirdiğiniz `.tar.gz` uzantılı dosyanın adı
  - `TAB` tuşu ile dizindeki dosya adlarını tamamlayabilirsiniz
  - `*.tar.gz` uzantısı yazılmayacak
  - Tarih son ekini içermemeli
    - `*_2018_07_03.tar.gz` ise `*.tar.gz` olarak yazılmalı
  - *Örn: ssd_inception_v2*
  - *Örn: ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync*

#### Modelin Yapılandırma Dosyasını Düzenleme

Yapılandırma örnek dosyalarına bakarak açıklamalara erişebilirsin:

- [ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync](Tensorflow%20Kaynaklar%C4%B1\ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync.config)
- [ssd_inception_v2_coco*](Tensorflow%20Kaynaklar%C4%B1\ssd_inception_v2_coco.config)

| Düzenlenecek Satır                  | Açıklama                                                            | Yapı                                  | Örnek                    |
| ----------------------------------- | ------------------------------------------------------------------- | ------------------------------------- | ------------------------ |
| `num_classes`                       | Etiket türü sayısını ifade eder                                     | `num_classes =<etiket_sınıfı_sayısı>` | num_classes = 2          |
| `feature_extractor` altında `type`  | Seçtiniğiniz önceden eğitilmiş modelin adı                          | `type='<model_ismi>'`                 | type: 'ssd_inception_v2' |
| `train_config` altında `batch_size` | Verilerin toplu alınma sayısı, yüksek olursa fazla performans ister | `batch_size=<2_nin_katları>`                   | batch_size: 8           |

### Modeli Eğitme

Modeli eğitmek için `train.py` script dosyasını kullanacağız.

#### Çalışma Dizinini Oluşturma

Çalışma ortamının düzgün ilerlemesi adına alttaki komut ile gerekli yere scripti kopyalayalım

```sh
copy %homedrive%%homepath%\Tensorflow\models\research\object_detection\legacy\train.py %homedrive%%homepath%\Tensorflow\workspace\training_demo
```

#### Model Eğitimini Başlatma

```sh
python train.py --logtostderr --train_dir=training/ --pipeline_config_path=training\<yapılandırma_dosyası>
```

- `<yapılandırma_dosyası>` Modelimizin yapılandırma dosyasının tam adı
  - **training** klasörüne attığımız yapılandırma dosyaları
  - *Örn: ssd_inception_v2_coco.config*

#### Eğitime Başladığında Gelen Örnek Çıktı

```sh
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:depth of additional conv before box predictor: 0
INFO:tensorflow:Restoring parameters from ssd_inception_v2_coco_2017_11_17/model.ckpt
INFO:tensorflow:Running local_init_op.
INFO:tensorflow:Done running local_init_op.
INFO:tensorflow:Starting Session.
INFO:tensorflow:Saving checkpoint to path training\model.ckpt
INFO:tensorflow:Starting Queues.
INFO:tensorflow:global_step/sec: 0
INFO:tensorflow:global step 1: loss = 13.8886 (12.339 sec/step)
INFO:tensorflow:global step 2: loss = 16.2202 (0.937 sec/step)
INFO:tensorflow:global step 3: loss = 13.7876 (0.904 sec/step)
INFO:tensorflow:global step 4: loss = 12.9230 (0.894 sec/step)
INFO:tensorflow:global step 5: loss = 12.7497 (0.922 sec/step)
INFO:tensorflow:global step 6: loss = 11.7563 (0.936 sec/step)
INFO:tensorflow:global step 7: loss = 11.7245 (0.910 sec/step)
INFO:tensorflow:global step 8: loss = 10.7993 (0.916 sec/step)
INFO:tensorflow:global step 9: loss = 9.1277 (0.890 sec/step)
INFO:tensorflow:global step 10: loss = 9.3972 (0.919 sec/step)
INFO:tensorflow:global step 11: loss = 9.9487 (0.897 sec/step)
INFO:tensorflow:global step 12: loss = 8.7954 (0.884 sec/step)
INFO:tensorflow:global step 13: loss = 7.4329 (0.906 sec/step)
INFO:tensorflow:global step 14: loss = 7.8270 (0.897 sec/step)
INFO:tensorflow:global step 15: loss = 6.4877 (0.894 sec/step)
```

#### Eğitimi Etkileyen Faktörler

Training times can be affected by a number of factors such as:

- The computational power of you hardware (either CPU or GPU): Obviously, the more powerful your PC is, the faster the training process.

- Whether you are using the TensorFlow CPU or GPU variant: In general, even when compared to the best CPUs, almost any GPU graphics card will yield much faster training and detection speeds. As a matter of
fact, when I first started I was running TensorFlow on my Intel i7-5930k (6/12 cores @ 4GHz, 32GB RAM)
and was getting step times of around 12 sec/step, after which I installed TensorFlow GPU and training the
very same model -using the same dataset and config files- on a EVGA GTX-770 (1536 CUDA-cores @
1GHz, 2GB VRAM) I was down to 0.9 sec/step!!! A 12-fold increase in speed, using a “low/mid-end”
graphics card, when compared to a “mid/high-end” CPU.

- How big the dataset is: The higher the number of images in your dataset, the longer it will take for the
model to reach satisfactory levels of detection performance.

- The complexity of the objects you are trying to detect: Obviously, if your objective is to track a black ball
over a white background, the model will converge to satisfactory levels of detection pretty quickly. If on
the other hand, for example, you wish to detect ships in ports, using Pan-Tilt-Zoom cameras, then training
will be a much more challenging and time-consuming process, due to the high variability of the shape and
size of ships, combined with a highly dynamic background.

- And many, many, many, more. . . .

#### Eğitim İşlemini TensorBoard Kullanarak Takip Etme

**Anaconda Prompt** üzerinden alttaki komutlar uygulanır:

```sh
activate tensorflow_cpu # ya da gpu
tensorboard --logdir=training\
```

Alttaki gibi bir çıktı gelmesi gerekmekte:

```sh
TensorBoard 1.6.0 at http://YOUR-PC:6006 (Press CTRL+C to quit)
```

Çıktıyı görüntülemek için verilen url'i tarayıcına kopyalaman yeterlidir.

#### Sonuç Grafiğini Dışarı Aktarma

**Anaconda Prompt** üzerinden alttaki komutlar uygulanır:

Copy the TensorFlow/models/research/object_detection/export_inference_graph.
py script and paste it straight into your training_demo folder.

```sh
activate tensorflow_cpu # ya da gpu

copy %homedrive%%homepath%\Tensorflow\models\research\object_detection/export_inference_graph.
py %homedrive%%homepath%\Tensorflow\workspace\training_demo

cd %homedrive%%homepath%\Tensorflow\workspace\training_demo

python export_inference_graph.py --input_type image_tensor --pipeline_config_path training/<yapılandırma_dosyası> --trained_checkpoint_prefix training/model.
ckpt-<checkpoint> --output_directory trained-inference-graphs/output_inference_graph_v1.pb
```

- `<yapılandırma_dosyası>` Modelimizin yapılandırma dosyasının tam adı
  - **training** klasörüne attığımız yapılandırma dosyaları
  - *Örn: ssd_inception_v2_coco.config*
- `<checkpoint>` **training_demo/training** dizinindeki gösterilmek istenen adımın numarası
  - *Örn: 13302*

### Hata Notları ve Açıklamaları

> Yakında...

## Colab Üzerinden Tensorflow Modeli Kullanma

Detayları öğrenmek için [buraya](https://colab.research.google.com/drive/1T0V7LtYQHdCzy4b8K1JBpwDUGFxtRYck) tıklayarak colab notuna erişebilirsin.

## Harici Bağlantılar

- [Traffic Light Detection Using the TensorFlow* Object Detection API](https://software.intel.com/en-us/articles/traffic-light-detection-using-the-tensorflow-object-detection-api)
- [Tensorflow in Anaconda](https://www.anaconda.com/tensorflow-in-anaconda/)
