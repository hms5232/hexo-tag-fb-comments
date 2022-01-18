let _config = null;

// 抓設定
function initConfig() {
  if (!hexo.config.fb_comments)
    return false;

  _config = hexo.config.fb_comments;

  if (!_config.enabled)
    return false;

  _config.lang = _config.lang || 'zh_TW';
  _config.numPosts = _config.numPosts || 5;
  _config.order_by = _config.order_by || 'reverse-time';
  _config.colorscheme = _config.colorscheme || 'dark';
  _config.width = _config.width || '100%';

  return true;
}

// 寫 <head>
function fbCommentsHead() {
  if (!initConfig()) return("");

  let html = `
    <meta property="fb:app_id" content="${_config.appId}" />
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/${_config.lang}/sdk.js#xfbml=1&version=v12.0"></script>
  `;

  return html;
}

// 留言外掛
function fbComments(args, content) {
  if (!initConfig()) return("");

  let html = `
    <div class="fb-comments"
      data-href="${this.permalink}"
      data-width="${_config.width}"
      data-numposts="${_config.numPosts}"
      data-order-by="${_config.order_by}"
      data-colorscheme="${_config.colorscheme}"
    ></div>
  `;

  return html;
}

hexo.extend.injector.register('head_end', fbCommentsHead(), 'post');
hexo.extend.tag.register('fb_comments', fbComments, {async: true});
