/**
 * Created by Andrew on 2017/6/22.
 */
$(function(){

    let id = parseInt(location.search.match(/\bid=([^&]*)/)[1])

    $.get('./songs.json').then(function(response){
        let songs = response
        let song = songs.filter((song)=>{return song.id === id})[0]
        //获取json里的value
        let {url,lyric,name,singer,cover} = song
        let backgroundCover = song['background-cover']
        initPlayer.call(undefined,url)
        initLyric.call(undefined,lyric)
        initTitle.call(undefined,name,singer)
        initImages.call(undefined,cover,backgroundCover)

    },function(){
        alert('false')
    })

    function initPlayer(url){
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

        setInterval(function(){

            let seconds = audio.currentTime
            let minutes = ~~(seconds / 60)
            let left = seconds - minutes * 60
            let time = `${pad(minutes)}:${pad(left)}`
            let $mSongIner = $('.m-song-iner > p')
            let $whichLine
            for (let i=0;i<$mSongIner.length;i++){
                let currentTime = $mSongIner.eq(i).attr('data-time')
                let nextLineTime = $mSongIner.eq(i + 1).attr('data-time')
                if ( $mSongIner.eq(i + 1).length !== 0 && currentTime < time &&  nextLineTime> time){
                    // console.log($mSongIner[i])
                    $whichLine = $mSongIner.eq(i)
                    break
                }
            }
            if ($whichLine){
                $whichLine.addClass('active').prev().removeClass('active')
                let top = $whichLine.offset().top
                let mSongInerTop = $('.m-song-iner').offset().top
                let delta = top - mSongInerTop - $('.m-song-lrtrans').height() / 4
                console.log(delta)
                $('.m-song-iner').css('transform',`translateY(-${delta}px)`)
            }
        },500)
    }

    function pad(number){
        return number>=10 ? number + '' : '0' + number
    }

    function initLyric(lyric){
        //获取歌词
        // let {lyric} = song
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
    }

    function initTitle(name,singer){
        //获取歌曲名和歌手
        // let {name} = song
        // let {singer} = song
        let $msongh2 = `
        <span class="m-song-sname" data-reactid="11">${name}</span>
        <span class="m-song-gap" data-reactid="12">-</span><b class="m-song-autr" data-reactid="13">${singer}</b>
        `
        $('.m-song-h2').append($msongh2)
    }

    function initImages(cover,backgroundCover){
        //封面和背景
        // let {cover} = song
        let $uImg = `<img class="u-img" src="${cover}" data-reactid="8">`
        $('.m-song-img').append($uImg)
        // $(".m-song-bg").css('background-image', 'url(' + backgroundCover + ')');
        $(".m-song-bg").css({'background-image': 'url(' + backgroundCover + ')',
            'background-repeat': 'no-repeat',
            'background-position': '50%',
            'background-size': 'auto 100%'
        })
    }
})