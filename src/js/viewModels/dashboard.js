
define(["services/apiService" , "knockout"],
 function(apiService, ko) {

    function DashboardViewModel() {
      var self = this;

      self.characters = ko.observableArray([])


      self.connected = function() {
          apiService().getCharacters()
          .then(function(res){
            console.log(res);
            self.characters(res.results)
          })
          .catch(function(err){
            console.log(err);
          })
      };
    }
    return DashboardViewModel;
  }
);
