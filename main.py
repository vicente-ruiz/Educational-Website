from flask import Flask, render_template, request, jsonify
import paramiko  # For SSH connection to the Linux server

app = Flask(__name__)

# Route for the homepage
@app.route('/')
def index():
    return render_template('home/index.html')

# Routes for each attack education page
@app.route('/education/keylogger')
def education_keylogger():
    return render_template('education/keylogger.html')

@app.route('/education/keylogger1')
def education_keylogger1():
    return render_template('education/keylogger1.html')

@app.route('/education/keylogger_demo')
def education_keylogger_demo():
    return render_template('education/keylogger_demo.html')

@app.route('/education/reverse-shell')
def education_reverse_shell():
    return render_template('education/reverse-shell.html')

@app.route('/education/reverse-shell1')
def education_reverse_shell1():
    return render_template('education/reverse-shell1.html')

@app.route('/education/credential-manipulation')
def education_credential_manipulation():
    return render_template('education/credential-manipulation.html')


# Route for the keylogger demo page
@app.route('/demo')
def demo():
    return render_template('demo/demo.html')

# Fetch simulated stolen data from the Linux server
@app.route('/get_stolen_data')
def get_stolen_data():
    server_ip = "34.174.149.228"
    username = "groupmember"
    password = "capstone2025"
    file_path = "/home/groupmember/Documents/received_keys.txt"

    try:
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(server_ip, username=username, password=password)

        sftp = ssh.open_sftp()

        # Check if the file exists before reading
        try:
            with sftp.open(file_path, 'r') as file:
                stolen_text = file.read().decode('utf-8').strip()  # Decode bytes to string
                if not stolen_text:
                    return jsonify({"error": "File is empty"})
        except FileNotFoundError:
            return jsonify({"error": "File not found"})

        sftp.close()
        ssh.close()

        return jsonify({"stolen_text": stolen_text})  # JSON-friendly

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
