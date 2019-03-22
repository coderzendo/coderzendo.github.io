
let movieList = [];
    
function FormSubmit() {
   
    let ftitle =  document.getElementById("title").value;  
    if (ftitle.length < 1) {
        ftitle = prompt("Please enter the title", "ftitle");
        if (ftitle != null) {
        document.getElementById("title").value = ftitle;
        }
    }
    let lartist = document.getElementById("artist").value;
    if (lartist.length < 1) {
        lartist = prompt("Please enter the artist", "lartist");
        if (lartist != null) {
        document.getElementById("artist").value = lartist;
        }
    }
    let lyear =   document.getElementById("year").value;
    if (lyear.length < 1) {
        lyear = prompt("Please enter the yeare", "lyear");
        if (lyear != null) {
        document.getElementById("year").value = lyear;
        }
    }

    let movie = {
    };

    movie.title = ftitle;
    movie.artist = lartist;
    movie.year = lyear;

    movieList.push(movie);

    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("year").value = "";
}

function Done()
{
    let html = "<table border='1|1'>";
    html+="<tr>";
    html+="<th>Title</th>";
    html+="<th>Artist</th>";
    html+="<th>Year</th>";
    html+="</tr>";

    for (var i = 0; i < movieList.length; i++) {
        html+="<tr>";
        html+="<td>"+movieList[i].title+"</td>";
        html+="<td>"+movieList[i].artist+"</td>";
        html+="<td>"+movieList[i].year+"</td>";
        html+="</tr>";
    }
html+="</table>";
document.getElementById("ourTable").innerHTML = html;
}