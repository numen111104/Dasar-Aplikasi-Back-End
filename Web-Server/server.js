const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  // Mengatur header response untuk jenis konten menjadi 'text/html'
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");
  response.setHeader("X-Created-By", "Numan Nasyar MZ");
  response.setHeader("X-Developer", "Numan Nasyar MZ");
  response.setHeader(
    "X-Description",
    "Contoh penggunaan setHeader() pada NodeJS"
  );
  // Menetapkan kode status response menjadi 200 (OK)
  response.statusCode = 200;

  // Mendapatkan metode HTTP dari permintaan
  const { method, url } = request;

  //ROUTING
  // Memeriksa apakah URL adalah '/'
  if (url === "/") {
    // Tambahkan logika Anda di sini untuk URL '/'
    if (method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify({'message': "Ini adalah halaman HOME"}));
    } else {
      response.statusCode = 405;
      response.end(JSON.stringify({'message': "Method tidak diizinkan"}));
    }
  } else if (url === "/about") {
    // Tambahkan logika Anda di sini untuk URL '/about'
    if (method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify({'message': "Ini adalah halaman ABOUT"}));
    } else if (method === "POST") {
      let body = [];

      // Mendengarkan event 'data' yang dipancarkan saat ada data yang masuk
      request.on("data", (chunk) => {
        // Mengumpulkan potongan-potongan data ke dalam array
        body.push(chunk);
      });
      request.on("end", () => {
        // Menggabungkan semua potongan-potongan data menjadi string
        body = Buffer.concat(body).toString();
        // Mengambilkan parameter 'name' dari permintaan POST
        const { name } = JSON.parse(body);
        // Mengirimkan respons dengan pesan Hello, World! jika metode adalah POST
        response.statusCode = 200;
        response.end(JSON.stringify({ message: `Hai ${name}!, Selamat datang` }));
      });
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({ message: "Method tidak diizinkan" }));
    }
  } else {
    // Tambahkan logika Anda di sini untuk URL selain '/' dan '/about'
    response.statusCode = 404;
    response.end(JSON.stringify({ message: "Halaman tidak ditemukan" }));
  }

  // // Memeriksa apakah metode adalah GET
  // if (method === 'GET') {
  //     // Mengirimkan respons dengan pesan Hello, World! jika metode adalah GET
  //     response.end('<h1>Hello, World!</h1>');
  // }

  // // Memeriksa apakah metode adalah POST
  // if (method === 'POST') {
  //     let body = [];

  //     // Mendengarkan event 'data' yang dipancarkan saat ada data yang masuk
  //     request.on('data', (chunk) => {
  //         // Mengumpulkan potongan-potongan data ke dalam array
  //         body.push(chunk);
  //     });

  //     // Mendengarkan event 'end' yang dipancarkan saat seluruh data telah diterima
  //     request.on('end', () => {
  //         // Menggabungkan semua potongan data menjadi satu string
  //         body = Buffer.concat(body).toString();
  //         // Mengambil nilai properti 'name' dari data JSON yang diterima
  //         const { name } = JSON.parse(body);
  //         // Mengirimkan respons dengan menyertakan nama dari data yang diterima
  //         response.end(`<h1>Hai ${name}!</h1>`);
  //     });
  // }
};

// Membuat server HTTP dengan fungsi requestListener sebagai penangan permintaan
const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

// Mendengarkan server pada port dan host tertentu
server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});

// Catatan: Untuk menguji fungsi ini, gunakan perintah curl yang diberikan di akhir file
