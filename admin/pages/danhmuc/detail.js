// console.log('Log để kiểm tra: Đã nhúng file pages/product/detail.js thành công');

// 6.1. Khai báo controller detailProductCtrl
// Lưu ý: Khai báo "$routeParams" để có thể lấy giá trị id truyền vào url
app.controller('detailProductCtrl', function ($scope, $http, $routeParams) {
    // console.log('Log để kiểm tra: Khai báo detailProductCtrl thành công');
    
    // console.log('Log để in thử giá trị params từ url', $routeParams);

    $scope.product = {
        id: "",
        ten: "",
       
    }
    //call api lay sp theo id tu url 
   $http({
        method:"GET",
        url: "http://localhost:3000/danh-muc/" +$routeParams.id

    }).then(function (response) {
        // Xử lý logic sau khi call api thành công
        // console.log("Log thử giá trị ds sản phẩm", response.data);
    
        // 2. Gán giá trị lấy được từ api vào biến $scope.danhSachSanPham
        $scope.product = response.data;
    
        // 3. Sử dụng ng-repeat để hiển thị biến $scope.danhSachSanPham ra html
    
    })


    $scope.btnxoa=()=>{
        $http({
            method:"DELETE",
            url: "http://localhost:3000/danh-muc/" +$routeParams.id

        }).then((res)=>{
                alert('Xóa thành công');
                window.location.href='#!danhmuc/list'
        })
    }
})
