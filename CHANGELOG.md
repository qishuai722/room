## [0.1.11](https://github.com/aotuzuche/autos/compare/v0.1.10...v0.1.11) (2018-12-04)


### Bug Fixes

* fix [@babel](https://github.com/babel)/plugin-proposal-decorators 未设置 decoratorsBeforeExport 导致编译报错 ([2469efb](https://github.com/aotuzuche/autos/commit/2469efb))



## [0.1.10](https://github.com/aotuzuche/autos/compare/v0.1.9...v0.1.10) (2018-12-04)


### Bug Fixes

* 修复 uglifyjs-webpack-plug 依赖不存在 ([53a0010](https://github.com/aotuzuche/autos/commit/53a0010))


### Performance Improvements

* eslint 添加 cache ,并且引入 cacheIdentifier 来识别缓存的有效 ([9578ae7](https://github.com/aotuzuche/autos/commit/9578ae7))



## [0.1.9](https://github.com/aotuzuche/autos/compare/v0.1.8...v0.1.9) (2018-10-31)


### Performance Improvements

* 改善代码构建后的信息展示,增加 Gzipped 信息展示,去掉图片等资源的信息展示 ([d37ff99](https://github.com/aotuzuche/autos/commit/d37ff99))



## [0.1.8](https://github.com/aotuzuche/autos/compare/v0.1.7...v0.1.8) (2018-10-31)


### Bug Fixes

* 修复 autos dev 模式下编译进度和报错信息不够饱满,去掉 happypack ([49f82ef](https://github.com/aotuzuche/autos/commit/49f82ef))



## [0.1.7](https://github.com/aotuzuche/autos/compare/v0.1.6...v0.1.7) (2018-10-29)


### Bug Fixes

* webpackDevServer options 添加 historyApiFallback, 修复 spa 页面路由报错 ([5c2c6c3](https://github.com/aotuzuche/autos/commit/5c2c6c3))



## [0.1.6](https://github.com/aotuzuche/autos/compare/v0.1.4...v0.1.6) (2018-10-29)


### Bug Fixes

* **autos lint:** 去掉内置 eslintrc 文件, eslint 配置文件放在 package.json 里面, 修复了编辑器不实时检测 ([a451331](https://github.com/aotuzuche/autos/commit/a451331))
* fix WebpackDevServer host 修改为 0.0.0.0 ([884592a](https://github.com/aotuzuche/autos/commit/884592a))



## [0.1.4](https://github.com/aotuzuche/autos/compare/v0.1.3...v0.1.4) (2018-10-26)


### Bug Fixes

* **autos create:** 修复创建的时候错误使用 path.resolve 导致创建错误的目录 ([3208f19](https://github.com/aotuzuche/autos/commit/3208f19))



## [0.1.3](https://github.com/aotuzuche/autos/compare/v0.1.2...v0.1.3) (2018-10-19)


### Bug Fixes

* 修复构建的时候 include 没有包含 auto-ui 目录导致构建失败 ([c14c6e8](https://github.com/aotuzuche/autos/commit/c14c6e8))



## [0.1.2](https://github.com/aotuzuche/autos/compare/v0.1.1...v0.1.2) (2018-10-09)


### Bug Fixes

* 修复构建的路径报错 ([bcc4aab](https://github.com/aotuzuche/autos/commit/bcc4aab))



## [0.1.1](https://github.com/aotuzuche/autos/compare/v0.1.0...v0.1.1) (2018-10-09)


### Bug Fixes

* 修复 babel-loader include 的文件 bug，修复 babel preset-env 中的 modules 没有设置导致导入模块报错 ([1c0e858](https://github.com/aotuzuche/autos/commit/1c0e858))



# [0.1.0](https://github.com/aotuzuche/autos/compare/v0.0.9...v0.1.0) (2018-10-09)


### Bug Fixes

* 去掉 test.js 测试代码 ([8406c0e](https://github.com/aotuzuche/autos/commit/8406c0e))


### Features

* 修改了仓库地址，统一放到组织下面去 ([d3d6f6f](https://github.com/aotuzuche/autos/commit/d3d6f6f))



## [0.0.9](https://github.com/aotuzuche/autos/compare/v0.0.8...v0.0.9) (2018-10-08)


### Bug Fixes

* **package.json:** 修复 scritps 中 changelog 命令错误不生成新的更新文档 ([91d3f19](https://github.com/aotuzuche/autos/commit/91d3f19))
* 删除无用的忽略规则 ([fd9df51](https://github.com/aotuzuche/autos/commit/fd9df51))


### Features

* 增加 autos lint 命令，修改 autos dev 中 eslint-loader 的配置，聚合 eslint 配置 ([61bf896](https://github.com/aotuzuche/autos/commit/61bf896))


### Performance Improvements

* 优化 autos init 的性能，提升命令行的交互,去掉一些无用依赖 ([b661a30](https://github.com/aotuzuche/autos/commit/b661a30))
* 优化 autos 开发和构建的代码 ([9e3623d](https://github.com/aotuzuche/autos/commit/9e3623d))
* 增加 command 错误处理，修改了 init 的异步写法 ([f9ef848](https://github.com/aotuzuche/autos/commit/f9ef848))
* 添加公用的 resolveProjectPath 和 resolveAutosPath 来获取项目路径和脚手架路径，并且优化了一些文件目录结构 ([c556996](https://github.com/aotuzuche/autos/commit/c556996))



## [0.0.8](https://github.com/aotuzuche/autos/compare/v0.0.7...v0.0.8) (2018-09-29)


### Bug Fixes

* gitignore 忽略规则错误导致文件不提交 ([ee876b8](https://github.com/aotuzuche/autos/commit/ee876b8))
* 去除 tinyimg-loader, tinypng 对并发数做了限制 ([6d4462f](https://github.com/aotuzuche/autos/commit/6d4462f))
* **package.json:** 修复 commit-msg ([9100005](https://github.com/aotuzuche/autos/commit/9100005))


### Features

* release 的时候增加 release:note ([2010339](https://github.com/aotuzuche/autos/commit/2010339))
* 添加 commitizen 和 cz-conventional-changelog ([acb49f2](https://github.com/aotuzuche/autos/commit/acb49f2))
* 添加 webpack-bundle-analyzer 帮助优化代码，通过参数 --analyzer 开启 ([31b8e62](https://github.com/aotuzuche/autos/commit/31b8e62))
* **package.json:** add ([8327380](https://github.com/aotuzuche/autos/commit/8327380))
* **package.json:** 增加 changelog 命令 ([4061303](https://github.com/aotuzuche/autos/commit/4061303))
* **update:** 完善 autos update 命令 ([0a44d58](https://github.com/aotuzuche/autos/commit/0a44d58))



## [0.0.7](https://github.com/aotuzuche/autos/compare/v0.0.6...v0.0.7) (2018-09-28)


### Bug Fixes

* eslint-loader 没有在依赖中报错 ([249e2c9](https://github.com/aotuzuche/autos/commit/249e2c9))



## [0.0.6](https://github.com/aotuzuche/autos/compare/v0.0.4...v0.0.6) (2018-09-28)


### Bug Fixes

* release.sh commit 信息不符合规范 ([7578ef4](https://github.com/aotuzuche/autos/commit/7578ef4))
* 去掉 verify-commit-msg log ([b562447](https://github.com/aotuzuche/autos/commit/b562447))



## 0.0.4 (2018-09-27)



