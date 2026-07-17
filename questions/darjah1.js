/* =====================================================
   SOALAN DARJAH 1
   Format: {q:"soalan", a:["jwp1","jwp2","jwp3","jwp4"], c:nombor}
   c = kedudukan jawapan betul, mula dari 0
   (0 = jawapan pertama, 1 = kedua, 2 = ketiga, 3 = keempat)
   ===================================================== */

daftar("Darjah 1", "Bahasa Melayu", [
  {q:"Yang manakah huruf vokal?", a:["b","a","t","s"], c:1},
  {q:"Berapakah suku kata bagi perkataan 'bu-ku'?", a:["Satu","Dua","Tiga","Empat"], c:1},
  {q:"Apakah lawan bagi perkataan 'besar'?", a:["Tinggi","Kecil","Panjang","Lebar"], c:1},
  {q:"Pilih ejaan yang betul.", a:["ibu","ebu","ibo","ibuu"], c:0},
  {q:"'Saya ___ nasi.' Pilih perkataan yang sesuai.", a:["tidur","makan","lari","terbang"], c:1},
  {q:"Haiwan manakah yang berbunyi 'meow'?", a:["Kucing","Ayam","Lembu","Itik"], c:0},
  {q:"Perkataan manakah bermula dengan huruf 'b'?", a:["bola","api","ular","ikan"], c:0},
  {q:"'___ itu terbang di langit.' Pilih perkataan yang sesuai.", a:["Burung","Ikan","Kucing","Lembu"], c:0}
]);

daftar("Darjah 1", "English", [
  {q:"What colour is the sky?", a:["Red","Blue","Green","Black"], c:1},
  {q:"Which animal says 'moo'?", a:["Cat","Dog","Cow","Duck"], c:2},
  {q:"How many fingers are on one hand?", a:["Three","Four","Five","Six"], c:2},
  {q:"Which one is a fruit?", a:["Apple","Chair","Book","Shoe"], c:0},
  {q:"What do we use to see?", a:["Ears","Eyes","Nose","Hands"], c:1},
  {q:"What is the opposite of 'big'?", a:["Tall","Small","Long","Fat"], c:1},
  {q:"Which word starts with the letter 'A'?", a:["Ant","Ball","Cat","Dog"], c:0},
  {q:"We sleep at ___.", a:["morning","night","noon","school"], c:1}
]);

daftar("Darjah 1", "Matematik", [
  {q:"2 + 3 = ?", a:["4","5","6","7"], c:1},
  {q:"7 - 4 = ?", a:["2","3","4","5"], c:1},
  {q:"Berapakah sisi sebuah segi tiga?", a:["2","3","4","5"], c:1},
  {q:"Apakah nombor selepas 9?", a:["8","10","11","12"], c:1},
  {q:"4 + 4 = ?", a:["6","7","8","9"], c:2},
  {q:"Bentuk manakah yang bulat?", a:["Bulatan","Segi empat","Segi tiga","Bintang"], c:0},
  {q:"10 - 5 = ?", a:["3","4","5","6"], c:2},
  {q:"Nombor manakah yang paling kecil?", a:["3","8","1","6"], c:2}
]);

daftar("Darjah 1", "Bahasa Arab", [
  {q:"Apakah maksud 'wahid' (واحد)?", a:["Satu","Dua","Tiga","Empat"], c:0},
  {q:"Apakah maksud 'ithnan' (اثنان)?", a:["Satu","Dua","Tiga","Empat"], c:1},
  {q:"Apakah maksud 'kitab' (كتاب)?", a:["Pen","Buku","Meja","Kerusi"], c:1},
  {q:"Apakah maksud 'qalam' (قلم)?", a:["Pen","Buku","Beg","Kasut"], c:0},
  {q:"Apakah jawapan bagi 'Assalamualaikum'?", a:["Terima kasih","Waalaikumussalam","Selamat tinggal","Sama-sama"], c:1},
  {q:"Apakah maksud 'syukran' (شكرا)?", a:["Maaf","Terima kasih","Selamat pagi","Ya"], c:1},
  {q:"Apakah maksud 'ma'' (ماء)?", a:["Api","Air","Angin","Tanah"], c:1},
  {q:"Apakah maksud 'bait' (بيت)?", a:["Sekolah","Kedai","Rumah","Masjid"], c:2}
]);

