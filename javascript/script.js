//alert("Belajar Javascript")
function kirim() {
    
    let nama = document.getElementById('nama').value;
    console.log('Nama :' +nama);
    let kritik = document.getElementById('kritik').value;
    

    //tampilkan nama ke ul id=list-pesan
    // document.getElementById('list-pesan').innerHTML = '<li>'+nama+'</li>';
    document.getElementById('list-pesan').innerHTML += `<tr><td>${nama}</td><td>${kritik}</td></tr>`;
    // document.getElementById('list-pesan').innerHTML = '<li>' +kritik+ '</li>';
}
// ambil value nama
