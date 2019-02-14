# Tasarım

* [Daire](#Daire) | [Kaynak](https://codepen.io/cbracco/pen/qnduh)

## Daire

### Css

```css
.circle-text {
    position: relative;
    display: block;
    margin: 2em 0;
    background: #FFFFFF;
    border: 2px solid #EDEDED;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
}

.circle-text:hover {
    font-weight: bolder;
    font-size: 12px;
    color: #ffffff;
    background: #ffb0b0;
}

.circle-text:after {
    content: "";
    display: block;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
}
  
.circle-text__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle-text__wrapper {
  display: table;
  width: 100%;
  height: 100%;
}

.circle-text__content {
  display: table-cell;
  padding: 1em;
  vertical-align: middle;
}
```

### SCSS

```scss
.circle-text {
  position: relative;
  display: block;
  margin: 2em 0;
  background: #FFFFFF;
  border: 2px solid #EDEDED;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  font-size: 12px;
  font-weight: normal;

  &:hover {
    font-weight: bolder;
    font-size: 12px;
    color: #ffffff;
    background: #ffb0b0;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
  }
}

.circle-text__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle-text__wrapper {
  display: table;
  width: 100%;
  height: 100%;
}

.circle-text__content {
  display: table-cell;
  padding: 1em;
  vertical-align: middle;
}
```

### HTML

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
        integrity="sha384-PmY9l28YgO4JwMKbTvgaS7XNZJ30MK9FAZjjzXtlqyZCqBY6X6bXIkM++IkyinN+" crossorigin="anonymous
    <script src=" main.js">
    </script>
</head>

<body>
    <div class="row">
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div class="circle-text__inner">
                    <div class="circle-text__wrapper">
                        <div class="circle-text__content">A circle-text with a lot more text inside</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div class="circle-text__inner">
                    <div class="circle-text__wrapper">
                        <div class="circle-text__content">A circle-text with a lot more text inside</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
```
