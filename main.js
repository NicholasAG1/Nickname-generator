//main javascript program

//event Listeners
document.getElementById('random').addEventListener('click', randomNickname)
document.getElementById('all').addEventListener('click', allNicknames)

//arrays
let Nickname = ["Crusher of Dreams", "the resercher", "Footlight", "code-king", "Funny-Man", "Everyday is monday morning", "the SPEEDY"]

//functions
function randomNickname() {
    let fname = document.getElementById('fName').value
    let lname = document.getElementById('lName').value

   let i = Math.floor(Math.random() * 7)
        console.log(Nickname[i])
        document.getElementById('mainPar').innerHTML = ('' + fname + ' ' + Nickname[i] + ' ' + lname + '')
}

function allNicknames() {
    let fname = document.getElementById('fName').value
    let lname = document.getElementById('lName').value
    document.getElementById('mainPar').innerHTML = ('')
    for ( let i = 0; i < Nickname.length; i++) {
        document.getElementById('mainPar').innerHTML += ('' + fname + ' ' + Nickname[i] + ' ' + lname + '<br>' )
    }
}
