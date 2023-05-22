import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'

// 定义全局变量，获取窗口实例
let win: BrowserWindow | null;


/**
 * 创建一个窗口
 */
const createWindow = () => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        center: true,
        // autoHideMenuBar: true,
        backgroundColor: 'rgb(0, 0, 0)',
        webPreferences: {
            devTools: true,
            // 集成网页和 Node.js，也就是在渲染进程中，可以调用 Node.js 方法
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {

        // Load your file
        win.loadFile(path.resolve(__dirname, '../dist/index.html'));
    }

    // 关闭窗口时就关闭程序，避免占用过多资源
    win.on("close", () => {
        win = null
    })
}

// 自定义菜单
const createMenu = () => {
    const Menus: any = [
        {
            label: 'Files',
            submenu: [
                {
                    label: '网页版',
                    role: 'help',
                    submenu: [{
                        label: '网页版',
                        click: function () {
                            alert('网页版')
                        }
                    }]
                },
                {
                    label: '帮助',
                    role: 'help',
                    submenu: [{
                        label: '帮助文档',
                        click: function () {
                            alert('帮助文档')
                        }
                    }]
                }
            ]
        }
    ];

    const mainMenu = Menu.buildFromTemplate(Menus);
    Menu.setApplicationMenu(mainMenu);
}


// 初始化app（在 Electron 完成初始化时触发），挂载上面创建的 桌面应用程序窗口
app.whenReady().then(() => {
    createWindow()
    // createMenu()
})
