const castData = [
  { name: 'Büşra Öztürk', role: 'Oyuncu' },
  { name: 'Ahsen Kaya', role: 'Oyuncu' },
  { name: 'İlayra Çetin', role: 'Oyuncu' },
  { name: 'Mehmet Bostancı', role: 'Senarist' },
  { name: 'Can Işık', role: 'Yapımcı' },
  { name: 'Sudenaz Yüce', role: 'Oyuncu' },
  { name: 'Ali Yılmaz', role: 'Görüntü Yönetmeni' },
  { name: 'Sinem Keskin', role: 'Oyuncu' },
  { name: 'Mira Sever', role: 'Oyuncu' },
  { name: 'Kenan Sevim', role: 'Oyuncu' },

  { name: 'Tuğba Yalçın', role: 'Oyuncu' },
  { name: 'Yunus Erel', role: 'Ses Asistanı' },
  { name: 'Aylin Uslu', role: 'Sanat Yönetmeni' },
  { name: 'Baran Uçan', role: 'Kurgu' },
  { name: 'Esra Polat', role: 'Kostüm Sorumlusu' },
  { name: 'Onur Başaran', role: 'Işık Asistanı' },
  { name: 'Zeliha Tandoğan', role: 'Set Sorumlusu' },
  { name: 'Ekin Er', role: 'Oyuncu' },
  { name: 'Berat Kalaycı', role: 'Oyuncu' },
  { name: 'Naz Güneş', role: 'Oyuncu' },
  { name: 'Rıza Sağlam', role: 'Oyuncu' },
  { name: 'Serpil Duru', role: 'Oyuncu' },
  { name: 'Batuhan Elmas', role: 'Oyuncu' },
  { name: 'Ceren Taş', role: 'Oyuncu' },
  { name: 'Talha Çimen', role: 'Oyuncu' },
  { name: 'Melike Yaman', role: 'Oyuncu' },
  { name: 'Faruk Akar', role: 'Set Amiri' },
  { name: 'Ezgi Erbay', role: 'Oyuncu' },
  { name: 'Kadir Solmaz', role: 'Oyuncu' },
  { name: 'Hilal Karaca', role: 'Oyuncu' },
  { name: 'Umut Şahin', role: 'Oyuncu' },
  { name: 'Zeynep Atay', role: 'Oyuncu' },
  { name: 'Halil Bozkurt', role: 'Oyuncu' },
  { name: 'Duygu Turalı', role: 'Oyuncu' },
  { name: 'Mert Güler', role: 'Oyuncu' },
  { name: 'Eda Belen', role: 'Kamera Asistanı' },
  { name: 'Burak Aytekin', role: 'Oyuncu' },
  { name: 'Neval Yüce', role: 'Oyuncu' },
  { name: 'Okan Ersoy', role: 'Oyuncu' },
  { name: 'Melek Tütüncü', role: 'Oyuncu' },
  { name: 'Yiğit Erdem', role: 'Oyuncu' },
  { name: 'Çağla Akdeniz', role: 'Oyuncu' },
  { name: 'Tolga Şimşek', role: 'Oyuncu' },
  { name: 'Elif Tural', role: 'Oyuncu' },
  { name: 'Taner Genç', role: 'Oyuncu' },
  { name: 'Gülşah Kurt', role: 'Oyuncu' },
  { name: 'Canberk Tuna', role: 'Oyuncu' },
  { name: 'Ayda Soylu', role: 'Oyuncu' },
  { name: 'Hüseyin Ayaz', role: 'Oyuncu' },
  { name: 'Özlem Demirci', role: 'Oyuncu' },
  { name: 'Murat Aydemir', role: 'Oyuncu' },
  { name: 'Begüm Taşkın', role: 'Oyuncu' },
  { name: 'Zeki Durmaz', role: 'Oyuncu' },
  { name: 'İpek Baş', role: 'Oyuncu' },
  { name: 'Emre Dağlı', role: 'Oyuncu' },
  { name: 'Seher Ünal', role: 'Oyuncu' },
  { name: 'Kübra Keser', role: 'Oyuncu' },
  { name: 'Taylan Yiğit', role: 'Oyuncu' },
  { name: 'Aslı Karataş', role: 'Oyuncu' },
  { name: 'Furkan Batur', role: 'Oyuncu' },
  { name: 'İlke Sarı', role: 'Oyuncu' },
  { name: 'Ayhan Narin', role: 'Oyuncu' },
  { name: 'Bilge Soylu', role: 'Oyuncu' },
  { name: 'Reyhan Karalı', role: 'Oyuncu' },
  { name: 'Volkan Ulusoy', role: 'Oyuncu' }
];

const castListEl = document.getElementById('castList');

castData.forEach(person => {
  const card = document.createElement('div');
  card.className = 'cast-item';
  card.innerHTML = `
    <img class="cast-photo" src="anonim.png" alt="${person.name}">
    <div class="cast-info">
      <strong>${person.name}</strong>
      <div>${person.role}</div>
    </div>
  `;
  castListEl.appendChild(card);
});


  