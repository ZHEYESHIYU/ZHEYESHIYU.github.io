  var icat = {
    submitInfo: function() {
      var submitBox = document.querySelector('.submit-box')
      
      if (submitBox.classList.contains('display')) {
        submitBox.classList.remove('display')
      } else {
        submitBox.classList.add('display')
      }
    }
    // 订阅页点击

// 友链注入预设评论
  addFriendLink() {
    var input = document.getElementsByClassName("el-textarea__inner")[0];
    if (!input) return;
    const evt = new Event("input", { cancelable: true, bubbles: true });
    const defaultPlaceholder =
      "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n";
    input.value = this.getConfigIfPresent(GLOBAL_CONFIG.linkPageTop, "addFriendPlaceholder", defaultPlaceholder);
    input.dispatchEvent(evt);
    input.focus();
    input.setSelectionRange(-1, -1);
  }