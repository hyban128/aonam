app.controller("dangKy", function ($scope,$http,$location) {
    $scope.onSubmit = function() {
      
    
    
        var newUser = {
            ...$scope.inputValue,
        }

        //khởi tạo biến để kiểm tra hợp lệ
        var invalid = false;
        //nếu trường name bỏ trống
        if (!$scope.inputValue   || !$scope.inputValue.name || $scope.inputValue.name.length < 6) {
            invalid = true;
        }
        if(!$scope.inputValue || !$scope.inputValue.password ||$scope.inputValue.password.length < 8 ){
            invalid=true
        }
        if (!$scope.inputValue   || !$scope.inputValue.phone || $scope.inputValue.phone.length < 10) {
            invalid = true;
        }

    

        if (!invalid) {
           $http({
            method:"POST",
            url:"http://localhost:3000/user",
            data:newUser
        }).then(function(response){
            alert("Đăng ký thành công");
            $location.path("/dangnhap");
            // console.log(newUser);
        })
        }
    }
})