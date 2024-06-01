app.controller('createSanPham',function($scope,$http,$location){
    $scope.sanpham={
        id:"",
        anh:"",
        ten:"",
        soluong:"",
        gia:"",
        mota:"",
        tenDanhMuc:""
    }
    $scope.validateForm={
        trangthai:true,
        noidung:""
    }
    $scope.onClickSubmit=function(){
        $scope.validateForm.trangthai=true;
        $scope.validateForm.noidung="";
        if($scope.sanpham.id===""){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="ID là trường bắt buộc ";
            return;
        }
        if($scope.sanpham.anh===""){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Ảnh là trường bắt buộc ";
            return;
        }
        if($scope.sanpham.ten===""){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Tên sản phẩm là trường bắt buộc ";
            return;
        }
        if($scope.sanpham.soluong==="" ){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Số lượng là trường bắt buộc ";
            return;
        }else if($scope.sanpham.soluong<=0){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Số lượng phải lớn hơn 0 ";
            return;
        }
        if($scope.sanpham.mota===""){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Mô tả là trường bắt buộc ";
            return;
        }
        if($scope.sanpham.gia===""||$scope.sanpham.gia<=0){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Giá là trường bắt buộc và tối thiểu lớn hơn 0 ";
            return;
        }
        if($scope.sanpham.tenDanhMuc===""){
            $scope.validateForm.trangthai=false;
            $scope.validateForm.noidung="Tên danh mục là trường bắt buộc";
            return;
        }
        $http({
            method:"POST",
            url: "http://localhost:3000/san-pham",
            data:$scope.sanpham
        }).then(function(respose){
            alert("Tạo mới thành công");
            $location.path("/sanpham/list");
        })
    }
})