import path from 'path'
const root = path.join(__dirname, '..')

export default {
  entry: path.join(root, 'src/app'),
  outputPath: path.join(root, 'build'),
  staticFolder: path.join(root, 'static'),
  srcFolder: path.join(root, 'src'),
  port: 3030
}


