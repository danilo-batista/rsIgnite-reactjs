module.exports = {
    presets: [
        '@babel/preset-env',
        /* Para passar uma configuraçào, precisa transformar em um array
        e como segundo parâmetro, um objeto de configurações. */
        ['@babel/preset-react', {
            /* Esta config inibie a necessidade de importar o 'react' em
            todos as páginas. */
            runtime: 'automatic'
        }]
    ]
};