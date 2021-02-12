(function () {
    const name = 'newBookPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'new'
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