app.controller('danhMuc_SanPham',function($scope,$http,$routeParams){
    $scope.sanpham=[];
    $http({
        method:"GET",
        url:"http://localhost:3000/san-pham"
    }).then(function(response){
        $scope.sanpham=response.data
        console.log($scope.sanpham)
    })
}) 