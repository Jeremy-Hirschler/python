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
    session['card'] = random.choice(session['card_stack'])
    session['total'] = int(session['card'])
    #print(session['card'])
    return redirect('/')

@app.route('/hit_stop', methods=['POST'])
def hit_or_stop():
    print(request)
    session['action'] = request.form['hit_stop']
    if session['action'] == 'Hit':
        session['card'] = random.choice(session['card_stack'])
        session['total'] += int(session['card'])
    #add else statement here for stop?

    if session['total'] > 21:
        session['message'] = 'Bust :('
    return redirect('/')

@app.route('/rules')
def rules():
    return render_template('rules.html')

if __name__ == '__main__':
    app.run(debug=True)