# hexo-tag-fb-comments

[正體中文（zh-TW）](zh-TW.md)| **English (en-US)**

Facebook comments plugin for Hexo!

## Requirement
* Hexo 5 or above

## Usage
### Installation
npm:
```
npm i hexo-tag-fb-comments
```
yarn:
```
yarn add hexo-tag-fb-comments
```

### Seting
#### config
Add the following config into your `_config.yml` which at project root:
```yml
fb_comments:
  enabled: true
```
Recommend additional item `app_id`, that you can manage comments in FB app. Here is complate config item:
```yml
fb_comments:
  enabled: true  # Enable FB comments plugin or not.
  to: post  # post, page or default (everywhere), etc.
  app_id:   # FB app id
  lang: zh_TW  # language
  num_posts: 5  # The number of comments to show by default.
  order_by: reverse-time  # The order to use when displaying comments. Can be "reverse_time" or "time".
  colorscheme: light  # The color scheme used by the comments plugin. Can be "light" or "dark".
  width: 100%  # The width of the comments plugin on the webpage.
```

See more on https://developers.facebook.com/docs/plugins/comments/

#### Tag
Put tag at where you wnat to embed the plugin:
```
{% fb_comments %}
```

## Feature
* No need to edit theme files.
* You can change position of comments plugin by moving tag easily.

## Thanks
Thanks these giants:
* [Getting started with Hexo Plug-ins, and scripts](https://dustinpfister.github.io/2018/01/03/hexo-plugins/)
* https://github.com/lsmoura/hexo-fbcomments
* https://github.com/GhostyJade/hexo-sponsor-button
* https://github.com/fluid-dev/hexo-theme-fluid

## LICENSE
[MIT License](LICENSE)
