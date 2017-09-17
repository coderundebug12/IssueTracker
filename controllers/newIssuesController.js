app.controller('newIssues', function ($scope) {
    $scope.description = '';
    $scope.title = '';
    $scope.tinymceOptions = {
        height: 300,
        branding: false,
        statusbar: false,
        skin: 'lightgray',
        theme: 'modern',
        menu: {}
    }

    $scope.submit = function (data) {
        console.log($scope.description)
        console.log($scope.title)
    }
})