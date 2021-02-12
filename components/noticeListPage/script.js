(function () {
    const name = 'noticeListPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'noticeList'
                    }
                },
                methods: {
                    writtenManager: function(mode){
                        let t = this;
                        mainPage.viewPage = 'notice';
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