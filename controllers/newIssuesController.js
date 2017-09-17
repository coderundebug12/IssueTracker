app.controller('newIssues', function ($scope) {
    var author = ['Nishant', 'Ravi', 'Nikesh', 'CodeRunDebug', 'Sam', 'Larry']
    var projectversion = ['Bootstrap', 'BootstrapV3', 'BootstrapV4']
    var arr = [];
    var obj = {
        issueNumber: Math.floor(Math.random() * 1000) + 1,
        issueName: '',
        author: '',
        label: '',
        projectversion: '',
        milestones: 'Milestone1',
        assignedTo: '',
        sortBy: '',
        status: '',
        comments: [],
        description: '',
        modifiedDateTime: new Date()
    }
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
        var rand = Math.floor(Math.random() * 6) + 1;
        obj.issueName = $scope.title;
        obj.description = $scope.description;
        obj.author = author[rand];
        obj.assignedTo = author[rand];
        obj.status = 'Open';
        arr.push(obj);
        window.localStorage.setItem('issues',JSON.stringify(arr))
    }
})