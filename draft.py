import math

def get_data():
    theta_list = []
    x_list = []
    T_list = []

    print("Nhập dữ liệu theo định dạng: theta_deg x(m) T(s)")
    print("Gõ 'done' để kết thúc.")

    while True:
        user_input = input("theta x T > ")
        if user_input.lower() == "done":
            break
        try:
            theta_str, x_str, T_str = user_input.split()
            theta = float(theta_str)
            x = float(x_str)
            T = float(T_str)

            theta_list.append(theta)
            x_list.append(x)
            T_list.append(T)
        except ValueError:
            print("Lỗi định dạng. Vui lòng nhập theo dạng: góc độ khoảng_cách chu_kỳ")

    return theta_list, x_list, T_list

def calculate_gravity(theta_list, x_list, T_list):
    g_values = []

    for theta_deg, x, T in zip(theta_list, x_list, T_list):
        theta_rad = math.radians(theta_deg)
        omega = 2 * math.pi / T
        try:
            g = (x * omega**2) / math.tan(theta_rad)
            g_values.append(g)
        except ZeroDivisionError:
            print(f"Góc {theta_deg}° gây lỗi chia cho 0 (tan(θ) = 0). Bỏ qua.")
            g_values.append(None)
    return g_values

def calculate_average(values):
    valid_values = [v for v in values if v is not None]
    if not valid_values:
        return 0
    return sum(valid_values) / len(valid_values)

def calculate_absolute_errors(values, average):
    return [abs(g - average) if g is not None else None for g in values]

if __name__ == "__main__":
    theta_list, x_list, T_list = get_data()
    g_list = calculate_gravity(theta_list, x_list, T_list)

    avg_g = calculate_average(g_list)
    abs_errors = calculate_absolute_errors(g_list, avg_g)
    avg_abs_error = calculate_average([e for e in abs_errors if e is not None])

    print("\nKết quả tính gia tốc trọng trường và sai số tuyệt đối:")
    for i, (theta, x, T, g, error) in enumerate(zip(theta_list, x_list, T_list, g_list, abs_errors)):
        if g is not None:
            print(f"  Lần {i+1}: θ = {theta:.2f}°, x = {x:.3f} m, T = {T:.3f} s | g = {g:.4f} m/s² | Sai số = {error:.4f} m/s²")
        else:
            print(f"  Lần {i+1}: θ = {theta:.2f}° gây lỗi (tan(θ) = 0) → Bỏ qua.")

    print(f"\nGiá trị trung bình của g = {avg_g:.4f} ± {avg_abs_error:.4f} m/s²")
