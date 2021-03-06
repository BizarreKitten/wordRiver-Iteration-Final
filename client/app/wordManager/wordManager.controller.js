'use strict';

angular.module('WordRiverApp')
  .controller('WordManagerCtrl', function ($scope, $http, socket, Auth) {

    //global variables
    $scope.currentUser = Auth.getCurrentUser();
    $scope.categoryField = ""; //what's typed in the field when making a new category
    $scope.addField = ""; //what's typed in the field for a new word name
    $scope.addType = ""; //what's typed in the field for a new word type
    $scope.editField = ""; //what's typed into the edit field for a word name
    $scope.editType = ""; //what's typed into the edit field for a word type
    $scope.searchField = ""; //not in use, was used to find a word in existing words
    $scope.categoryArray = []; //an array of all categories a user currently has
    $scope.selectedCategories = []; //categories that have been checked
    $scope.selectedTiles = []; //tiles that have been checked
    $scope.allTiles = []; //a list of all tiles from the database
    $scope.allCatTiles = []; //an array of all the tiles within a category
    $scope.userTiles = []; //tiles that belong to the specific user
    $scope.matchTiles = []; //a way to find tiles that match other tiles to update the database
    $scope.toSort = "name"; //used for sorting
    $scope.order = false; //used for sorting
    $scope.currentCategory = null; //for some functions, is the category currently in use or looked it
    $scope.currentTile = null; //for some functions, holds the tile in use
    $scope.tileId = "";
    $scope.contextTagsTemp = [];
    $scope.showValue = true; //hide value for the edit fields for the words
    $scope.showValue1 = true; //not in use, hide value for the edit field for categories
    $scope.wordToEdit = null;
    $scope.tempIndex = null;
    $scope.theIDWeWant = null;



    $scope.getCategories = function() {
      $scope.categoryArray = [];
      $http.get('/api/categories').success(function (allCategories) {
        for (var i = 0; i < $scope.currentUser.contextPacks.length; i++) {
          for(var j = 0; j < allCategories.length; j++){
            if(allCategories[j]._id == $scope.currentUser.contextPacks[i]){
              $scope.categoryArray.push(allCategories[j]);
            }
          }
        }
      });
    };

    $scope.addTileToCategory = function() {
      var index =-1;
      for(var i = 0; i < $scope.selectedCategories.length; i++){
        for(var j = 0; j < $scope.selectedTiles.length; j++){
          console.log("asdasd "+$scope.selectedTiles[j]);
          index =  $scope.findTileByIndex($scope.selectedTiles[j]);
          if(index != -1 && !$scope.inArray($scope.userTiles[index].contextTags, $scope.selectedCategories[i])) {
            $http.put('/api/tile/' + $scope.userTiles[index]._id + "/updateTile", {
              tile: $scope.userTiles[index],
              tileId: $scope.userTiles[index]._id,
              newCategory: $scope.selectedCategories[i]
            }).success(function () {
            });
            $scope.userTiles[index].contextTags.push($scope.selectedCategories[i]);
          }
        }
      }

      if($scope.currentTile != null) {
        $scope.displayWordInfo($scope.currentTile);
      }
      if($scope.currentCategory != null) {
        $scope.displayCatInfo($scope.currentCategory);
      }

      //Don't refresh anything if there isn't anything to add
      if($scope.selectedCategories.length > 0 && $scope.selectedTiles.length > 0) {
        $scope.getWords();
        $scope.getCategories();
      }
    };

    $scope.findTileByIndex = function(tile){
      for(var i = 0; i < $scope.userTiles.length; i++){
        if($scope.userTiles[i]._id == tile){
          return i;
        }
      }
      return -1;
    };

    $scope.inArray = function(array, item){
      for(var i = 0; i < array.length; i++){
        console.log("Thing"+array[i]);
        if(array[i] == item){
          return true;
        }
      }
      return false;
    };

    $scope.getCategories();

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('pack');
    });

    $scope.addCategory = function () {
      if ($scope.categoryField.length >= 1) {
        console.log($scope.categoryField);
        $http.post('/api/categories/',
          {name:$scope.categoryField, isWordType: false, creatorID: $scope.currentUser._id}
        ).success(function(data){
            console.log("data:"+data);
            $scope.currentUser.contextPacks.push(data._id);
            $http.put('/api/users/' + $scope.currentUser._id + '/addContextID',
              {contextID: data._id}
            ).success(function(){
                console.log('something');
              });
          });
        $scope.theIDWeWant = null;
      }

      $scope.categoryField="";
      $scope.getCategories();
    };

    $scope.getWords = function(){
      $scope.userTiles = [];
      $http.get('/api/tile').success(function(allTiles) {
        $scope.allTiles = allTiles;
        for(var i= 0; i < $scope.allTiles.length; i++){
          if($scope.currentUser._id == $scope.allTiles[i].creatorID){
            $scope.userTiles.push($scope.allTiles[i]);
            console.log($scope.allTiles[i]);
          }
        }
      });
    };
    $scope.getWords();

    $scope.addWord = function() {
      if ($scope.addField.length >= 1 && $scope.addType.length >= 1) {
        $http.post('/api/tile', {
          name: $scope.addField,
          contextTags: $scope.selectedCategories,
          creatorID: $scope.currentUser._id,
          wordType: $scope.addType
        });
        $scope.addField = "";
        $scope.getWords();
      }
    };

    $scope.uncheckAll = function(){
      $scope.selectedTiles = [];
    };

    $scope.uncheckAllCategories = function(){
      $scope.selectedCategories = [];
    };

    //cat is short for category
    $scope.displayCatInfo = function (category) {
      //$scope.userTiles = [];
      $scope.matchTiles = [];
      $scope.currentCategory = category;
        for (var j = 0; j < $scope.userTiles.length; j++) {
          for (var z = 0; z < $scope.userTiles[j].contextTags.length; z++) {
            if ($scope.userTiles[j].contextTags[z] == category._id) {
              $scope.matchTiles.push($scope.userTiles[j]);
              //console.log($scope.userTiles[j].name);
            }
          }
        }
        if ($scope.matchTiles.length > 0) {

        } else {
          alert("There are no tiles in this category");
        }

    };

    $scope.getCategoryFromTagName = function(tile, index) {
      for(var i = 0; i < $scope.categoryArray.length; i++){
        console.log(tile.contextTags[index] + " "+ $scope.categoryArray[i]._id);
        if(tile.contextTags[index] == $scope.categoryArray[i]._id){
          $scope.contextTagsTemp.push($scope.categoryArray[i]);
          console.log($scope.categoryArray[i]);
        }
      }
    };

      $scope.displayWordInfo = function (word) {
        $scope.contextTagsTemp = [];
        $scope.currentTile = word;
        for (var j = 0; j < word.contextTags.length; j++) {
          $scope.getCategoryFromTagName(word, j);
        }
      };

    //Deletes a category
    $scope.removeCategory = function(category) {
      $scope.tempIndex = $scope.findIndexOfCat(category);
      $scope.catToRemove = $scope.categoryArray[$scope.tempIndex];
      console.log(category.name);
      for(var i = 0; i<$scope.currentUser.contextPacks.length; i++){
        if($scope.currentUser.contextPacks[i] == $scope.catToRemove._id){
          $scope.currentUser.contextPacks.splice(i,1);

          console.log($scope.catToRemove.name);
        }
      }
      $http.delete('/api/categories/'+ $scope.catToRemove._id).success(function(){console.log('success')});
      $scope.categoryArray.splice($scope.tempIndex, 1);
      $scope.getCategories();
    };

    //part of the delete function, calls the removeCategory function.
    $scope.confirmDelete = function(category) {
      this.index = $scope.findIndexOfCat(category);
      if (confirm("Are you sure you want to delete " + $scope.categoryArray[$scope.findIndexOfCat(category)].name + "?") == true) {
        $scope.removeCategory(category);
      }
    };

      //Removes a word from a category
    $scope.removeFromCategory = function(tile, index) {
      $scope.tileId = tile._id;
      $http.put('/api/tile/' + $scope.tileId + "/removeFromCategory", {category: $scope.currentCategory._id, tileId: tile._id});
      $scope.matchTiles.splice(index, 1);
    };

    //Removes a category from a word, on the server side this does the same thing as removeFromCategory
    $scope.removeCategoryFromWord = function(index) {
      $scope.tileId = $scope.currentTile._id;
      $http.put('/api/tile/' + $scope.tileId + "/removeFromCategory", {category: $scope.contextTagsTemp[index]._id, tileId: $scope.currentTile._id});
      $scope.contextTagsTemp.splice(index, 1);
    };

    //deletes a word
    $scope.removeWord = function(tile) {
      $scope.wordToRemove = $scope.userTiles[$scope.findIndexOfTile(tile)];
      $http.delete('/api/tile/'+ $scope.wordToRemove._id);
      $scope.getWords();
      $scope.userTiles.splice($scope.findIndexOfTile(tile),1);
      for(var i = 0; i < $scope.allTiles.length; i++){
        if($scope.wordToRemove.id == $scope.allTiles[i].id) {
            $scope.allTiles.splice(i,1);
          }
      }
    };

    $scope.findIndexOfTile = function(tile){
      for(var i = 0; i < $scope.userTiles.length; i++){
        if(tile._id == $scope.userTiles[i]._id){
          return i;
        }
      }
    }
    //THIS FUNCTION IS TERRIBLE - we made it this way due to time and labor constraints. PLEASE FIX.
    $scope.editWord = function(tile){
      $scope.editWordIndex = $scope.findIndexOfTile(tile);
      $scope.showValue = false;
      $scope.wordToEdit = $scope.userTiles[$scope.findIndexOfTile(tile)];
    };

    $scope.updateTile = function() {
      if($scope.editField.length >= 1 && $scope.editType.length < 1){
        //Only editing the word text
        $http.post('/api/tile', {
          name: $scope.editField,
          contextTags: $scope.userTiles[$scope.editWordIndex].contextTags,
          creatorID: $scope.userTiles[$scope.editWordIndex].creatorID,
          wordType: $scope.userTiles[$scope.editWordIndex].wordType
        });
        $scope.removeWord($scope.wordToEdit);

        $scope.editField = "";
      }
      else if($scope.editField.length == 0 && $scope.editType.length >= 1){
        //Only editing the word type
        $http.post('/api/tile', {
          name: $scope.userTiles[$scope.editWordIndex].name,
          contextTags: $scope.userTiles[$scope.editWordIndex].contextTags,
          creatorID: $scope.userTiles[$scope.editWordIndex].creatorID,
          wordType: $scope.editType
        });
        $scope.removeWord($scope.wordToEdit);

        $scope.editType = "";
      }
      else if($scope.editField.length >= 1 && $scope.editType.length >= 1){
        //Editing both the word type and the word text
        $http.post('/api/tile', {
          name: $scope.editField,
          contextTags: $scope.userTiles[$scope.editWordIndex].contextTags,
          creatorID: $scope.userTiles[$scope.editWordIndex].creatorID,
          wordType: $scope.editType
        });
        $scope.removeWord($scope.wordToEdit);

        $scope.editField = "";
        $scope.editType = "";
      }

      $scope.showValue = true;
    }

    $scope.findIndexOfCat = function(category){
      for(var i = 0; i < $scope.categoryArray.length; i++){
        if(category._id == $scope.categoryArray[i]._id){
          return i;
        }
      }
    }

    $scope.editCategory = function(category){
      $scope.editCatIndex = $scope.findIndexOfCat(category);
      $scope.showValue1 = false;
      $scope.categoryToEdit = $scope.userTiles[$scope.findIndexOfTile(category)];
    };

    $scope.updateCategory = function(){
      if($scope.editField.length >= 1){

      }
      $scope.showValue1 = true;
    }
  });
