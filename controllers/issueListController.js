app.controller('issueListController', function ($scope) {
    $scope.authorModel = [];
    $scope.authorData = [{
        id: 1,
        label: "David"
    }, {
        id: 2,
        label: "Jhon"
    }, {
        id: 3,
        label: "Danny"
    }];
    $scope.buttonSettings = {
        showCheckAll: false,
        showUncheckAll: false,
        buttonClasses: 'dropdownbtn',
        scrollable: true,
        scrollableHeight: '300px',
        enableSearch: true,
        dynamicTitle: false,
    };
    $scope.tranlationTexts = {
        Author: {
            buttonDefaultText: 'Author'
        },
        Labels: {
            buttonDefaultText: 'Labels'
        },
        Projects: {
            buttonDefaultText: 'Projects'
        },
        Milestones: {
            buttonDefaultText: 'Milestones'
        },
        Assignee: {
            buttonDefaultText: 'Assignee'
        },
        Sort: {
            buttonDefaultText: 'Sort'
        }
    }

    $scope.dropdownevents = {
        Author: {
            onItemSelect: function (item) {
                console.log(item)
            }
        },
        Labels: {
            onItemSelect: function (item) {
                console.log(item)
            }
        },
        Projects: {
            onItemSelect: function (item) {
                console.log(item)
            }
        },
        Milestones: {
            onItemSelect: function (item) {
                console.log(item)
            }
        },
        Assignee: {
            onItemSelect: function (item) {
                console.log(item)
            }
        },
        Sort: {
            onItemSelect: function (item) {
                console.log(item)
            }
        }
    }
})


// {
//     issueNumber:'',
//     issueName:'',
//     author:'',
//     label:'',
//     projectversion:'',
//     milestones:'',
//     assignedTo:'',
//     sortBy:'',
//     status:'',
//     comments:[],
//     description:'',
//     modifiedDateTime:''
// }