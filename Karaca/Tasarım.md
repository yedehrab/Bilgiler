# Tasarım

* [Daire](#Daire)

## Daire

### Css

```css
.circle-text {
    width: 100%;
    background: #FFFFFF;
    border-radius: 50%;
    -moz-border-radius: 50%; 
    -webkit-border-radius: 50%;
    color: #444444;
    border: 2px solid #EDEDED;
}
.circle-text:after {
    content: "";
    display: block;
    width: 100%;
    height:0;
    padding-bottom: 100%; 
}

.circle-text div {
    float:left;
    width:100%;
    padding-top:50%;
    line-height:1em;
    margin-top:-0.5em;
    text-align:center;
    font: medium 12px;
}

.circle-text:hover {
    font: bolder 12px;
    color: #ffffff;
    background: #ffb0b0;
}
```

### SCSS

```scss
.circle-text {
  width: 100%;
  background: #FFFFFF;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  color: #444444;
  border: 2px solid #EDEDED;

  div {
    float:left;
    width:100%;
    padding-top:50%;
    line-height:1em;
    margin-top:-0.5em;
    text-align:center;
    font-size: 12px;
    font-weight: normal;
  }

  &:hover {
    font-weight: bolder;
    font-size: 12px;
    color: #ffffff;
    background: #ffb0b0;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height:0;
    padding-bottom: 100%;
  }
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
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
        <div class="col-md-1 col-xs-3">
            <div class="circle-text">
                <div>I'm a Circle!</div>
            </div>
        </div>
    </div>

</body>

</html>
```