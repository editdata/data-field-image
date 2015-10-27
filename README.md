# data-field-image

## API

### createImageField

Create a virtual-dom image data-field for use with [data-ui](https://github.com/editdata/data-ui).


**Parameters**

-   `h` **function** virtual-dom `h` function

-   `properties` **Object** properties object for `h`
    -   `properties.display` **Boolean** true for display mode, default is false for input mode

    -   `properties.value` **String** any image url

-   `value` **String** any image url

-   `imageurl`  



**Examples**

```javascript
var createImageField = require('data-field-string')

createImageField(h, { onclick: function (e){} }, 'example string')
```




## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install data-field-string --save
```

## Tests

```sh
npm install
npm test
```

## Dependencies

-   [xtend](https://github.com/Raynos/xtend): extend like a boss

## Dev Dependencies

-   [budo](https://github.com/mattdesl/budo): a browserify server for rapid prototyping
-   [documentation-readme](https://github.com/documentationjs/documentation-readme): inject documentation into your README.md
-   [standard](https://github.com/feross/standard): JavaScript Standard Style
-   [tap-spec](https://github.com/scottcorgan/tap-spec): Formatted TAP output like Mocha's spec reporter
-   [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
-   [virtual-raf](https://github.com/yoshuawuyts/virtual-raf): Create a RAF loop for virtual-dom

## See also

-   [data-fields](https://github.com/editdata/data-fields) – all data fields packaged together.
-   [data-ui](https://github.com/editdata/data-ui) – a collection of modules for managing data.

## License

[MIT](LICENSE.md)