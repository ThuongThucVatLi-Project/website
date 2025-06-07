from flask import Flask, render_template, request
from PendulumCalculator import avg, error, gcalc

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])

def calculate():
    try:
        length_data = request.form['length_data']
        period_data = request.form['period_data']
        l_list = list(map(float, length_data.split()))
        p_list = list(map(float, period_data.split()))
        l_avg = avg(l_list)
        p_avg = avg(p_list)
        g_list = gcalc(l_list, p_list)
        g_avg = avg(g_list)
        g_error = error(g_list, g_avg)
        return render_template(
            'index.html',
            length_data = length_data,
            period_data = period_data,
            l_avg = l_avg,
            p_avg = p_avg,
            g_avg = g_avg,
            g_error = g_error
        )
    except Exception as e:
        return render_template('index.html', error=str(e))
    
if __name__ == '__main__':
    app.run(debug = True)
