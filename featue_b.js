class FloatVector {
    constructor() {
        this._capacity = 10;
        this._size = 0;
        // Tạo mảng chỉ chứa số thực (float) với độ dài ban đầu
        this._data = new Float32Array(this._capacity); 
    }

    push(n) {
        // Nếu mảng đầy, tạo mảng mới gấp đôi sức chứa
        if (this._size === this._capacity) {
            this._capacity *= 2;
            const newData = new Float32Array(this._capacity);
            
            // Chép dữ liệu từ mảng cũ sang mảng mới
            newData.set(this._data); 
            this._data = newData;
        }
        // Thêm phần tử và tăng kích thước
        this._data[this._size++] = n;
    }

    pop() {
        // Kiểm tra xem mảng có rỗng không
        if (this._size > 0) {
            return this._data[--this._size];
        }
        console.error("Lỗi: Vector rỗng!");
        return 0.0;
    }
}