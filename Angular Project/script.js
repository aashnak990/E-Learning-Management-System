var appModule = angular.module("myApp",['ui.grid']);

appModule.controller("E-Learning", function($scope, $http) {
/* Cards Section ends */ 
$http.get('https://aashnak990.github.io/json/SessionDetail.json')    
.then(function(response){
    $scope.trainingData = response.data;
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
    },

]};
/* ui-grid Section ends */

/* Table content from json starts */
$scope.viewdetailsClick = function(index){
        $scope.Session=$scope.trainingData[index];
        $scope.details.data =$scope.trainingData[index].sessionDetails;       
}
/* Table content from json ends */

/* Filters start */
$scope.category = ["HTML", "Web Development", "Web Design"];
$scope.trainer = ["Ruchi Pareek", "Priyanka Chaudhary", "Brad Traversy","Rakesh Jain"];
/* Filters ends */

});