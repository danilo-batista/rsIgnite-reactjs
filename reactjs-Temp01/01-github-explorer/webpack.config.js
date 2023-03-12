/* Importação para rpadronizar a localização dos arquivos. */
const path = require('path');

module.exports = {
    /* Definição do arquivo de origem. */
    entry: path.resolve(__dirname, 'src', 'app.jsx'),
    /* Definição do arquivo de destino. */
    output: {
        /* Definição da pasta de destino. */
        path: path.resolve(__dirname, 'dist'),
        /* Definição do arquivo de destino. */
        filename: 'bundle.js'
    },
    /* Formatos de arquivos que serão lidos pelo webpack. */
    resolve: {
        extensions: ['js', 'jsx']
    },
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