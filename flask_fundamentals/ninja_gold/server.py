from flask import Flask, session, render_template, redirect, request
import random

app = Flask(__name__)
app.secret_key = 'NowStarlightKick!'

@app.route('/')
def index():
    if 'message' not in session:
        session['message'] = ''
    
    if 'activity' not in session:
        session['activity'] = ''
    else:
        #adding the new message to the activity log
        session['activity'] += session['message']
    if 'total_gold' not in session:
        session['total_gold'] = 0
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def gold():
    #in session need: location, money amount
    print(request.form['find_gold'])
    if request.form['find_gold'] == 'farm':
        session['location'] = 'farm'
        session['money'] = random.randrange(10,21)
        session['event'] = 'good'
    elif request.form['find_gold'] == 'cave':
        session['location'] = 'cave'
        session['money'] = random.randrange(5,11)
        session['event'] = 'good'
    elif request.form['find_gold'] == 'house':
        session['location'] = 'house'
        session['money'] = random.randrange(2,6)
        session['event'] = 'good'
    else:
        session['location'] = 'casino'
        session['money'] = random.randrange(0,51)
        event = random.randrange(0,2)
        if event == 0:
            session['event'] = 'bad'
        else:
            session['event'] = 'good'

    
    #after find gold, create a new message
    if session['event'] == 'good':
        session['message'] = f'<div><p class="text-success">Earned {session["money"]} gold at the {session["location"]}</p></div>'
        session['total_gold'] += session['money']
    else:
        session['message'] = f'<div><p class="text-danger">Lost {session["money"]} gold at the {session["location"]}. Ouch!</p></div>'
        session['total_gold'] -= session['money']

    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)