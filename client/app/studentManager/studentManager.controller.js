'use strict';

angular.module('WordRiverApp')
  .controller('StudentManagerCtrl', function ($scope, $location, $http, Auth) {
    //add group, delete group,
    $scope.studentList = []; //List of user references to students
    $scope.students = []; //List of actual student objects
    $scope.currentUser = Auth.getCurrentUser();
    $scope.groupField = "";
    $scope.studentField = "";
    $scope.localGroupArray = [];
    $scope.selectedGroups = [];
    $scope.selectedStudents = [];

///////////////////////////////////
    $scope.getStudentList = function(){
      //$http.get('/api/student').success(function(student) {
      //  $scope.students = student;
      //});
     $scope.studentList = $scope.currentUser.studentList;
    };

    $scope.getStudentList();
//////////////////////////////////
    $scope.getGroups = function(){
      //$http.get('/api/user').success(function(user) {
      //  $scope.user = user;
      //  $scope.groups = $scope.currentUser.groups;
      //})
      $scope.localGroupArray = $scope.currentUser.groupList;
    };
    $scope.getGroups();
////////////////////////////////////
    $scope.getStudents = function(){
      for(var i = 0; i < $scope.studentList.length; i++) {
        $http.get("/api/students/" + $scope.studentList[i].studentID).success(function(student) {
          $scope.students.push(student);
        })
      };
    };
    $scope.getStudents();
////////////////////////////////////

    $scope.addGroup = function () {
      if ($scope.groupField.length >= 1) {
        var newGroup = {groupName: $scope.groupField, contextPacks: []}
        $scope.localGroupArray.push(newGroup);
        $http.patch('/api/users/' + $scope.currentUser._id + '/group',
          {groupList: $scope.localGroupArray}
        ).success(function(){
          });
      }
      $scope.groupField="";
      $scope.getGroups();
    };


   $scope.removeGroup = function () {

     //
     //if ($scope.groupField.length >= 1) {
     //  $scope.localGroupArray.push($scope.groupField);
     //


      $http.patch('/api/users/' + $scope.currentUser._id + '/group',
         {groupList: $scope.localGroupArray}
      ).success(function(){
          });

    $scope.groupField="";
     $scope.getGroups();
   };

    //returns -1 if student is not in list. should never actually return -1.
    $scope.findStudentInList = function(student){
      var index = -1;
      for(var i = 0; i < $scope.studentList.length; i++){
        if($scope.studentList[i].studentID == student){
          index = i;
        }
      }
      return index;
    };

    $scope.findGroupInList = function(groupName){
      var index = -1;
      for(var i = 0; i < $scope.localGroupArray.length; i++){
        if($scope.localGroupArray[i].groupName == groupName){
          index = i;
        }
      }
      return index;
    };

    //Takes in a student's ID and a groups name
    $scope.assignStudentToGroup = function(student, group){
    var studentIndex = $scope.findStudentInList(student);
    if($scope.studentList[studentIndex].groupList.indexOf(group) == -1){
      $scope.studentList[studentIndex].groupList.push(group);
      $scope.addGroupsContextPacksToStudent(student);
    }
  };

    $scope.addGroupsContextPacksToStudent = function(student){
      var fullStudent = $scope.studentList[$scope.findStudentInList(student)];
      for(var i = 0; i < $scope.selectedGroups.length; i++) {
        var groupIndex = $scope.findGroupInList($scope.selectedGroups[i]);
        $scope.addContextPacksToStudent($scope.localGroupArray[groupIndex].contextPacks, fullStudent)
      }
    }

    $scope.addContextPacksToStudent = function(contextArray, student){
      for(var i = 0; i < contextArray.length; i++){
        if(student.contextTags.indexOf(contextArray[i]) == -1) {
          student.contextTags.push(contextArray[i]);
        }
      }
    }


    //$scope.addPackToStudent = function(contextTag){
    //  var studentIndex = $scope.findStudentInList(student);
    //  for(var i = 0; i < )
    //  if($scope.studentList[studentIndex].groupList.indexOf(group) == -1){
    //    $scope.studentList[studentIndex].groupList.push(group);
    //  }
    //}

    $scope.addStudentsToGroups = function(){
      console.log("Start");
      console.log("Context Tags: " + $scope.currentUser.studentList[1].contextTags + " __ " + "Groups: " + $scope.currentUser.studentList[1].groupList)
        //iterate over all of the students and all of the groups
      //call assignStudentToGroup on each pair
      for(var i = 0; i < $scope.selectedStudents.length; i++){
        for(var j = 0; j < $scope.selectedGroups.length; j++){
            $scope.assignStudentToGroup($scope.selectedStudents[i], $scope.selectedGroups[j]);
                  }
      }
      console.log("Finished");
      console.log("Context Tags: " + $scope.currentUser.studentList[1].contextTags + " __ " + "Groups: " + $scope.currentUser.studentList[1].groupList)
    }

    //Takes in a group name
    $scope.allCheckedGroups = function(category){
      var counter;
      for (var i = 0; i < $scope.selectedGroups.length; i++) {
        if ($scope.selectedGroups[i] == category) {
          $scope.selectedGroups.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.selectedGroups.push(category);
      }
    };

     //Takes in a student ID
    $scope.allCheckedStudents = function(category){
      var counter;
      for (var i = 0; i < $scope.selectedStudents.length; i++) {
        if ($scope.selectedStudents[i] == category) {
          $scope.selectedStudents.splice(i, 1);
          counter = 1;
        }
      }
      if (counter != 1){
        $scope.selectedStudents.push(category);
      }
    };



    //$scope.addGroup = function(){
    //  if($scope.groupField.length >= 1) {
    //    $http.post('/api/user', {groups: $scope.groupField}).success(function () {
    //      $scope.getUserInfo();
    //      $scope.groups.push({groups: $scope.groupField});
    //    });
    //    $scope.groupField = "";
    //  }
    //};
    //
    //$scope.addStudent = function(){
    //  if($scope.studentField.length >= 1) {
    //    $http.post('/api/user', {groups: $scope.studentField}).success(function () {
    //      $scope.getUserInfo();
    //      $scope.groups.push({groups: $scope.groupField});
    //    });
    //    $scope.groupField = "";
    //  }
    //};
    //
    //$scope.removeGroup = function(index){
    //  $http.delete('/api/user/' + $scope.currentUser.group[index]).success(function(){
    //    $scope.getUserInfo();
    //  });
    //};
  });
