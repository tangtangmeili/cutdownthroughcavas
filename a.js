
var $clock = $('#clock')
var $timer = $('#timer')

$(function () {
  beginTimer(12000)
})

function beginTimer (timer) {
  var dteStart = new Date()
  dteStart = dteStart.getTime()
  countDownClock(dteStart, timer)
}

function countDownClock (dteStart, timer) {
  var d = new Date()
  window.intOffset = timer - (d.getTime() - dteStart)
  $timer.html(Math.ceil(window.intOffset / 1000))

  window.intAngle = 0.5233333 * 0.001 * window.intOffset
  var canvas = document.getElementById('clock')
  var ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, 300, 300)
  ctx.beginPath()
  ctx.globalAlpha = 1
  ctx.arc(150, 150, 140, 0, 6.283, false)
  ctx.arc(150, 150, 105, 6.283, ((Math.PI * 2)), true)
  ctx.fillStyle = '#bbb'
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.globalAlpha = 1
  ctx.arc(150, 150, 140.1, -1.57, (-1.57 + window.intAngle), false)
  ctx.arc(150, 150, 105, (-1.57 + window.intAngle), ((Math.PI * 2) - 1.57), true)
  ctx.fillStyle = 'green'
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(150, 150, 105, 0, 6.283, false)
  ctx.fillStyle = '#fff'
  ctx.fill()
  ctx.closePath()
  window.t = setTimeout('countDownClock(' + dteStart + ',' + timer + ')', 50)
}
