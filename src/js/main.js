(function () {
      const DayNight = {
        cacheDom() {
          this.body = document.body;
          this.tumbler = document.querySelector('.tumbler');
          this.posts = document.querySelectorAll('.post');
          this.tumblerWrapper = document.querySelector('.tumbler__wrapper');
        },
        init() {
          window.document.documentElement.classList.add('js-enabled');
          this.cacheDom();
          this.addEventListeners();
        },
        addEventListeners() {
          console.log(this.tumblerWrapper);
          this.tumblerWrapper.addEventListener('click', () => {
            this.body.classList.toggle('body--night-mode');
            this.tumbler.classList.toggle('tumbler--night-mode');
            this.posts.forEach(post => {
              post.classList.toggle('post--night-mode')
            });
          })
        }

      };
      DayNight.init();
    }
)();