window.slides = function(element) {
    var $el = $(element)
    let $view = $el.children('.view')
    var width = $el.width()
    var count = $el.find('.slide').length
    let currentIndex = 0
    let timerId

    //   var $ol = $('<ol class="controls"></ol>')
    //   for(let i=0;i<count;i++){
    //     $ol.append(`<li>${i+1}</li>`)
    //   }
    //   $el.append($ol)


    var $swiper_pagination = $('<div class="swiper-pagination"></div>')
    for (let i = 0; i < count; i++) {
        $swiper_pagination.append(`<span class="swiper-pagination-bullet"></span>`)
    }
    $el.append($swiper_pagination)

    //   $ol.on('click','li',function(e){
    //     let $li = $(e.currentTarget)
    //     let index = $li.index()
    //     goToSlide(index)
    //   })

    function becomeActive(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }
        let $span = $('.swiper-pagination-bullet')
        $span.eq(index).addClass('swiper-pagination-bullet-active')
        $span.eq(index).siblings().removeClass('swiper-pagination-bullet-active')
    }

    $swiper_pagination.on('click', 'span', function(e) {
        let $span = $(e.currentTarget)
        let index = $span.index()
        goToSlide(index)
        becomeActive(index)
    })

    $view.on('mouseenter', function() {
        window.clearInterval(timerId)
    })

    $view.on('mouseleave', function() {
        autoPlay()
    })

    function goToSlide(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }
        let number = -width * index
        $view.css({
            transform: `translateX(${number}px)`
        })
        currentIndex = index
    }

    function autoPlay() {
        timerId = setInterval(function() {
            goToSlide(currentIndex + 1)
            becomeActive(currentIndex)
        }, 3000)
    }
    autoPlay()

}