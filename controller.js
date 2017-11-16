(function() {
  function lab4_controller() {
    var vm = this;
    vm.list = ["Grovery Shop", "Laundry", "Get Gas", "Vacuum"];

    vm.add_item = function(item) {
    vm.list.push(item);
    vm.add_items = "";
    };

    vm.remove_item = function(item) {
      vm.list.splice(item, 1);
    };

  }
  angular
  .module("lab4_module")
  .controller("lab4_controller", lab4_controller);
})();
