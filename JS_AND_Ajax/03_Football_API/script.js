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
        html += "<div>" + element.team1.teamName + " " + element.matchResults.pointsTeam1 + "</div>" + "<div>" + element.team2.teamName + " " + element.matchResults.pointsTeam2 + "</div>"
    });
    document.getElementById("output").innerHTML = html;
}

loadData();