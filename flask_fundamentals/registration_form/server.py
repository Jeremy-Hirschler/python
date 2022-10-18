
from flask import Flask, render_template, redirect, request, flash, session
import re

app = Flask(__name__)
app.secret_key='Ouch'

numbers = re.compile(r'^[0-9]*$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def user():
    print('l', request.form)
    if (len(request.form['email']) < 1) or (len(request.form['first_name']) < 1) or (len(request.form['last_name']) < 1) or (len(request.form['password']) < 1) or (len(request.form['confirm_password']) < 1): 
        flash('All fields are required!')
    
    # if (4 > 2):
    #     flash('Name must not contain any numbers')
    #     print('hi')

    if '_flashes' in session.keys():
        return redirect('/')
    else:
        return render_template('user.html')


if __name__ == '__main__':
    app.run(debug=True)