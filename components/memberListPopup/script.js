(function () {
    const name = 'memberListPopup';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {

                    }
                },
                methods: {
                    pickMember: function(){
                        mainPage.popupData.pickMember = '010-8580-5167';
                    }
                },
                created: function () {
                    $(document.head).append('<link href="components/' + name + '/style.css' + '" rel="stylesheet" />')
                }
            });
        });
    });
})();