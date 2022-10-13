function hit(){
    card_stack = [
        'A (11 or 1)','K (10)','Q (10)','J (10)','10',
        '9','8','7','6','5','4','3','2'
    ]
    let rand = Math.floor(Math.random()*card_stack.length)
    let hit_card= card_stack[rand-1]
    let sum = document.getElementById('card').innerHTML
    console.log('s',sum)
    
    document.getElementById('card').innerHTML= hit_card
    return hit_card
}