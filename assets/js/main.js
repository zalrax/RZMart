
function showCheckout() {
    document.getElementById('checkoutForm').classList.remove('hidden');
}

function sendWhatsApp() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const kota = document.getElementById('kota').value;
    const metode = document.getElementById('metode').value;

    let ongkir = 10000;
    if (kota === 'Bandung') ongkir = 8000;
    else if (kota === 'Surabaya') ongkir = 12000;

    const total = 45000 + ongkir;

    const pesan = `Halo RZMart! Saya ingin memesan:\n\nProduk: Tas Elegan\nHarga: Rp45.000\nNama: ${nama}\nAlamat: ${alamat}\nKota: ${kota}\nOngkir: Rp${ongkir}\nTotal: Rp${total}\nMetode Pembayaran: ${metode}`;
    
    window.open('https://wa.me/6285165597616?text=' + encodeURIComponent(pesan), '_blank');
    return false;
}
