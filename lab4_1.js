function change_Width_200() {
    const table = document.getElementById("myTable");
    table.style.width = "200px"
}

function change_Width_500() {
    const table = document.getElementById("myTable");
    table.style.width = "500px"
}

function change_border_1() {
    const table = document.getElementById("myTable");
    table.style.borderWidth = "1px"
    const cells = document.querySelectorAll("#myTable td, #myTable th");
    cells.forEach(cell => {
        cell.style.borderWidth = "1px";
    });

}
function change_border_10() {
    const table = document.getElementById("myTable");
    table.style.borderWidth = "10px"
    const cells = document.querySelectorAll("#myTable td, #myTable th");
    cells.forEach(cell => {
        cell.style.borderWidth = "10px";
    });
}
function change_border_20() {
    const table = document.getElementById("myTable");
    table.style.borderWidth = "20px"
    const cells = document.querySelectorAll("#myTable td, #myTable th");
    cells.forEach(cell => {
        cell.style.borderWidth = "20px";
    });
}
function change_color_1() {
    const table = document.getElementById("myTable");
    table.style.backgroundColor = "beige "
}
function change_color_2() {
    const table = document.getElementById("myTable");
    table.style.backgroundColor = "#c29250 "
}
function change_color_3() {
    const table = document.getElementById("myTable");
    table.style.backgroundColor = "red "
}
function change_color_4() {
    const table = document.getElementById("myTable");
    table.style.backgroundColor = "purple "
}