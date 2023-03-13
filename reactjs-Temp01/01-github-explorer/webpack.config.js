/* Importação para rpadronizar a localização dos arquivos. */
const path = require('path');
/* Plugin utilizado para gerar o html final com a importação correta, melhorando o fluxo da aplicação. */
const htmlWebpackPlugin = require('html-webpack-plugin');
/* */
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/* Cria uma variável para checar se o NODE_ENV está como production.*/
const isDevelopment = process.env.NODE.ENV !== 'production';

module.exports = {
    /** Define o modo de finalização do pacote, sendo o de desenvolvimento mais rápido, pois não faz algumas otimizações
     * e fica mais legível. 
     * Faz a checagem se é ambiente de desenvolvimento ou produção.
    */
    mode: isDevelopment ? 'development' : 'production',
    /** 
     * Auxilia na visualização de erros no Inspect do navegador, mostrando o código
     * exato conforme foi desenvolvido para debugar.
     * Faz a checagem se é ambiente de desenvolvimento ou produção e aplica o
     * sourcemap correspondente.
    */
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    /* Definição do arquivo de origem. */
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    /* Definição do arquivo de destino. */
    output: {
        /* Definição da pasta de destino. */
        path: path.resolve(__dirname, 'dist'),
        /* Definição do arquivo de destino. */
        filename: 'bundle.js'
    },
    /* Formatos de arquivos que serão lidos pelo webpack. */
    resolve: {
        extensions: ['.js', '.jsx']
    },
    /* Especifica a pasta de arquivos estáticos que será monitorada pelo webpack live server. */
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        hot: true
    },
    plugins: [
        /* Plugin instanciado, onde em ambiente de produção, habilita o webpack fast refresh. */
        isDevelopment && new reactRefreshWebpackPlugin(),
        /* Plugin instanciado, passando a localização de um template base. */
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    /* Como a aplicação vai se comportar nas importações dos arquivos. */
    module: {
        /* Conjunto de regras onde cada uma definirá a importação de um tipo de arquivo. */
        rules: [
            {
                /* Regex que testa a regra a ser definida. */
                test: /\.jsx$/,
                /* OpçÃo que exclui a pasta 'node_modules' por ela estar pronta para a produção. */
                exclude: /node_modules/,
                /* Extensão que integra o Babel com o Webpack. */
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                /* Regex que testa a regra a ser definida. */
                test: /\.scss$/,
                /* OpçÃo que exclui a pasta 'node_modules' por ela estar pronta para a produção. */
                exclude: /node_modules/,
                /* Extensão que integra os loaders de css. */
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}