
import routing from './routing'
import parallaxing from './parallaxing'
import scrolling from './scrolling'
import Player from '@vimeo/player'
import raf from 'raf'


routing()

$(document).ready(() => {

  $('.subpage').scroll((event) => {
    event.stopPropagation()
    event.preventDefault()
    return false
  })

  
  scrolling()
  parallaxing()

  const playButton = $('#featured .play-button')
  const movieMode = $('#main-header .movie-mode')
  const video = $('.video')
  const videoFrame = $('.video iframe')
  const player = new Player(videoFrame)

  playButton.click(() => {
    player.play()
  })

  const onPlay = () => {
    raf(() => playButton.addClass('hide'))
    raf(() => movieMode.addClass('active'))
    raf(() => video.addClass('playing'))
    raf(() => videoFrame.removeClass('hidden'))
    $('body').one('click', () => player.pause())
  }

  const onStop = () => {
    raf(() => video.removeClass('playing'))
    raf(() => movieMode.removeClass('active'))
  }

  player.on('play', onPlay)
  player.on('pause', onStop)
  player.on('stop', onStop)

})
