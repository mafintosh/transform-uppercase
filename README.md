# transform-uppercase

transform that makes all values uppercase. mostly for testing

```
npm install transform-uppercase
```

or to install the command line tool globally

```
npm install -g transform-uppercase
```

## Usage

Pipe strings to it and it uppercases them. Pipe objects to it and it uppercases all the values

``` js
var uppercase = require('transform-uppercase')

uppercase.write({hello:'world'})
uppercase.write('hello')

uppercase.on('data', function(data) {
  console.log(data) // will print {hello:'WORLD'} and 'HELLO'
})
```

You can also use it from the command line

```
$ echo '{"hello":"world"}' | transform-uppercase --json # prints {"hello":"WORLD"}
$ echo hello | transform-uppercase # prints HELLO
```

## License

MIT