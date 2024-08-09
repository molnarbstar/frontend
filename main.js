function readingTime() {
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("reading-time").innerText = time;
}
readingTime();

document.getElementById('search-input').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let article = document.getElementById('article');
    let paragraphs = article.getElementsByTagName('p');

    // Helper function to escape special characters in search term
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Remove previous highlights
    function removeHighlights() {
        let highlights = article.querySelectorAll('span.highlight-search');
        highlights.forEach(function (highlight) {
            let parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize(); // Merge adjacent text nodes
        });
    }

    removeHighlights();

    if (searchTerm) {
        let regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');

        for (let p of paragraphs) {
            p.innerHTML = p.textContent.replace(regex, '<span class="highlight-search">$1</span>');
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
            const randomNumber = Math.floor(Math.random() * json.length);
            const author = json[randomNumber];

            console.log(json[randomNumber])

            const authorName = document.getElementById('author_name');
            const authorEmail = document.getElementById('author_email');
            const authorPhone = document.getElementById('author_phone');
            const authorCompany = document.getElementById('author_company');

            authorName.innerText = author.name;
            authorEmail.innerText = author.email;
            authorEmail.href = `mailto:${author.email}`;
            authorPhone.innerText = author.phone;
            authorCompany.innerText = author.company.name;
        });
});