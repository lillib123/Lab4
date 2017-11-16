(function(){
  function hoverState() {
    return {
      controller: "lab4_controller as ctrl",
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("mouseenter", function() {
          $scope.$apply(function() {
            $element.css("background-color", "#ff5858");
            $element.css("transition", "0.5s ease");
          });
        });
        $element.on("mouseleave", function() {
          $scope.$apply(function() {
            $element.css("background-color", "pink");
            $element.css("transition", "0.5s ease");
          });
        });
      }
    }
  }
  angular
    .module("lab4_module")
    .directive("hoverState", hoverState);
})();
