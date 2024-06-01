app.controller('trangChu',function($scope,$http){
    $scope.danhSach=[];
    $http({
        method:"GET",
        url:"http://localhost:3000/san-pham"
    }).then(function(response){
        $scope.danhSach=response.data;
       
    })
    
})