let a11n = 0
let a12n = 0
let a13n = 0

let a21n = 0
let a22n = 0
let a23n = 0

let a31n = 0
let a32n = 0
let a33n = 0

let a11 = document.getElementById('a11')
let a12 = document.getElementById('a12')
let a13 = document.getElementById('a13')

let a21 = document.getElementById('a21')
let a22 = document.getElementById('a22')
let a23 = document.getElementById('a23')

let a31 = document.getElementById('a31')
let a32 = document.getElementById('a32')
let a33 = document.getElementById('a33')

let nome = window.prompt('Digite seu Nome: ')

let pontoM = 0
let pontoJ = 0

Placar()



function Marcar(casa, c) {
    let numcasa = c

    
    
    if (numcasa == 1) {
        if (a11n == 0) {
            a11n = 1
            JogadorM(casa)           
            if ((a11n == 1 && a12n == 1 && a13n == 1) || (a11n == 1 && a21n == 1 && a31n == 1) || (a11n == 1 && a22n == 1 && a33n == 1)){
                Vitoria()
                
            }  
            else {
                if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }

                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
              
                else {
                    if (a11n == 1 && a12n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a11n == 1 && a13n == 1 && a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a11n == 1 && a22n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a11n == 1 && a33n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a11n == 1 && a21n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a11n == 1 && a31n == 1 && a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }


                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else {
                        if (a21n == 0) {
                            MaquinaM(a21) 
                            a21n = 2
                        }
                    }
                }

            }         
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 2) {
        if (a12n == 0) {
            a12n = 1
            JogadorM(casa)          
            if ((a11n == 1 && a12n == 1 && a13n == 1) || (a12n == 1 && a22n == 1 && a32n == 1)){
                Vitoria()
            }
            else { 
                if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }

                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }

                else {             
                    if (a12n == 1 && a11n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a12n == 1 && a13n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a12n == 1 && a22n == 1 && a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a12n == 1 && a32n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }



                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else {
                        if (a21n == 0) {
                            MaquinaM(a21) 
                            a21n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 3) {
        if (a13n == 0) {
            JogadorM(casa)
            a13n = 1
            if ((a11n == 1 && a12n == 1 && a13n == 1) || (a13n == 1 && a23n == 1 && a33n == 1) || (a31n == 1 && a22n == 1 && a13n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }


                else if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }

                else if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }

                else {
                    if (a13n == 1 && a12n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a13n == 1 && a11n == 1 && a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a13n == 1 && a23n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a13n == 1 && a33n == 1 && a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a13n == 1 && a22n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a13n == 1 && a31n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }


                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else {
                        if (a12n == 0) {
                            MaquinaM(a12) 
                            a12n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 4) {
        if (a21n == 0) {
            JogadorM(casa)
            a21n = 1
            if ((a21n == 1 && a22n == 1 && a23n == 1) || (a11n == 1 && a21n == 1 && a31n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }


                else if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }

                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }


                else {
                    if (a21n == 1 && a11n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a21n == 1 && a31n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a21n == 1 && a22n == 1 && a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a21n == 1 && a23n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }


                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else {
                        if (a32n == 0) {
                            MaquinaM(a32) 
                            a32n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 5) {
        if (a22n == 0) {
            JogadorM(casa)
            a22n = 1
            if ((a21n == 1 && a22n == 1 && a23n == 1) || (a12n == 1 && a22n == 1 && a32n == 1) || (a11n == 1 && a22n == 1 && a33n == 1) || (a31n == 1 && a22n == 1 && a13n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }

                else {
                    if (a22n == 1 && a21n == 1 && a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a22n == 1 && a23n == 1 && a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a22n == 1 && a12n == 1 && a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }else if (a22n == 1 && a32n == 1 && a12n ==0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a22n == 1 && a11n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a22n == 1 && a33n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                        
                    }
                    else if (a22n == 1 && a13n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a22n == 1 && a31n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    
                    
                    
                    
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else {
                        if (a21n == 0) {
                            MaquinaM(a21) 
                            a21n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 6) {
        if (a23n == 0) {
            JogadorM(casa)
            a23n = 1
            if ((a21n == 1 && a22n == 1 && a23n == 1) || (a13n == 1 && a23n == 1 && a33n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }


                else if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a32n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a31n == 2 && a33n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a32n == 2 && a33n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }

                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }




                else {
                    if (a23n == 1 && a22n == 1 && a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a23n == 1 && a21n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a23n == 1 && a13n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a23n == 1 && a33n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }



                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else {
                        if (a32n == 0) {
                            MaquinaM(a32) 
                            a32n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 7) {
        if (a31n == 0) {
            JogadorM(casa)
            a31n = 1
            if ((a11n == 1 && a21n == 1 && a31n == 1) || (a31n == 1 && a32n == 1 && a33n == 1) || (a31n == 1 && a22n == 1 && a13n == 1)){
                Vitoria()
            }
            else {
                
                if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }

                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }

                else if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else {
                    if (a31n == 1 && a21n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a31n == 1 && a11n == 1 && a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a31n == 1 && a22n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a31n == 1 && a13n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a31n == 1 && a32n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a31n == 1 && a33n == 1 && a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    



                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else {
                        if (a21n == 0) {
                            MaquinaM(a21) 
                            a21n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 8) {
        if (a32n == 0) {
            JogadorM(casa)
            a32n = 1
            if ((a31n == 1 && a32n == 1 && a33n == 1) || (a12n == 1 && a22n == 1 && a32n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }

                else if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a13n == 2 && a23n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a13n == 2 && a33n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a23n == 2 && a33n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }

                else if (a11n == 2 && a22n == 2 && a33n == 0) {
                    MaquinaM(a33)
                    a33n = 2
                    Derrota()
                }
                else if (a11n == 2 && a33n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a33n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }



                else {
                    if (a32n == 1 && a31n == 1 && a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a32n == 1 && a33n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a32n == 1 && a22n == 1 && a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a32n == 1 && a12n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }




                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a33n == 0) {
                        MaquinaM(a33)
                        a33n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else {
                        if (a21n == 0) {
                            MaquinaM(a21) 
                            a21n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }
    else if (numcasa == 9) {
        if (a33n == 0) {
            JogadorM(casa)
            a33n = 1
            if ((a31n == 1 && a32n == 1 && a33n == 1) || (a11n == 1 && a22n == 1 && a33n == 1) || (a13n == 1 && a23n == 1 && a33n == 1)){
                Vitoria()
            }
            else {
                if (a11n == 2 && a12n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a11n == 2 && a13n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a12n == 2 && a13n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }
                else if (a21n == 2 && a22n == 2 && a23n == 0) {
                    MaquinaM(a23)
                    a23n = 2
                    Derrota()
                }
                else if (a21n == 2 && a23n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a23n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }

                else if (a11n == 2 && a21n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }
                else if (a11n == 2 && a31n == 2 && a21n == 0) {
                    MaquinaM(a21)
                    a21n = 2
                    Derrota()
                }
                else if (a21n == 2 && a31n == 2 && a11n == 0) {
                    MaquinaM(a11)
                    a11n = 2
                    Derrota()
                }

                else if (a12n == 2 && a22n == 2 && a32n == 0) {
                    MaquinaM(a32)
                    a32n = 2
                    Derrota()
                }
                else if (a12n == 2 && a32n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a32n == 2 && a12n == 0) {
                    MaquinaM(a12)
                    a12n = 2
                    Derrota()
                }
                else if (a31n == 2 && a22n == 2 && a13n == 0) {
                    MaquinaM(a13)
                    a13n = 2
                    Derrota()
                }
                else if (a31n == 2 && a13n == 2 && a22n == 0) {
                    MaquinaM(a22)
                    a22n = 2
                    Derrota()
                }
                else if (a22n == 2 && a13n == 2 && a31n == 0) {
                    MaquinaM(a31)
                    a31n = 2
                    Derrota()
                }



                else {
                    if (a33n == 1 && a32n == 1 && a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a33n == 1 && a31n == 1 && a32n == 0) {
                        MaquinaM(a32)
                        a32n = 2
                    }
                    else if (a33n == 1 && a22n == 1 && a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                        
                    }
                    else if (a33n == 1 && a11n == 1 && a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a33n == 1 && a23n == 1 && a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a33n == 1 && a13n == 1 && a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }



                    else if (a11n == 0) {
                        MaquinaM(a11)
                        a11n = 2
                    }
                    else if (a31n == 0) {
                        MaquinaM(a31)
                        a31n = 2
                    }
                    else if (a13n == 0) {
                        MaquinaM(a13)
                        a13n = 2
                    }
                    else if (a22n == 0) {
                        MaquinaM(a22)
                        a22n = 2
                    }
                    else if (a21n == 0) {
                        MaquinaM(a21)
                        a21n = 2
                    }
                    else if (a12n == 0) {
                        MaquinaM(a12)
                        a12n = 2
                    }
                    else if (a23n == 0) {
                        MaquinaM(a23)
                        a23n = 2
                    }
                    else {
                        if (a32n == 0) {
                            MaquinaM(a32) 
                            a32n = 2
                        }
                    }
                }

            } 
        }
        else {
            Usado()
        }
    }

}
function JogadorM(casa) {
    casa.style.background = 'red'

}
function MaquinaM(casa) {
    casa.style.background = 'yellow'
      
}
function Vitoria() {
    res.innerHTML = '<p>VOCÊ VENCEU!</P>'

    window.setTimeout (function () {LimparMudarCor(a11, a12, a13, a21, a22, a23, a31, a32, a33)}, 1500)

    SomarPonto('jogador')

}
function Derrota() {
    res.innerHTML = '<p>VOCÊ PERDEU!</P>'

    window.setTimeout (function () {LimparMudarCor(a11, a12, a13, a21, a22, a23, a31, a32, a33)}, 1500)

    SomarPonto('Maquina')

}
function LimparMudarCor(c1, c2, c3, c4, c5, c6, c7, c8, c9) {
    c1.style.background = 'rgb(93, 139, 200)'
    c2.style.background = 'rgb(93, 139, 200)'
    c3.style.background = 'rgb(93, 139, 200)'
    c4.style.background = 'rgb(93, 139, 200)'
    c5.style.background = 'rgb(93, 139, 200)'
    c6.style.background = 'rgb(93, 139, 200)'
    c7.style.background = 'rgb(93, 139, 200)'
    c8.style.background = 'rgb(93, 139, 200)'
    c9.style.background = 'rgb(93, 139, 200)'

    res.innerHTML = ''

    ZerarCasa()

}
function ZerarCasa() {
    a11n = 0
    a12n = 0
    a13n = 0
    a21n = 0
    a22n = 0
    a23n = 0
    a31n = 0
    a32n = 0
    a33n = 0
    
}
function Usado() {
    window.alert('CASA JÁ USADA!')
}
function SomarPonto(nome) {
    if (nome == 'jogador') {
        pontoJ ++
        Placar()
    }
    else {
        pontoM ++
        Placar()
    }
        
}
function Placar() {
    pont.innerHTML = `<p>${nome}: ${pontoJ}<br><br>Máquina: ${pontoM}</p>`
}