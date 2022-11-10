input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
let nombre = 0
let etat_actuel = 0
let etat_passe = 0
loops.everyInterval(1, function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        if (etat_actuel == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                # # # # #
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
	
})
