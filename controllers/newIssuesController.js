app.controller('newIssues', function ($scope) {
    $scope.tiny = '';
    var author = ['Nishant', 'Ravi', 'Nikesh', 'CodeRunDebug', 'Sam', 'Larry']
    var projectversion = ['Bootstrap', 'BootstrapV3', 'BootstrapV4']
    var arr = JSON.parse(window.localStorage.getItem('issues')) == null ? [] : JSON.parse(window.localStorage.getItem('issues'));
    console.log(JSON.parse(window.localStorage.getItem('issues')))
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
    $scope.tinymceOptions = {
        height: 300,
        branding: false,
        statusbar: false,
        skin: 'lightgray',
        theme: 'modern',
        menu: {},
        init_instance_callback: function (editor) {
            var textContentTrigger = function () {
                $scope.description = editor.getBody().textContent;
                $scope.$apply();
            };
            editor.on('KeyUp', textContentTrigger);
        }
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
        window.location = '#!/issuedetail/' + obj.issueNumber;
    }
})