const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada aplicacion
    output:{
        filename:'bundle.js', //Nombre del archivo de salida
        path: path.resove(__dirname, 'dist') //carpeta de salida
    },
    module:{
        rules:[
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'] //loadder para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude:/node_modules/, //excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader',// loader para convertir JS moderno al JS compatible a mas navegadores
                    options:{
                        presets:['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool:'source-map', //mapas de codigo para facilitar la depuracion
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), //carpeta que correra el servidor
        compress: true, // habilitar compresion gzip (reduicir el peso de los archivos)
        port: 9000, // puerto del servidor de desarrollo
    },
};