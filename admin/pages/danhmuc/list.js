// console.log('Log để kiểm tra: Đã nhúng file pages/product/list.js thành công');

// 5.1. Khai báo controller listProductCtrl
app.controller('listDanhmuc', function ($scope, $http) {
    // console.log('Log để kiểm tra: Khai báo listProductCtrl thành công');
//tao bien can thiet
$scope.danhSachDanhmuc=[];
//call api
$http({
    method: "GET",
    url: "http://localhost:3000/danh-muc"
}).then(function (response) {
    // Xử lý logic sau khi call api thành công
    // console.log("Log thử giá trị ds sản phẩm", response.data);

    // 2. Gán giá trị lấy được từ api vào biến $scope.danhSachSanPham
    $scope.danhSachDanhmuc = response.data;

    // 3. Sử dụng ng-repeat để hiển thị biến $scope.danhSachSanPham ra html

})
$scope.btnxoa=(id)=>{
    $http({
        method:"DELETE",
        url: "http://localhost:3000/danh-muc/" + id

    }).then((res)=>{
            alert('Xóa thành công');
            window.location.href='#!danhmuc/list'
    })
}
})
