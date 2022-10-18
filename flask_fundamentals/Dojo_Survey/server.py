
from flask import Flask, render_template, request, redirect, flash, session

app = Flask(__name__)
app.secret_key='SpearBreak'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    if len(request.form['name']) < 1:
        flash('Name required!')
    print('form',request.form)
    print('name',request.form['name'])
    if len(request.form['comment']) > 120:
        flash('Comment too long!')

    if '_flashes' in session.keys():
        return render_template('index.html')
    else:
        return render_template('info.html')


if __name__=="__main__":
    app.run(debug=True)

