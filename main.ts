input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let nombre = 0
let etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
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
    etat_passe = etat_actuel
})
