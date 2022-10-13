
from flask import Flask, render_template, redirect
import random

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/start')
def new_game():
    card_stack = [
        'A (11 or 1)','K (10)','Q (10)','J (10)','10',
        '9','8','7','6','5','4','3','2'
    ]
    card = random.choice(card_stack)
    print(card)
    sum = card
    return render_template('game.html',card=card, sum=sum)

if __name__=='__main__':
    app.run(debug=True)