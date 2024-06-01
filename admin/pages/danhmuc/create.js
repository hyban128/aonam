console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// Khai báo controller createProductCtrl
app.controller('createDanhmuc', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    // Cần 1 biến để lưu giá trị người dùng nhập vào input
    $scope.danhmuc = {
        id: "",
        ten: "",
      
    }
    // Cần 1 biến lưu trạng thái, nội dung validate
    $scope.validateForm = {
        trangThai: true, // true = form hợp lệ | false = Form không hợp lệ
        noiDung: ""
    }



    // Liên kết biến với html
    // (Sử dụng ng-model)
$scope.onClickSubmit = function() {
        // Log thử kiểm tra gọi hàm thành công
        // console.log("// Gọi hàm onClickSubmit() thành công");

        // Log thử giá trị người dùng nhập vào input, select
        // console.log("// Giá trị người dùng nhập: ", $scope.product);


        // 2.1. Validate dữ liệu nhập vào
        // Tạo 1 biến trung gian để lưu giữ liệu

        // Reset form
        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = "";

        // Validate id bắt buộc
        if($scope.danhmuc.id === "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "ID là trường bắt buộc";

            return; // Dùng hàm ở đây luôn. Code ko chạy xuống dưới nữa
        }

        // Validate tên bắt buộc
        // Validate thêm là: tên phải có độ dài tối thiểu 5 ký tự
        if ($scope.danhmuc.ten === "" || $scope.danhmuc.ten.length < 5) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung = "Tên là trường bắt buộc, và có tối thiểu 5 ký tự";

            return; // Dùng hàm ở đây luôn. Code ko chạy xuống dưới nữa
        }

        // Validate ảnh bắt buộc
       


        // 2.2. Call api để tạo mới dữ liệu
        $http({
            method: "POST",
            url: "http://localhost:3000/danh-muc",
            data: $scope.danhmuc
        }).then(function(response) {
            // Xử lý logic sau khi call api thành công

            // Hiển thị thông báo tạo thành công
            alert("Tạo mới thành công");

            // Điều hướng về trang danh sách
            window.location.href = "#!danhmuc/list";


        })




    } // Kết thúc hàm onClickSubmit()
    // 2. Bắt sự kiện click button submit
    


}) // Kết thúc controller
