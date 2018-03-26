/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.gettAllSuggestedUsers=function(){
		return $http.get("http://localhost:9080/proj2middleware/suggestedusers")
	}
	friendService.addFriend=function(toId){
		console.log(toId)
		return $http.post("http://localhost:9080/proj2middleware/addfriend",toId)
	}
	friend.getPendingRequests=function(){
		return $http.get("http://localhost:9080/proj2middleware/pendingrequests")
	}
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:9080/proj2middleware/acceptrequests",request);
	}
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:9080/proj2middleware/deleterequests",request);
	}
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:9080/proj2middleware/friends")
	}
	return friendService;
})