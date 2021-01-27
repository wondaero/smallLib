let mainPage = new Vue({
    el: '#mainWrapper',
    data: {
        viewPage: 'main',
        version: 'pc',
        userId: null,
        requestMode: 'new'
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
            let t = this;
            console.log(t.version);
            if(t.version === 'pc') return;


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
            let t = this;
            $(window).resize(function(){
                let window_w = $(window).width();
                if(window_w > 766){
                    $('#dimLayer').stop().fadeOut(500);
                    t.version = 'pc';
                    $('#mainMenu').find('ul ul').addClass('none');
                }else{
                    if(t.version === 'pc'){
                        $('#mainMenu').removeClass('RIGHT0');
                    }
                    t.version = 'mobile';
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
        },
        openSubMenu(target){
            let t = this;
            console.log(t.version);
            if(t.version === 'pc') return;

            let $targetUl = $(target.currentTarget).find('ul');
            $targetUl.toggleClass('none');
        },

        childrenSelector(name){
            for(let i in mainPage.$children){
                console.log(i);
            }
            console.log(mainPage);
            
            return null;
        }

    },
    create: function(){
    },
    mounted: function(){
        let t = this;
        t.controlByVersion();
        t.sceneChange($('#sceneChange'), 3, 5000);
        t.resizeWindow();
    }

})