Deskripsi :
Elegant Search Box adalah sebuah halaman pencarian biasa seperti google.com, namun perbedaan/kelebihannya
disini adalah terdapat kata-kata motivasional yang update tiap harinya, serta gambar background yang selalu
berubah-ubah, ditambah juga terdapat penunjuk waktu serta ucapan selamat. Seluruh hal tersebut secara tidak 
langsung akan memberikan efek relaksasi serta memotivasi pengguna untuk terus produktif dan meningkatkan mood nya.

Catatan Penting :
- Diharuskan terhubung dengan internet untuk menggunakan aplikasi ini
- Untuk internet yang tidak terlalu cepat, terkadang harus menunggu beberapa detik untuk meload semuanya 
  (walaupun sebenarnya size nya ini tergolong kecil)
- Karena API Unsplash membatasi penggunaanya sebanyak 50 kali per jam, jadi aplikasinya hanya dapat di reload
  sebanyak 50 kali per jam agar hasilnya maksimal

Cara Membuat :
- Menggunakan standar ES6 sintaks untuk menuliskan kode Javascriptnya
- Membuat 2 custom component, yaitu custom-waktu dan custom-search, untuk meletakkan komponen waktu dari moment
  dan meletakkan google search
- Menggunakan Webpack sebagai module bundler untuk tahap production, dan memanfaatkan environtmennya untuk tahap
  developmentnya
- 2 buah API untuk pembuatan aplikasi ini, quotes.rest dan unsplash, untuk mengambil data
  quotes dan gambar-gambar nya.
- Menggunakan CSS Framework 'Bootstrap' untuk menyusun tampilan web nya.

Kekurangan(?) :
- Saya cukup kebingungan dengan pewarnaan pada font yang ada, terkadang warna putih adalah pilihan yang
  terbaik, dan terkadang warna hitam adalah yang terbaik. jadi saya memutuskan mengambil salah satunya 
  saja.
- Terkadang judul gambarnya akan bernilai null, karena beberapa gambar tidak diberi 'title' oleh authornya
- Terkadang juga ada gambar yang tidak jelas(aneh) yang kurang cocok dijadikan wallpaper aplikasi ini, namun
  yang seperti ini diluar kapabilitas saya sih
- Untuk Font Awesome, saya sudah berbagai macam cara untuk memamasukkannya di web pack. Tapi semuanya
  gagal, saya sudah mencoba cara" yg ada di stackoverflow dan website" lain (seperti import atau 
  install), namun tidak ada yg berhasil dan malah memberikan peringatan bahwa ukuran bundle nya menjadi 
  terlalu besar, lebih dari 5mb, sehingga menyebabkan masalah optimasi (lebih lambat), jadi akhirnya saya 
  tidak memasukkannya.
- Saya tidak memasukkannya ke dalam custom component, karena dengan pertimbangan ini sudah sangat sederhana,
  entah keputusan ini sudah benar atau belum
- Mungkin sekilas aplikasinya terlalu sederhana, saya kurang tahu sebaiknya menambahkan fitur apa lagi,
  awalnya saya ingin memberikan beberapa pilihan gambar random, namun hal tersebut kurang se arah dengan
  fungsi aplikasi ini, + kurang terlalu berguna juga fiturnya dan malah menghilangkan esensi ke random-annya.
- Terinspirasi dari extension google chrome 'Momentum', namun belum bisa lebih baik dari mereka, untuk saat
  ini saya hanya tertantang untuk membuat fungsi-fungsi utamanya :).

Terima Kasih.
Bismillah Bintang 5 :)