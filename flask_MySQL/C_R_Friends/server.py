from flask import Flask, session, redirect, request, render_template

from mysqlconnection import connectToMySQL

app = Flask(__name__)
app.secret_key = 'NSK'


@app.route('/')
def index():
    mysql = connectToMySQL('friend_db')
    all_friends = mysql.query_db('SELECT * FROM friends')
    return render_template('index.html', friends=all_friends)

@app.route('/add_friend', methods=['POST'])
def add():
    mysql = connectToMySQL('friend_db')
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'occupation': request.form['occupation']
    }
    query = '''INSERT INTO friends (first_name, last_name, occupation)
    VALUES (%(first_name)s, %(last_name)s, %(occupation)s)'''
    new_id = mysql.query_db(query, data)
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)