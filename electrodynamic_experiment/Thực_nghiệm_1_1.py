def get_data():
	# Khởi tạo danh sách lưu số liệu của dòng điện
	current = []
	# Khởi tạo danh sách lưu số liệu của cân điện tử sau khi bật điện
	mass = []
	# Hướng dẫn người dùng nhập dữ liệu
	print("Số liệu hiển thị trên cân điện tử trước khi bật điện (g)")
	global original_mass
	global rounds
	global length
	global magnetic_induction_phone
	original_mass = float(input("Orginal_mass (g) : "))
	rounds = int(input("Number of rounds of the electromagnet : "))
	length = float(input("Length of the coil (cm) : "))
	magnetic_induction_phone = float(input("Magnetic induction calculated by phone (mT) : "))
	print("Enter Module_current and mass. Type 'done' to finish.\nExample: 1.8 5.2")

	# Vòng lặp để nhập dữ liệu liên tục
	while True:
		user_input = input("Module_Current mass : ")
		# Kiểm tra điều kiện dừng nhập dữ liệu
		if user_input.lower() == 'done':
			break
		try:
			# Tách chuỗi input thành 2 giá trị riêng biệt
			v_str, i_str = user_input.split()
			# Chuyển đổi từ chuỗi sang số thực
			v = float(v_str)
			i = float(i_str)
			# Thêm giá trị vào danh sách tương ứng
			current.append(v)
			mass.append(i)
		except ValueError:
			# Thông báo lỗi khi input không hợp lệ
			print("Invalid input. Please enter two numbers separated by a space.")

	# Trả về 2 danh sách dữ liệu đã thu thập
	return current, mass

def calculate_magnetic_induction(current, mass):
	magnetic_inductions = []
	for x, y in zip(current, mass):
		# Calculate the magnetic induction based on the calculation on your scripts
		magnetic_induction = ((y - original_mass) * 9.81 / (rounds * length * x * 10)) * (10**3)
		magnetic_inductions.append(magnetic_induction)
	return magnetic_inductions
# Kiểm tra xem file có được chạy trực tiếp không 
def calculate_average(values):
	# Kiểm tra danh sách có rỗng không để tránh chia cho 0
	if not values:
		return 0  # Return 0 if the list is empty to avoid division by zero
	return sum(values) / len(values)
if __name__ == "__main__": 
	# Thu thập dữ liệu từ người dùng 
	current, mass = get_data() 
	# Hiển thị dữ liệu đã thu thập 
	print("Data collected:") 
	print("Module of current:", current) 
	print("Mass:", mass)
	print("Magnetic induction:", calculate_magnetic_induction(current, mass))
	# In kết quả cảm ứng từ trong lòng nam châm điện
	print(f'The average of magnetic_induction is {calculate_average(calculate_magnetic_induction(current, mass)):.2f} mT')
	print(f'The margin of error is {((abs(calculate_average(calculate_magnetic_induction(current, mass))-magnetic_induction_phone)/magnetic_induction_phone)*100):.2f} %')