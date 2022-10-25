from flask import Flask, session, redirect, render_template, request, flash
from mysqlconnection import connectToMySQL
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

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
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Invalid email address!')

    data = {'email': request.form['email']}
    
    query = 'INSERT INTO user_emails (email_address) VALUES (%(email)s)'
    print(query)

    if '_flashes' not in session.keys():
        new_id = mysql.query_db(query, data)
        print(new_id)
        return redirect('/')
    else:
        return redirect('/')
        

@app.route('/delete/<int:id>', methods=['GET'])
def delete_user(id):
    mysql = connectToMySQL('emails')
    print('id is:',id)
    query = 'DELETE FROM user_emails WHERE id = {}'.format(id)
    delete_user = mysql.query_db(query)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

