input.onButtonPressed(Button.A, function () {
    DWIGHT += 1
    basic.showString("DWIGHT")
})
input.onButtonPressed(Button.AB, function () {
    TIE += 1
    basic.showString("TIE")
})
input.onButtonPressed(Button.B, function () {
    JIM += 1
    basic.showString("JIM")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("JIM")
    basic.showNumber(JIM)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("DWIGHT")
    basic.showNumber(DWIGHT)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("TIE")
    basic.showNumber(TIE)
    basic.clearScreen()
})
let TIE = 0
let JIM = 0
let DWIGHT = 0
DWIGHT = 0
JIM = 0
TIE = 0
