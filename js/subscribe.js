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
