// Navigasi kembali ke halaman sebelumnya
function goBack() {
  window.history.back();
}
// Membuat popup
document.querySelectorAll(".popklik").forEach((item) => {
  item.addEventListener("click", function () {
    let popupId = this.getAttribute("data-popup");
    let popup = document.getElementById(popupId);
    popup.classList.toggle("on"); // Tampilkan popup
  });
});

document.querySelectorAll(".popupbox .close").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    let popup = this.closest(".popupbox");
    popup.classList.remove("on"); // Sembunyikan popup
  });
});

// Struktur data untuk chapter dan gambar
const chaptersData = {

  naruto: [
    // Chapter Naruto
  {
    id: "chapter1-container-naruto", // ID kontainer untuk chapter ini
    basePath: "/images/Naruto/1", // Path dasar gambar
    totalImages: 91, // Total gambar untuk chapter ini
    missingIndexes: [], // Indeks gambar yang tidak ada
  },
  {
    id: "chapter2-container-naruto", // ID kontainer untuk chapter ini
    basePath: "/images/Naruto/2", // Path dasar gambar
    totalImages: 22, // Total gambar untuk chapter ini
    missingIndexes: [1, 31], // Index gambar yang tidak ada
  },
  {
    id: "chapter3-container-naruto", // ID kontainer untuk chapter ini
    basePath: "/images/Naruto/3", // Path dasar gambar
    totalImages: 23, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  },
  {
    id: "chapter4-container-naruto", // ID kontainer untuk chapter ini
    basePath: "/images/Naruto/4", // Path dasar gambar
    totalImages: 19, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  },
  {
    id: "chapter5-container-naruto", // ID kontainer untuk chapter ini
    basePath: "/images/Naruto/5", // Path dasar gambar
    totalImages: 18, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  }
],

shinmai: [
  // Chapter Shinmai ossan
  {
    id: "chapter1-container-shinmai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Shinmai Ossan/1", // Path dasar gambar
    totalImages: 21, // Total gambar untuk chapter ini
    missingIndexes: [2, 14, 15], // Indeks gambar yang tidak ada
  },
  {
    id: "chapter2-container-shinmai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Shinmai Ossan/2", // Path dasar gambar
    totalImages: 18, // Total gambar untuk chapter ini
    missingIndexes: [13], // Index gambar yang tidak ada
  },
  {
    id: "chapter3-container-shinmai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Shinmai Ossan/3", // Path dasar gambar
    totalImages: 17, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  },
  {
    id: "chapter4-container-shinmai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Shinmai Ossan/4.1", // Path dasar gambar
    totalImages: 6, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  },
  {
    id: "chapter5-container-shinmai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Shinmai Ossan/5", // Path dasar gambar
    totalImages: 23, // Total gambar untuk chapter ini
    missingIndexes: [], // Index gambar yang tidak ada
  },
],

isekai: [
   // Chapter isekai Shikaku
  {
    id: "chapter1-container-isekai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Isekai Shikkaku/1", // Path dasar gambar
    totalImages: 33, // Total gambar untuk chapter ini
    missingIndexes: [2, 17, 33], // Indeks gambar yang tidak ada
  },
  {
    id: "chapter2-container-isekai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Isekai Shikkaku/2", // Path dasar gambar
    totalImages: 31, // Total gambar untuk chapter ini
    missingIndexes: [1, 31], // Index gambar yang tidak ada
  },
  {
    id: "chapter3-container-isekai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Isekai Shikkaku/3", // Path dasar gambar
    totalImages: 31, // Total gambar untuk chapter ini
    missingIndexes: [2, 31], // Index gambar yang tidak ada
  },
  {
    id: "chapter4-container-isekai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Isekai Shikkaku/4", // Path dasar gambar
    totalImages: 31, // Total gambar untuk chapter ini
    missingIndexes: [2, 30, 31], // Index gambar yang tidak ada
  },
  {
    id: "chapter5-container-isekai", // ID kontainer untuk chapter ini
    basePath: "/Gambar/Isekai Shikkaku/5", // Path dasar gambar
    totalImages: 28, // Total gambar untuk chapter ini
    missingIndexes: [2, 27, 28], // Index gambar yang tidak ada
  },
]
};


// Fungsi untuk menghasilkan gambar
function generateImagesForChapters(chapterKey) {
  const chapters = chaptersData[chapterKey];
  if (!chapters) return;

  chapters.forEach((chapter) => {
    const container = document.getElementById(chapter.id);
    if (!container) return;

    for (let i = 0; i <= chapter.totalImages; i++) {
      if (chapter.missingIndexes.includes(i)) continue; // Lewati gambar yang hilang

      const img = document.createElement("img");
      img.src = `${chapter.basePath}/${i}.jpg`;
      img.alt = `Image ${i}`;
      container.appendChild(img);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const chapterKey = document.body.dataset.chapterKey;
  if (chapterKey) {
    generateImagesForChapters(chapterKey);
  }
});
