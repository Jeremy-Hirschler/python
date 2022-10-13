
from flask import Flask, render_template, redirect, request, session
import random

app = Flask(__name__)
app.secret_key = 'YourFateWasSealedWhenYouRoseAgainstUs!'

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/start')
def new_game():
    card_stack = [
        # 'A (11 or 1)','K (10)','Q (10)','J (10)',
        '10','9','8','7','6','5','4','3','2'
    ]
    session['stack'] = card_stack
    if 'card' not in session:
        session['card'] = random.choice(card_stack)
    if 'sum' not in session:
        session['sum'] = int(session['card'])
    return render_template('game.html')

@app.route('/add_card', methods=['POST'])
def new_card():
    session['new_card'] = request.form['play']
    if session['new_card'] == 'hit':
        session['card'] = random.choice(session['stack'])
        
        session['sum'] = session['sum'] + int(session['card'])
        

    else:
        session.clear()
    return redirect('/start')


if __name__=='__main__':
    app.run(debug=True)