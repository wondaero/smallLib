(function () {
    const name = 'barCode';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                    }
                },
                methods: {
                    openBarcodePopup: function(){
                        let popup = window.open("barCode.html", "_blank", "width=500, height=500");
                    }
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