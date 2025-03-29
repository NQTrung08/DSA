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