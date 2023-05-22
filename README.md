# Electron + Vue 3 + TypeScript + Vite

## 构建 Electron 项目

### 1. 安装依赖

npm install electron -D
npm install vite-plugin-electron -D 

### 2. 编写 Electron 入口文件

创建 electron/main.ts，与 src 目录同级

### 3. 在 vite.config.ts 中，配置 Electron 入口文件

配置 Electron 入口文件 —— 打开 vite.config.ts，引入 electron/main.ts，（注意：vite-plugin-electron 版本不同，electron 配置可能不一样）

plugins: [
    vue(),
    electron({
        entry: 'electron/main.ts',
    })
]


### 4. 在 package.json 中，增加 main 字段，去掉 type 字段

🚨 默认情况下, electron 文件夹下的文件将会被构建到 dist-electron（注意：vite-plugin-electron 版本不同，构建的文件夹也可能不同）
🚨 目前, Electron 尚未支持 "type": "module"

"main": "dist-electron/main.js" 

### 5. 运行项目

npm run dev


## 打包 Electron 桌面程序

### 1. 安装打包依赖 electron-builder

npm install electron-builder -D 

### 2. 在 package json 中，配置 build 命令

"build": "vue-tsc --noEmit && vite build && electron-builder"

### 3. 修改 package.json，增加 electron-builder 相关配置

"build": {*****}

注意：build: { files : ''} ， dist 是项目打包文件，dist-electron 是 Electron 入口文件，插件版本不同所构建的文件夹可能不同 

### 4. 执行打包，安装应用

npm run build

