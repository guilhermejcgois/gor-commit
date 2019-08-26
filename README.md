# gor-commit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Commitizen for Gorila projects :gorila-horns:

## Installation

```sh
$ npm install -g gor-commit
```

## Repository configuration

To get a list of options for scope step, create a `.czrc` file in the repository's root. A sample is provided under `/lib/sample.rc`.

For more information about scopes, take a look at (cz-jira-smart-commit repository)[https://github.com/EndemolShineGroup/cz-jira-smart-commit].

## Usage

Just use `gor-commit` instead regular `git-commit` command.

## Tips

### Retrying last failed commit attempt

If for some reasons the last attempt to go a commit using `gor-commit` was failed, you don't need to answer again

all the questions. Use the `--retry` flag.

### Skipping hooks

If you **really need** to skip `pre-commit` and `commit-msg` hooks, just use `--no-verify` flag.

## License

MIT © [Guilherme Gois](gois.dev)

[npm-image]: https://badge.fury.io/js/gor-commit.svg
[npm-url]: https://npmjs.org/package/gor-commit
[travis-image]: https://travis-ci.com/guilhermejcgois/gor-commit.svg?branch=master
[travis-url]: https://travis-ci.com/guilhermejcgois/gor-commit
[daviddm-image]: https://david-dm.org/guilhermejcgois/gor-commit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/guilhermejcgois/gor-commit
[coveralls-image]: https://coveralls.io/repos/guilhermejcgois/gor-commit/badge.svg
[coveralls-url]: https://coveralls.io/r/guilhermejcgois/gor-commit
