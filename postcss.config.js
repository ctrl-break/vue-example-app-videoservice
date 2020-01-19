module.exports = {
    plugins: [
        require('postcss-animation'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer'),
        require('doiuse')({
            ignoreFiles: ['**/reset.scss'],
            ignore: ['flexbox', 'viewport-units', 'css-gradients']
        })
    ]
};
