import {settings} from './settings';

const dayNight = {
    init() {
        document.documentElement.classList.add(settings.jsEnabledClass);
        this.btn = document.querySelector(settings.btnSelector);
        this.tumblerElement = document.querySelector(settings.tumblerSelector);
        this.posts = document.querySelectorAll(settings.postSelector);
        this.btn.addEventListener('click', () => {
            this.changeClasses();
        });

    },
    changeClasses() {
        document.body.classList.toggle(settings.bodyClass);
        this.tumblerElement.classList.toggle(settings.tumblerClass);
        for (const post of this.posts) {
            post.classList.toggle(settings.postClass);
        }
    },
};

dayNight.init();
