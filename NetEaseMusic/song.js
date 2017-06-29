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

        //获取歌曲名和歌手
        let {name} = song
        let {singer} = song
        let $msongh2 = `
        <span class="m-song-sname" data-reactid="11">${name}</span>
        <span class="m-song-gap" data-reactid="12">-</span><b class="m-song-autr" data-reactid="13">${singer}</b>
        `
        $('.m-song-h2').append($msongh2)

        //封面和背景
        let {cover} = song
        console.log(song)
        let backgroundCover = song['background-cover']
        console.log(backgroundCover)

        let $uImg = `<img class="u-img" src="${cover}" data-reactid="8">`
        $('.m-song-img').append($uImg)
        // $(".m-song-bg").css('background-image', 'url(' + backgroundCover + ')');
        $(".m-song-bg").css({'background-image': 'url(' + backgroundCover + ')',
            'background-repeat': 'no-repeat',
            'background-position': '50%',
            'background-size': 'auto 100%'
        })

    },function(){
        alert('false')
    })


/* <img class="u-img" src="./images/song/song-img.png" data-reactid="8">*/


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