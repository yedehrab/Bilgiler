# Nodejs <!-- omit in toc -->

## İçerikler <!-- omit in toc -->

> `Home` tuşu ile yukarı yönlenebilirsin.

- [Paketler](#paketler)
- [Nodejs ES6 Yapısını Kullanma](#nodejs-es6-yap%C4%B1s%C4%B1n%C4%B1-kullanma)
  - [Babel Paketleri](#babel-paketleri)
  - [Babel Paketlerinin Kurulumu](#babel-paketlerinin-kurulumu)
- [Kod Bankası](#kod-bankas%C4%B1)
  - [Fonksiyon İsmi, Satırı ve Dosya Adı Alma](#fonksiyon-i%CC%87smi-sat%C4%B1r%C4%B1-ve-dosya-ad%C4%B1-alma)
- [Harici Bağlantılar](#harici-ba%C4%9Flant%C4%B1lar)

## Paketler

| Paket   | Açıklama                                      | Kurulum |
| ------- | --------------------------------------------- | ------- |
| nodemon | Hata ve değişiklik durumunda otomatik derleme | Dev     |
| colors  | Consola renkli çıktılar yazma                 | Normal  |

- **Normal kurulum:** Ön ek gerektirmez
- **Global kurulum:** `-g` ön eki ile yapılır
- **Dev kurulum:** `--save-dev` son eki ile yapılır

## Nodejs ES6 Yapısını Kullanma

Nodejs'de ES6 yapısı `babel` yardımcısı ile kullanabilinmektedir.

> Tarayıcı es5 yapısını kullanmaktadır.

### Babel Paketleri

| Paket              | Açıklama                                                   | Kurulum |
| ------------------ | ---------------------------------------------------------- | ------- |
| `babel-cli`        | Konsoldan "babel" ile başlayan komutlara izin verir        | Global  |
| `babel-register`   | NPM üzerinden require ile babel modüllerine erişimi sağlar | Dev     |
| `babel-preset-env` | ES5'i derlemek için kullanılır                             | Dev     |

- Global kurulum: `-g` ön eki ile yapılır
- Dev kurulum: `--save-dev` son eki ile yapılır

### Babel Paketlerinin Kurulumu

Global olarak babel consol komutlarını ve işleyicisini ekler.

```sh
npm install -g babel-cli # Global olarak kurulmazsa babel komutları her yerde tanınmaz
npm install babel-register babel-preset-env --save-dev
```

## Kod Bankası

### Fonksiyon İsmi, Satırı ve Dosya Adı Alma

```js
export function _getCallerInfo() {
  const err = new Error();
  let index = 3;
  let line = err.stack.split("\n")[index];
  let functionName = line.split(" at ")[1].split(" ")[0];

  while (functionName.includes(`C:/`)) {
    index++;
    line = err.stack.split("\n")[index];
    functionName = line.split(" at ")[1].split(" ")[0];
  }

  let callerInfo = line.split(`${projectName}/`);
  callerInfo = callerInfo[callerInfo.length - 1];

  const filename = callerInfo.split(".")[0];
  const lineInfos = callerInfo.replace(filename + ".js:", "").replace(")", "");
  return `${filename}:${functionName}:${lineInfos}`; // lib\server:func(12:21)
}
```

## Harici Bağlantılar

- [Callback yerine Async Kullanma](https://medium.freecodecamp.org/javascript-from-callbacks-to-async-await-1cc090ddad99)
- [Async & Await](https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c)
- [Fonksiyonu Çağıran Dosya İsmini Bulma](https://stackoverflow.com/a/29581862/9770490)