class CustomWaktu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<p class="Jam text-white display-1 font-weight-bold text-center mt-5" style="margin-top: 10%;"></p>
        <p class="display-4 text-center text-white">Selamat <span class="Pagi"></span>!</p>`;
    }
}

customElements.define("custom-waktu", CustomWaktu);