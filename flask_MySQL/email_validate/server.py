from flask import Flask, session, redirect, render_template, request
from mysqlconnection import connectToMySQL


app = Flask(__name__)
app.secret_key = 'OSW'

@app.route('/')
def index():
    mysql = connectToMySQL('emails')
    all_emails = mysql.query_db('SELECT * FROM user_emails')
    return render_template('index.html', emails = all_emails)

@app.route('/add_email', methods=['POST'])
def add_email():
    mysql = connectToMySQL('emails')
    data = {'email': request.form['email']}
    
    query = 'INSERT INTO user_emails (email_address) VALUES (%(email)s)'

    new_id = mysql.query_db(query, data)
    print(new_id)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

