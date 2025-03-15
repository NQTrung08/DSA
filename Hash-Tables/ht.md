# HASH TABLES

1. thực ra `hash table` được tích hợp sẵn trong js đó là `objects`
2. là 1 `cấu trúc dữ liệu` dùng để lưu trữ và truy xuất 1 cách nhanh chóng, dựa trên `hàm băm` (hash function)

## Cấu trúc của Hash Table

- Thành phần chính
  1. Mảng: Lưu trữ các phần tử  dưới dạng `(key, value)`
  2. Hash Function: Chuyển đổi `key` thành một `index` trong mảng
  3. Cơ chế xử lý va chạm: Khi nhiều `key` tạo ra cùng một `index`, cần có phương pháp xử lý.

## Nguyên lý hoạt động

1. Hàm băm (Hash function)

   ```markdown
      index = hash(key) mod size
   ```

   - trong đó:
      + hash(key):  Một hàm băm sinh ra số nguyên từ key
      + size: Kích thước của mảng trong Hash Table

2. Xử lý va chạm (Collision Handling)

- Khi hai khóa khác nhau có cùng chỉ mục, ta cần giải quyết va chạm bằng các phương pháp sau:
   1. `Chanining (Dãy liên kết)`: Mỗi ô trong mảng lưu danh sách liên kết các phần tử cùng chỉ mục
   2. `Open Addressing (Tìm kiếm vị trí trống)`: Nếu một ô đã chứa dữ liệu, ta tìm vị trí khác để lưu (Linear Probing, Quadratic Probing, Double Hashing).