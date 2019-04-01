# Linux

Öneri Distro: `deepin`

## Grub Menüyü Atlama

- `sudo nano /etc/default/grub` ile grub yapılandırma dosyasını açın
- En alt kısmına `GRUB_HIDDEN_TIMEOUT=0` yazın ve `GRUB_TIMEOUT=0` yapın
- `CTRL` + `X` e basın ve `Y` tuşuna basarak kayıt edin
- `sudo update-grub` ile yine grub ayarlarını aktifleştirin