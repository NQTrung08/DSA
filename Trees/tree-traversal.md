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

- là 1 thuật toán duyệt hoặc tìm kiếm trên đồ thị hoặc cây.
- DFS đi theo chiều sâu của cấu trúc dữ liệu, nghĩa là càng xa càng tốt theo một nhánh trước khi quay lại và khám phá các nhánh khác.

### DFS là gì?

- DFS là viết tắt của Depth-First-Search- Tìm kiếm theo chiều sâu.

### DFS hoạt động như thế nào

1. Bắt đầu từ 1 đỉnh xuất phát (start node)
2. Đánh ấu đỉnh đó là đã thăm.
3. Đệ quy hoặc sử dụng stack để tiếp tục thăm đỉnh kề chưa được thăm.
4. Khi không còn đỉnh kề nào chưa thăm, quay lui về đỉnh trước đó và tiếp tục.
5. Lặp lại cho đến khi tất cả các đỉnh có thể truy cập được đều đã được duyệt

### ✅ Tại sao dùng DFS

1. Tìm kiếm đường đi trong ma trận, mê cung, hoặc cây.
2. Phát hiện chu trình trong đô thị
3. Tìm thành phần liên thông.
4. Giải bài toán tô màu, sudoku, đệ quy quay lui (backtracking)
5. Tìm đường đi sâu nhất hoặc kiểm tra tính liên thông của đồ thị.
6. Có thể dùng topo sort, detect strongly connected components (Tarjan),...

#### Ưu điểm

- Dễ cài đặt (đặc biệt dùng đệ quy)
- Tiết kiệm bộ nhớ hơn BFStrong một số trường hợp (vì không cần lưu hàng đợi lớn)

#### Nhược điểm

- có thể rơi vào vòng lặp vô hạn nếu đồ thị có chu trình và không đánh dấu đỉnh đã thăm.
- Không đảm bảo tìm được **đường đi ngắn nhất**

### Chu trình là gì?

- là 1 đường đi bắt đầu và kết thúc tại 1 đỉnh, không đi qua cạnh nào hoặc đình nào lặp lại (trừ đỉnh đầu/ cuối).
👇 Ví dụ:

- Đồ thị có các đỉnh A -> B -> C -> A
👉 Đọc thêm tại đây [Chu trình](http://dembinhyen.free.fr/UDS/Ebook/CD1/Ly%20Thuyet%20Do%20Thi/Htm/Chuong1_3.htm)
