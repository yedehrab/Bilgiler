# VsCode <!-- omit in toc -->

> `HOME` tuşu ile yukarı yönlenebilrsiniz.

- [VsCode kısayolları](#vscode-k%C4%B1sayollar%C4%B1)
- [Faydalı Eklentiler](#faydal%C4%B1-eklentiler)
  - [Verimlilik Eklentileri](#verimlilik-eklentileri)
  - [Verimli Kodlama Eklentileri](#verimli-kodlama-eklentileri)
  - [Farkındalık Eklentileri](#fark%C4%B1ndal%C4%B1k-eklentileri)
  - [Görsellik Eklentileri](#g%C3%B6rsellik-eklentileri)
  - [Programlama Dilleri Eklentileri](#programlama-dilleri-eklentileri)
  - [Web Programlama Eklentileri](#web-programlama-eklentileri)
    - [Javascript - Nodejs Eklentileri](#javascript---nodejs-eklentileri)
  - [Proje Yönetimi Eklentileri](#proje-y%C3%B6netimi-eklentileri)
  - [Yapılandırma Eklentileri](#yap%C4%B1land%C4%B1rma-eklentileri)
- [Editör ayarları](#edit%C3%B6r-ayarlar%C4%B1)
  - [Editör Değişkenleri](#edit%C3%B6r-de%C4%9Fi%C5%9Fkenleri)
  - [Editör JSON Ayarlarım](#edit%C3%B6r-json-ayarlar%C4%B1m)
  - [Java Ayarları](#java-ayarlar%C4%B1)
  - [Code Runner Ayarları](#code-runner-ayarlar%C4%B1)
    - [Code Runner Kısayollar](#code-runner-k%C4%B1sayollar)
- [Debug Ayarları](#debug-ayarlar%C4%B1)
  - [Nodejs için Debug Ayarı](#nodejs-i%C3%A7in-debug-ayar%C4%B1)
- [Harici Linkler](#harici-linkler)

## VsCode kısayolları

- `CTRL` + `P` Dosya arama (*read only açar*)
  - `#` İle çalışma dizininde arayabilirsin
  - `?` ile yardım alabilirsin
- `CTRL` + `I` Satırı seçme
- `CTRL` + `X` Satırı kesme

## Faydalı Eklentiler

### Verimlilik Eklentileri

| Eklenti                                                                                                                           | Açıklama                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Visual Studio IntelliCode - Preview](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) | AI ile en sık kullanılan metodları önerir. 2 kez `CTRL` + `SPACE` yaparsanız detaylarını da gösterir |
| Scratchpad                                                                                                                        | Anlık derleyiciler                                                                                   |
| [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)                             | Markdown için gerekli tüm içeriklere, kısayollara ve formatlayıcıya sahip                            |
| [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)                                | Markdown hatalarının altını çizme ve uyarma                                                          |
| [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)                                      | Editör üzerinden projeleri derleme & çalıştırma                                                      |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                       | Dosya yollarını yazarken yardımcı olur                                                               |
| [vscode-spotify](https://marketplace.visualstudio.com/items?itemName=shyykoserhiy.vscode-spotify)                                 | Spotify ile müzik desteği                                                                            |
| [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)                                     | JSON'ı koda uyarlama                                                                                 |
| [Visual Studio Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings)                              | Kısayollar üzerine bir eklenti                                                                       |
| [Open File](https://marketplace.visualstudio.com/items?itemName=Fr43nk.seito-openfile)                                            | Yolu verilen dosyayı vscode içinde açma                                                              |
| *Code Snippets*                                                                                                                   | Dil'e özel anahtar kelimeler ile kod tamamlama                                                       |
| [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)                                      | Panodan resim kopyalama                                                                              |
| Fire Code                                                                                                                         | == >= gibi simgeler yerine alışkın olduğumuz elle yazılan simgeler gelir                             |
| [30 seconds of code](https://marketplace.visualstudio.com/items?itemName=30-seconds.30-seconds-of-code)                           | Code snippet'leri                                                                                    |

### Verimli Kodlama Eklentileri

| Eklenti                                                                                                         | Açıklama                        |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)                       | Bellek kullanımını gösterir     |
| [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | İmla kontrolü                   |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)         | Kod formatlama ve güzelleştirme |
| [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)                                   | Javascript imla kontrolcüsü     |

### Farkındalık Eklentileri

| Eklenti                                                                                  | Açıklama                             |
| ---------------------------------------------------------------------------------------- | ------------------------------------ |
| [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) | Kodlama başında geçen vakti raporlar |

### Görsellik Eklentileri

| Eklenti                                                                                                           | Açıklama                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Sublime Material Theme](https://marketplace.visualstudio.com/items?itemName=jprestidge.theme-material-theme)     | Sublime Editörün temaları       |
| [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme)              | Popüler tema seti               |
| [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)            | En sık kullanılan karanlık tema |
| [Base16 Tomorrow Dark+](https://marketplace.visualstudio.com/items?itemName=Shurelia.base16-tomorrow-dark-vscode) | Karanlık tema                   |
| [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)              | Dosya ikon teması               |
| [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)               | Karanlık bir tema               |

### Programlama Dilleri Eklentileri

| Eklenti                                                                      | Açıklama                                 |
| ---------------------------------------------------------------------------- | ---------------------------------------- |
| [Matlab](https://marketplace.visualstudio.com/items?itemName=Gimly81.matlab) | Matlab                                   |
| [Java](https://marketplace.visualstudio.com/items?itemName=redhat.java)      | Language Support for Java(TM) by Red Hat |

### Web Programlama Eklentileri

| Eklenti                                                                                                                         | Açıklama                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion) | CSS classlarını önerme                       |
| [Icon Fonts](https://marketplace.visualstudio.com/items?itemName=idleberg.icon-fonts)                                           | İkon kısayolları sağlar                      |
| [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                                            | Postman gibi istemci istekleri arayüzü sunar |
| [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)                         | Chrome için hata ayıklama özelliği           |

#### Javascript - Nodejs Eklentileri

| Eklenti                                                                                                          | Açıklama                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Quokka.js](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode)                         | Anlık derleyici ve hata ayıklama ([video](https://www.youtube.com/watch?v=eyzO1xPI6_k)) |
| [Babel Javascript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)        | ES6 tipinde yazmayı sağlar                                                              |
| [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                             | GET - POST gibi istekleri atmayı sağlar                                                 |
| [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                             | JS için imla kontrolcüsü                                                                |
| [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) | Kod kısayolları                                                                         |
| [npm Intellisese](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)         | NPM modüllerini önerir                                                                  |

### Proje Yönetimi Eklentileri

| Eklenti                                                                                            | Açıklama                                 |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) | Proje kısayolları, sık kullanılanlar vs. |
| [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)    | Anlık olarak kod paylaşma                |
| [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Git yönetimi arayüzü                     |
| [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)          | Docker sanal makinesi için uyumluluk     |

### Yapılandırma Eklentileri

| Eklenti                                                                                                   | Açıklama |
| --------------------------------------------------------------------------------------------------------- | -------- |
| [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) |          |

## Editör ayarları

> Sol alt köşedeki `ayarlar` simgesi -> Sağ üst köşedeki `{}` simgesine tıklayıp oraya bunlardan istediklerini kopyalayabilirsin.

### Editör Değişkenleri

Değişkenlerin kullanım şekilleri:

- `${<değişken>}`
  - Eğer özel karakter içeriyorsa bu yöntem daha sağlıklıdır
- `$<değişken>`

| Değişken          | Açıklama                 |
| ----------------- | ------------------------ |
| `workspaceFolder` | Çalışma dizini yolu      |
| `file`            | Açık olan dosya yolu     |
| `fullFileName`    | Tam açık olan dosya yolu |
| `pythonPath`      | Python yolu              |

### Editör JSON Ayarlarım

```json
{
    "telemetry.enableTelemetry": false,
    "window.menuBarVisibility": "toggle",
    "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.fontFamily": "Consolas, 'Courier New', monospace",
    "window.titleBarStyle": "custom",
    "editor.fontFamily": "Consolas, 'Courier New', monospace",
    "editor.fontSize": 13.7,
    "editor.fontWeight": "500",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.colorTheme": "Sublime Material Theme - Dark",
    "editor.tabSize": 2,
}
```

### Java Ayarları

```json
{
    "java.home": "C:\\Program Files\\Java\\jdk1.8.0_202"
}
```

### Code Runner Ayarları

Path değiştirme örneği detayına [buraya](https://stackoverflow.com/questions/50689210/how-to-setup-code-runner-in-visual-studio-code-for-python) tıklayarak ulaşabilirsin.

```json
"code-runner.executorMap": {
    "python": "$pythonPath -u $fullFileName",
},
```

#### Code Runner Kısayollar

- `ALT` + `SHIFT` + `F` Yazıları uzantıya göre formatlama
- `CTRL` + `"` Gömülü terminali gösterme / gizleme

## Debug Ayarları

Debug ayarlarına erişmek için:

- `CTRL` + `SHIFT` + `D` ile debug sekmesini açın
  - İsterseniz soldaki **activity bar** üzerinden erişebilirsiniz
- Sağ üstteki `ayarlar ikonuna` tıklayın
- `Launch.json` dosyası açılacaktır

### Nodejs için Debug Ayarı

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}\\index.js",
      "outFiles": [ "${workspaceRoot}/dist/**/**/*.js" ]
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Current File",
      "program": "${file}",
      "outFiles": [ "${workspaceRoot}/dist/**/**/*.js" ]
    }
  ]
}
```

## Harici Linkler

- [Vs Code Can Do That](https://vscodecandothat.com/)
- [My Top 10 VSCode Extension Recommendation](https://medium.com/backticks-tildes/my-top-10-vscode-extension-recommendation-ac2c2f62ffe5)
- [Best Visual Studio Code Extension](https://blog.elmah.io/best-visual-studio-code-extensions/)
- [10 Essential VS Code Extensions for JavaScript Developers in 2019](https://hackernoon.com/10-essential-vs-code-extensions-for-javascript-developers-in-2019-e8320e3f421e)
- [Debugging ES6 in Visual Studio Code](https://medium.com/@drcallaway/debugging-es6-in-visual-studio-code-4444db797954)