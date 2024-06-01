app.controller('listSanPham',function($scope,$http,$location){
    $scope.danhsachSanPham=[];
    $http({
        method:"GET",
        url:"http://localhost:3000/san-pham"
    }).then(function(response){
        $scope.danhsachSanPham=response.data;
    })
    $scope.btnDel=function(id){
        $http({
            method:"DELETE",
            url:"http://localhost:3000/san-pham/"+id

        }).then(function(response){
            alert("Xóa thành công");
            $location.path("/sanpham/list")
        })
    }
})
