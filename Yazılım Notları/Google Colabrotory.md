# Google Colabrotory


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