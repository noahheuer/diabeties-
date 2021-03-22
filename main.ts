input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . . .
        # # # # .
        . # # # .
        . # # # #
        . . . # #
        `)
    basic.showString("HAVE A CANDY BAR")
})
radio.onReceivedString(function (receivedString) {
    soundExpression.sad.play()
})
input.onButtonPressed(Button.B, function () {
    soundExpression.happy.playUntilDone()
    basic.showString("CARRY ON WHAT YOUR DOING :)")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("SEND HELP")
})
basic.forever(function () {
    radio.setGroup(182)
})
basic.forever(function () {
    basic.pause(600000)
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    basic.showString("TAKE DIET PILLS")
})
