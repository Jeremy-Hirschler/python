
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'SOW'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def user():
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    return redirect('/show')

@app.route('/show')
def show():
    return render_template('user.html')

if __name__ == '__main__':
    app.run(debug=True)