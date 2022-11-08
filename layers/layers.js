ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([-1263422.896056, 10541993.877911, -1148996.648845, 10651927.927849]);
var wms_layers = [];


        var lyr_SATELIT_GOOGLE_0 = new ol.layer.Tile({
            'title': 'SATELIT_GOOGLE',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATAS_ADMIN_KEMENDAGRI_1 = new ol.format.GeoJSON();
var features_BATAS_ADMIN_KEMENDAGRI_1 = format_BATAS_ADMIN_KEMENDAGRI_1.readFeatures(json_BATAS_ADMIN_KEMENDAGRI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BATAS_ADMIN_KEMENDAGRI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMIN_KEMENDAGRI_1.addFeatures(features_BATAS_ADMIN_KEMENDAGRI_1);
var lyr_BATAS_ADMIN_KEMENDAGRI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATAS_ADMIN_KEMENDAGRI_1, 
                style: style_BATAS_ADMIN_KEMENDAGRI_1,
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMIN_KEMENDAGRI_1.png" /> BATAS_ADMIN_KEMENDAGRI'
            });
var format_INSTRUMENPENGENDALIANSAWAH_2 = new ol.format.GeoJSON();
var features_INSTRUMENPENGENDALIANSAWAH_2 = format_INSTRUMENPENGENDALIANSAWAH_2.readFeatures(json_INSTRUMENPENGENDALIANSAWAH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_INSTRUMENPENGENDALIANSAWAH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTRUMENPENGENDALIANSAWAH_2.addFeatures(features_INSTRUMENPENGENDALIANSAWAH_2);
var lyr_INSTRUMENPENGENDALIANSAWAH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INSTRUMENPENGENDALIANSAWAH_2, 
                style: style_INSTRUMENPENGENDALIANSAWAH_2,
                interactive: true,
                title: '<img src="styles/legend/INSTRUMENPENGENDALIANSAWAH_2.png" /> INSTRUMEN PENGENDALIAN SAWAH'
            });

