# Trees

1. Cây thì có thể có nhiều con
2. Mỗi con chỉ có duy nhất 1 nút cha
3. không có chu trình trong cây

## Thuật ngữ trong cây

1. node: là 1 thực thể chứa key hoặc value và các con trỏ tới các node con của nó.
   1. Node cuối cùng của mỗi đường dẫn gọi là node lá hoặc `external node`
   2. Node có ít nhất một node con gọi là `internal node`
2. Cạnh: là đường liên kết giữa 2 node bất kỳ
  ![edge](image-1.png)
3. node gốc: là 1 node trên cùng của cây
4. Chiều cao của 1 node: là số cạnh từ node đó đến node lá sâu nhất
5. Độ sâu của 1 node: là `số cạnh` từ root đến node đó
6. Chiều cao 1 cây: là số cạnh từ root đến node lá sâu nhất.
   ![độ sâu và chiều cao](image-2.png)
7. Bậc của node là tổng số  nhánh của node đó
8. Rừng (forest) là tập hợp của nhiều cây riêng biệt
   1. Nói cách khác, rừng là tập hợp các cấu trúc cây không liên kết với nhau.
   2. 📌 Nếu bạn xóa gốc của 1 cây, các cây con sẽ tạo thành `rừng`

## Các công thức về cây

1. Số cạnh và nút: `SỐ CẠNH = SỐ NODE - 1`
2. CÂY NHỊ PHÂN
   1. Số node `tối đa` ở mức `k`(tính từ 0): `số node ở mức k = 2^k`
   2. Số node `tối đa` của cây nhị phân với chiều cao `h`: `số node tối đa = 2^(h + 1) - 1`
3. CÂY NHỊ PHÂN HOÀN CHỈNH:
   1. Với `N` node, chiều cao `h` của cây: h = Math.floor(log<sub>2</sub>(N))
4. CÂY NHỊ PHÂN ĐẦY ĐỦ:
   1. Số lá `L` và tổng số node `N` có quan hệ: `N = 2L - 1`
   2. Số node bậc 2: `số node bậc 2 =  L - 1`
5. CÂY TỔNG QUÁT ( BẤT KỲ BẬC NÀO)
   1. Tổng bậc của tất cả các node: `∑ bậc các node = 2×(số cạnh) = 2(N - 1)`
6. Tóm tắt nhanh 🌲
![CÔNG THỨC CỦA TREE](image-3.png)

## Cây nhị phân

1. Cây nhị phân (Binary Tree) bản chất là 1 danh sách liên kết và có 2 con trỏ left và right
2. Nút không có bất kỳ node con nào gọi là node lá
3. có 1 số kiểu cây nhị phân:
   1. `Cây nhị phân đầy đủ`: là câu mà mỗi nút có thể  0 hoặc 2 nút con
      1. ![cây nhị phân đầy đủ](image.png)
   2. `Cây nhị hoàn hảo`: là cây mà tất các nút bên trong đều có 2 nút con và tất cả các nút lá đều có cùng độ sâu hoặc cùng cấp
   3. `Cây nhị phân hoàn chỉnh`: một cây nhị phân mà mọi mức (trừ mức cuối cùng) đều được điền đầy đủ từ trái sang phải. Mức cuối cùng có thể chưa đầy nhưng các node vẫn phải điền từ trái qua phải, không được bỏ trống ở giữa.

      ```markdown
                  1
                /   \
               2     3
              / \    /
              4  5  6
      ```

    ☑️ Cây trên là một cây nhị phân hoàn chỉnh, vì:
      - Mọi mức trừ mức cuối cùng đều đầy đủ.
      - Ở mức cuối cùng, các node được điền từ trái qua phải (4, 5, 6), không có khoảng trống giữa.
    ⚠️ Ví dụ về cây KHÔNG phải nhị phân hoàn chỉnh

      ```markdown
             1
            / \
           2   3
          /     \
         4       6
      ```

      🚫 Cây trên KHÔNG phải nhị phân hoàn chỉnh, vì node 5 bị thiếu nhưng node 6 vẫn có mặt ở bên phải. Điều này vi phạm quy tắc "điền từ trái qua phải".

## Cây nhị phân tìm kiếm (Binary Search Tree)

1. Các nút `bên trái` luôn `nhỏ hơn` nút gốc
2. Các nút `bên phải` luôn `lớn hơn` nút gốc

### 1. Độ phức tạp trung bình (Average Case)

- Trong 1 BST `cân bằng`, số phần tử theo cấp số nhân ( ~ 2^n - 1)
- Nếu có N phần tử, chiều cao của BST ~ log(N)
- Khi đó, các thao tác đều có độ phức tạp trung bình là 0(N)

| Operation | Time complexity (Balanced BST) |
| --------- | ------------------------------ |
| Lookup    | O(log N)                       |
| Insert    | O(log N)                       |
| Remove    | O(log N)                       |

### 2. Độ phức tạp xấu nhất (Worst Case)

- Nếu BST `bị mất cân bằng`, tức là các phần tử theo thứ tự `tăng` hoặc `giảm` dần, cây sẽ trở thành `Linked List`
- KHi đó các thao tác phải duyệt từ N phần tử -> O(N)

  ```markdown
    1
     \
      2
       \
        3
         \
          4
           \
            5
  ```

- Tìm kiểm 1 phần tử mất O(N)
- Chèn hoặc xóa cũng mất O(N) 