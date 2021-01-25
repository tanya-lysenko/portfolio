import 'alpinejs';
window.galleryData = function () {
    return {
        certs: [],
        show: false,
        src: '',
        width: 1,
        height: 1,
        galleryInit: function () {
            this.certs = JSON.parse(this.$el.dataset.gallery);
            this.$el.querySelector("[data-preload]").remove();
            this.$el.dataset.gallery = null;
        },
        openModal: function (cert) {
            this.src = cert.src_b;
            this.width = cert.width;
            this.height = cert.height;
            this.show = true;
            this.fixModal();
        },
        fixModal: function () {
            const w_height = document.documentElement.clientHeight;
            const w_width = document.documentElement.clientWidth;
            const w_ratio = w_width / w_height;

            if (w_ratio > this.width / this.height && this.height > w_height) {
                this.$refs.modal.classList.add("fix");
            } else {
                this.$refs.modal.classList.remove("fix");
            }
        }
    };
}

// ссылка вайбера
const
    viber = document.querySelector(".viber"),
    mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    command = mobile ? "add" : "chat",
    tel = mobile ? viber.dataset.tel : "+" + viber.dataset.tel
;

viber.href = "viber://" + command + "?number=" + tel;

if (mobile) document.getElementById("wrapper").classList.add("mobile");

// пустые ссылки #
document.addEventListener("click", function (e) {
    if (e.target.href === "#" || e.target.closest(`[href="#"]`)) e.preventDefault();
});

