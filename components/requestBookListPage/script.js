(function () {
    const name = 'requestBookListPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'requestList'
                    }
                },
                methods: {
                    moveToRequest: function(mode){
                        let t = this;
                        mainPage.viewPage = 'request';
                        mainPage.requestMode = mode;
                    }

                },
                created: function () {
                    var t = this;
                }
            });
        });
    });
})();