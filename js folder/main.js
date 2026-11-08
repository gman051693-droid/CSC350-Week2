const singers = {
  singer1: {
    name: "Bad Bunny",
    dob: "03/10/1994",
    songs: "Monaco",
  },
  singer2: {
    name: "Logic",
    dob: "01/22/1990",
    songs: "I Am the Greatest",
  },
  singer3: {
    name: "Eminem",
    dob: "10/17/1972",
    songs: "Lose Yourself",
  },
  singer4: {
    name: "J. Cole",
    dob: "01/28/1985",
    songs: "Wet Dreamz",
  },
};

// Get the table body from HTML
const singerTable = document.getElementById("singerTable");

// Loop through the singers object
for (let key in singers) {
  let singer = singers[key];

  let row = document.createElement("tr");

  row.innerHTML = `
        <td>${singer.name}</td>
        <td>${singer.dob}</td>
        <td>${singer.songs}</td>
    `;

  singerTable.appendChild(row);
}
