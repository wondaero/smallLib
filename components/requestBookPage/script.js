(function () {
    const name = 'requestBookPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                        name: 'request',
                        mode: 'view',
                        editable: false
                    }
                },
                methods: {
                    delete_requestBook: function(){
                        if(confirm('정말로 삭제하시겠습니까?')){
                            alert('삭제 되었습니다.');
                        }
                    }
                },
                created: function () {
                    var t = this;
                    t.mode = mainPage.requestMode;
                },
                mounted: function () {
                    var t = this;
                    console.log(t.mode);
                }
            });
        });
    });
})();