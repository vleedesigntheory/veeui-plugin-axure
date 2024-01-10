const { defineConfig } = require('@vue/cli-service');
const { baseName, proxyUrl, title  } = require('./base.config.js');

const MockServiceWebpackPlugin = require('mock-service-webpack-plugin');

const path = require('path');
const fs = require('fs');

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: "dist",
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
      plugins: [
          new MockServiceWebpackPlugin({
              source: path.resolve(process.cwd(), './src/mock'), // your mock file directory path
              port: 9009 // you wanna a mock service port
          })
      ]
    },
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = title;
  
        return args;
      })
    },
    devServer: {
      host: "0.0.0.0",
      port: 8080,
      proxy: {
        ["^/" + baseName]: {
          // 后台接口域名 联调更改此处IP即可
          target: proxyUrl,
          pathRewrite: {
            ["^/" + baseName]: "",
          },
        }
      }
    }
})