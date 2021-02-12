(function () {
    const name = 'regBook';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        bookCode: ''
                    }
                },
                methods: {
                },
                created: function () {
                    $(document.head).append('<link href="components/' + name + '/style.css' + '" rel="stylesheet" />');
                },
                mounted: function(){
                }
            });
        });
    });
})();