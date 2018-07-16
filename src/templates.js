export const baseWebpack = {
    entry: './src/index.js',
    output: {
        path: "CODE:path.resolve(__dirname, 'dist')",
        filename: 'bundle.js'
    }
}

export const baseWebpackImports = [
    "const webpack = require('webpack');",
    "const path = require('path');"
];

export const packageJson = {
  // "name": "empty-project-react-less-png-production-mode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "clean": "rm dist/bundle.js",
    "build-dev": "webpack -d --mode development",
    "build-prod": "webpack -p --mode production"
  },
  //"devDependencies": {
//    "react": "^16.4.1",
  //}
}

export const readmeFile = (name, isReact) => `# ${name}

Empty project.

## Building

First install dependencies:

\`\`\`sh
npm install
\`\`\`

To create a production build:

\`\`\`sh
npm run build-dev
\`\`\`

To create a development build:

\`\`\`sh
npm run build-dev
\`\`\`

## Running

${isReact ? "Open the file `dist/index.html` in your browser" : "```sh\nnode dist/bundle.js\n```"}

`
