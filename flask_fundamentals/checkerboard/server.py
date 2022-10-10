from distutils.log import debug
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def board():
    return render_template('index.html',x=4,y=8)

@app.route('/<x>/<y>')
def createBoard(x,y):
    numX = int(x)
    numY = int(y)
    return render_template('index.html',x=numX,y=numY)

if __name__=="__main__":
    app.run(debug=True)