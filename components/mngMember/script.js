(function () {
    const name = 'mngMember';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        memberRange: 'member'
                    }
                },
                methods: {
                    searchMember: function(){
                        let t = this;
                        //멤버에 따른 리스트 변경
                        t.memberRange = $('#memberRange').val();
                    }
                },
                created: function () {
                    $(document.head).append('<link href="components/' + name + '/style.css' + '" rel="stylesheet" />')
                }
            });
        });
    });
})();