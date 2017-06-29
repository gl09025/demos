/**
 * Created by Andrew on 2017/6/22.
 */
$(function(){

    let id = parseInt(location.search.match(/\bid=([^&]*)/)[1])

    $.get('./songs.json').then(function(response){
        let songs = response
        let song = songs.filter((song)=>{return song.id === id})[0]
        let {url} = song
        //获取并播放歌曲
        let audio = document.createElement('audio')
        audio.src = url
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

        //获取歌词
        let {lyric} = song
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function(string, index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        let $lyric = $('.m-song-scroll')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.m-song-iner'))
        })

        //获取歌曲名
        let {name} = song


        //获取歌手名
        let {singer} = song
    },function(){
        alert('false')
    })

 /*   $.get('./lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/
        array = array.map(function(string, index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        let $lyric = $('.m-song-scroll')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.m-song-iner'))
        })
    })*/


})