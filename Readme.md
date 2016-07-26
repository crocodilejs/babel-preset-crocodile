
# babel-preset-crocodile

[![Slack Status][slack-image]][slack-url]
[![MIT License][license-image]][license-url]

> This is an opinionated Babel configuration for [CrocodileJS][crocodile-url].

It adds the presets `es2015` and `stage-0` for you!


## Install

First add the configuration to your `package.json` file:

```bash
npm i --save-dev babel-preset-crocodile
```

Then create a new file called `.babelrc`, and its contents should be:

```json
{
  "presets": [ "crocodile" ]
}
```

That's it!  Of course you will need to know how to use [Babel][babel] from here.


## License

[MIT License][license-url]


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[crocodile-url]: https://crocodilejs.com
[slack-image]: http://slack.crocodilejs.com/badge.svg
[slack-url]: http://slack.crocodilejs.com
[babel]: https://babeljs.io/
