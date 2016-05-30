var app = angular.module("myApp",[]);

// Angular Filter to handle phone number formatting for different countries

app.filter("phnNumFormat",function(){
    
    return function(x){

        console.log("From test case: "+x);
    
        var co_code,fNum;
        co_code = (x.split(" ")[0].toString()).replace(/[+]/g,''); // Split the number and country code if any and format accordingly
        
        switch(co_code){   // Switch case that handles phone number formatting according to country code default to US
            
            case "1":
                fNum = x.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                break;
                
            case "91":
                fNum = x.replace(/(\d{2})(\d{2})(\d{6})/, '$1-$2-$3');
                break;
                
            case "44":
                fNum = x.replace(/(\d{4})(\d{6})/, '$1-$2');
                break; 
                
            case "971":
                fNum = x.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
                break;
                
            case "61":
                fNum = x.replace(/(\d{4})(\d{3})(\d{3})/, '$1-$2-$3');
                break;
                
            case "55":
                fNum = x.replace(/(\d{6})(\d{4})/, '(11) $1-$2');
                break;    
                
            default:
                fNum = x.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                
        }
        
        return fNum;
    };
    
});

app.controller("myCtrl",function($scope){ // Controller that control the data for Angular JS app.

    $scope.phn_number = "1234567890";
    $scope.country_code = [
        {
            name: "United States", 
            code: "+1"
        },
        {
            name: "India",
            code: "+91"
        },
        {
            name: "United Kingdom",
            code: "+44"
        },
        {
            name: "United Arab Emirates",
            code: "+971"
        },
        {
            name: "Australia",
            code: "+61"
        },
        {
            name: "Brazil",
            code: "+55"
        }];
    $scope.co_code = "+1";
    $scope.new_phnNum = "";
    $scope.onlyNumbers = /^\d+$/;
    $scope.error_msg = "Please Enter Valid Input !"; 
    
    $scope.changeValue = function(item){    // On submit call changeValue
        
            $scope.co_code = item;
            $scope.new_phnNum = $scope.co_code+" "+$scope.phn_number;
    }
});