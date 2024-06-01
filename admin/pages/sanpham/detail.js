app.controller('detailSanPham',function($scope,$http,$routeParams,$location){
$scope.sanpham={
    id: "",
    anh:"",
    ten: "",
    soluong:"",
    gia:"",
    mota:"",
    tenDanhMuc:""
}
$http({
    method:"GET",
    url:"http://localhost:3000/san-pham/"+$routeParams.id
}).then(function(response){
    $scope.sanpham=response.data;
})
$scope.btnDel=function(){
    $http({
        method:"DELETE",
        url:"http://localhost:3000/san-pham/"+$routeParams.id
    }).then(function(response){
        alert('Xóa thành công');
        $location.path("/sanpham/list");
    })
}
})