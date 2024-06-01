app.controller('detailTaiKhoan',function($scope,$http,$routeParams){
$scope.taikhoan={
    id:"",
    name:"",
    email:"",
    password:"",
    phone:"",
   address:""
}
$http({
    method:"GET",
    url:"http://localhost:3000/user/"+$routeParams.id
}).then(function(response){
    $scope.taikhoan=response.data;
})

$scope.btnDel=function(){
    $http({
        method:"DELETE",
        url:"http://localhost:3000/user/"+$routeParams.id
    }).then(function(resposon){
        alert("Xóa thành công");
        window.location.href="#!taikhoan/list"
    })
}

})