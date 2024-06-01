app.controller("donHang",function($http,$scope,$location){
    $scope.dh=[];
    $http({
        method:"GET",
        url: "http://localhost:3000/don-hang",
    }).then(function(response){
        $scope.dh=response.data
        console.log($scope.dh);
    })
}) 