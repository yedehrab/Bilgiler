# Tensorflow  <!-- omit in toc -->

- Python dili üzerinde makine öğrenimi gibi işlemler için kütüphanedir.
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
- [Özelleştirilmiş Tensorflow Obje Algılayıcısı Eğitme](#%C3%B6zelle%C5%9Ftirilmi%C5%9F-tensorflow-obje-alg%C4%B1lay%C4%B1c%C4%B1s%C4%B1-e%C4%9Fitme)
  - [Hazırlık Aşamları ve Gidişat](#haz%C4%B1rl%C4%B1k-a%C5%9Famlar%C4%B1-ve-gidi%C5%9Fat)
  - [Çalışma Ortamını ve Eğitim Dosyalarını Ayarlama](#%C3%A7al%C4%B1%C5%9Fma-ortam%C4%B1n%C4%B1-ve-e%C4%9Fitim-dosyalar%C4%B1n%C4%B1-ayarlama)
    - [Çalışma Ortamının Hazırlanması](#%C3%A7al%C4%B1%C5%9Fma-ortam%C4%B1n%C4%B1n-haz%C4%B1rlanmas%C4%B1)
  - [Resim Etiketleme İşlemi](#resim-etiketleme-i%CC%87%C5%9Flemi)
  - [Etiket Haritası Oluşturma](#etiket-haritas%C4%B1-olu%C5%9Fturma)
  - [Tensorflow Kayıtları Oluşturma](#tensorflow-kay%C4%B1tlar%C4%B1-olu%C5%9Fturma)
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
mkdir %homedrive%%homepath%\Tensorflow\workspace\
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\annotations
mkdir %homedrive%%homepath%\Tensorflow\workspace\training_demo\images
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

> LabelImg kullanımı için [buraya](https://github.com/tzutalin/labelImg#usage) tıklayabilirsin.

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

## Colab Üzerinden Tensorflow Modeli Kullanma

Detayları öğrenmek için [buraya](https://colab.research.google.com/drive/1T0V7LtYQHdCzy4b8K1JBpwDUGFxtRYck) tıklayarak colab notuna erişebilirsin.

## Harici Bağlantılar

- [Traffic Light Detection Using the TensorFlow* Object Detection API](https://software.intel.com/en-us/articles/traffic-light-detection-using-the-tensorflow-object-detection-api)
- [Tensorflow in Anaconda](https://www.anaconda.com/tensorflow-in-anaconda/)
