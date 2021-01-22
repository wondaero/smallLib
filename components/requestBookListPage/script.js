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

                },
                created: function () {
                    var t = this;
                }
            });
        });
    });
})();