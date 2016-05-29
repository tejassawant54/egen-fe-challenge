var app = angular.module("myApp",[]);

app.filter("phnNumFormat",function(){
    
    return function(x){
    
        var co_code,fNum,out;
        co_code = (x.split(" ")[0].toString()).replace(/[+]/g,'');
        
        switch(co_code){
            
            case "1":
                fNum = x.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                out = "US: "+" "+fNum;
                break;
                
            case "91":
                fNum = x.replace(/(\d{2})(\d{2})(\d{6})/, '$1-$2-$3');
                out = "IND: "+" "+fNum;
                break;
                
            case "44":
                fNum = x.replace(/(\d{4})(\d{6})/, '$1-$2');
                out = "UK: "+" "+fNum;
                break; 
                
            case "971":
                fNum = x.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
                out = "UAE: "+" "+fNum;
                break;
                
            case "61":
                fNum = x.replace(/(\d{4})(\d{3})(\d{3})/, '$1-$2-$3');
                out = "AUS: "+" "+fNum;
                break;
                
            case "55":
                fNum = x.replace(/(\d{6})(\d{4})/, '(11) $1-$2');
                out = "BRZ: "+" "+fNum;
                break;    
                
            default:
                fNum = x.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
                out = "US: "+" "+fNum;
        }
        
        return out;
    };
    
});

app.controller("myCtrl",function($scope){
    $scope.phn_number = "5857336560";
    $scope.country_code = [
        {
            name: "United States",
            img: "../images/us.png",    
            code: "+1"
        },
        {
            name: "India",
            img: "../images/in.png",
            code: "+91"
        },
        {
            name: "United Kingdom",
            img: "../images/uk.png",
            code: "+44"
        },
        {
            name: "United Arab Emirates",
            img: "../images/uae.png",
            code: "+971"
        },
        {
            name: "Australia",
            img: "../images/aus.png",
            code: "+61"
        },
        {
            name: "Brazil",
            img: "../images/brz.png",
            code: "+55"
        }];
    $scope.co_code = "+1";
    $scope.new_phnNum = "";
    
    $scope.changeValue = function(item){
        $scope.co_code = item;
        $scope.new_phnNum = $scope.co_code+" "+$scope.phn_number;
    }
});