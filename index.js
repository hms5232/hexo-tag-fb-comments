let _config = null;

// 抓設定
function initConfig() {
  if (!hexo.config.fb_comments) return false;

  _config = hexo.config.fb_comments;

  if (!_config.enabled) return false;

  _config.to = _config.to || 'post';
  _config.lang = _config.lang || 'zh_TW';
  _config.numPosts = _config.num_posts || 5;
  _config.orderBy = _config.order_by || 'reverse-time';
  _config.colorscheme = _config.colorscheme || 'light';
  _config.width = _config.width || '100%';

  return true;
}

// 寫 <head>
function fbCommentsHead() {
  if (!initConfig()) return '';

  // if app_id no value => null
  // if app_id not exists => undefined
  const fbAppMeta = _config.app_id == null ?
    `` :
    `<meta property="fb:app_id" content="${_config.app_id}" />`;

  return fbAppMeta + `
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/${_config.lang}/sdk.js#xfbml=1&version=v12.0"></script>
  `;
}

// 留言外掛
function fbComments(args, content) {
  if (!initConfig()) return '';

  return `
    <div class="fb-comments"
      data-href="${this.permalink}"
      data-width="${_config.width}"
      data-numposts="${_config.numPosts}"
      data-order-by="${_config.orderBy}"
      data-colorscheme="${_config.colorscheme}"
    ></div>
  `;
}

hexo.extend.injector.register('head_end', fbCommentsHead(), _config.to);
hexo.extend.tag.register('fb_comments', fbComments, {async: true});
