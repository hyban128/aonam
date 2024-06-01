app.controller("gioHangSP", function($scope, $http, $routeParams, $location) {
    $scope.gh = [];
    $scope.totalPrice = 0;

    $http({
        method: "GET",
        url: "http://localhost:3000/gio-hang"
    }).then(function(response) {
        $scope.gh = response.data;
        $scope.calculateTotalPrice(); // Gọi hàm tính tổng giá tiền sau khi danh sách giỏ hàng được cập nhật
    });

    $scope.onDel = function(id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/gio-hang/" + id
        }).then(function(response) {
            alert("Xóa thành công");
            // Sau khi xóa sản phẩm, cập nhật lại tổng giá tiền
            $scope.calculateTotalPrice();
        });
    }

    // Hàm tính tổng giá tiền từ danh sách sản phẩm trong giỏ hàng
    $scope.calculateTotalPrice=function() {
        $scope.totalPrice = 0;
        $scope.gh.forEach(function(product) {
            // Tính tổng giá tiền cho từng sản phẩm và cộng vào biến totalPrice
            $scope.totalPrice += parseFloat(product.gia) * parseInt(product.soluong);
        });
    }
});
