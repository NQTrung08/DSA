# Map & Set trong JavaScript

## 1. Map là gì?

`Map` là một cấu trúc dữ liệu lưu trữ các cặp **key-value**. Nó mạnh hơn `Object` trong nhiều trường hợp vì:

- **Key** có thể là bất kỳ kiểu dữ liệu nào (object, function, number, string…).
- Duy trì **thứ tự chèn** (insertion order).
- Có API rõ ràng và mạnh mẽ (`set`, `get`, `has`, `delete`, `size`).

### Tại sao cần `Map`?

- Khi cần lưu trữ dữ liệu với key không phải là string.
- Khi cần hiệu suất cao hơn trong việc truy xuất và thao tác dữ liệu.
- Khi cần duy trì thứ tự chèn.

### Lưu ý khi sử dụng `Map`:

- Không thể truy cập key bằng cách sử dụng cú pháp dấu chấm (`.`) như `Object`.
- Phải sử dụng các phương thức như `set`, `get`, `has`.

### Ứng dụng thực tế:

- Lưu trữ cấu hình hoặc dữ liệu với key phức tạp.
- Tạo bộ đếm tần suất xuất hiện của phần tử.
- Lưu trữ các liên kết (references) giữa các đối tượng.

---

## 2. Set là gì?

`Set` là một cấu trúc dữ liệu lưu trữ **các giá trị duy nhất**. Nó loại bỏ các giá trị trùng lặp một cách tự động.

### Tại sao cần `Set`?

- Khi cần lưu trữ danh sách các giá trị mà không có giá trị trùng lặp.
- Khi cần kiểm tra nhanh xem một giá trị đã tồn tại hay chưa.

### Lưu ý khi sử dụng `Set`:

- Không có key, chỉ có giá trị.
- Không thể truy cập giá trị bằng chỉ số (index).
- Có các phương thức như `add`, `delete`, `has`, `size`.

### Ứng dụng thực tế:

- Loại bỏ các giá trị trùng lặp trong mảng.
- Kiểm tra sự tồn tại của phần tử trong tập hợp.
- Tìm giao, hợp, hiệu của các tập hợp.

---

## 3. So sánh Map và Set

| Đặc điểm         | Map                          | Set                          |
|------------------|------------------------------|------------------------------|
| Lưu trữ          | Cặp key-value               | Giá trị duy nhất             |
| Key              | Bất kỳ kiểu dữ liệu         | Không có key                 |
| API              | `set`, `get`, `has`, `delete` | `add`, `has`, `delete`       |
| Thứ tự chèn      | Duy trì                     | Duy trì                     |

---

## 4. Ví dụ thực tế

### Sử dụng Map để đếm tần suất xuất hiện:

```js
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = new Map();

for (const word of words) {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log(wordCount);
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
```

### Sử dụng Set để loại bỏ giá trị trùng lặp:

```js
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
```

### Sử dụng Set để tìm giao của hai tập hợp:

```js
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set { 3, 4 }
```