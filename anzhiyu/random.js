var posts=["posts/7737.html","posts/1.html","posts/123c.html","posts/38054.html","posts/10219.html","posts/64332.html","posts/13178.html","posts/0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };