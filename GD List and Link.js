function ListNamedFilesandFolders() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.clear();
  var foldername = 'IMPORTANT';
  sheet.appendRow(["Folder","Name", "URL"]);
  sheet.setColumnWidth(1, 300);
  sheet.setColumnWidth(2, 400);
  sheet.setColumnWidth(3, 700);
  sheet.getRange("A1").setBackground("#f7c965").setVerticalAlignment("middle").setHorizontalAlignment("center");
  sheet.getRange("B1").setBackground("#65d0f7").setVerticalAlignment("middle").setHorizontalAlignment("center");
  sheet.getRange("C1").setBackground("#6bfa91").setVerticalAlignment("middle").setHorizontalAlignment("center");
  var folders = DriveApp.getFoldersByName(foldername);
  var folderstwo = folders.next();
  var data = [];
  
  var onefiles = folderstwo.getFiles();
  while(onefiles.hasNext()){
    var onefile = onefiles.next();
    var onename = onefile.getName();
    var oneurl = "https://drive.google.com/file/d/" + onefile.getId();
    data = [ 
      folderstwo,
      onename,
      oneurl,
    ];
    sheet.appendRow(data);
  }
  var subfolders = folderstwo.getFolders();
  while (subfolders.hasNext()) {
    var subfolderdata = [];
    var mysubfolders = subfolders.next();
    var mysubfolder = mysubfolders.getName();  

    var mysubfiles = mysubfolders.getFiles();
    while (mysubfiles.hasNext()) {
      var smyfile = mysubfiles.next();
      var sfname =  smyfile.getName();
      var sfurl =  "https://drive.google.com/file/d/" + smyfile.getId();
      subfolderdata = [ 
        (mysubfolder),
        sfname,
        sfurl,
      ];
      sheet.appendRow(subfolderdata);
    }
    var cfolders = mysubfolders.getFolders();
    while (cfolders.hasNext()) {
    var cfolderdata = [];
    var csubfolders = cfolders.next();
    var csubfolder = csubfolders.getName();  

    var csubfiles = csubfolders.getFiles();
    while (csubfiles.hasNext()) {
      var cmyfile = csubfiles.next();
      var cfname =  cmyfile.getName();
      var cfurl =  "https://drive.google.com/file/d/" + cmyfile.getId();
      cfolderdata = [ 
        (mysubfolder+"/"+csubfolder),
        cfname,
        cfurl,
      ];
      sheet.appendRow(cfolderdata);
    }
    var dfolders = csubfolders.getFolders();
    while (dfolders.hasNext()) {
    var dfolderdata = [];
    var dsubfolders = dfolders.next();
    var dsubfolder = dsubfolders.getName();  

    var dsubfiles = dsubfolders.getFiles();
    while (dsubfiles.hasNext()) {
      var dmyfile = dsubfiles.next();
      var dfname =  dmyfile.getName();
      var dfurl =  "https://drive.google.com/file/d/" + dmyfile.getId();
      dfolderdata = [ 
        (mysubfolder+"/"+csubfolder+"/"+dsubfolder),
        dfname,
        dfurl,
      ];
      sheet.appendRow(dfolderdata);
      sheet.autoResizeColumn(1);
      sheet.autoResizeColumn(2);
      sheet.autoResizeColumn(3);
    }
  }
        }
        }
        }
