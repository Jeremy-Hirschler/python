
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/checkout', methods=['POST'])
def checkout():
    print(request.form)
    straw = int(request.form['strawberry'])
    rasp = int(request.form['raspberry'])
    apple = int(request.form['apple'])
    total = straw + rasp + apple
    return render_template('checkout.html', total=total, straw=straw, rasp=rasp, apple=apple)


if __name__=="__main__":
    app.run(debug=True)