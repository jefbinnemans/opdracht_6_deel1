input.onButtonPressed(Button.A, function () {
    aantal_personen = aantal_personen + 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(aantal_personen)
    basic.pause(2000)
    basic.clearScreen()
})
let aantal_personen = 0
aantal_personen = 0
