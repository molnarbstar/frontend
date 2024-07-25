function readingTime() {
    const text = document.getElementById("article").innerText;
    console.log(text);
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    console.log(words);
    const time = Math.ceil(words / wpm);
    console.log(time);
    document.getElementById("reading-time").innerText = time;
}
readingTime();

document.getElementById('search-input').addEventListener('input', function() {
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
        highlights.forEach(function(highlight) {
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

