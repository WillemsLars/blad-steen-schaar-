let keuze = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("RONDE 2")
})
input.onGesture(Gesture.Shake, function () {
    if (keuze == 0) {
        keuze = randint(0, 2)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else if (keuze == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (keuze == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("FINALE")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("RONDE 3")
})
