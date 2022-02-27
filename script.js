setTimeout(()=>{
let buttons = document.querySelectorAll('[data-testid$="unfollow"]')
for (let i=0; i< buttons.length;i++){
    buttons[i].click()
    let button = document.querySelector('[dir="auto"]>span>span')
    button.click()
}}, 10000)

setTimeout(()=>{open("https://twitter.com/_goldenremi/following","_self")},15000)