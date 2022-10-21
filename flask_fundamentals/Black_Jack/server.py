from flask import Flask, redirect, session, request, render_template
import random

app = Flask(__name__)
app.secret_key = 'NowStarlightKick!'

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/new_game', methods=['POST'])
def new_game():
    session.clear()
    session['card_stack'] = ['10','9','8','7','6','5','4','3','2']

    session['player_card'] = random.choice(session['card_stack'])
    session['total'] = int(session['player_card'])

    session['dealer_card'] = random.choice(session['card_stack'])
    session['dealer_total'] = int(session['dealer_card'])
    #print(session['card'])
    return redirect('/')

@app.route('/hit_stop', methods=['POST'])
def hit_or_stop():
    print(request)
    session['action'] = request.form['hit_stop']
    if session['action'] == 'Hit':
        session['player_card'] = random.choice(session['card_stack'])
        session['total'] += int(session['player_card'])

        if session['dealer_total'] < 17:
            session['dealer_card'] = random.choice(session['card_stack'])
            session['dealer_total'] += int(session['dealer_card'])
        elif session['dealer_total'] > 21:
            session['dealer_status'] = 'Dealer Busts!'
    #add else statement here for stop?
    
        # stop, total is total, dealer can keep going
    else:
        while session['dealer_total'] < 17 and session['dealer_total'] < session['total']:
            session['dealer_card'] = random.choice(session['card_stack'])
            session['dealer_total'] += int(session['dealer_card'])

        if session['total'] > session['dealer_total'] and session['total'] <= 21:
            session['message'] = 'Player wins! Congrats'
        elif session['dealer_total'] > session['total'] and session['dealer_total'] <= 21:
            session['message'] = 'Lost to the House. Womp Womp!'
        elif session['total'] == session['dealer_total']:
            session['message'] = 'Lost to the House. Womp Womp!'
        elif session['total'] <= 21 and session['dealer_total'] > 21:
            session['message'] = 'Player wins! Congrats'

    if session['total'] > 21:
        session['message'] = 'Bust! You lost, sorry :('
    return redirect('/')

@app.route('/rules')
def rules():
    return render_template('rules.html')

if __name__ == '__main__':
    app.run(debug=True)