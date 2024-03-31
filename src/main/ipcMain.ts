import { Menu, ipcMain, MenuItemConstructorOptions } from 'electron'

ipcMain.on('quit', () => {
  const template = [
    {
      label: '退出',
      click: () => {
        console.log('@@@')
      }
    }
  ] as MenuItemConstructorOptions[]

  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
