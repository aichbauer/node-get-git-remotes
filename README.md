# get-git-remotes

[![Build Status](https://travis-ci.org/aichbauer/node-get-git-remotes.svg?branch=master)](https://travis-ci.org/aichbauer/node-get-git-remotes)
[![Build status](https://ci.appveyor.com/api/projects/status/2o2y7b7l6qpjl4es?svg=true)](https://ci.appveyor.com/project/rudolfsonjunior/node-get-git-remotes)
[![Coverage Status](https://coveralls.io/repos/github/aichbauer/node-get-git-remotes/badge.svg?branch=master)](https://coveralls.io/github/aichbauer/node-get-git-remotes?branch=master)

> Get the remote URLs of a git repository

## Installation

```sh
$ npm i get-git-remotes --save
```
or
```sh
$ yarn add get-git-remotes
```

## Usage

Returns a string of all remote URLs

```js
const getGitRemotes = require('get-git-remotes');

// the remote URLs of process.cwd();
getGitRemotes();

// the remote URLs of 'my/repo'
getGitRemotes('my/repo');
```

## LICENSE

MIT © Lukas Aichbauer
