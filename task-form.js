var taskForm = {
  controller: "lab4_controller",
  template: `
  <form ng-controller="lab4_controller as controller">
    <div task-form></div>
    <h1>TODO List</h1>
    <h2>A place to store the things you have to do!</h2>
    <input ng-model="filter" type="text" placeholder="Search List"></input>

    <ol>
      <li hover-state ng-repeat="number in controller.list | filter:filter track by $index">{{number}} <a ng-click="controller.remove_item($index)" href=""><img src = "images/close.png"></a> </li>
    </ol>
    <input ng-model="controller.add_items" type="text" placeholder="Item to Add"></input>
    <button ng-click="controller.add_item(controller.add_items)">Add</button>
  </form>
  `
};
angular
.module("lab4_module")
.component("taskForm", taskForm);
