var posts=["posts/3eeb.html","posts/1.html","posts/0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };