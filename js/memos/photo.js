function whenDOMReady() {
  if (location.pathname == '/photos/') photos();
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 适配pjax

window.onresize = () => {
  if (location.pathname == '/photos/') waterfall('.gallery-photos');
};

// 自适应

function photos() {
  fetch('https://memos.yurenyiyuji.top/api/v1/memo?creatorId=1&tag=相册&limit=200').then(res => res.json()).then(data => { // 记得修改memos地址
      if (data && data.data) {
          let html = '', imgs = [];
          data.data.forEach(item => {
              if (item && item.content) {
                  let imageMatches = item.content.match(/\!\[.*?\]\(.*?\)/g);
                  if (imageMatches) {
                      imgs = imgs.concat(imageMatches);
                  }
              }
          });

          imgs.forEach(item => {
              let img = item.replace(/!\[.*?\]\((.*?)\)/g, '$1'),
                  time, title, tat = item.replace(/!\[(.*?)\]\(.*?\)/g, '$1');
              if (tat.indexOf(' ') != -1) {
                  time = tat.split(' ')[0];
                  title = tat.split(' ')[1];
              } else title = tat

              html += `<div class="gallery-photo"><a href="${img}" data-fancybox="gallery" class="fancybox" data-thumb="${img}"><img class="photo-img" loading='lazy' decoding="async" src="${img}"></a>`;
              title ? html += `<span class="photo-title">${title}</span>` : '';
              time ? html += `<span class="photo-time">${time}</span>` : '';
              html += `</div>`;
          });

          document.querySelector('.gallery-photos.page').innerHTML = html
          imgStatus.watch('.photo-img', () => { waterfall('.gallery-photos'); });
          window.Lately && Lately.init({ target: '.photo-time' });
      }
  }).catch(error => {
      console.error("Error fetching data: ", error);
  });
}

