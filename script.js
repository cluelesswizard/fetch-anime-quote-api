const btn = document.getElementById("tombol");
const kata = document.getElementById("kata");
const info = document.getElementById("info");
const urlapi = 'https://animechan.vercel.app/api/random';

btn.addEventListener("click", function () {
    fetch(urlapi)
        .then(response => response.json())
        .then(data => {
            var dq = data.quote;
            var da = data.anime;
            var dc = data.character;
            kata.innerHTML = dq;
            info.innerHTML = "Quote by - <b>" + dc + "</b> from <b>" + da + "</b> 😃 🎉";
        })
});