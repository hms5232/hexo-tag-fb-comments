module.exports = (config) => {
  /**
   * Build tag content in body.
   *
   * @param {string[]} args
   * @param {string} content
   * @return {string}
   */
  return function fbComments(args, content) {
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
  };
};
