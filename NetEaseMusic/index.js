/**
 * Created by Andrew on 2017/6/29.
 */
$(function () {
    $.get('./songs.json').then(function (response) {
        let items = response
        items.forEach((i) => {
            let $li = $(`<a class="m-sgitem" href="./song.html?id=${i.id}">
    <div class="sgfr f-bd f-bd-btm">
    <div class="sgchfl">
    <div class="f-thide sgtl">${i.name}</div>
<div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>
    ${i.singer} - ${i.album}
<!-- /react-text --></div>
</div>
<div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
    </div>
    </a>           
`)
            $('.m-sglst-index').append($li)
        })
        $('.load-image').remove()
    }, function () {
        alert("失败")
    })

    //添加导航栏点击切换效果
    $('.u-tab').on('click', 'li.tabtitle>.tabtxt', function (e) {
        let $li = $(e.currentTarget).parent()
        $li.addClass('z-selected')
            .siblings().removeClass('z-selected')
        let index = $li.index()
        $li.trigger('tabChange', index)
        $('.u-tab > li').eq(index).addClass('z-selected')
            .siblings().removeClass('z-selected')
//下面三块li的显示隐藏
        $('.tableContent > li').eq(index).addClass('active').siblings().removeClass('active')
    })

    $('.u-tab').on('tabChange', function (e, index) {
        let $li = $('.tableContent > li').eq(index)
        if ($li.attr('data-downloaded') === 'yes') {
            return
        }
        if (index === 1) {
            $.get('./hotsongs.json').then(function (response) {
                console.log('1')
                console.log(response)
                let items = response
                items.forEach((i) => {
                    let $li = $(`<a class="m-sgitem" href="#">
    <div class="sgfl sgfl-cred">${i.id}</div>
    <div class="sgfr f-bd f-bd-btm">
    <div class="sgchfl">
    <div class="f-thide sgtl">${i.name}</div>
<div class="f-thide sginfo"><i class="u-hmsprt sghot"></i>
    ${i.singer} - ${i.album}
<!-- /react-text --></div>
</div>
<div class="sgchfr"><span class="u-hmsprt sgchply"></span></div>
    </div>
    </a>           
`)
                    $('.m-sglst').append($li)
                })
                $li.attr('data-downloaded', 'yes')
                $('.load-image2').remove()
            }, function () {
                alert("失败")
            })
        } else if (index === 2) {
            $('.load-image3').remove()
        }
    })

    let timer = undefined
    $('input#tags').on('input', function (e) {
        let $input = $(e.currentTarget)
        let value = $input.val().trim()
        if (value === '') {
            return
        }
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(function () {
            search(value).then((result) => {
                timer = undefined
                if (result.length !== 0) {
/*                    $('#output').text(result.map((r) => r.name).join(','))
                    result.map(function (result) {
                        let $li = `<li class="recomitem"><a href="./song.html?id=${result.id}"><i class="u-svg u-svg-search"></i><span class="f-bd f-bd-btm f-thide">${result.name}</span></a></li>`
                        $('#output').html($li)
                    })*/
                    $('#output').empty()
                    let $ul = $('<ul></ul>')
                    result.forEach((item)=>{
                        let $li = $(`<a href="./song.html?id=${item.id}"><li class="recomitem"><i class="u-svg u-svg-search"></i><span class="f-bd f-bd-btm f-thide">${item.name}</span></li></a>`)
                        $li.appendTo($ul)
                    })
                    $('#output').append($ul)
                } else {
                    let $li = `<li class="recomitem"><span class="f-bd f-bd-btm f-thide">没有结果</span></li>`
                    $('#output').html($li)
                }
            })
        }, 300)

    })

    function search(keyword) {
        return new Promise((resolve, reject) => {
            var database = [
                {"id": 1, "name": "Faded"},
                {"id": 2, "name": "演员"},
                {"id": 1, "name": "Faded&Faded"}
            ]
            let result = database.filter(function (item) {
                return item.name.indexOf(keyword) >= 0
            })
            setTimeout(function () {
                resolve(result)
            }, (Math.random() * 300 + 1000))
        })
    }

    window.search = search
})


