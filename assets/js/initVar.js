var jumPaging=20;Ext.override(Ext.data.Store,{setExtraParam:function(a,b){this.proxy.extraParams=this.proxy.extraParams||{};this.proxy.extraParams[a]=b;this.proxy.applyEncoding(this.proxy.extraParams)}});function onItemClick(a){Ext.Msg.alert("Menu Click","You clicked the "+a+" menu item.")}clock=Ext.create("Ext.toolbar.TextItem",{text:Ext.Date.format(new Date(),"H:i:s")});Ext.Loader.setConfig({enabled:true});Ext.Loader.setPath("Ext.ux",base_url+"assets/extjs/examples/ux");Ext.require(["*","Ext.ux.layout.Center","Ext.ux.RowExpander","Ext.ux.data.PagingMemoryProxy","Ext.ux.ProgressBarPager","Ext.ux.PreviewPlugin","Ext.ux.statusbar.StatusBar","Ext.ux.TabScrollerMenu","Ext.ux.TabCloseMenu","Ext.ux.grid.FiltersFeature",]);Ext.define("Ext.ux.SimpleIFrame",{extend:"Ext.Panel",alias:"widget.simpleiframe",src:"about:blank",loadingText:"Loading ...",initComponent:function(){this.updateHTML();this.callParent(arguments)},updateHTML:function(){this.html='<iframe id="iframe-'+this.id+'" style="overflow:auto;width:100%;height:100%;" frameborder="0"  src="'+this.src+'"></iframe>'},reload:function(){this.setSrc(this.src)},reset:function(){var b=this.getDOM();var a=b.parentNode;if(b&&a){b.src="about:blank";b.parentNode.removeChild(b)}b=document.createElement("iframe");b.frameBorder=0;b.src=this.src;b.id="iframe-"+this.id;b.style.overflow="auto";b.style.width="100%";b.style.height="100%";a.appendChild(b)},setSrc:function(c,a){this.src=c;var b=this.getDOM();if(b){b.src=c}},getSrc:function(){return this.src},getDOM:function(){return document.getElementById("iframe-"+this.id)},getDocument:function(){var a=this.getDOM();a=(a.contentWindow)?a.contentWindow:(a.contentDocument.document)?a.contentDocument.document:a.contentDocument;return a.document},destroy:function(){var a=this.getDOM();if(a&&a.parentNode){a.src="about:blank";a.parentNode.removeChild(a)}this.callParent(arguments)},update:function(b){this.setSrc("about:blank");try{var c=this.getDocument();c.open();c.write(b);c.close()}catch(a){this.reset();var c=this.getDocument();c.open();c.write(b);c.close()}}});var surahData=[{id:"0",nama_surah:"Semua surah... (6.236 ayat)"},{id:"1",nama_surah:"1. Al-Fatihah (7 ayat)"},{id:"2",nama_surah:"2. Al-Baqarah (286 ayat)"},{id:"3",nama_surah:"3. Ali 'Imran (200 ayat)"},{id:"4",nama_surah:"4. An-Nisa' (176 ayat)"},{id:"5",nama_surah:"5. Al-Ma'idah (120 ayat)"},{id:"6",nama_surah:"6. Al-An'am (165 ayat)"},{id:"7",nama_surah:"7. Al-A'raf (206 ayat)"},{id:"8",nama_surah:"8. Al-Anfal (75 ayat)"},{id:"9",nama_surah:"9. At-Taubah (129 ayat)"},{id:"10",nama_surah:"10. Yunus (109 ayat)"},{id:"11",nama_surah:"11. Hud (123 ayat)"},{id:"12",nama_surah:"12. Yusuf (111 ayat)"},{id:"13",nama_surah:"13. Ar-Ra'd (43 ayat)"},{id:"14",nama_surah:"14. Ibrahim (52 ayat)"},{id:"15",nama_surah:"15. Al-Hijr (99 ayat)"},{id:"16",nama_surah:"16. An-Nahl (128 ayat)"},{id:"17",nama_surah:"17. Al-Isra' (111 ayat)"},{id:"18",nama_surah:"18. Al-Kahf (110 ayat)"},{id:"19",nama_surah:"19. Maryam (98 ayat)"},{id:"20",nama_surah:"20. Ta Ha (135 ayat)"},{id:"21",nama_surah:"21. Al-Anbiya (112 ayat)"},{id:"22",nama_surah:"22. Al-Hajj (78 ayat)"},{id:"23",nama_surah:"23. Al-Mu'minun (118 ayat)"},{id:"24",nama_surah:"24. An-Nur (64 ayat)"},{id:"25",nama_surah:"25. Al-Furqan (77 ayat)"},{id:"26",nama_surah:"26. Asy-Syu'ara' (227 ayat)"},{id:"27",nama_surah:"27. An-Naml (93 ayat)"},{id:"28",nama_surah:"28. Al-Qasas (88 ayat)"},{id:"29",nama_surah:"29. Al-'Ankabut (69 ayat)"},{id:"30",nama_surah:"30. Ar-Rum (60 ayat)"},{id:"31",nama_surah:"31. Luqman (34 ayat)"},{id:"32",nama_surah:"32. As-Sajdah (30 ayat)"},{id:"33",nama_surah:"33. Al-Ahzab (73 ayat)"},{id:"34",nama_surah:"34. Saba' (54 ayat)"},{id:"35",nama_surah:"35. Fatir (45 ayat)"},{id:"36",nama_surah:"36. Ya Sin (83 ayat)"},{id:"37",nama_surah:"37. As-Saffat (182 ayat)"},{id:"38",nama_surah:"38. Sad (88 ayat)"},{id:"39",nama_surah:"39. Az-Zumar (75 ayat)"},{id:"40",nama_surah:"40. Al-Mu'min (85 ayat)"},{id:"41",nama_surah:"41. Fussilat (54 ayat)"},{id:"42",nama_surah:"42. Asy-Syura (53 ayat)"},{id:"43",nama_surah:"43. Az-Zukhruf (89 ayat)"},{id:"44",nama_surah:"44. Ad-Dukhan (59 ayat)"},{id:"45",nama_surah:"45. Al-Jasiyah (37 ayat)"},{id:"46",nama_surah:"46. Al-Ahqaf (35 ayat)"},{id:"47",nama_surah:"47. Muhammad (38 ayat)"},{id:"48",nama_surah:"48. Al-Fath (29 ayat)"},{id:"49",nama_surah:"49. Al-Hujurat (18 ayat)"},{id:"50",nama_surah:"50. Qaf (45 ayat)"},{id:"51",nama_surah:"51. Az-Zariyat (60 ayat)"},{id:"52",nama_surah:"52. At-Tur (49 ayat)"},{id:"53",nama_surah:"53. An-Najm (62 ayat)"},{id:"54",nama_surah:"54. Al-Qamar (55 ayat)"},{id:"55",nama_surah:"55. Ar-Rahman (78 ayat)"},{id:"56",nama_surah:"56. Al-Waqi'ah (96 ayat)"},{id:"57",nama_surah:"57. Al-Hadid (29 ayat)"},{id:"58",nama_surah:"58. Al-Mujadilah (22 ayat)"},{id:"59",nama_surah:"59. Al-Hasyr (24 ayat)"},{id:"60",nama_surah:"60. Al-Mumtahanah (13 ayat)"},{id:"61",nama_surah:"61. As-Saff (14 ayat)"},{id:"62",nama_surah:"62. Al-Jumu'ah (11 ayat)"},{id:"63",nama_surah:"63. Al-Munafiqun (11 ayat)"},{id:"64",nama_surah:"64. At-Tagabun (18 ayat)"},{id:"65",nama_surah:"65. At-Talaq (12 ayat)"},{id:"66",nama_surah:"66. At-Tahrim (12 ayat)"},{id:"67",nama_surah:"67. Al-Mulk (30 ayat)"},{id:"68",nama_surah:"68. Al-Qalam (52 ayat)"},{id:"69",nama_surah:"69. Al-Haqqah (52 ayat)"},{id:"70",nama_surah:"70. Al-Ma'arij (44 ayat)"},{id:"71",nama_surah:"71. Nuh (28 ayat)"},{id:"72",nama_surah:"72. Al-Jinn (28 ayat)"},{id:"73",nama_surah:"73. Al-Muzzammil (20 ayat)"},{id:"74",nama_surah:"74. Al-Muddassir (56 ayat)"},{id:"75",nama_surah:"75. Al-Qiyamah (40 ayat)"},{id:"76",nama_surah:"76. Al-Insan (31 ayat)"},{id:"77",nama_surah:"77. Al-Mursalat (50 ayat)"},{id:"78",nama_surah:"78. An-Naba' (40 ayat)"},{id:"79",nama_surah:"79. An-Nazi'at (46 ayat)"},{id:"80",nama_surah:"80. Abasa (42 ayat)"},{id:"81",nama_surah:"81. At-Takwir (29 ayat)"},{id:"82",nama_surah:"82. Al-Infitar (19 ayat)"},{id:"83",nama_surah:"83. Al-Tatfif (36 ayat)"},{id:"84",nama_surah:"84. Al-Insyiqaq (25 ayat)"},{id:"85",nama_surah:"85. Al-Buruj (22 ayat)"},{id:"86",nama_surah:"86. At-Tariq (17 ayat)"},{id:"87",nama_surah:"87. Al-A'la (19 ayat)"},{id:"88",nama_surah:"88. Al-Gasyiyah (26 ayat)"},{id:"89",nama_surah:"89. Al-Fajr (30 ayat)"},{id:"90",nama_surah:"90. Al-Balad (20 ayat)"},{id:"91",nama_surah:"91. Asy-Syams (15 ayat)"},{id:"92",nama_surah:"92. Al-Lail (21 ayat)"},{id:"93",nama_surah:"93. Ad-Duha (11 ayat)"},{id:"94",nama_surah:"94. Al-Insyirah (8 ayat)"},{id:"95",nama_surah:"95. At-Tin (8 ayat)"},{id:"96",nama_surah:"96. Al-'Alaq (19 ayat)"},{id:"97",nama_surah:"97. Al-Qadr (5 ayat)"},{id:"98",nama_surah:"98. Al-Bayyinah (8 ayat)"},{id:"99",nama_surah:"99. Az-Zalzalah (8 ayat)"},{id:"100",nama_surah:"100. Al-'Adiyat (11 ayat)"},{id:"101",nama_surah:"101. Al-Qari'ah (11 ayat)"},{id:"102",nama_surah:"102. At-Takasur (8 ayat)"},{id:"103",nama_surah:"103. Al-'Asr (3 ayat)"},{id:"104",nama_surah:"104. Al-Humazah (9 ayat)"},{id:"105",nama_surah:"105. Al-Fil (5 ayat)"},{id:"106",nama_surah:"106. Quraisy (4 ayat)"},{id:"107",nama_surah:"107. Al-Ma'un (7 ayat)"},{id:"108",nama_surah:"108. Al-Kausar (3 ayat)"},{id:"109",nama_surah:"109. Al-Kafirun (6 ayat)"},{id:"110",nama_surah:"110. An-Nasr (3 ayat)"},{id:"111",nama_surah:"111. Al-Lahab (5 ayat)"},{id:"112",nama_surah:"112. Al-Ikhlas (4 ayat)"},{id:"113",nama_surah:"113. Al-Falaq (5 ayat)"},{id:"114",nama_surah:"114. An-Nas (6 ayat)"}];var juzData=[{id:"0",juz:"Semua juz... (30 juz)"},{id:"1",juz:"Juz-1 (Al-Fatihah 1)"},{id:"2",juz:"Juz-2 (Al-Baqarah 142)"},{id:"3",juz:"Juz-3 (Al-Baqarah 253)"},{id:"4",juz:"Juz-4 (Ali 'Imran 92)"},{id:"5",juz:"Juz-5 (An-Nisa' 24)"},{id:"6",juz:"Juz-6 (An-Nisa' 148)"},{id:"7",juz:"Juz-7 (Al-Ma'idah 83)"},{id:"8",juz:"Juz-8 (Al-An'am 11)"},{id:"9",juz:"Juz-9 (Al-A'raf 88)"},{id:"10",juz:"Juz-10 (Al-Anfal 41)"},{id:"11",juz:"Juz-11 (At-Taubah 94)"},{id:"12",juz:"Juz-12 (Hud 6)"},{id:"13",juz:"Juz-13 (Yusuf 53)"},{id:"14",juz:"Juz-14 (Al-Hijr 2)"},{id:"15",juz:"Juz-15 (Al-Isra' 1)"},{id:"16",juz:"Juz-16 (Al-Kahf 75)"},{id:"17",juz:"Juz-17 (Al-Anbiya 1)"},{id:"18",juz:"Juz-18 (Al-Mu'minun 1)"},{id:"19",juz:"Juz-19 (Al-Furqan 21)"},{id:"20",juz:"Juz-20 (An-Naml 60)"},{id:"21",juz:"Juz-21 (Al-'Ankabut 45)"},{id:"22",juz:"Juz-22 (Al-Ahzab 31)"},{id:"23",juz:"Juz-23 (Ya Sin 22)"},{id:"24",juz:"Juz-24 (Az-Zumar 32)"},{id:"25",juz:"Juz-25 (Fussilat 47)"},{id:"26",juz:"Juz-26 (Al-Ahqaf 1)"},{id:"27",juz:"Juz-27 (Az-Zariyat 31)"},{id:"28",juz:"Juz-28 (Al-Mujadilah 1)"},{id:"29",juz:"Juz-29 (Al-Mulk 1)"},{id:"30",juz:"Juz-30 (An-Naba' 1)"}];var groupingFeature=Ext.create("Ext.grid.feature.Grouping",{groupHeaderTpl:"Surah: {name}",enableGroupingMenu:false});function addTooltip(e,d,a,f,c,b){d.tdAttr="data-qtip='"+e+"'";return e}var actField={specialkey:function(d,c){if(c.getKey()==c.ENTER){var e=Ext.getCmp("cariKata").getValue();var b=e.length;var a=Ext.getCmp("cocokanCheck").getValue();Ext.getCmp("cariKataHidden").setValue(e);quranStore.setExtraParam("kata",e);quranStore.setExtraParam("sesuai",a);quranStore.loadPage(1)}else{if(c.getKey()==c.ESC){Ext.getCmp("loginForm").getForm().reset()}}}};var bukuTamuTplMarkup=['<b><center>Dari: <a href="mailto:{email}" target="_blank">{name}</a></center></b><hr noshade size=1>',"Tanggal:<br>{tgl}<hr noshade size=1>","Isi Komentar:<br/><br/>{text}"];var bukuTamuTpl=Ext.create("Ext.Template",bukuTamuTplMarkup);function ubahCapcha(){Ext.Ajax.request({url:base_url+"quran/randCapcha",success:function(response){var hasil=eval(response.responseText);Ext.getCmp("formBukuTamu").getForm().setValues({capcha_int:hasil[0],capcha_hide:hasil[1]})}})}function randRGB1(){return Math.floor(Math.random()*255)}function randRGB(){return Math.floor(Math.random()*(255-150+1)+150)}function randomAyat(){var randValue=Math.floor(Math.random()*6236);dynamicPanel=new Ext.Component({loader:{url:base_url+"quran/displayAyat/"+randValue,renderer:"html",loadMask:true,autoLoad:true,scripts:true}});Ext.getCmp("panelAyat").removeAll();Ext.getCmp("panelAyat").add(dynamicPanel);Ext.getCmp("CurrAyatId").setValue(randValue);Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:randValue},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]);Ext.getCmp("prevAyat").setText(hasilText[0]);Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(response){var result=response.responseText;Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat selanjutnya")}});windowAyat.show()}var windowAyat=Ext.create("Ext.Window",{title:"Isi Ayat",closable:false,modal:true,width:800,height:460,layout:"border",border:false,items:{xtype:"panel",id:"panelAyat",region:"center",border:false,autoScroll:true,setLoading:true,layout:"fit",bodyStyle:"padding:5px"},buttonAlign:"center",buttons:[{text:"Ayat Sebelumnya",id:"prevAyat",iconCls:"prev",handler:function(){var currAyatId=Ext.getCmp("CurrAyatId").getValue();prevAyatId=eval(currAyatId.valueOf())-1;if(prevAyatId==0){Ext.MessageBox.alert("Gagal","Ini adalah ayat pertama!")}else{Ext.getCmp("CurrAyatId").setValue(prevAyatId);Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:prevAyatId},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]);Ext.getCmp("prevAyat").setText(hasilText[0]);Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(response){var result=response.responseText;Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat sebelumnya")}});dynamicPanel=new Ext.Component({loader:{url:base_url+"quran/displayAyat/"+prevAyatId,renderer:"html",text:"Memuat...",autoLoad:true,scripts:true}});Ext.getCmp("panelAyat").removeAll();Ext.getCmp("panelAyat").add(dynamicPanel)}}},"-",{text:"Tutup",iconCls:"close",handler:function(){windowAyat.hide()}},"-",{text:"Ayat Selanjutnya",iconCls:"next",id:"nextAyat",handler:function(){var currAyatId=Ext.getCmp("CurrAyatId").getValue();nextAyatId=eval(currAyatId.valueOf())+1;if(nextAyatId>6236){Ext.MessageBox.alert("Gagal","Ini adalah ayat terakhir!")}else{Ext.getCmp("CurrAyatId").setValue(nextAyatId);Ext.Ajax.request({waitMsg:"Silakan Tunggu...",url:base_url+"quran/getAyatInfo",method:"POST",params:{ayatId:nextAyatId},success:function(response){var hasilText=eval(response.responseText);windowAyat.setTitle(hasilText[1]);Ext.getCmp("prevAyat").setText(hasilText[0]);Ext.getCmp("nextAyat").setText(hasilText[2])},failure:function(response){var result=response.responseText;Ext.MessageBox.alert("Gagal","Tidak dapat mengambil ayat selanjutnya")}});dynamicPanel=new Ext.Component({loader:{url:base_url+"quran/displayAyat/"+nextAyatId,renderer:"html",text:"Memuat...",autoLoad:true,scripts:true}});Ext.getCmp("panelAyat").removeAll();Ext.getCmp("panelAyat").add(dynamicPanel)}}}]});var windowDownload=Ext.create("Ext.Window",{title:"Download File",closable:false,constrainHeader:true,modal:true,width:400,height:140,layout:"fit",border:false,items:{xtype:"form",url:base_url+"quran/download",buttonAlign:"center",id:"formDownload",border:false,frame:true,bodyStyle:"padding:5px",fieldDefaults:{msgTarget:"side",labelWidth:60},defaultType:"textfield",defaults:{anchor:"100%"},items:[{fieldLabel:"Email",name:"emailField",id:"emailField",vtype:"email",allowBlank:false},{xtype:"hidden",name:"urlField",id:"urlField",allowBlank:false},{xtype:"displayfield",value:'<center><i><font color="#969696">Isi email dengan benar, karena password aplikasi akan di kirimkan ke email tersebut</font></i></center>',hideLable:true}],buttons:[{text:"Download File",formBind:true,iconCls:"download",handler:function(){var b=Ext.getCmp("urlField").getValue();var a=Ext.getCmp("formDownload").getForm().getFieldValues();var e="Aplikasi ini berbentuk .exe dan hanya dapat dijalankan di Windows, untuk menjalankan aplikasinya diperlukan password dan untuk mengetahuinya harap balas email yang akan dikirimkan setelah mengisikan email yang benar dalam form ini kepada kontak@indoquran.web.id, download file ini?";var d="Aplikasi ini berbentuk .chm dan hanya dapat dijalankan di Windows, untuk platform linux dan lainnya mungkin dibutuhkan plugins untuk menjalankan aplikasi ini, download file ini?";var c="";if(b=="http://www.indoquran.web.id/download/AlQuranDigital.chm"){c=d}else{c=e}Ext.MessageBox.confirm("Download",c,function(f){if(f=="yes"){if(a.urlField==""){Ext.Msg.alert("Gagal","Silakan pilih terlebih dahulu aplikasi yang akan di download.")}else{if(a.emailField==""){Ext.Msg.alert("Gagal","Email masih kosong")}else{Ext.getCmp("formDownload").getForm().submit({success:function(h,g){Ext.getCmp("emailField").setValue(null);windowDownload.hide();Ext.Msg.alert("Berhasil",g.result.Msg)},failure:function(h,g){Ext.getCmp("emailField").setValue(null);windowDownload.hide();Ext.Msg.alert("Gagal",g.result.Msg)}})}}}})}},{text:"Tutup",iconCls:"close",handler:function(){windowDownload.hide()}}]}});var windowBukuTamu=Ext.create("Ext.window.Window",{title:"Isi Buku Tamu",hideTitle:true,closable:false,modal:true,width:650,height:340,layout:"fit",buttonAlign:"center",border:false,items:[{xtype:"form",id:"formBukuTamu",url:base_url+"quran/bukuTamu/insert",frame:true,monitorValid:true,bodyStyle:"padding:5px 5px 0",fieldDefaults:{msgTarget:"side",labelWidth:75},defaultType:"textfield",defaults:{anchor:"100%",allowBlank:false},buttonAlign:"center",items:[{fieldLabel:"Nama",name:"name"},{fieldLabel:"Email",name:"email",vtype:"email"},{xtype:"htmleditor",fieldLabel:"Komentar",id:"komentarField",name:"text"},{xtype:"fieldcontainer",fieldLabel:"Berapa",msgTarget:"side",layout:"hbox",defaults:{hideLabel:true},items:[{xtype:"displayfield",name:"capcha_int",id:"capcha_int",value:"",width:100},{xtype:"hidden",name:"capcha_hide",value:""},{xtype:"numberfield",name:"capcha",width:100,margin:"0 5 0 0",allowBlank:false}]}],listeners:[{afterrender:{fn:ubahCapcha()},beforeexpand:{fn:function(){Ext.getCmp("formBukuTamu").getForm().reset();ubahCapcha()}}}],buttons:[{text:"Ubah Capcha",iconCls:"recapcha",handler:function(){ubahCapcha()}},{text:"Kirim",formBind:true,iconCls:"bukutamuSend",handler:function(){Ext.MessageBox.confirm("Kirim","Kirim Buku Tamu Ini?",function(a){if(a=="yes"){var c=Ext.getCmp("formBukuTamu").getForm().getValues();if(c.capcha_hide==c.capcha){var b=Ext.getCmp("komentarField").getValue().length;if(b<=8){Ext.Msg.alert("Gagal","Isi komentar minimal 8 karakter")}else{Ext.getCmp("formBukuTamu").getForm().submit({success:function(g,d){var e=d.result.Msg;Ext.getCmp("formBukuTamu").getForm().reset();ubahCapcha();bukuTamuStore.load();windowBukuTamu.hide()},failure:function(e,d){Ext.Msg.alert("Gagal",d.result.Msg)}})}}else{Ext.Msg.alert("Gagal","Salah Perhitungan Dari "+Ext.getCmp("capcha_int").getValue())}}})}},{text:"Reset",iconCls:"reset",handler:function(){Ext.getCmp("formBukuTamu").getForm().reset();ubahCapcha()}}]}],buttons:[{text:"Tutup",iconCls:"close",handler:function(){windowBukuTamu.hide()}}]});Ext.chart.theme.White=Ext.extend(Ext.chart.theme.Base,{constructor:function(){Ext.chart.theme.White.superclass.constructor.call(this,{axis:{stroke:"rgb(8,69,148)","stroke-width":1},axisLabel:{fill:"rgb(8,69,148)",font:"12px Arial","font-family":'"Arial',spacing:2,padding:5,renderer:function(a){return a}},axisTitle:{font:"bold 18px Arial"}})}});Ext.define("Quran",{extend:"Ext.data.Model",fields:[{name:"ID",type:"int"},"nama","arti",{name:"SuraID",type:"int"},{name:"VerseID",type:"int"},"AyahText","img","mp3","qs"],idProperty:"ID"});Ext.define("Pengunjung",{extend:"Ext.data.Model",fields:[{name:"VisID",type:"int"},"VisIP","VisRef","VisUrl",{name:"VisDate",type:"date",dateFormat:"Y-m-d H:i:s"},"VisAgent","VisPlatform","VisAgentString"],idProperty:"VisID"});Ext.define("Statistik",{extend:"Ext.data.Model",fields:["judul",{name:"jumlah",type:"int"}]});Ext.define("Surah",{extend:"Ext.data.Model",fields:[{name:"id",type:"int"},"nama_surah"]});Ext.define("Juz",{extend:"Ext.data.Model",fields:[{name:"id",type:"int"},"juz"]});Ext.define("BukuTamu",{extend:"Ext.data.Model",fields:["id",{name:"date",type:"date",dateFormat:"Y-m-d H:i:s"},"name","email","text","email_status","tgl"]});Ext.define("ModelSurahAyat",{extend:"Ext.data.Model",fields:["id"]});Ext.define("Topik",{extend:"Ext.data.Model",fields:["id","parent_id","is_title","text","isi","adaTopik","jumTopik"]});Ext.define("TopikGrid",{extend:"Ext.data.Model",fields:["id","parent_id","is_title","text","isi","adaTopik","jumTopik"]});var quranStore=Ext.create("Ext.data.Store",{model:"Quran",remoteSort:true,loadMask:true,pageSize:jumPaging,groupField:"nama",proxy:{type:"ajax",url:base_url+"quran/getAllAyat",extraParams:{limit:jumPaging},reader:{root:"data",totalProperty:"total"},simpleSortMode:true,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},autoLoad:true});var pengunjungStore=Ext.create("Ext.data.Store",{model:"Pengunjung",remoteSort:true,loadMask:true,pageSize:jumPaging,proxy:{type:"ajax",url:base_url+"quran/getPengunjung",extraParams:{limit:jumPaging},reader:{root:"data",totalProperty:"total"},simpleSortMode:true,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},},});var statistikStore=Ext.create("Ext.data.Store",{model:"Statistik",loadMask:true,pageSize:12,proxy:{type:"ajax",url:base_url+"quran/statistik",extraParams:{limit:12},reader:{root:"rows",totalProperty:"total"},simpleSortMode:true,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},},});var bukuTamuStore=Ext.create("Ext.data.Store",{model:"BukuTamu",loadMask:true,remoteSort:true,pageSize:20,proxy:{type:"ajax",url:base_url+"quran/bukuTamu/read",extraParams:{limit:20},reader:{root:"rows",totalProperty:"total"},simpleSortMode:true,actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},},autoLoad:true});var surahStoreId=Ext.create("Ext.data.Store",{model:"ModelSurahAyat",loadMask:true,proxy:{type:"ajax",url:base_url+"quran/getListSurahId",reader:{root:"rows"},actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},},autoLoad:true});var ayatStoreId=Ext.create("Ext.data.Store",{model:"ModelSurahAyat",loadMask:true,proxy:{type:"ajax",url:base_url+"quran/getListAyatId",reader:{root:"rows"},actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"},},autoLoad:true});var surahStore=Ext.create("Ext.data.Store",{model:"Surah",data:surahData});var juzStore=Ext.create("Ext.data.Store",{model:"Juz",data:juzData});var tipeChart=Ext.create("Ext.data.Store",{fields:["tipe","txt"],data:[{tipe:"harian",txt:"Harian"},{tipe:"bulanan",txt:"Bulanan"},{tipe:"tahunan",txt:"Tahunan"}]});var downloadfile=Ext.create("Ext.data.Store",{fields:["url","txt"],data:[{url:"http://www.4shared.com/file/6F3hFxSJ/application.html?",txt:"Aplikasi v.1 (274MB)"},{url:"http://www.indoquran.web.id/download/AlQuranDigital.chm",txt:"Al Quran Digital.chm (9,4MB)"}]});var topikStore=Ext.create("Ext.data.TreeStore",{model:"Topik",proxy:{type:"ajax",url:base_url+"topik/getTreeTopik",actionMethods:{create:"POST",read:"POST",update:"POST",destroy:"POST"}},folderSort:true});var treeTopik=Ext.create("Ext.tree.Panel",{title:"Daftar Topik",useArrows:true,rootVisible:false,store:topikStore,singleExpand:true,border:true,viewConfig:{stripeRows:true,enableTextSelection:true},columns:[{text:"Jumlah Topik",width:80,dataIndex:"jumTopik"},{menuDisabled:true,sortable:false,xtype:"actioncolumn",text:"Buka",width:40,items:[{icon:base_url+"assets/images/ico/accept.png",tooltip:"Buka Topik",handler:function(a,g,i,e,b,d,j){if(d.get("adaTopik")=="ada"){var h=Ext.getCmp("topik-panel");var f=d.get("text");var c=d.get("id");h.add({closable:true,border:false,iconCls:"tabs",title:f,loader:{url:base_url+"topik/getTopikContent/"+c,contentType:"html",loadMask:true},bodyPadding:10,listeners:{render:function(k){k.loader.load()}}}).show()}else{Ext.Msg.alert("Kosong",'Topik : "'+d.get("text")+'" kosong')}}}]},{xtype:"treecolumn",text:"Topik",flex:2,sortable:true,dataIndex:"text"}]});var platformStore=Ext.create("Ext.data.Store",{fields:["id","text"],proxy:{type:"ajax",url:base_url+"quran/getListPlatform",reader:{type:"json"}}});var createColumnsPengunjung=function(b,c){var a=[{text:"No.",xtype:"rownumberer",width:40,filterable:false},{id:"VisIP",text:"Alamat IP",width:120,dataIndex:"VisIP",filter:{type:"string"}},{text:"Refferer",dataIndex:"VisRef",flex:1,renderer:addTooltip,filter:{type:"string"}},{text:"Tanggal / Waktu",dataIndex:"VisDate",width:120,renderer:Ext.util.Format.dateRenderer("d M Y H:i:s"),filter:{type:"date"}},{text:"User Agent",dataIndex:"VisAgent",flex:1,renderer:addTooltip,filter:{type:"string"}},{text:"Platform",dataIndex:"VisPlatform",flex:1,renderer:addTooltip,filter:{type:"list",store:platformStore,phpMode:true}}];return a.slice(c||0,b)};