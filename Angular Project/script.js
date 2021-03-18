var appModule = angular.module("myApp",['ui.grid']);

appModule.controller("E-Learning", function($scope, $http) {

/* Cards Section starts */
$http.get('https://aashnak990.github.io/json/training.json')    
.then(function(response){
    $scope.trainingsData = response.data;
});
 /* Cards Section ends */ 

 /* ui-grid Section starts */
$scope.details = {
    enableGridMenus: false,
    enableSorting: false,
    enableFiltering: false,
    enableCellEdit: false,
    enableColumnMenus: false,
    enableHorizontalScrollbar: 0,
    enableVerticalScrollbar: 0,
    paginationPageSizes: [5, 10, 20, 30],
    paginationPageSize: 10,
    useExternalPagination: true,
    
columnDefs:[
    {
          name:'sessionName',
          displayName:'Session',
    },
    {
          name:'sessionDate',
          displayName:'Session-Date',
    },
    {
        name:'sessionTime',
        displayName:'Session-Time',
    }
]};
/* ui-grid Section ends */

/* Table content from json starts */
$scope.buttonclick = function(index){
if(index==0){
    $http.get('https://aashnak990.github.io/json/SessionDetail.json')
    .then(function(response){
    $scope.details.data = response.data;
    $scope.details.data =$scope.details.data[index].sessionDetails;
    $scope.Session= response.data[index];
    });  
}
else if(index==1){
    $http.get('https://aashnak990.github.io/json/SessionDetail.json')
    .then(function(response){
    $scope.details.data = response.data;
    $scope.details.data =$scope.details.data[index].sessionDetails;
    $scope.Session= response.data[index];
    });
}
else if(index==2){
    $http.get('https://aashnak990.github.io/json/SessionDetail.json')
    .then(function(response){
    $scope.details.data = response.data;
    $scope.details.data =$scope.details.data[index].sessionDetails;
    $scope.Session= response.data[index];
    });      
}
else{
    $http.get('https://aashnak990.github.io/json/SessionDetail.json')
    .then(function(response){
    $scope.details.data = response.data;
    $scope.details.data =$scope.details.data[index].sessionDetails;
    $scope.Session= response.data[index];
    });
}
}
/* Table content from json ends */

/* Filters start */
$scope.category = ["HTML", "Web Development", "Web Design"];
$scope.trainer = ["Ruchi Pareek", "Priyanka Chaudhary", "Brad Traversy","Rakesh Jain"];
/* Filters ends */

});