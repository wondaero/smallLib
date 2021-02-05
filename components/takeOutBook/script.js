(function () {
    const name = 'takeOutBook';

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
                    // mainPage.controlHeight($('#takeOutBook_bookInfo'), -44);
                }
            });
        });
    });
})();