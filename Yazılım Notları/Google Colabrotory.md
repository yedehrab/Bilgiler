# Google Colabrotory

Colab üzerinde kullanılan komutların (IPython) dökümanı için [buraya](https://ipython.readthedocs.io/en/stable/index.html) bakabilirsin.

## Run Time Ayarları

- Change Run Time
  - TPU
  - GPU

## Komut Parametreleri

- `%` Magic Command
- `!` Command
- Python kodu 

## Colab Üzerinde Google Drive

Resmi dökümantasyon için [buraya](https://colab.research.google.com/notebooks/io.ipynb#scrollTo=XDg9OBaYqRMd) bakabilirsin.

### Drive Dosyalarını Dosya Sistemine Bağlama

```py
from google.colab import drive
drive.mount('/content/gdrive')
```

### Drive Dosyalarına Erişme

```py
with open('/content/gdrive/My Drive/foo.txt', 'w') as f:
  f.write('Hello Google Drive!')
!cat /content/gdrive/My\ Drive/foo.txt
```

## Harici Bağlantılar

- [Overview of Colaboratory Features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb)
- [External data: Drive, Sheets, and Cloud Storage](https://colab.research.google.com/notebooks/io.ipynb)
- [Styled table outputs](https://colab.research.google.com/drive/1oXkzlM0lPbDC8saNRUnkGOjpKCTiDHvM)
- [Mardown Guide](https://colab.research.google.com/notebooks/markdown_guide.ipynb)
- [Froms](https://colab.research.google.com/notebooks/forms.ipynb)
- [Magic Command](https://ipython.readthedocs.io/en/stable/interactive/magics.html)