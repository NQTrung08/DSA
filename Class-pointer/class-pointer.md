# Class & pointer

## 1. Class

1. khi viết 1 lớp ta viết hoa chữ cái đầu Cookie

   - Mỗi class luôn có `constructor`. Đây chính là phần tạo ra các instance mới từ class này.
   - Mỗi class sẽ có các method chính như `setter` và `getter`.

    ```javascript
      class Cookie {
        constructor(color) {
          this.color = color
        }

        getColor() {
          return this.color
        } // giúp trả về 
        setColor(color) {
          this.color = color
        }

      }
    ```

2. Trong linkedlist ta ví dụ tạo các phương thức như ở mảng như sau:

  ```javascript
    class LinkedList {
      constructor(value) {...} // hàm khởi tạo
      push(value) {...} // hàm thêm node vào cuối danh sách

      unshift(value) {...} // hàm thêm node vào đầu danh sách

      insert (index, value) {...} // hàm chèn node vào vị trí index

      remove(index) {...} // hàm xóa node ở vị trí index

      pop() {...} // hàm xóa node ở cuối danh sách

      shift() {...} // hàm xóa node ở đầu danh sách

    }
  
  ```

## 2. Pointers

1. `Con trỏ (pointer)` là một khái niệm phổ biến trong các ngôn ngữ lập trình như C, C++, nhưng trong JavaScript, không có khái niệm con trỏ trực tiếp như trong các ngôn ngữ đó. Tuy nhiên, bạn có thể hiểu tương tự thông qua `tham chiếu` (reference) đến `đối tượng` (object) hoặc `mảng` (array).
2. Khái niệm:
   1. Con trỏ: trong các ngôn ngữ khác là 1 biến lưu trữ địa chỉ bộ nhớ của một biến khác.
   2. Tham chiếu trong JS là cách các đối tượng và mảng được lưu trữ trong bộ nhớ. Khi gán 1 object cho 1 biến khác, thực tế là đang sao chép `tham chiếu` chứ không phải `giá trị thực tế`.
   3. Trong JS định kỳ sẽ thực hiện việc dọn dẹp khi 1 `đối tượng` bị `bỏ trống` (tức không có gì trỏ tới) quá trình này được gọi là `Garbage Collection` (thu gom rác)
      1. ví dụ:

         ```javascript
                      // Tạo một đối tượng ban đầu
            let person = { name: 'Alice', age: 25 };

            // Gán đối tượng 'person' cho biến 'anotherPerson'
            let anotherPerson = person;

            // Thay đổi giá trị thuộc tính 'name' thông qua 'anotherPerson'
            anotherPerson.name = 'Bob';

            // Kiểm tra kết quả
            console.log(person.name); // 👉 'Bob' (Tham chiếu cùng một đối tượng)
            console.log(anotherPerson.name); // 👉 'Bob'

            //--> person và anotherPerson cùng tham chiếu đến 1 đối tượng.
            // khi thay đổi thuộc tính của đối tượng, giá trị trong cả persion và anotherPerson đều bị thay đổi

          ```