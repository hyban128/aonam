app.controller('chiTietSP',function($scope,$http,$routeParams,$location){
    $scope.sanpham={
        id:"",
        anh:"",
        ten:"",
        soluong:"",
        gia:"",

    };
   $scope.hienthi=function(){
        $scope.tongtien()
   }

    $http({
        method:"GET",
        url:"http://localhost:3000/san-pham/"+$routeParams.id
    }).then(function(response){
        $scope.sanpham=response.data
        $scope.hienthi();
     
       
    })
    $scope.sl = 1;
    $scope.tongtien = function() {
        $scope.total = $scope.sl * parseFloat($scope.sanpham.gia);
    };
    $scope.tongtien();

    $scope.gh={
        id:"",
        anh:"",
        ten:"",
        soluong:"",
        gia:"",
        thanhtien:""

    }
    $scope.onSubmit=function(){
        $scope.gh.id = Math.floor(Math.random() * 1000).toString();
       $scope.gh.ten=$scope.sanpham.ten
       $scope.gh.anh=$scope.sanpham.anh
       $scope.gh.soluong=$scope.sl
       $scope.gh.gia=$scope.sanpham.gia
       $scope.gh.thanhtien=$scope.total

        // console.log($scope.gh);
        $http({
            method:"POST",
            url:"http://localhost:3000/gio-hang",
            data:$scope.gh
        }).then(function(response){
            alert('Thêm thành công');
                $location.path('/cart');
        })
    }
}) 