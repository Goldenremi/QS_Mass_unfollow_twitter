
// const syncWait = ms => {
//     const end = Date.now()+ms 
//     while(Date.now()<end)continue
// }

setTimeout(()=>{
let buttons = document.querySelectorAll('[data-testid$="unfollow"]')
for (let i=0; i< buttons.length;i++){
    buttons[i].click()
    let button = document.querySelector('[dir="auto"]>span>span')
    button.click()
    console.log(i,"st")
}}, 10000)

setTimeout(()=>{open("https://twitter.com/_goldenremi/following","_self")},15000)