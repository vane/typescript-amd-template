const InitModule = (name) => {
  const instantiate = System.constructor.prototype.instantiate;
  System.constructor.prototype.instantiate = function (url, parentUrl) {
    // console.log(url, parentUrl);
    if (url.indexOf('.') < 0) {
      url += '.js'
    }
    return Promise.resolve(instantiate.call(this, url, parentUrl));
  };
  System.import(name);
}
