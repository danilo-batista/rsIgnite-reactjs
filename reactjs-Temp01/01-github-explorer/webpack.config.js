/* Importação para rpadronizar a localização dos arquivos. */
const path = require('path');
/* Plugin utilizado para gerar o html final com a importação correta, melhorando o fluxo da aplicação. */
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* Define o modo de finalização do pacote, sendo o de desenvolvimento mais
    rápido, pois não faz algumas otimizações e fica mais legível. */
    mode: 'development',
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
        // contentBase: path.resolve(__dirname, 'public')
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    },
    plugins: [
        /* Plugin instanciado, passando a localização de um template base. */
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
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
                use: 'babel-loader'
            }
        ]
    }
}