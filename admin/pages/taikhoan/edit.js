app.controller('editTaiKhoan',function($scope,$http,$routeParams,$location){
    $scope.taikhoan={
        id:"",
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        status:""
    }
    $scope.validateForm={
        trangthai:true,
        noidung:""
    }
    $http({
        method:"GET",
        url:"http://localhost:3000/user/"+$routeParams.id
    }).then(function(response){
        console.log(response);
        $scope.taikhoan=response.data;
    })
    $scope.onClickSubmit=function(){
        $scope.validateForm.trangthai=true;
        $scope.validateForm.noidung="";
       var checkEmail= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
       var checkSo = /^(0)\d{0,9}$/;  //dạng số,số 0 dầu tiên,tối đa 10 số
               
    if($scope.taikhoan.id===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="ID là trường bắt buộc ";
        return;
    }
    if($scope.taikhoan.name===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Name là trường bắt buộc ";
        return;
    }
    if($scope.taikhoan.email===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Email là trường bắt buộc ";
        return;
    }else if(!checkEmail.test($scope.taikhoan.email)){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Email sai định dạng";
        return;
    }
    if($scope.taikhoan.password===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Password là trường bắt buộc ";
        return;
    }
    if($scope.taikhoan.phone===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Phone là trường bắt buộc ";
        return;
    }else if(!checkSo.test($scope.taikhoan.phone)){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Phone phải dạng số,bắt đầu bằng 0,tối đa 10 chữ số";
        return;
    }else if($scope.taikhoan.phone<=10){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Phone nhỏ hơn 10";
        return;
    }
    if($scope.taikhoan.date===""){
        $scope.validateForm.trangthai=false;
        $scope.validateForm.noidung="Date là trường bắt buộc ";
        return;
    }
     $http({
        method:"PUT",
        url:"http://localhost:3000/user/"+$routeParams.id,
        data:$scope.taikhoan
    }).then(function(response){
        alert("Sửa thành công");
        $location.path("/taikhoan/list");
    })
    }
   
})