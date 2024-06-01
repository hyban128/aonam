console.log('Log để kiểm tra: Đã nhúng file pages/product/edit.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('editProductCtrl', function ($scope, $http, $routeParams) {
    console.log('Log để kiểm tra: Khai báo editProductCtrl thành công');
    $scope.product = {
        id: "",
        ten: "",
        anh: "",
        tenDanhMuc: ""
    }
    $scope.validateForm = {
        trangThai: true, // true = form hợp lệ | false = Form không hợp lệ
        noiDung: ""
    }
    $http({
        method:"GET",
        url: "http://localhost:3000/danh-muc/" +$routeParams.id

    }).then(function (response) {
        // Xử lý logic sau khi call api thành công
        console.log("Log thử giá trị ds sản phẩm", response.data);
    
        // 2. Gán giá trị lấy được từ api vào biến $scope.danhSachSanPham
        $scope.product = response.data;
    
        // 3. Sử dụng ng-repeat để hiển thị biến $scope.danhSachSanPham ra html
    
    })
   
//bat su kien an sua va caill api cap nhat sp
$scope.onClickSubmit = function() {
    // Log thử kiểm tra gọi hàm thành công
    console.log("// Gọi hàm onClickSubmit() thành công");

    // Log thử giá trị người dùng nhập vào input, select
    console.log("// Giá trị người dùng nhập: ", $scope.product);


    // 2.1. Validate dữ liệu nhập vào
    // Tạo 1 biến trung gian để lưu giữ liệu

    // Reset form
    $scope.validateForm.trangThai = true;
    $scope.validateForm.noiDung = "";

    // Validate id bắt buộc
    if($scope.product.id === "") {
        $scope.validateForm.trangThai = false;
        $scope.validateForm.noiDung = "ID là trường bắt buộc";

        return; // Dùng hàm ở đây luôn. Code ko chạy xuống dưới nữa
    }

    // Validate tên bắt buộc
    // Validate thêm là: tên phải có độ dài tối thiểu 5 ký tự
    if ($scope.product.ten === "" || $scope.product.ten.length < 5) {
        $scope.validateForm.trangThai = false;
        $scope.validateForm.noiDung = "Tên là trường bắt buộc, và có tối thiểu 5 ký tự";

        return; // Dùng hàm ở đây luôn. Code ko chạy xuống dưới nữa
    }

    // Validate ảnh bắt buộc
    if ($scope.product.anh === "") {
        $scope.validateForm.trangThai = false;
        $scope.validateForm.noiDung = "Ảnh là trường bắt buộc";

        return; // Dùng hàm ở đây luôn. Code ko chạy xuống dưới nữa
    }


    // 2.2. Call api để tạo mới dữ liệu
    $http({
        method: "PUT",
        url: "http://localhost:3000/danh-muc/"+$routeParams.id,
        data: $scope.product
    }).then(function(response) {
        // Xử lý logic sau khi call api thành công

        // Hiển thị thông báo tạo thành công
        alert("Sửa thành công");

        // Điều hướng về trang danh sách
        window.location.href = "#!danhmuc/list";


    })




}
})
