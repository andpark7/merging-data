/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";

//create new angular module
//the parameter for the controller is $scope
angular.module('AddressBook', [])
    .controller('AddressController', function($scope){
        //stores the array so that it can be viewed
        $scope.employees = pawneeEmployees;
        //defaults how the column is sorted
        $scope.sortCol = 'lastName';
        //helps filter search
        $scope.searchString = '';
        //sorts the list depending on the column chosen
        $scope.sortBy = function (colName) {
            $scope.sortCol = colName;
        }
    });
