const assert = require('chai').assert; // 使用 chai 的斷言

describe('#fbCommentsHead()', () => {
  it('disable', function() {
    const head = require('../head')({});

    assert.equal(head(), '');
  });

  it('enable', function() {
    const head = require('../head')({appId: 5232, lang: 'zh_TW'});

    const result = head();
    assert.include(result, '<meta property="fb:app_id" content="5232" />');
    assert.include(result, '<div id="fb-root"></div>');
    assert.include(result, '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v12.0"></script>');
  });
});
