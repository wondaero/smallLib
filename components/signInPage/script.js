(function () {
    const name = 'signInPage';

    Vue.component(name, function (resolve, reject) {
        $.get('components/' + name + '/index.html').done(function (tmpl) {
            resolve({
                template: tmpl,
                data: function () {
                    return {
                    }
                },
                methods: {
                    signIn: function(){
                        let id = $('#signInId').val();
                        let pw = $('#signInPw').val();
                        if(id === 'admin' && pw === '1111'){
                            alert('로그인 되었습니다.');
                            mainPage.viewPage = 'main';
                            mainPage.userId = 'admin';
                        }else{
                            alert('잘못된 접근입니다.');
                        }
                    }
                },
                created: function () {
                    $(document.head).append('<link href="components/' + name + '/style.css' + '" rel="stylesheet" />')
                }
            });
        });
    });
})();