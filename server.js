import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';
import { join } from 'path';
import { reactByExampleOptions as options } from './package.json';

const PORT = 3000;

new WebpackDevServer(webpack(config), {
  contentBase: join(__dirname, options.contentBase),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(PORT, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:' + PORT);
});
