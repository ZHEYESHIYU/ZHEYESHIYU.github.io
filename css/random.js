var posts=["posts/4a17b156.html","posts/74efaaa.html","posts/3863a6a7.html","posts/37137de9.html","posts/a297b38.html","posts/1f74a551.html","posts/2734a756.html","posts/1222dc3e.html","posts/6b95590e.html","posts/8695ece9.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}