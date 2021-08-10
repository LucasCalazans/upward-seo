const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const upwardSeo = Targetables.using(targets);
    upwardSeo.setSpecialFeatures('upward', 'graphqlQueries');
};
