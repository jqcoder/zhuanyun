// app.ts
App<IAppOption>({
    globalData: {
    },
    onLaunch() {
        console.log(wx.setStorageSync('address', `
        [
            {
            id: 1,
            name:'小郑',
            headName: '小',
            tel: '13066664444',
            address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
            isDefault: 1
        },
        {
            id: 2,
            name:'杰杰杰',
            headName: '杰',
            tel: '13066663333',
            address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
            isDefault: 0
        }
    ]
        `));
    },
})