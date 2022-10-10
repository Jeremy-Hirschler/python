from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def render():
    return render_template('index.html', times=3)

@app.route('/play/<num>')
def repeat(num):
    number = int(num)
    return render_template('index.html',times=number)

@app.route('/play/<num>/<color>')
def three(num, color):
    number = int(num)
    return render_template('index.html',times=number, color=color)

if __name__ == "__main__":
    app.run(debug=True)