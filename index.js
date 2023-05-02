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

initConfig().then(() => {
  hexo.extend.injector.register(
      'head_end', require('./head')(config), config?.to);
  hexo.extend.tag.register(
      'fb_comments', require('./tag')(config), {async: true});
});
