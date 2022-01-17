# hexo-fb-comments
Facebook comments plugin for Hexo!

## 使用方式
### 安裝套件
如果你使用 npm：
```
npm i hexo-fb-comments-plugin
```
如果你使用 yarn：
```
yarn add hexo-fb-comments-plugin
```
其他的請自行依照所使用的套件管理器指令安裝。

### 設定
#### 設定檔
請在專案根目錄的 `_config.yml` 中加入下列設定：
```yml
fb_comments:
  enabled: true
```
至少要這樣，FB 留言外掛才會啟用。但個人推薦再加入 `appId` 才可以統一管理留言。完整可設定的範例如下：
```yml
fb_comments:
  enabled: true  # 是否開啟 FB 留言外掛
  appId:   # FB 應用程式編號
  lang: zh_TW  # 語言
  numPosts: 5  # 顯示幾則留言
  order_by: reverse-time  # 留言排序依據，有 time 和 reverse-time
  colorscheme: dark  # 介面風格，有 white 和 dark 可選
  width: 100%  # 寬度
```

#### 文章或頁面
請在想顯示 FB 留言外掛的地方，放上下面這個標籤：
```
{% fb_comments %}
```

如果嫌每次都要加麻煩的話，可以在鷹架（scaffolds）中直接修改產生文章的模板，以後產生指定 layout 的 md 時就會自動附在裏頭。

## 和其他外掛的不同
多數外掛都會要你修改主題檔案，但如果你使用的主題語言不是很多人使用的 EJS 或是和各路教學文不同，那就 GG 了；或是採用 HEXO 5 新方法──npm 安裝主題，那也 GG 了，根本不可能去修改 node_modules 的主題（更何況有些還是自動部署上去才安裝套件的）在某天發現一些 Hexo API，靈機一動之下想出了不用改動模板就能鑲嵌（發音同「千」別再念錯了！！）FB 留言板的方式，也幸運的實作出來，希望電腦前的你會喜歡。

## 特別感謝
感謝以下偉大的前人，才有今天這個套件的誕生：
* [Getting started with Hexo Plug-ins, and scripts](https://dustinpfister.github.io/2018/01/03/hexo-plugins/)
* https://github.com/lsmoura/hexo-fbcomments
* https://github.com/GhostyJade/hexo-sponsor-button
* https://github.com/fluid-dev/hexo-theme-fluid

## LICENSE
[MIT License](LICENSE)
