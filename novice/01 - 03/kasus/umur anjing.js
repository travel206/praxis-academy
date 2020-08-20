function hitunganKebutuhan (Umur, jumlahHari) {
    var maxUmur =100;
    var total = (jumlahHari * 365) * (maxUmur - umur);
    var pesan = 'kamu membutuhkan' + 'total' + 'mangkuk bakso' + maxUmur;
    document.write(pesan + "<br/>");
}

hitunganKebutuhan (37, 36);
hitunganKebutuhan (37, 2.5);
hitunganKebutuhan (37, 400);