module.exports = (config) => {
  /**
   * Build content in head.
   *
   * @return {string}
   */
  return function fbCommentsHead() {
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
  };
};
