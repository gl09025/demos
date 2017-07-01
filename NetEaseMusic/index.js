/**
 * Created by Andrew on 2017/6/29.
 */
$(function(){
    $.get('./songs.json').then(function(response){
        let items = response
        items.forEach((i)=>{
            let $li = $(`<a class="m-sgitem" href="./song.html?id=${i.id}">
    <div class="sgfr f-bd f-bd-btm">
    <div class="sgchfl">
    <div class="f-thide sgtl"><!-- react-text: 124 -->${i.name}<!-- /react-text --></div>
<div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>
    <!-- react-text: 127 -->${i.singer}<!-- /react-text --><!-- react-text: 128 --> -
    <!-- /react-text --><!-- react-text: 129 -->${i.album}
<!-- /react-text --></div>
</div>
<div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
    </div>
    </a>           
`)
            $('.m-sglst').append($li)
        })
        $('.load-image').remove()
    },function(){
        alert("失败")
    })

    //添加导航栏点击切换效果
    $('.u-tab').on('click','li.tabtitle>.tabtxt',function(e){
        let $li = $(e.currentTarget).parent()
         $li.addClass('z-selected')
            .siblings().removeClass('z-selected')
        let index = $li.index()
        $li.trigger('tabChange',index)
        $('.u-tab > li').eq(index).addClass('z-selected')
            .siblings().removeClass('z-selected')
//下面三块li的显示隐藏
        $('.tableContent > li').eq(index).addClass('active').siblings().removeClass('active')
    })

    $('.u-tab').on('tabChange',function(e,index){
        let $li = $('.tableContent > li').eq(index)
        if ($li.attr('data-downloaded') === 'yes'){
            return
        }
        if (index === 1){
            $.get('./page2.json').then((response)=>{
                console.log(response)
                $li.text(response.content)
                $li.attr('data-downloaded','yes')
            })
        }else if (index === 2){
            $.get('./page3.json').then((response)=>{
                $li.text(response.content)
                $li.attr('data-downloaded','yes')
            })
        }
    })
})


