import loaderUtils from 'loader-utils';
import getVariables from './get-variables';
import parseVariables from './parse-variables';

module.exports = function(content) {
  this.cacheable && this.cacheable();
  const opts = loaderUtils.parseQuery(this.query);
  const variables = parseVariables(getVariables(content), opts);

  return `module.exports = ${JSON.stringify(variables)};`;
};
