let htmlGamepad = document.querySelector('h2.gamepad')
let htmlMouse = document.querySelector('h2.mouse')
let htmlKeyboard = document.querySelector('h2.keyboard')

const gamepadBtnDictionary = [
    'A',
    'B',
    'X',
    'Y',
    'LB',
    'RB',
    'LT',
    'RT',
    'Visualization',
    'Menu',
    'LeftAnalog',
    'RightAnalog',
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Xbox Button'
]

// window.addEventListener('mousedown', function(e) {
//     console.log(e)
//     htmlMouse.innerText = 'Left click' + e.button + e.buttons
// })

// window.addEventListener('contextmenu', function(e) {
//     console.log(e)
//     htmlMouse.innerText = 'Right click' + e.button + e.buttons
// })

// window.addEventListener('dblclick', function(e) {
//     console.log(e)
//     htmlMouse.innerText = 'Double click' + e.button + e.buttons
// })

window.addEventListener('keydown', function(e) {
    console.log(e)
    htmlKeyboard.innerHTML = e.code
})

window.addEventListener('gamepadconnected', (e) => {
    gamepadConnect(e.gamepad)
})


function gamepadConnect(gamepad){
    console.log('gamepad connected')
    console.log(gamepad)
    gamepadLoop()
}

function gamepadLoop(){
    const gamepadList = navigator.getGamepads()
    let gamepad = gamepadList[0]
    // console.log(gamepad.buttons)
    let buttonsPressed = []
    for(button in gamepad.buttons){
        if(gamepad.buttons[button].pressed == true){
            buttonsPressed.push(`<span>${gamepadBtnDictionary[button]}</span>`)
        }
    }
    // console.log(buttonsPressed)

    if(buttonsPressed.length > 0) {
        htmlGamepad.innerHTML = String(buttonsPressed.join(' + '))
    } else {
        htmlGamepad.innerText = '...'
    }

    
    requestAnimationFrame(gamepadLoop)
}

// function decodeGamepadButton(button) {
//     let temp
//     switch(button){
//         case 0:
//             temp = ''
//             break
//         case 1:
//             temp = ''
//             break
//         case 2:
//             temp = ''
//             break
//         case 3:
//             temp = ''
//             break
//         case 4:
//             temp = ''
//             break
//         case 5:
//             temp = ''
//             break
//         case 6:
//             temp = ''
//             break
//         case 7:
//             temp = ''
//             break
//         case 8:
//             temp = ''
//             break
//         case 9:
//             temp = ''
//             break
//         case 10:
//             temp = ''
//             break
//         case 11:
//             temp = ''
//             break
//         case 12:
//             temp = ''
//             break
//         case 13:
//             temp = ''
//             break
//         case 14:
//             temp = ''
//             break
//         case 15:
//             temp = ''
//             break
//         case 16:
//             temp = ''
//             break
//         default:
//             break
//     }
//     return temp
// }

let hoverActiveBtn = document.querySelector('.hover-menu-btn')
let keyboardContainer = document.querySelector('.container.keyboard')
let gamepadContainer = document.querySelector('.container.gamepad')

function toggleMenuBtn() {
    hoverActiveBtn.classList.toggle('keyboard-active')
    hoverActiveBtn.classList.toggle('gamepad-active')
    keyboardContainer.classList.toggle('active')
    gamepadContainer.classList.toggle('active')
}