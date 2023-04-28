const config = {};

/**
 * Get config.
 *
 * @return {void}
 */
async function initConfig() {
  if (!hexo.config.fb_comments) return;

  hexoConfig = hexo.config.fb_comments;

  if (!hexoConfig.enabled) return;

  config.to = hexoConfig.to || 'post';
  config.lang = hexoConfig.lang || 'zh_TW';
  config.appId = hexoConfig.app_id || null;
  config.numPosts = hexoConfig.num_posts || 5;
  config.orderBy = hexoConfig.order_by || 'reverse-time';
  config.colorscheme = hexoConfig.colorscheme || 'light';
  config.width = hexoConfig.width || '100%';
}

/**
 * Build content in head.
 *
 * @return {string}
 */
function fbCommentsHead() {
  if (Object.keys(config).length == 0) return '';

  // if app_id no value => null
  // if app_id not exists => undefined
  const fbAppMeta = config.appId == null
    ? ``
    : `<meta property="fb:app_id" content="${config.appId}" />`;

  return fbAppMeta + `
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/${config.lang}/sdk.js#xfbml=1&version=v12.0"></script>
  `;
}

/**
 * Build tag content in body.
 *
 * @param {string[]} args
 * @param {string} content
 * @return {string}
 */
function fbComments(args, content) {
  if (Object.keys(config).length == 0) return '';

  return `
    <div class="fb-comments"
      data-href="${this.permalink}"
      data-width="${config.width}"
      data-numposts="${config.numPosts}"
      data-order-by="${config.orderBy}"
      data-colorscheme="${config.colorscheme}"
    ></div>
  `;
}

initConfig().then(() => {
  hexo.extend.injector.register('head_end', fbCommentsHead(), config?.to);
  hexo.extend.tag.register('fb_comments', fbComments, {async: true});
});
