/*Membuat fungsi doGet() untuk menampilkan halaman web app dengan HTML*/
function doGet() {
  /* Membuat/mengenerate file html "Index" 
  menampilkan output html "Index" dengan memanggil metode evaluate()*/
  return HtmlService.createTemplateFromFile("Index").evaluate()
    .setTitle("BJB Finance Performance")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

/*Proses Form*/
function processForm(formObject) {
  var concat = formObject.searchtext + formObject.searchtext2;
  var result = "";
  if (concat) {
    /*jika formulir/field sesuai dengan data (username+password) tersimpan
    hasil memanggil fungsi search untuk mencari data concat (username+password)*/
    result = search(concat);
  }
  return result;
}

/* Google sheets sebagai tempat menyimpan data login user,
Fungsi search mencari data yang tersimpan dan sesuai pada file sheet
berdasarkan id file dan nama sheet */
function search(searchtext) {
  var spreadsheetId = 'Masukan ID file';
  var sheetName = "Masukan nama sheet"
  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = range.getValues();
  var array = [];

  /*Perulangan elemen array mencari posisi index pada data index/kolom sheets 
  push index ke-2 atau kolom ke-3 pada perulangan untuk menampilkan tombol akses dashboard*/
  data.forEach(function (f) {
    if (~[f[3]].indexOf(searchtext)) {
      array.push([f[2]]);
    }
  });

  return array;
};


