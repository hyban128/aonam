app.controller("listTaiKhoan",function($scope,$http,$location){
    $scope.danhSachTK=[];
  $http.get("http://localhost:3000/user").then(function(response) {
    $scope.danhSachTK = response.data;
})
$scope.btnDel=function(id){
  $http({
    method:"DELETE",
    url:"http://localhost:3000/user/"+id

  }).then(function(respose){
    alert("Xóa thành công");
    // window.location.href="/taikhoan/list";
    // $location.path("taikhoan/list");
  })
}
}) 