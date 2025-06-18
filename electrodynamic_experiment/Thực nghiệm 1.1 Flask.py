from flask import Flask, render_template, request
from Thực_nghiệm_1_1 import calculate_average, calculate_magnetic_induction  # Use a valid Python module name

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
	try:
		# Get input data from the form
		current_data = request.form['current_data']
		mass_data = request.form['mass_data']

		# Convert input strings to lists of floats
		current = list(map(float, current_data.split()))
		mass = list(map(float, mass_data.split()))
		# Calculate averages
		avg_magnetic_induction = calculate_average(calculate_magnetic_induction(current, mass))
		# Return results to the HTML page
		return render_template(
			'index.html',
			current_data=current_data,
			mass_data=mass_data,
			avg_magnetic_induction=avg_magnetic_induction
		)
	except Exception as e:
		return render_template('index.html', error=str(e))

if __name__ == '__main__':
	app.run(debug=True)