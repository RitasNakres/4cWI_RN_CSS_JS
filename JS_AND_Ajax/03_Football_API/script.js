const loadData = () => {

    fetch("https://api.openligadb.de/getmatchdata/TSL/2008").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";

    data.forEach(element => {
        console.log(element)

            html += `<div class="wrapper"><div class="teamOneInfo">${element.team1.teamName} ${element.matchResults[0].pointsTeam1}</div>
            : <div class="teamTwoInfo">${element.matchResults[0].pointsTeam2} ${element.team2.teamName}</div></div>`
    });
    document.getElementById("output").innerHTML = html;
}
loadData();