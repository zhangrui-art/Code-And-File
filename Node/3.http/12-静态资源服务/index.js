let tds = document.querySelectorAll('td');
console.log(tds);
tds.forEach(td => {
  td.onclick = function () {
    this.style.background = '#ff0000'
  }
});