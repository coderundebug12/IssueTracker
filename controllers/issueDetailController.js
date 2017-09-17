app.controller('issueDetailController',function($scope,$route,$filter){
    $scope.issuenumber = $route.current.params.id;
    $scope.issueList = JSON.parse(window.localStorage.getItem('issues'));
    $scope.currentIssue = $filter('filter')($scope.issueList, {issueNumber:$scope.issueNumber}, true, {})
})