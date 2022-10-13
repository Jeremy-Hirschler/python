from flask import Flask # Import Flask to allow us to create our app.
app = Flask(__name__)   # Global variable __name__ tells Flask whether or not we are running the file
# directly, or importing it as a module.
print(__name__)

@app.route('/') # The "@" symbol designates a "decorator" which attaches the following
# function to the '/' route. This means that whenever we send a request to
# localhost:5000/ we will run the following "hello_world" function.


def hello_world():
    return 'Hell' # Return the string 'Hello World!' as a response.

@app.route('/success')

def success():
    return 'Success'

@app.route('/win')
def win():
    return 'Win'
    
if __name__=="__main__":
    app.run(debug=True)

# If __name__ is "__main__" we know we are running this file directly and not importing
# it from a different module
# Run the app in debug mode.
