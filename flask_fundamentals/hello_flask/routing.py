from flask import Flask

app=Flask(__name__)

@app.route('/')

def hello():
    return 'Hello World'

@app.route('/dojo')

def dojo():
    return 'Dojo'

@app.route('/say/<name>')

def say(name):
    print(name)
    return 'Hello ' + name

@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    number = int(num)
    string=''
    for count in range(0,number+1):
        string += ' '
        string += word
    return string

if __name__=="__main__":
    app.run(debug=True)