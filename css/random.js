var posts=["posts/ee0f1d89.html","posts/ca8c99d8.html","posts/930a96e5.html","posts/4a17b156.html","posts/4939ae57.html","posts/2d329bbf.html","posts/74efaaa.html","posts/f0ca7bb.html","posts/33df53ff.html","posts/1f74a551.html","posts/152c53f0.html","posts/37137de9.html","posts/429a77f8.html","posts/c865b3e1.html","posts/462778e5.html","posts/661c2756.html","posts/5ea739e8.html","posts/757d05f5.html","posts/83729eb8.html","posts/8754a7f.html","posts/3863a6a7.html","posts/c2501c90.html","posts/48eb3a81.html","posts/9cebe210.html","posts/304018ba.html","posts/a297b38.html","posts/b614fa09.html","posts/2734a756.html","posts/4bc430de.html","posts/8f55053d.html","posts/e1f78ac5.html","posts/1222dc3e.html","posts/8a0039fc.html","posts/1f7480c2.html","posts/8695ece9.html","posts/ee2fd507.html","posts/98a3f53e.html","posts/686032f3.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};