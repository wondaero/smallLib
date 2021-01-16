let mainPage = new Vue({
    el: '#mainWrapper',
    data: {
        viewPage: 'main',
        version: 'pc'
    },
    methods: {
        sceneChange: function($target, initPageIdx, duration){
            let pageIdx = initPageIdx;
            let pageLen = $target.find('> *').length;

            $target.find('> *').show();
            $target.find('> *').eq(pageIdx % pageLen).hide();


            setInterval(function(){
                $target.find('> *').fadeOut(2000);
                $target.find('> *').eq(pageIdx++ % pageLen).fadeIn(2000);
            }, duration);
        },
        menuControl: function(boolean){
            if(boolean !== undefined && !boolean){
                $('#mainMenu').removeClass('RIGHT0');
            }else{

                $('#mainMenu').toggleClass('RIGHT0');
            }
            if($('#mainMenu').hasClass('RIGHT0')){
                $('#dimLayer').stop().fadeIn(500);
            }else{
                $('#dimLayer').stop().fadeOut(500);
            }
        },
        resizeWindow: function(){
            $(window).resize(function(){
                let window_w = $(window).width();
                if(window_w > 766){
                    $('#dimLayer').stop().fadeOut(500);
                    $('#mainMenu').attr('data-version', 'pc');
                }else{
                    if($('#mainMenu').attr('data-version') === 'pc'){
                        $('#mainMenu').removeClass('RIGHT0').attr('data-version', 'mobile');
                    }
                }
            })
        },
        controlByVersion: function(){
            let t = this;
            let window_w = $(window).width();
            if(window_w > 766){
               t.version = 'pc';
            }else{
                t.version = 'mobile';
            }
        }

    },
    create: function(){
        
    },
    mounted: function(){
        let t = this;
        t.sceneChange($('#sceneChange'), 3, 5000);
        t.resizeWindow();
    }

})