function main() {
    const baseUrl = "https://quotes.rest/qod";
    const baseUrl2 = "https://api.unsplash.com/photos/random/?client_id=sb1VMio9I51cWX_EJOzLZh9UdCdys7KpY1g4V-aoqi4";

    const getQuotes = () => {
        fetch(`${baseUrl}`, {
                headers: {
                    // "Content-Type": "application/json",
                    "X-TheySaidSo-Api-Secret": "12345"
                }
            })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderQuote(responseJson.contents.quotes[0]);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderQuote = (quotes) => {
        const quoteElement = document.querySelector("#tempatQuote");

        quoteElement.innerHTML += `
                <div style="margin-top: 10%;" class="text-center text-white">
                    <h5>${quotes.quote}</h5>
                    <p>${quotes.author}</p>
                </div>
            `;
    };

    const showResponseMessage = (message = "Cek Internet Anda") => {
        alert(message);
    };

    // API Gambar
    const getImages = () => {
        fetch(`${baseUrl2}`, {
                headers: {
                    "Accept-Version": "v1",
                }
            })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage2(responseJson.message);
                } else {
                    renderImage(responseJson);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderImage = (image) => {
        const quoteElement = document.querySelector("#tempatImage");

        quoteElement.innerHTML += `
        <div class="text-center mt-5 text-white" style="margin-top: 10%;">
            <p>${image.location.title}</p>
        </div>
        <style>
        body  {
            background-image: url("${image.urls.small + "&w=750&dpr=2"}");
            background-size: cover;
        }
        </style>`;
    };

    const showResponseMessage2 = (message = "Cek Internet Anda 2") => {
        alert(message);
    };
    getQuotes();
    getImages();
}

export default main;