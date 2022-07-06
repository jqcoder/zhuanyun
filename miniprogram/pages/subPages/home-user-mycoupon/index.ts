// pages/subPages/home-user-mycoupon/index.ts
Page({
    data: {
    
    },

    onLoad() {

    },

    handleOnclick(){
        wx.showModal({
            title: '兑换优惠卷',
            showCancel: true,
            editable: true,
            confirmColor: '#02BB00',
            placeholderText: '请输入优惠卷code，进行兑换',
            success(res){
                console.log(res);
            }
        })
    }


})