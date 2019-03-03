# Tensorflow  <!-- omit in toc -->

Python dili üzerinde makine öğrenimi gibi işlemler için kütüphanedir.

> PDF açıklaması için [buraya](https://buildmedia.readthedocs.org/media/pdf/tensorflow-object-detection-api-tutorial/latest/tensorflow-object-detection-api-tutorial.pdf) tıklayabilirsin.

## içerikler <!-- omit in toc -->

- [Tensorflow Kurulumu](#tensorflow-kurulumu)
  - [Anaconda Kurulumu](#anaconda-kurulumu)
  - [Tensorflow CPU](#tensorflow-cpu)
    - [Sanal Ortam Oluşturma ve Üzerine Kurma](#sanal-ortam-olu%C5%9Fturma-ve-%C3%BCzerine-kurma)
    - [Kurulumu Test Etme](#kurulumu-test-etme)
  - [Tensorflow Modellerinin Kullanımı](#tensorflow-modellerinin-kullan%C4%B1m%C4%B1)
    - [Gereksinimlerin Kurulumu](#gereksinimlerin-kurulumu)
    - [Tensorflow Modellerinin İndirilmesi](#tensorflow-modellerinin-i%CC%87ndirilmesi)
    - [Protobuflarların İşlenmesi](#protobuflarlar%C4%B1n-i%CC%87%C5%9Flenmesi)
    - [Obje Algılama Kütüphanelerinin Derlenmesi ve Yüklenmesi](#obje-alg%C4%B1lama-k%C3%BCt%C3%BCphanelerinin-derlenmesi-ve-y%C3%BCklenmesi)
    - [Gerekli Ortam Değişkenlerinin Tanımlanması](#gerekli-ortam-de%C4%9Fi%C5%9Fkenlerinin-tan%C4%B1mlanmas%C4%B1)
    - [Modellerin Kurulumunu Test Etme](#modellerin-kurulumunu-test-etme)
  - [Colab Üzerinden Tensorflow Modeli Kullanma](#colab-%C3%BCzerinden-tensorflow-modeli-kullanma)
- [Harici Bağlantılar](#harici-ba%C4%9Flant%C4%B1lar)

## Tensorflow Kurulumu

Tensorflow anaconda üzerinden daha sağlıklı, taşınabilir ve verimli çalışabilmekte. Bu sebeple anaconda üzerinde sanal ortama kurulması daha faydalı olacaktır.

> Anaconda'nın tensorflowdaki avantajı için [buraya](https://www.anaconda.com/tensorflow-in-anaconda/) göz atabilirsin.

### Anaconda Kurulumu

- Anaconda kurulumu için [buraya](../Uygulama%20Notlar%C4%B1/Anaconda.md#anaconda-kurulumu) tıklayarak onun için hazırladığım dökümana erişebilirsin.

### Tensorflow CPU

- Bu kurulum CPU kurulumu olarak da geçmekte
- GPU kurulumu CPU'ya nazaran oldukça hızlı eğitim seçeneği sağlar
- GPU kurulumu için gereksinimleri sağlıyorsanız GPU kurulumu (tensorflow-gpu) yapmanız tavsiye edilir

> Tüm komutlar `cmd` üzerinden yazılmalıdır.

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

### Tensorflow Modellerinin Kullanımı

- Modellere erişmek için [buraya](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md) tıklayabilirsin.
- Video üzerinden açıklama için [buraya](https://youtu.be/COlbP62-B-U) bakabilirsin.

#### Gereksinimlerin Kurulumu

Tensorflow modellerini kullanabilmek için alttaki kurulumlara da ihtiyaç olabilmekte:

```sh
conda install -c anaconda opencv pillow lxml matplotlib jupyter protobuf pandas
```

#### Tensorflow Modellerinin İndirilmesi

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

#### Protobuflarların İşlenmesi

Protobuf dosyaları (`.proto` uzantılı olan dosyalar) python kodlanı oluşturmak için kullanılan dosyalardır.

> Protobuflarların işlenmesiyle `.py` uzantılı dosyalar oluşacaktır

```sh
# TensorFlow/models/research/ dizininde
for /f %i in ('dir /b object_detection\protos\*.proto') do protoc object_detection\protos\%i --python_out=.
```

#### Obje Algılama Kütüphanelerinin Derlenmesi ve Yüklenmesi

```sh
# TensorFlow/models/research/ dizininde
python setup.py build
python setup.py install
```

#### Gerekli Ortam Değişkenlerinin Tanımlanması

Eğer daha önceden tanımlı `PYTHONPATH` ortam değişkeniniz **yoksa ilk olan**, **varsa ikinci olan** komutu kullanın.

> Bu ortam değişkenlerinin **terminalin her açılışında yazılması** gerekmetedir.

```sh
set PYTHONPATH=%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research\slim
```

```sh
set PYTHONPATH=%PYTHONPATH%;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research;%HOMEDRIVE%%HOMEPATH%\Tensorflow\models\research\slim
```

#### Modellerin Kurulumunu Test Etme

Jupyter notebook ile API'ları test etmemzi gerekmekte.

```sh
cd object_detection
jupyter notebook
```

> Jupyter notebook hakkında bilgi sahibi değilsen [buraya](https://www.youtube.com/watch?v=COlbP62-B-U&feature=youtu.be&t=7m23s) tıklayarak ne yapman gerektiğini öğrenebilirsin.

### Colab Üzerinden Tensorflow Modeli Kullanma

Detayları öğrenmek için [buraya](https://colab.research.google.com/drive/1T0V7LtYQHdCzy4b8K1JBpwDUGFxtRYck) tıklayarak colab notuna erişebilirsin.

## Harici Bağlantılar

- [Traffic Light Detection Using the TensorFlow* Object Detection API](https://software.intel.com/en-us/articles/traffic-light-detection-using-the-tensorflow-object-detection-api)
- [Tensorflow in Anaconda](https://www.anaconda.com/tensorflow-in-anaconda/)
