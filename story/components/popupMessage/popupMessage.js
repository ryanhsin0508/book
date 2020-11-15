var PopupMessage = {};
PopupMessage.install = function(Vue) {
    Vue.prototype.$popupMessage = function(type, message, s) {
        // 參數設定
        let second;
        let icon;
        if (s) {
            second = s;
        } else {
            second = 2;
        }
        switch (type) {
            case 'success':
                icon = 'el-icon-circle-check';
                break;
            case 'warning':
                icon = 'el-icon-warning';
                break;
            case 'error':
                icon = 'el-icon-error';
                break;
        }
        // 判斷是否已存在 DOM 有則刪除
        if (document.getElementById('popup_message')) {
            var parent = document.body;
            var child = document.getElementById('popup_message');
            parent.removeChild(child);
        }
        // 建立 DOM 並插入實例中
        var insertElement = document.createElement('section');
        insertElement.id = 'popup_message';
        insertElement.className = 'popup_message_' + type;
        document.body.appendChild(insertElement);
        document.getElementById('popup_message').innerHTML = '<i class="' + icon + '"></i> ' + message;
        // 若干秒後刪除 DOM
        setTimeout(function() {
            if (document.getElementById('popup_message')) {
                var parent = document.body;
                var child = document.getElementById('popup_message');
                parent.removeChild(child);
            }
        }, second * 1000);
    };
};
export default PopupMessage;
