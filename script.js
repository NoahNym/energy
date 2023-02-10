function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


loadJSON('./energy.json',
    (data) => {
        //här fortsätter du
        displayData(data);
        console.log(data);
    },
    (err) => { console.error(err); }
);
function displayData(data) {

    let table = document.getElementById("table")

    for (let i = 0; i < data.length; i++) {
        const tr = document.createElement("tr");
        const tdf = document.createElement("td");
        const tdC = document.createElement("td");
        const tdc = document.createElement("td");


        tdC.innerHTML = data[i].country;
        tdc.innerHTML = data[i].consumption;

        const img = document.createElement("img");
        img.src = data[i].flag;
        img.width = "30"

        tdf.appendChild(img);

        table.appendChild(tr);
        table.appendChild(tdf);
        table.appendChild(tdC);
        table.appendChild(tdc);
    }

};