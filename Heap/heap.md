# Heap

- là 1 cấu trúc dữ liệu dạng `cây nhị phân hoàn chỉnh` thỏa mãn tính chất của 1 `heap`, thường được triển khai `hàng đợi ưu tiên`. Có 2 loại heap chính:
  1. Max heap:
     - Gía trị của mỗi node cha luôn >= giá trị của các node con.
     - Phần tử lớn nhất luôn nằm ở gốc (root).
  2. Min heap:
     - Giá trị của mỗi node cha luôn =< giá trị của node con.
     - Phần tử nhỏ nhất luôn nằm ở gốc

## Ứng dụng

1. Hàng đợi ưu tiên (Priority Queue): Được sử dụng trong thuật toán như Dijkstra, A*.
2. Sắp xếp HeapSort: Sắp xếp dữ liệu trong O(n logn)
3. Tìm phần tử lớn nhất/ nhỏ nhất nhanh chóng.
4. Quản lý bộ nhớ (Memory Management): Trong hệ điều hành, heap dùng để cấp phát bộ nhớ động

## Triển khai Cấu trúc dữ liệu Heap

1. biểu diễn heap bằng mảng

    ```markdown
                  1
                /   \
               2     3
              / \    /
              4  5  6

              15
            8        12
         5     7   10   11
      3    2 6   4 9 1 
    ```

   1. ➡️ mảng tương ứng sẽ là: `[1, 2, 3, 4, 5, 6]`.
      - Với một node ở vị trí **i** trong mảng:
        - **Node con trái**: nằm ở vị trí `2*i + 1`
        - **Node con phải**: nằm ở vị trí `2*i + 2`
        - **Node cha**: nằm ở vị trí `(i - 1) // 2`
  
   2. ▶️Cách hiểu khác là với điều kiện `mảng bắt đầù từ 1`:
     - `Node trái` = 2 * `vị trí node cha`.
     - `Node phải` = 2 * `vị trí node cha` + 1.
     - `Node cha` = `vị trí node con // 2`

2. Các thao tác trên Heap
   a. Thêm phần tử vào Heap (Insert) - Heapify Up
      1. Thêm phần tử mới vào cuối mảng.
      2. So sánh phần tử với cha của nó, nếu vi phạm tính chất heap thì hoán đổi (up-heap / heapify-up).
      3. `Lặp lại` quá trình này cho đến khi heap hợp lệ.

   b. Xóa phần tử gốc (Extract Max/Min) - Heapify Down
      1. Hoán đổi phần tử gốc với phần tử cuối cùng trong mảng.
      2. Xóa phần tử cuối cùng (là giá trị cũ của gốc).
      3. So sánh phần tử mới ở gốc với các con của nó, nếu vi phạm tính chất heap thì hoán đổi với con lớn hơn (đối với max heap) hoặc con nhỏ hơn (đối với min heap) (down-heap / heapify-down).
         1. khi hoán đổi thì kiểm tra node trái và phải, node nào lớn nhất thì hoán đổi (max heap) - node nào bé hơn thì hoán đổi (min heap)
         2. Lặp lại cho đến khi không còn node trái - phải nào lớn hơn
      4. `Lặp lại` cho đến khi heap hợp lệ.

   c. Cập nhật giá trị một phần tử
      1. Nếu tăng giá trị một phần tử trong max heap → thực hiện up-heap.
      2. Nếu giảm giá trị một phần tử trong max heap → thực hiện down-heap.

   d. Chuyển đổi một mảng thành Heap (Heapify)
      1. Duyệt từ nửa cuối mảng về đầu, thực hiện down-heap cho từng phần tử.
      2. Độ phức tạp 𝑂(𝑛) nhanh hơn so với việc thêm từng phần tử với 𝑂(𝑛log𝑛).

## Hàng đợi ưu tiên **(Priority Queues)**

### Đặc điểm của hàng đợi ưu tiên

   1. Giống như hàng đơi thông thường nhưng phần tử có `ưu tiên cao hơn` sẽ được lấy ra trước, bất kể thứ tự vào.
   2. Mỗi phần tử trong hàng đợi ưu tiên đều có 1 giá trị ưu tiên đi kèm.
   3. Khi thêm phần tử vào, cấu trúc dữ liệu sẽ sắp xếp phần tử đó theo đúng thứ tự ưu tiên.
   4. Khi lấy phần tử ra `(pop)`, phần tử ưu tiên cao nhất sẽ được lấy

### Triển khai hàng đợi ưu tiên

1. ❌ Ta có thể triển khai với mảng, linked list để lặp qua các phần tử trong danh sách, phần tử nào lớn thì ta lấy ra => `mất O(n)` => `không hiểu quả`.
2. ✅ Dùng Heap:
   1. Với `max-heap`: luôn giữ phần tử có `ưu tiên lớn nhất` ở đầu
   2. Với `min-heap`: luôn giữ phần tử có `ưu tiên nhỏ nhất` ở đầu