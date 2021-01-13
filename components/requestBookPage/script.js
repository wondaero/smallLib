(function () {
    const name = 'requestBookPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'request'
                    }
                },
                methods: {
                },
                created: function () {
                    var t = this;
                },
                mounted: function () {
                    var t = this;
                }
            });
        });
    });
})();