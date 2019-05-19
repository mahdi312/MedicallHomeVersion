app = angular.module("APP");
app.requires.push('md-steppers');
// app.controller('TesteCtrl', function (){
//         this.steps = [{"id":1,"desc":"Aceite","ajuda":"asdfas dfuahsdfas ausdhf"},{"id":4,"desc":"Pagamento","ajuda":"asdfas dfuahsdfas ausdhf"},{"id":2,"desc":"DadosCadastrais","ajuda":"asdfas dfuahsdfas ausdhf"}];
//         return this;
//     })
//
//     .directive('mdStepper',function(){
//         return {
//             restrict: 'E',
//             transclude: true,
//             templateUrl: 'md-stepper.html',
//             scope: {
//                 vertical:'='
//             },
//             controller: ['$scope', function($scope) {
//                 var steps = $scope.steps = [];
//
//                 $scope.setActiveStep = function(step) {
//                     angular.forEach(steps, function(step) {
//                         step.active = false;
//                     });
//                     step.active = true;
//                 };
//                 this.nextStep = function() {
//                     let activeStep = steps.filter((step)=>{return step.active})[0];
//                     let nextStep = steps[steps.indexOf(activeStep)+1];
//
//                     if(nextStep){
//                         activeStep.active = false;
//                         nextStep.active = true;
//                     }
//                 };
//
//                 this.addStep = function(step) {
//                     if (steps.length === 0) {
//                         $scope.setActiveStep(step);
//                     }
//                     steps.push(step);
//                 }
//             }]
//         }
//     })
//     .directive('mdStep',function(){
//         return {
//             require: '^^mdStepper',
//             restrict: 'E',
//             transclude: true,
//             scope: {
//                 label: '='
//             },
//             link: function(scope, element, attrs, mdStepper) {
//                 mdStepper.addStep(scope);
//                 scope.nextStep = mdStepper.nextStep;
//             },
//             templateUrl: 'md-step.html'
//         }
//     })
