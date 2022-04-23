// https://github.com/minamo173/hexo-tag-link-preview

const assert = require('chai').assert; // 使用 chai 的斷言

describe('test head', () => {
  it('should no fb_app meta tag', function() {
    const Hexo = require('hexo');
    const hexo = new Hexo(__dirname, {debug: true});
    hexo.init();
    hexo.config.fb_comments = {
      enabled: true,
    };

    // FIXME: hexo is not defined at index.js:52
    const plugin = require('../index').bind(hexo);

    assert.notInclude(plugin.fbCommentsHead, '<meta property="fb:app_id"');
  });
});
