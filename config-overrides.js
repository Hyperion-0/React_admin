const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
fixBabelImports('import', {
libraryName: 'antd',
libraryDirectory: 'es',
style: true,
}),
addLessLoader({
javascriptEnabled: true,
modifyVars: {'@primary-color': '#1DA57A'},
cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
        cssModules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        },
}),
);