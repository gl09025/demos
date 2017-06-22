/**
 * Created by Andrew on 2017/6/22.
 */
$(function(){

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