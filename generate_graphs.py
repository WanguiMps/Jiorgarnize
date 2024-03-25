import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import base64
import pymysql
import io

# Function to generate sample data
def generate_sample_data():
    data = {
        'Allowance': [100, 200, 150, 250],
        'Food': [50, 60, 55, 70],
        'Shopping': [30, 40, 35, 45],
        'Entertainment': [20, 25, 22, 30],
        'Savings': [40, 50, 45, 60]
    }
    df = pd.DataFrame(data)
    return df

# Function to generate and save graphs
def generate_and_save_graphs(data):
    # Plot expenses distribution using Seaborn
    plt.figure(figsize=(10, 6))
    sns.boxplot(data=data.drop('Allowance', axis=1))
    plt.title('Expenses Distribution')
    plt.xlabel('Expense Category')
    plt.ylabel('Expense Amount')
    expenses_distribution_img = encode_image_as_base64_string(plt)
    
    # Plot predicted allowance vs actual allowance
    plt.figure(figsize=(8, 6))
    plt.plot([0, 1], [0, 1], linestyle='--', color='red')  # Dummy plot
    plt.title('Predicted Allowance vs Actual Allowance')
    plt.xlabel('Actual Allowance')
    plt.ylabel('Predicted Allowance')
    predicted_vs_actual_allowance_img = encode_image_as_base64_string(plt)

    return expenses_distribution_img, predicted_vs_actual_allowance_img

def encode_image_as_base64_string(plt):
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_string = base64.b64encode(buffer.getvalue()).decode('utf-8')
    return image_string

def save_images_to_database(expenses_distribution_img, predicted_vs_actual_allowance_img):
    # Connect to MySQL database
    conn = pymysql.connect(host='localhost',
                           user='root',
                           password='146011',
                           db='pfinancep',
                           charset='utf8mb4',
                           cursorclass=pymysql.cursors.DictCursor)

    try:
        with conn.cursor() as cursor:
            # Insert images into the table
            sql = "INSERT INTO images (name, data) VALUES (%s, %s)"
            cursor.execute(sql, ('expenses_distribution', expenses_distribution_img))
            cursor.execute(sql, ('predicted_vs_actual_allowance', predicted_vs_actual_allowance_img))

        # Commit changes
        conn.commit()
        
        print("Images saved to the database successfully!")
    except Exception as e:
        print("An error occurred:", e)
    finally:
        # Close connection
        conn.close()

# Function to retrieve images from the database
def fetch_images_from_database():
    # Connect to MySQL database
    conn = pymysql.connect(host='localhost',
                           user='root',
                           password='146011',
                           db='pfinancep',
                           charset='utf8mb4',
                           cursorclass=pymysql.cursors.DictCursor)

    images = {}
    
    try:
        with conn.cursor() as cursor:
            # Query images from the table
            cursor.execute("SELECT name, data FROM images")
            results = cursor.fetchall()
            
            # Store fetched images in a dictionary
            for row in results:
                images[row['name']] = row['data']

    except Exception as e:
        print("An error occurred while fetching images from the database:", e)
    finally:
        # Close connection
        conn.close()
    
    return images

# Function to generate HTML code for displaying images
def generate_html(images):
    html = "<!DOCTYPE html>\n"
    html += "<html lang='en'>\n"
    html += "<head>\n"
    html += "    <meta charset='UTF-8'>\n"
    html += "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n"
    html += "    <title>Display Images</title>\n"
    html += "    <link rel='stylesheet' type='text/css' href='main.css'>\n"
    html += "</head>\n"
    html += "<body>\n"
    
    for name, data in images.items():
        base64_image = base64.b64encode(data).decode('utf-8')
        html += f"    <div class='container'>\n"
        html += f"        <h1>{name}</h1>\n"
        html += f"        <img src='data:image/png;base64,{base64_image}' alt='{name}'>\n"
        html += f"    </div>\n"
    
    html += "</body>\n"
    
