var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope){

  $scope.websites = [
    { 
      url: "https://x.piratar.is",
      name: "Kosningakerfi",
      person: "Bjarni Rúnar"
    },
    {
      url: "http://mas.piratar.is",
      name: "Málefnaspjall (discource.piratar.is)"
    },
    {
      url: "http://stefna.piratar.is",
      name: "Stefna Pírata"
    },
    {
      url: "https://member.piratar.is",
      name: "Félagatal Pírata",
      person: "Bjarni Rúnar"
    },
    { 
      url: "http://gogn.piratar.is",
      name: "Mæting þingmanna á nefndarfundi"
    },
    { 
      url: "http://www.piratar.is/althingisrynirinn/",
      name: "Alþingisrýnir (2013)"
    },
    { 
      url: "https://www.ventill.is/",
      name: "Öryggisventill"
    },
    {
      url: "http://kvika.piratar.is/",
      name: "Kvika - Wiki vefur, inniheldur að mestu vinnuskjöl"
    },
    { 
      url: "https://postur.piratar.is/",
      name: "Póstkerfi Pírata",
      person: "Björn Þór"
    },
    {
      url: "http://blog.piratar.is/",
      name: "Blogsíður Pírata"
    }
  ];
})
