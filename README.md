# xlsx parse test

## xlsx with Japanese Kanji & Katakana

`xlsx/sample.xlsx`

![image](https://raw.githubusercontent.com/tgfjt-boxbox/xlsx-parse-sample/master/ss.png)

## Env

- Mac OS X `10.10`
- Node `v0.10.32`

## result:

```
$ node parse
[ [ '漢字' ], [ '漢字withColorカンジ' ] ]
```

### want:

```
[ [ '漢字' ], [ '漢字withColor' ] ]
```
