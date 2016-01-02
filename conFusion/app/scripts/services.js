'use strict';

angular.module('confusionApp')
	.constant("baseURL","http://localhost:3000/")
	.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

                this.getDishes = function(){
                    
                 return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                    
                };
    
    	this.getPromotion = function(){
    		/*new GOOD DIRECTION TO TEST*/
    		return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
    		/*new BAD DIRECTION TO TEST*/
    		//return $resource(baseURL+"promotionss/:id",null,  {'update':{method:'PUT' }});

    	};
                // implement a function named getPromotion
                // that returns a selected promotion.
    
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            var corpfac = {};     	

     	corpfac.getLeaders = function(){
     		/*new GOOD DIRECTION TO TEST*/
                        return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                        /*new BAD DIRECTION TO TEST*/
                        //return $resource(baseURL+"leaderships/:id",null,  {'update':{method:'PUT' }});

             };
             return corpfac;
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
    
    
        }])

        /*feedback factory service*/
          .factory('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL) {
            var feedback = {};     	

     	feedback.getFeedback = function(){
                        return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
             };
             return feedback;
           
    
    
        }])
;
