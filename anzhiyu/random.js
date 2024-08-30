var posts=["2024/08/29/“Blog1”/","2024/08/30/docx-editor/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };