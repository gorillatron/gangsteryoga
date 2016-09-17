
import Player from '@vimeo/player'
import raf from 'raf'

export default function(videoel) {

  const playButton = videoel.find('.play-button')
  const movieMode = videoel.find('.movie-mode')
  const video = videoel
  const videoFrame = videoel.find('iframe')
  const player = new Player(videoFrame)

  playButton.click(() => {
    setTimeout(() => player.play(), 33)
  })

  const onPlay = () => {
    raf(() => playButton.addClass('hide'))
    //raf(() => movieMode.addClass('active'))
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

}