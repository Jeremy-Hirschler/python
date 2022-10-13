
from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = 'Wataya'

@app.route('/', methods=['GET'])
def index():
    print(session)
    if 'time' not in session:
        session['time'] = 1
    return render_template('index.html')

@app.route('/count', methods=['POST'])
def counter():
    print(request.form['counter'])
    session['counter'] = request.form['counter']
    if session['counter'] == 'Add 2':
        session['time'] = session['time'] + 2
    else:
        session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
