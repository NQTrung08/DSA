# Duyệt cây

## Tìm kiếm theo chiều rộng (Breadth First Search)

### BFS LÀ GÌ?

- BFS (Breadth-First Search) là một thuật toán duyệt hoặc tìm kiếm trong cấu trúc dữ liệu cây (tree) hoặc đồ thị (graph). BFS hoạt động theo nguyên tắc duyệt theo từng tầng (level) của cây hoặc đồ thị, bắt đầu từ nút gốc (root) và di chuyển dần ra ngoài, duyệt tất cả các nút ở tầng hiện tại trước khi chuyển sang tầng tiếp theo.
  
### BFS hoạt động?

1. Khởi tạo một hàng đợi (queue) và thêm node gốc vào hàng đợi.
2. Trong khi hàng đợi không rỗng:
   1. Lấy node đầu tiên ra khỏi hàng đợi.
   2. Nếu node đó là node cần tìm -> kết thúc
   3. Nếu không, thêm tất cả các node con `(hoặc node kề trong đồ thị)` của node hiện tại vào hàng đợi
3. Lặp lại quá trình cho đến khi tìm thấy hoặc hàng đợi rỗng (tức là không tìm thấy).

### Tại sao dùng BFS?

- Ưu điểm:
  1. Tìm đường đi ngắn nhất (nếu các cạnh có cùng trọng số)
  2. Phù hợp để tìm kiếm theo tầng hoặc theo chiều sâu không hiệu quả.
  3. Đảm bảo duyệt hết tất cả các node nếu cần kiểm tra toàn bộ.

- Ứng dụng thực tế:
  1. Tìm đường đi ngắn nhất trong bản đồ (Google Maps).
  2. Duyệt cây DOM trong trình duyệt.
  3. Kiểm tra tính liên thông của đồ thị.
  4. Hệ thống gợi ý (như gợi ý kết bạn trên Facebook).
  5. AI và các trò chơi (tìm đường trong mê cung).

## Tìm kiếm theo độ sâu (Depth First Search)