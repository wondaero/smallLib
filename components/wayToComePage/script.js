(function () {
    const name = 'wayToComePage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'wayToCome'
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