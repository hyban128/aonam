app.controller("thanhToan", function($http, $scope, $location) {
    $scope.gh = [];
    
    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang"
    }).then(function(response) {
        $scope.gh = response.data;
    });

    // Khởi tạo đối tượng $scope.dh
    $scope.dh = {
        username:"",
        address:"",
        email:"",
        phone:"",
        ghichu:"",
        anh: "",
        ten: "",
        soluong: "",
        gia: "",
        thanhtien: "",
        tt:"",
    };

    $scope.bill = function() {
        // Kiểm tra xem mảng gh có phần tử hay không
        if ($scope.gh.length > 0) {
            // Lấy phần tử đầu tiên của mảng
            var firstItem = $scope.gh[0];
            // Gán giá trị từ phần tử đầu tiên vào object dh
            
            $scope.dh.anh = firstItem.anh;
            $scope.dh.ten = firstItem.ten;
            $scope.dh.soluong = firstItem.soluong;
            $scope.dh.gia = firstItem.gia;
            $scope.dh.thanhtien = firstItem.thanhtien;
            $scope.dh.tt=0
            console.log($scope.dh);

            $http({
                method:"POST",
                url: "http://localhost:3000/don-hang",
                data:$scope.dh
            }).then(function(response){
                alert("Thanh toán thành công");
                $location.path('/thanhcong');
            })
        }
    }
})