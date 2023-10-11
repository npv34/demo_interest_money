function result() {
    let money = +document.getElementById("money").value;
    let year = +document.getElementById("year").value;
    let interest = money * 0.08 * year;
    let result = money + interest;

    document.getElementById("output").innerHTML = result;

}