/**
 * Created by Andrew on 2017/6/29.
 */
$(function(){


    $.get('./songs.json').then(function(response){
        console.log(response)
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
})

/*
<a class="m-sgitem" href="./song.html">
    <div class="sgfr f-bd f-bd-btm">
    <div class="sgchfl">
    <div class="f-thide sgtl"><!-- react-text: 124 -->沧海轻舟<!-- /react-text --></div>
<div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>
    <!-- react-text: 127 -->李健<!-- /react-text --><!-- react-text: 128 --> -
    <!-- /react-text --><!-- react-text: 129 -->2017快乐男声全国赛 第三期
<!-- /react-text --></div>
</div>
<div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
    </div>
    </a>*/
