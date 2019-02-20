# VsCode <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [VsCode kısayolları](#vscode-k%C4%B1sayollar%C4%B1)
- [Faydalı Eklentiler](#faydal%C4%B1-eklentiler)
- [Editör ayarlarım](#edit%C3%B6r-ayarlar%C4%B1m)
  - [Görüntü Ayarları](#g%C3%B6r%C3%BCnt%C3%BC-ayarlar%C4%B1)
  - [Code Runner Ayarları](#code-runner-ayarlar%C4%B1)
    - [Code runner kısayollar](#code-runner-k%C4%B1sayollar)

## VsCode kısayolları

* `CTRL` + `P` Dosya arama (*read only açar*)
  * `#` İle çalışma dizininde arayabilirsin
  * `?` ile yardım alabilirsin
* `CTRL` + `I` Satırı seçme
* `CTRL` + `X` Satırı kesme

## Faydalı Eklentiler

| Eklenti                                                                                                                           | Açıklama                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Base16 Tomorrow Dark+](https://marketplace.visualstudio.com/items?itemName=Shurelia.base16-tomorrow-dark-vscode)                 | Karanlık tema                                                                                        |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)                                      | Editör üzerinden projeleri derleme & çalıştırma                                                      |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)                              | Dosya ikon teması                                                                                    |
| [Visual Studio IntelliCode - Preview](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) | AI ile en sık kullanılan metodları önerir. 2 kez `CTRL` + `SPACE` yaparsanız detaylarını da gösterir |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)                                |                                                                                                      |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)                             | Markdown için gerekli tüm içeriklere, kısayollara ve formatlayıcıya sahip                            |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                       | Dosya yollarını yazarken yardımcı olur                                                               |
| [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)                                         | Docker için uyumluluk                                                                                |
| *Code Snippets*                                                                                                                   | Dil'e özel anahtar kelimeler ile kod tamamlama                                                       |

## Editör ayarlarım

> Sol alt köşedeki `ayarlar` simgesi -> Sağ üst köşedeki `{}` simgesine tıklayıp oraya bunlardan istediklerini kopyalayabilirsin.

### Görüntü Ayarları

```json
{
    "telemetry.enableTelemetry": false,
    "window.menuBarVisibility": "toggle",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.fontFamily": "Consolas, 'Courier New', monospace",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Atom One Dark",
    "window.titleBarStyle": "custom",
    "editor.fontFamily": "Consolas, 'Courier New', monospace",
    "editor.fontSize": 13.7,
    "editor.fontWeight": "500"
}
```

### Code Runner Ayarları

Path değiştirme örneği detayına [buraya](https://stackoverflow.com/questions/50689210/how-to-setup-code-runner-in-visual-studio-code-for-python) tıklayarak ulaşabilirsin.

```json
"code-runner.executorMap": {
    "python": "$pythonPath -u $fullFileName",
},
```

#### Code runner kısayollar

* `ALT` + `SHIFT` + `F` Yazıları uzantıya göre formatlama
* `CTRL` + `"` Gömülü terminali gösterme / gizleme