/**
 * Created by Andrew on 2017/6/22.
 */
$(function(){
    $.get('./lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function(string, index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        console.log(array)
        let $lyric = $('.m-song-scroll')
        console.log($lyric)
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.m-song-iner'))
        })
    })

    //播放歌曲
    let audio = document.createElement('audio')
    audio.src = './Alan Walker - Fade.mp3'
    audio.oncanplay = function(){
        audio.play()
        $('.m-song-disc').addClass('playing')
    }
    $('.m-song-pausebtn').on('touchstart', function(){
        audio.pause()
        $('.m-song-disc').removeClass('playing')
    })
    $('.m-song-plybtn').on('touchstart', function(){
        audio.play()
        $('.m-song-disc').addClass('playing')
    })
})