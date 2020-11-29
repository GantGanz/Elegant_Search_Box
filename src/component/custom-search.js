class CustomSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<center>
        <div class="form-group col-md-6 mt-5">
            <form method="GET" action="http://www.google.com/search">
                <div class="input-group">
                    <input class="form-control" type="text" name="q" placeholder="Search Google ... ">
                    <div class="input-group-append">
                        <button type="submit" class="input-group-text" name="cari" id="tombolCari" value="Search"><i
                                class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </center>`;
    }
}

customElements.define("custom-search", CustomSearch);