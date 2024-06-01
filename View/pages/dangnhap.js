
app.run(function ($rootScope) {
    var userFromStorage = sessionStorage.getItem('user');
    if (userFromStorage) {
        $rootScope.user = userFromStorage;
    }
});

app.controller('dangNhap', ['$scope', '$http', '$rootScope', '$routeParams', function ($scope, $http, $rootScope, $routeParams,$location) {
    $scope.tk = [];
    $scope.dn = {
        user: '',
        pass: ''
    };
    $rootScope.user = sessionStorage.getItem('user');
    $scope.login = function () {
        console.log($scope.dn);
        $http({
            method: "GET",
            url: 'http://localhost:3000/user'
        }).then(function (kq) {
            $scope.tk = kq.data;
            console.log($scope.tk);
            $rootScope.user = '';
            var index = $scope.tk.findIndex(st => st.name === $scope.dn.user && st.password === $scope.dn.pass);
            if (index >= 0) {
                $rootScope.user = $scope.dn.user;
                sessionStorage.setItem('user', $scope.dn.user);
                console.log($rootScope.user);
                window.location.href = '#!';
            } else {
                alert('Sai tài khoản mật khẩu');
            }
        });
    };

    console.log($routeParams.xoa);
    if ($routeParams.xoa === "xoa") {
        sessionStorage.removeItem('user');
        // Redirect to the login page or the main page
        window.location.href = '#!/dangnhap';
        // $location.path("/dangnhap")
    }

}]);
