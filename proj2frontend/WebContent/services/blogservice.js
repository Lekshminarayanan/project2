/**
 * BlogService
 */
app.factory('BlogService',function($http){
	var blogService={}
blogService.addBlog=function(blog)
{
		return $http.post("http://localhost:9080/proj2middleware/addblogpost",blog)
		}
blogService.getBlogWaitingForApproval=function(){
	return $http.get("http://localhost:9080/projmiddleware/getblogs"+0)
}
blogService.getBlogApproved=function(){
	return $http.get("http://localhost:9080/projmiddleware/getblogs"+1)
}

blogService.getBlog=function(id){
	return $http.get("http://localhost:9080/projmiddleware/getblog"+id)
}
blogService.hasUserLikedBlog=function(id){
	return $http.get("http://localhost:9080/projmiddleware/hasuserlikedblog",blog)
}

blogService.approve=function(blog){
	return $http.put("http://localhost:9080/projmiddleware/approve",blog)
}
blogService.reject=function(blog,rejectionReason){
	return $http.put("http://localhost:9080/projmiddleware/reject/"+rejectionReason ,blog)
}
blogService.updateLikes=function(id){
	return $http.get("http://localhost:9080/projmiddleware/updatelikes"+id);
}
blogService.addComment=function(blogComment){
	return $http.get("http://localhost:9080/projmiddleware/addcomment",blogComment)
}
blogService.getBlogComments=function(id){
	return $http.get("http://localhost:9080/projmiddleware/blogcomments"+id)
}
return blogService;

})