
    messageArray = ["Fala", "Galera!", "Tudo", "bem", "com", "você?"]

    function criaBotao() {
        for (var i = 0; i < messageArray.length; i++) {

            document.write(`<button onclick = "alert('`+ messageArray[i]+`')">` + messageArray[i] + `</button>`)
        }
    }
    criaBotao();