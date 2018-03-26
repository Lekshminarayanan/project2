/**
 * BlogCtrl
 */
app.controller('BlogCtrl',function($scope,$location,$rootScope,BlogService){
	$scope.addBlog=function(blog){
		BlogService.addBlog(blog).then(
				function(response){
					alert('BlogPost is added successfully and it is waiting for approval');
					$location.path('/home')
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				})
	}
	if($rootScope.loggedInUser.role=='ADMIN'){
	BlogService.getBlogsWaitingForApproval()
	.then(
			function(response){
				console.log(response.data)
				$scope.blogWaitingForApproval=response.data
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
	}
	BlogService.getBlogsApproved().then(function(response){
		console.log(response.data)
		$scope.blogsApproved=response.data
	},function(response){
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	})
	
})