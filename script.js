document.getElementById("name").innerHTML=CONFIG.nome;
document.getElementById("subtitle").innerHTML=CONFIG.subtitulo;
document.getElementById("avatar").src=CONFIG.avatar;
document.getElementById("bgVideo").src=CONFIG.video;
document.getElementById("about").innerHTML=CONFIG.sobre;

CONFIG.tags.forEach(t=>{
document.getElementById("tags").innerHTML += `<span>${t}</span>`;
});

CONFIG.links.forEach(l=>{
document.getElementById("links").innerHTML +=
`<div class="link"><a href="${l.url}">${l.nome}</a></div>`;
});

CONFIG.spotify.forEach(s=>{
document.getElementById("spotify").innerHTML +=
`<iframe src="${s}" allow="encrypted-media"></iframe><br>`;
});
