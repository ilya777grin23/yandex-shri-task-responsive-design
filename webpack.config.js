const path = require('path');

const DIST_PATH = path.join(__dirname, 'dist');
const SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    entry: {
        // react: path.join(SRC_PATH, '/components/Pages/Events.tsx'),
        server: path.join(SRC_PATH, 'server.tsx')
    },
    target: 'node',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|ts)x?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                    }
                ]
            },
            {
                test: /\.sss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            parser: 'sugarss',
                            plugins: loader => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')({
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                }),
                                require('precss'),
                                require('postcss-assets')({
                                    basePath: DIST_PATH,
                                    loadPaths: ['assets/']
                                }),
                                require('postcss-preset-env')({
                                    stage: 2,
                                    browsers: ['ie >= 10', 'last 2 version']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|gif|png|woff|ttf|wav|mp3|mp4)$/,
                loader: 'file-loader'
            }
        ],
    }
};
