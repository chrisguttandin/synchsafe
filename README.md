# synchsafe

**A module to decode and encode synchsafe integers.**

[![version](https://img.shields.io/npm/v/synchsafe.svg?style=flat-square)](https://www.npmjs.com/package/synchsafe)

This module provides two functions to decode and encode synchsafe integers as it is for example required by the [ID3 standard](http://id3.org/id3v2.4.0-structure). It is a fork of this [Gist](https://gist.github.com/raym/7b8cb7b838c94cada0b7) by [raym](https://github.com/raym).

## Usage

The `synchsafe` module is available on [npm](https://www.npmjs.com/package/synchsafe) and can be
installed as usual.

```shell
npm install synchsafe
```

You can then import its public functions `decode()` and `encode()` like this:

```js
import { decode, encode } from 'synchsafe';
```

As you might guess, the `encode()` function turns a regular integer into a synchsafed integer and
the `decode()` function does the opposite. Therefore the following line would evaluate to true.

```js
decode(encode(30201)) === 30201;
```