daftar("Darjah 1", "Pendidikan Islam", [
  {q:"Siapakah Tuhan kita?", a:["Allah","Malaikat","Nabi","Manusia"], c:0},
  {q:"Siapakah nabi kita?", a:["Nabi Adam","Nabi Musa","Nabi Muhammad SAW","Nabi Isa"], c:2},
  {q:"Apakah kitab suci umat Islam?", a:["Al-Quran","Buku cerita","Kamus","Majalah"], c:0},
  {q:"Berapakah waktu solat dalam sehari?", a:["3","4","5","6"], c:2},
  {q:"Apakah ucapan sebelum makan?", a:["Alhamdulillah","Bismillah","Assalamualaikum","Insya-Allah"], c:1},
  {q:"Apakah ucapan selepas makan?", a:["Bismillah","Alhamdulillah","Astaghfirullah","Subhanallah"], c:1},
  {q:"Di manakah umat Islam bersolat berjemaah?", a:["Masjid","Kedai","Padang","Pasar"], c:0},
  {q:"Apakah rukun Islam yang pertama?", a:["Solat","Puasa","Mengucap dua kalimah syahadah","Zakat"], c:2}
]);

daftar("Darjah 1", "Sains", [
  {q:"Apakah deria yang kita gunakan untuk melihat?", a:["Telinga","Hidung","Lidah","Mata"], c:3},
  {q:"Apakah deria yang kita gunakan untuk mendengar?", a:["Telinga","Mata","Kulit","Lidah"], c:0},
  {q:"Haiwan manakah yang bertelur?", a:["Kucing","Lembu","Ayam","Kambing"], c:2},
  {q:"Haiwan manakah hidup di dalam air?", a:["Ikan","Arnab","Burung","Harimau"], c:0},
  {q:"Apakah yang diperlukan oleh tumbuhan untuk hidup?", a:["Air dan cahaya matahari","Gula-gula","Roti","Susu"], c:0},
  {q:"Bilakah matahari kelihatan?", a:["Waktu malam","Waktu siang","Sepanjang masa","Tidak pernah"], c:1},
  {q:"Berapakah bilangan kaki seekor kucing?", a:["2","4","6","8"], c:1},
  {q:"Bilakah bulan kelihatan?", a:["Waktu siang","Waktu malam","Waktu rehat","Waktu makan"], c:1}
]);

daftar("Darjah 1", "PJK", [
  {q:"Apakah yang perlu dibuat sebelum bersenam?", a:["Tidur","Memanaskan badan","Makan banyak","Menonton TV"], c:1},
  {q:"Berapa kalikah kita perlu memberus gigi setiap hari?", a:["Sekali","Sekurang-kurangnya dua kali","Tidak perlu","Seminggu sekali"], c:1},
  {q:"Apakah minuman terbaik selepas bersenam?", a:["Air masak","Air gas","Kopi","Teh manis"], c:0},
  {q:"Bola sepak ditendang menggunakan apa?", a:["Tangan","Kepala sahaja","Kaki","Siku"], c:2},
  {q:"Mengapa kita perlu tidur yang cukup?", a:["Untuk kesihatan badan","Untuk bermain","Supaya lapar","Tiada sebab"], c:0},
  {q:"Bilakah kita perlu membasuh tangan?", a:["Sebelum makan","Selepas tidur sahaja","Tidak perlu","Sekali seminggu"], c:0},
  {q:"Makanan manakah yang baik untuk kesihatan?", a:["Buah-buahan","Gula-gula banyak","Air gas","Makanan segera setiap hari"], c:0},
  {q:"Permainan manakah menggunakan bulu tangkis?", a:["Badminton","Bola sepak","Renang","Catur"], c:0}
]);
