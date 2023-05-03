const assert = require('chai').assert; // 使用 chai 的斷言

describe('#fbComments()', () => {
  it('disable', function() {
    const tag = require('../tag')({});

    assert.equal(tag(), '');
  });

  it('enable', function() {
    const tag = require('../tag')({
      width: '100%',
      numPosts: '7',
      orderBy: 'reverse_time',
      colorscheme: 'dark',
    });

    assert.include(tag(), '<div class="fb-comments"');
    assert.include(tag(), 'data-width="100%"');
    assert.include(tag(), 'data-numposts="7"');
    assert.include(tag(), 'data-order-by="reverse_time"');
    assert.include(tag(), 'data-colorscheme="dark"');
    assert.include(tag(), '></div>');
  });
});
