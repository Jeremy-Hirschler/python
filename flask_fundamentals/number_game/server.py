
from flask import Flask, render_template, request, session, redirect
import random


app = Flask(__name__)
app.secret_key = 'SOW'

@app.route('/')
def index():
    
    if 'new' not in session:
        session['new'] = random.randrange(0,101)
    print(session['new'])
    if 'guess' in session:
        session.pop('guess')
    if 'tell' not in session:
        session['tell'] = ''
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    
    session['guess'] = int(request.form['number'])
    if session['guess'] < session['new']:
        session['tell'] = 'Too low!'
    elif session['guess'] > session['new']:
        session['tell'] = 'Too high!'
    else:
        session['tell'] = f"{session['guess']} was the number!"
        session.pop('new')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)