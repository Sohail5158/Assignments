 var newURL = "http://universities.hipolabs.com/search?country=india";
  var table = document.getElementById("table");
  fetch(newURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
           tr = document.createElement("tr");
           td1 = document.createElement("td");
           td2 = document.createElement("td");
          
          tr.innerText = data[i].name;
          td1.innerText = data[i].country;
          td2.innerText = data[i].web_pages;
          tr.append(td1, td2);         
          table.appendChild(tr);
      }
    })
    .catch((err) => console.log("api has failed"));
