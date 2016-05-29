var app = angular.module("myApp",[]);

app.filter("phnNumFormat",function(){
    
    return function(x){
        console.log(" In Filter: "+x);
        var co_code,fNum,out;
        
        co_code = (x.split(" ")[0].toString()).replace(/[+]/g,'');
        
        console.log("country code: "+co_code);
        
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
    $scope.country_code = ["+1","+91","+44","+971","+61","+55"];
    $scope.co_code = "";
    $scope.new_phnNum = "";
    
    $scope.changeValue = function(item){
        $scope.co_code = item;
        $scope.new_phnNum = $scope.co_code+" "+$scope.phn_number;
    }
});