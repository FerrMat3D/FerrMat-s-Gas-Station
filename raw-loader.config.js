const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(frag|vert)$/,
        use: 'raw-loader',
        include: [path.resolve(__dirname, 'src\Shaders')], // Substitua 'src' pelo diretório onde estão seus arquivos
      },
    ],
  },
};
