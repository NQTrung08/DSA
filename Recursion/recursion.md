# Recursion

## Giới thiệu

1. là 1 hàm tự gọi lại chính nó để giải quyết bài toán nhỏ hơn của chính nó.

    ```javascript
        function recursive() {
        // 1. Điều kiện dừng (Base case)
        if (điều kiện dừng) return;

        // 2. Gọi lại chính nó với đầu vào nhỏ hơn
        recursive();
        }

        // exam
        function openGiftBox() {
            if(isBall) return ball
            openGiftBox();
        }

    ```

2. Tư duy đệ quy
   1. `Base case`: Điều kiện dừng để không gọi mãi mãi
   2. `Recursive case`: Hàm gọi lại chính nó với dữ liệu nhỏ hơn
3. 📌Các mẫu đệ quy thường gặp

    | **Bài toán**                       | **Mô tả ngắn**                            |
    | ---------------------------------- | ----------------------------------------- |
    | `Chia để trị (Divide & Conquer)`   | `Merge Sort, Quick Sort`                  |
    | `Duyệt cây (DFS)`                  | `Duyệt cây nhị phân, in-order, pre-order` |
    | `Duyệt mảng hoặc chuỗi`            | `In, đếm, tìm kiếm phần tử`               |
    | `Quay lui (Backtracking)`          | `Sudoku, giải mê cung, n-queens`          |
    | `Tối ưu hoá (Dynamic Programming)` | `Fibonacci tối ưu, knapsack`              |

4. Khi nào dùng đệ quy

    | **Khi nào nên dùng**       | **Khi nào không nên dùng**              |
    | -------------------------- | --------------------------------------- |
    | `Cấu trúc cây, đồ thị`     | `Khi bài toán quá sâu (stack overflow)` |
    | `Bài toán tự chia nhỏ`     | `Khi không cần nhớ trạng thái cũ`       |
    | `Backtracking / DFS / BFS` | `Khi có giải pháp lặp hiệu quả hơn`     |

5. 📌 Kết luận
   1. ✅ Đệ quy = Xử lý bài toán lớn bằng các giải quyết các bài toán nhỏ hơn giống chính nó
   2. 👍 Luôn cần **base case** để dừng
   3. ✨ Có thể kết hợp **memoization** để tối ưu
   4. 💯 Sức mạnh: dùng cho cây, đồ thị, backtracking, chia để trị

## Call Stack trong đệ quy

### 1. Đệ quy và Call Stack

- Mội khi gọi 1 hàm trình thông dịch sẽ lưu thông tin của hàm đó vào `Call Stack`(ngăn xếp lời gọi hàm).
- Khi hàm chạy xong, nó bị gỡ khỏi `stack`.
- Khi dùng đệ quy, mỗi lần gọi hàm đệ quy mới, hàm đó lại được thêm vào stack
- Khi chạm tới base case, lúc đó chương trình mới bắt đầu tháo dần các lời gọi ra khỏi stack.

### 2. Ví dụ cụ thể - Giai thừa

```javascript
        function factorial(n) {
            if( n == 0) return 1
            return n * factorial(n - 1)
        }

```

- Call Stack sẽ trông như sau:

 | Stack Top 🔝 | Hàm gọi                   |
 |--------------|---------------------------|
 | factorial(0) | Base case: return 1       |
 | factorial(1) | return 1 * factorial(0)   |
 | factorial(2) | return 2 * factorial(1)   |
 | factorial(3) | return 3 * factorial(2)   |
 | main()       | console.log(factorial(3)) |

- ✅ Khi factorial(0) trả về 1, Stack bắt đầu "xả ngược lại":
  - factorial(1) → 1 * 1 = 1
  - factorial(2) → 2 * 1 = 2
  - factorial(3) → 3 * 2 = 6

### 3. Tóm tắt quy trình stack khi chạy đệ quy

1. Push: Mỗi lần gọi hàm, chương trình sẽ lưu vào stack
2. Base case: Khi chạy đên điều kiện dừng, stack dừng xếp trồng lên
3. Pop: Stack bắt đầu dần "xả" ngược trở lại

- 🎯 Lưu ý:
  - Stack có giới hạn (ví dụ vài ngàn hoặc chục ngàn lời gọi, tuỳ môi trường).

  - Nếu đệ quy không có **base case**, chương trình sẽ gây lỗi **"Stack Overflow"**.

### 4. 🧩 Mẹo học chắc

1. Khi học đệ quy, luôn luôn vẽ stack!
2. Tưởng tượng stack như chồng đĩa: vào trước ra sau (LIFO).
3. Test với console.log để thấy rõ thứ tự push & pop stack.
