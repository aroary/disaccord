var url = window.location.href;
document.getElementById("homeURL").setAttribute("href", url.split`/`.slice(0, 3).join`/` + "/home");
document.getElementById("commandsURL").setAttribute("href", url.split`/`.slice(0, 3).join`/` + "/commands");