lyr_SATELIT_GOOGLE_0.setVisible(true);lyr_BATAS_ADMIN_KEMENDAGRI_1.setVisible(true);lyr_INSTRUMENPENGENDALIANSAWAH_2.setVisible(false);
var layersList = [lyr_SATELIT_GOOGLE_0,lyr_BATAS_ADMIN_KEMENDAGRI_1,lyr_INSTRUMENPENGENDALIANSAWAH_2];
lyr_BATAS_ADMIN_KEMENDAGRI_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'ORIG_FID': 'ORIG_FID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_INSTRUMENPENGENDALIANSAWAH_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count_1': 'Join_Count', 'TARGET_FID_1': 'TARGET_FID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'kecamatan': 'kecamatan', 'desa': 'desa', 'id_desa': 'id_desa', 'Persen_LT': 'Persentase Pertumbuhan lahan terbangunan', 'Bangunan_didalam_Sawah': 'Bangunan didalam Sawah', 'Daerah_Irigasi': 'Daerah Irigasi', 'Status': 'Status Daerah Irigasi', 'Kewenangan': 'Kewenangan Daerah Irigasi', 'D_IRIGASI': 'Daerah Irigasi', 'RTRW': 'Arahan RTRW', 'KLAS_RTRW': 'Kesesuaian RTRW', 'Irigasi_09': 'Jenis Irigasi', 'TIPOL_INT': 'Tipologi Kesulitan', 'Prsn_pmukiman': 'Persentase Lahan Terbangun disekitar sawah', 'sum_fasos': 'Jumlah Sarpras Fasos disekitar sawah', 'JALAN_AKSES': 'Aksesibilitas Jalan disekitar sawah', 'KESUBURAN': 'Kesuburan Lahan', 'WET__200MM': 'Bulan Basah', 'KET_CH': 'Curah Hujan', 'BANJIR': 'Rawan Banjir', 'LONGSOR': 'Rawan Longsor', 'KEKERINGAN': 'Rawan Kekeringan', 'KLS_PROD': 'Produktivitas sawah', 'KLS_LERENG': 'Kelas Lereng', 'SKOR_FISIK': 'Skor Nilai Tambah Fisik', 'NT_FISIK': 'NILAI TAMBAH FISIK', 'POKTAN': 'Keberadaan Poktan', 'PENGHASILN': 'Penghasil utama masyarakat didesa', 'BANTUAN': 'Bantuan pertanian', 'KLS_TANI': 'Prosentase petani terhadap luas sawah', 'SKOR_SOSIAL': 'Skor Nilai Tambah Sosial', 'NT_SOSIAL': 'NILAI TAMBAH SOSIAL', 'SKOR_NT': 'SKOR_NT', 'OUTPUT_NT': 'NILAI TAMBAH FISIK DAN SOSIAL', 'BBT_ANCAMA': 'Skor Tingkat Ancamanan', 'T_KETERANC': 'TINGKAT KETERANCAMAN', 'KESULITAN': 'KESULITAN', 'TOPO_INSTR': 'TOPO_INSTR', 'RTRW_BKOTA': 'RTRW_BKOTA', 'T_GANGGUAN': 'T_GANGGUAN', 'TR1': 'TR1', 'TR2': 'TR2', 'TR3': 'TR3', 'TR4': 'TR4', 'TR5': 'TR5', 'TR6': 'TR6', 'TR7': 'TR7', 'TR8': 'TR8', 'TR9': 'TR9', 'TR10': 'TR10', 'TR11': 'TR11', 'TN1': 'TN1', 'TN2': 'TN2', 'TN3': 'TN3', 'TN4': 'TN4', 'TN5': 'TN5', 'KP1': 'KP1', 'KP2': 'KP2', 'KP3': 'KP3', 'PT1': 'PT1', 'PT2': 'PT2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_ADMIN_KEMENDAGRI_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'ORIG_FID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_INSTRUMENPENGENDALIANSAWAH_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count_1': 'Range', 'TARGET_FID_1': 'Range', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'id_desa': 'TextEdit', 'Persen_LT': 'TextEdit', 'Bangunan_didalam_Sawah': 'TextEdit', 'Daerah_Irigasi': 'TextEdit', 'Status': 'TextEdit', 'Kewenangan': 'TextEdit', 'D_IRIGASI': 'TextEdit', 'RTRW': 'TextEdit', 'KLAS_RTRW': 'TextEdit', 'Irigasi_09': 'TextEdit', 'TIPOL_INT': 'TextEdit', 'Prsn_pmukiman': 'TextEdit', 'sum_fasos': 'Range', 'JALAN_AKSES': 'TextEdit', 'KESUBURAN': 'TextEdit', 'WET__200MM': 'TextEdit', 'KET_CH': 'TextEdit', 'BANJIR': 'TextEdit', 'LONGSOR': 'TextEdit', 'KEKERINGAN': 'TextEdit', 'KLS_PROD': 'TextEdit', 'KLS_LERENG': 'TextEdit', 'SKOR_FISIK': 'TextEdit', 'NT_FISIK': 'TextEdit', 'POKTAN': 'TextEdit', 'PENGHASILN': 'TextEdit', 'BANTUAN': 'TextEdit', 'KLS_TANI': 'TextEdit', 'SKOR_SOSIAL': 'TextEdit', 'NT_SOSIAL': 'TextEdit', 'SKOR_NT': 'TextEdit', 'OUTPUT_NT': 'TextEdit', 'BBT_ANCAMA': 'Range', 'T_KETERANC': 'TextEdit', 'KESULITAN': 'TextEdit', 'TOPO_INSTR': 'TextEdit', 'RTRW_BKOTA': 'TextEdit', 'T_GANGGUAN': 'TextEdit', 'TR1': 'TextEdit', 'TR2': 'TextEdit', 'TR3': 'TextEdit', 'TR4': 'TextEdit', 'TR5': 'TextEdit', 'TR6': 'TextEdit', 'TR7': 'TextEdit', 'TR8': 'TextEdit', 'TR9': 'TextEdit', 'TR10': 'TextEdit', 'TR11': 'TextEdit', 'TN1': 'TextEdit', 'TN2': 'TextEdit', 'TN3': 'TextEdit', 'TN4': 'TextEdit', 'TN5': 'TextEdit', 'KP1': 'TextEdit', 'KP2': 'TextEdit', 'KP3': 'TextEdit', 'PT1': 'TextEdit', 'PT2': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATAS_ADMIN_KEMENDAGRI_1.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'ORIG_FID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_INSTRUMENPENGENDALIANSAWAH_2.set('fieldLabels', {'OBJECTID': 'inline label', 'Join_Count_1': 'inline label', 'TARGET_FID_1': 'inline label', 'PROVINSI': 'inline label', 'KABUPATEN': 'inline label', 'kecamatan': 'inline label', 'desa': 'inline label', 'id_desa': 'inline label', 'Persen_LT': 'inline label', 'Bangunan_didalam_Sawah': 'inline label', 'Daerah_Irigasi': 'inline label', 'Status': 'inline label', 'Kewenangan': 'inline label', 'D_IRIGASI': 'inline label', 'RTRW': 'inline label', 'KLAS_RTRW': 'inline label', 'Irigasi_09': 'inline label', 'TIPOL_INT': 'inline label', 'Prsn_pmukiman': 'inline label', 'sum_fasos': 'inline label', 'JALAN_AKSES': 'inline label', 'KESUBURAN': 'inline label', 'WET__200MM': 'inline label', 'KET_CH': 'inline label', 'BANJIR': 'inline label', 'LONGSOR': 'inline label', 'KEKERINGAN': 'inline label', 'KLS_PROD': 'inline label', 'KLS_LERENG': 'inline label', 'SKOR_FISIK': 'inline label', 'NT_FISIK': 'inline label', 'POKTAN': 'inline label', 'PENGHASILN': 'inline label', 'BANTUAN': 'inline label', 'KLS_TANI': 'inline label', 'SKOR_SOSIAL': 'inline label', 'NT_SOSIAL': 'inline label', 'SKOR_NT': 'inline label', 'OUTPUT_NT': 'inline label', 'BBT_ANCAMA': 'inline label', 'T_KETERANC': 'inline label', 'KESULITAN': 'inline label', 'TOPO_INSTR': 'inline label', 'RTRW_BKOTA': 'inline label', 'T_GANGGUAN': 'inline label', 'TR1': 'inline label', 'TR2': 'inline label', 'TR3': 'inline label', 'TR4': 'inline label', 'TR5': 'inline label', 'TR6': 'inline label', 'TR7': 'inline label', 'TR8': 'inline label', 'TR9': 'inline label', 'TR10': 'inline label', 'TR11': 'inline label', 'TN1': 'inline label', 'TN2': 'inline label', 'TN3': 'inline label', 'TN4': 'inline label', 'TN5': 'inline label', 'KP1': 'inline label', 'KP2': 'inline label', 'KP3': 'inline label', 'PT1': 'inline label', 'PT2': 'inline label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_INSTRUMENPENGENDALIANSAWAH_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});