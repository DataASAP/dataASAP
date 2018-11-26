const template = [
        {
            label: 'File',
            submenu: [
                {role: 'quit'}
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'}
        ]
        },
        {
            label: 'View',
            submenu: [
                {role: 'reload'},
                {role: 'forcereload'},
                {role: 'toggledevtools'},
                {type: 'separator'},
                {role: 'resetzoom'},
                {role: 'zoomin'},
                {role: 'zoomout'},
                {type: 'separator'},
                {role: 'togglefullscreen'}
            ]
        },
        {
            role: 'Window',
            submenu: [
                {role: 'minimize'}
            ]
        },
        {
            label: 'Config',
            submenu: [
                {
                label: 'Deidentify',
                submenu:[
                    {
                        label: "NCPDP D.0",
                        click()  { mf("NCPDP D.0");  }
                    },
                    {label: "SCRIPT 10.6"}
                ]
            }
            ]
        },
        {
            role: 'Help',
            submenu: [
                {
                label: 'Learn More',
                click () { require('electron').shell.openExternal('https://electronjs.org') }
                }
            ]
        }
    ];



    if (process.platform === 'darwin') {
        template.unshift({
          //label: app.getName(),
          label: "DataASAP",
          submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'}
          ]
        })
      
        // Edit menu
        template[1].submenu.push(
          {type: 'separator'},
          {
            label: 'Speech',
            submenu: [
              {role: 'startspeaking'},
              {role: 'stopspeaking'}
            ]
          }
        )
      
        // Window menu
        template[3].submenu = [
          {role: 'close'},
          {role: 'minimize'},
          {role: 'zoom'},
          {type: 'separator'},
          {role: 'front'}
        ]

    }
export default template;


  