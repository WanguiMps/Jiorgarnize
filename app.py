from flask import Flask, render_template, request, redirect, url_for, jsonify
import pymysql

app = Flask(__name__)

# Configuration for MySQL database
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '146011',
    'database': 'pfinancep',
}

# Function to establish a connection to the MySQL database
def get_mysql_connection():
    try:
        connection = pymysql.connect(db_config)
        print("Database connection successful")
        return connection
    except pymysql.Error as err:
        print(f"Error: {err}")
        return None

@app.route('/')
def landingPage():
    # Redirect to landingpage.html
    return redirect(url_for('landingpage'))

@app.route('/landingpage')
def landingpage():
    return render_template('landingpage.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/insights')
def insights():
    return render_template('insights.html')

@app.route('/goals')
def goals():
    return render_template('goals.html')

@app.route('/budget')
def budget():
    return render_template('budget.html')

@app.route('/submit', methods=['POST'])
def insert_student():
    # Get data from the form submission
    data = request.form
    
    # Input validation
    required_fields = ['firstName', 'lastName', 'gender', 'email']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing fields'}), 400
    
    # Establish a connection to the database
    connection = get_mysql_connection()
    if connection is None:
        return "Error: Failed to connect to the database"
    
    cursor = connection.cursor()

    try:
        # Execute the INSERT query to insert data into the 'student' table
        insert_query = "INSERT INTO student (firstName, lastName, Gender, Email) VALUES (%s, %s, %s, %s)"
        cursor.execute(insert_query, (data['firstName'], data['lastName'], data['gender'], data['email']))
        
        # Commit the transaction
        connection.commit()
        
        # Close the database connection
        connection.close()

        # Return a success message
        return 'Student inserted successfully'
    except pymysql.Error as err:
        # Handle the error
        print(f"Error: {err}")
        connection.rollback()  # Rollback the transaction
        return "Error: Failed to insert student"

if __name__ == '__main__':
    app.run(debug=True)