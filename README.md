# About Filterable

A simple, lightweight library for Filter the Items

# How to use

Calling Javascript File Filterable:

```javascript
<script src="js/filterable.js"></script>
```

HTML:

```html
<div class="filterable">
    <button class="active" data-name="all">all</button>
    <button data-name="cat1">Category One</button>
    <button data-name="cat2">Category Two</button>
    <button data-name="cat3">Category Three</button>
</div>

<div class="card" data-name="cat1"></div>
<div class="card" data-name="cat2"></div>
<div class="card" data-name="cat3"></div>
```

CSS :

```css
.card.hide{
    display: none;
}
```

