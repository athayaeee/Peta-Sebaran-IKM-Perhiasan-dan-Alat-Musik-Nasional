var wms_layers = [];


        var lyr_EsriDarkGray_0 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CartoDark_1 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_CartoLight_2 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_GoogleMaps_3 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_NusaTenggaraBarat_4 = new ol.format.GeoJSON();
var features_NusaTenggaraBarat_4 = format_NusaTenggaraBarat_4.readFeatures(json_NusaTenggaraBarat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NusaTenggaraBarat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NusaTenggaraBarat_4.addFeatures(features_NusaTenggaraBarat_4);
var lyr_NusaTenggaraBarat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NusaTenggaraBarat_4, 
                style: style_NusaTenggaraBarat_4,
                popuplayertitle: 'Nusa Tenggara Barat',
                interactive: true,
                title: '<img src="styles/legend/NusaTenggaraBarat_4.png" /> Nusa Tenggara Barat'
            });
var format_SulawesiSelatan_5 = new ol.format.GeoJSON();
var features_SulawesiSelatan_5 = format_SulawesiSelatan_5.readFeatures(json_SulawesiSelatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SulawesiSelatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SulawesiSelatan_5.addFeatures(features_SulawesiSelatan_5);
var lyr_SulawesiSelatan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SulawesiSelatan_5, 
                style: style_SulawesiSelatan_5,
                popuplayertitle: 'Sulawesi Selatan',
                interactive: true,
                title: '<img src="styles/legend/SulawesiSelatan_5.png" /> Sulawesi Selatan'
            });
var format_BALI_6 = new ol.format.GeoJSON();
var features_BALI_6 = format_BALI_6.readFeatures(json_BALI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BALI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BALI_6.addFeatures(features_BALI_6);
var lyr_BALI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BALI_6, 
                style: style_BALI_6,
                popuplayertitle: 'BALI',
                interactive: true,
                title: '<img src="styles/legend/BALI_6.png" /> BALI'
            });
var format_KalimantanSelatan_7 = new ol.format.GeoJSON();
var features_KalimantanSelatan_7 = format_KalimantanSelatan_7.readFeatures(json_KalimantanSelatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KalimantanSelatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KalimantanSelatan_7.addFeatures(features_KalimantanSelatan_7);
var lyr_KalimantanSelatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KalimantanSelatan_7, 
                style: style_KalimantanSelatan_7,
                popuplayertitle: 'Kalimantan Selatan',
                interactive: true,
                title: '<img src="styles/legend/KalimantanSelatan_7.png" /> Kalimantan Selatan'
            });
var format_JawaTimur_8 = new ol.format.GeoJSON();
var features_JawaTimur_8 = format_JawaTimur_8.readFeatures(json_JawaTimur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaTimur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JawaTimur_8.addFeatures(features_JawaTimur_8);
var lyr_JawaTimur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JawaTimur_8, 
                style: style_JawaTimur_8,
                popuplayertitle: 'Jawa Timur',
                interactive: true,
                title: '<img src="styles/legend/JawaTimur_8.png" /> Jawa Timur'
            });
var format_DIYogyakarta_9 = new ol.format.GeoJSON();
var features_DIYogyakarta_9 = format_DIYogyakarta_9.readFeatures(json_DIYogyakarta_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIYogyakarta_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIYogyakarta_9.addFeatures(features_DIYogyakarta_9);
var lyr_DIYogyakarta_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIYogyakarta_9, 
                style: style_DIYogyakarta_9,
                popuplayertitle: 'DI Yogyakarta',
                interactive: true,
                title: '<img src="styles/legend/DIYogyakarta_9.png" /> DI Yogyakarta'
            });
var format_JawaTengah_10 = new ol.format.GeoJSON();
var features_JawaTengah_10 = format_JawaTengah_10.readFeatures(json_JawaTengah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaTengah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JawaTengah_10.addFeatures(features_JawaTengah_10);
var lyr_JawaTengah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JawaTengah_10, 
                style: style_JawaTengah_10,
                popuplayertitle: 'Jawa Tengah',
                interactive: true,
                title: '<img src="styles/legend/JawaTengah_10.png" /> Jawa Tengah'
            });
var format_JawaBarat_11 = new ol.format.GeoJSON();
var features_JawaBarat_11 = format_JawaBarat_11.readFeatures(json_JawaBarat_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaBarat_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JawaBarat_11.addFeatures(features_JawaBarat_11);
var lyr_JawaBarat_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JawaBarat_11, 
                style: style_JawaBarat_11,
                popuplayertitle: 'Jawa Barat',
                interactive: true,
                title: '<img src="styles/legend/JawaBarat_11.png" /> Jawa Barat'
            });
var format_DKIJakarta_12 = new ol.format.GeoJSON();
var features_DKIJakarta_12 = format_DKIJakarta_12.readFeatures(json_DKIJakarta_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DKIJakarta_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DKIJakarta_12.addFeatures(features_DKIJakarta_12);
var lyr_DKIJakarta_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DKIJakarta_12, 
                style: style_DKIJakarta_12,
                popuplayertitle: 'DKI Jakarta',
                interactive: true,
                title: '<img src="styles/legend/DKIJakarta_12.png" /> DKI Jakarta'
            });
var format_BANTEN_13 = new ol.format.GeoJSON();
var features_BANTEN_13 = format_BANTEN_13.readFeatures(json_BANTEN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANTEN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANTEN_13.addFeatures(features_BANTEN_13);
var lyr_BANTEN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANTEN_13, 
                style: style_BANTEN_13,
                popuplayertitle: 'BANTEN',
                interactive: true,
                title: '<img src="styles/legend/BANTEN_13.png" /> BANTEN'
            });
var format_Lampung_14 = new ol.format.GeoJSON();
var features_Lampung_14 = format_Lampung_14.readFeatures(json_Lampung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lampung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampung_14.addFeatures(features_Lampung_14);
var lyr_Lampung_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampung_14, 
                style: style_Lampung_14,
                popuplayertitle: 'Lampung',
                interactive: true,
                title: '<img src="styles/legend/Lampung_14.png" /> Lampung'
            });
var format_SumateraBarat_15 = new ol.format.GeoJSON();
var features_SumateraBarat_15 = format_SumateraBarat_15.readFeatures(json_SumateraBarat_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumateraBarat_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumateraBarat_15.addFeatures(features_SumateraBarat_15);
var lyr_SumateraBarat_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumateraBarat_15, 
                style: style_SumateraBarat_15,
                popuplayertitle: 'Sumatera Barat',
                interactive: true,
                title: '<img src="styles/legend/SumateraBarat_15.png" /> Sumatera Barat'
            });
var format_SumateraUtara_16 = new ol.format.GeoJSON();
var features_SumateraUtara_16 = format_SumateraUtara_16.readFeatures(json_SumateraUtara_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumateraUtara_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumateraUtara_16.addFeatures(features_SumateraUtara_16);
var lyr_SumateraUtara_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumateraUtara_16, 
                style: style_SumateraUtara_16,
                popuplayertitle: 'Sumatera Utara',
                interactive: true,
                title: '<img src="styles/legend/SumateraUtara_16.png" /> Sumatera Utara'
            });
var format_IKMPERHIASANBINAAN_17 = new ol.format.GeoJSON();
var features_IKMPERHIASANBINAAN_17 = format_IKMPERHIASANBINAAN_17.readFeatures(json_IKMPERHIASANBINAAN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKMPERHIASANBINAAN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKMPERHIASANBINAAN_17.addFeatures(features_IKMPERHIASANBINAAN_17);
cluster_IKMPERHIASANBINAAN_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IKMPERHIASANBINAAN_17
});
var lyr_IKMPERHIASANBINAAN_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IKMPERHIASANBINAAN_17, 
                style: style_IKMPERHIASANBINAAN_17,
                popuplayertitle: 'IKM PERHIASAN BINAAN',
                interactive: true,
                title: '<img src="styles/legend/IKMPERHIASANBINAAN_17.png" /> IKM PERHIASAN BINAAN'
            });
var format_IKMALATMUSIKBINAAN_18 = new ol.format.GeoJSON();
var features_IKMALATMUSIKBINAAN_18 = format_IKMALATMUSIKBINAAN_18.readFeatures(json_IKMALATMUSIKBINAAN_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKMALATMUSIKBINAAN_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKMALATMUSIKBINAAN_18.addFeatures(features_IKMALATMUSIKBINAAN_18);
cluster_IKMALATMUSIKBINAAN_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IKMALATMUSIKBINAAN_18
});
var lyr_IKMALATMUSIKBINAAN_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IKMALATMUSIKBINAAN_18, 
                style: style_IKMALATMUSIKBINAAN_18,
                popuplayertitle: 'IKM ALAT MUSIK BINAAN',
                interactive: true,
                title: '<img src="styles/legend/IKMALATMUSIKBINAAN_18.png" /> IKM ALAT MUSIK BINAAN'
            });
var format_IKMALATMUSIKPOTENSIBINAAN_19 = new ol.format.GeoJSON();
var features_IKMALATMUSIKPOTENSIBINAAN_19 = format_IKMALATMUSIKPOTENSIBINAAN_19.readFeatures(json_IKMALATMUSIKPOTENSIBINAAN_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKMALATMUSIKPOTENSIBINAAN_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKMALATMUSIKPOTENSIBINAAN_19.addFeatures(features_IKMALATMUSIKPOTENSIBINAAN_19);
cluster_IKMALATMUSIKPOTENSIBINAAN_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IKMALATMUSIKPOTENSIBINAAN_19
});
var lyr_IKMALATMUSIKPOTENSIBINAAN_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IKMALATMUSIKPOTENSIBINAAN_19, 
                style: style_IKMALATMUSIKPOTENSIBINAAN_19,
                popuplayertitle: 'IKM ALAT MUSIK POTENSI BINAAN',
                interactive: true,
                title: '<img src="styles/legend/IKMALATMUSIKPOTENSIBINAAN_19.png" /> IKM ALAT MUSIK POTENSI BINAAN'
            });
var format_IKMPERHIASANPOTENSIBINAAN_20 = new ol.format.GeoJSON();
var features_IKMPERHIASANPOTENSIBINAAN_20 = format_IKMPERHIASANPOTENSIBINAAN_20.readFeatures(json_IKMPERHIASANPOTENSIBINAAN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKMPERHIASANPOTENSIBINAAN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKMPERHIASANPOTENSIBINAAN_20.addFeatures(features_IKMPERHIASANPOTENSIBINAAN_20);
cluster_IKMPERHIASANPOTENSIBINAAN_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_IKMPERHIASANPOTENSIBINAAN_20
});
var lyr_IKMPERHIASANPOTENSIBINAAN_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_IKMPERHIASANPOTENSIBINAAN_20, 
                style: style_IKMPERHIASANPOTENSIBINAAN_20,
                popuplayertitle: 'IKM PERHIASAN POTENSI BINAAN',
                interactive: true,
                title: '<img src="styles/legend/IKMPERHIASANPOTENSIBINAAN_20.png" /> IKM PERHIASAN POTENSI BINAAN'
            });

lyr_EsriDarkGray_0.setVisible(true);lyr_CartoDark_1.setVisible(true);lyr_CartoLight_2.setVisible(true);lyr_GoogleMaps_3.setVisible(true);lyr_NusaTenggaraBarat_4.setVisible(true);lyr_SulawesiSelatan_5.setVisible(true);lyr_BALI_6.setVisible(true);lyr_KalimantanSelatan_7.setVisible(true);lyr_JawaTimur_8.setVisible(true);lyr_DIYogyakarta_9.setVisible(true);lyr_JawaTengah_10.setVisible(true);lyr_JawaBarat_11.setVisible(true);lyr_DKIJakarta_12.setVisible(true);lyr_BANTEN_13.setVisible(true);lyr_Lampung_14.setVisible(true);lyr_SumateraBarat_15.setVisible(true);lyr_SumateraUtara_16.setVisible(true);lyr_IKMPERHIASANBINAAN_17.setVisible(true);lyr_IKMALATMUSIKBINAAN_18.setVisible(true);lyr_IKMALATMUSIKPOTENSIBINAAN_19.setVisible(true);lyr_IKMPERHIASANPOTENSIBINAAN_20.setVisible(true);
var layersList = [lyr_EsriDarkGray_0,lyr_CartoDark_1,lyr_CartoLight_2,lyr_GoogleMaps_3,lyr_NusaTenggaraBarat_4,lyr_SulawesiSelatan_5,lyr_BALI_6,lyr_KalimantanSelatan_7,lyr_JawaTimur_8,lyr_DIYogyakarta_9,lyr_JawaTengah_10,lyr_JawaBarat_11,lyr_DKIJakarta_12,lyr_BANTEN_13,lyr_Lampung_14,lyr_SumateraBarat_15,lyr_SumateraUtara_16,lyr_IKMPERHIASANBINAAN_17,lyr_IKMALATMUSIKBINAAN_18,lyr_IKMALATMUSIKPOTENSIBINAAN_19,lyr_IKMPERHIASANPOTENSIBINAAN_20];
lyr_NusaTenggaraBarat_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_SulawesiSelatan_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_BALI_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_KalimantanSelatan_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_JawaTimur_8.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_DIYogyakarta_9.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_JawaTengah_10.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_JawaBarat_11.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_DKIJakarta_12.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_BANTEN_13.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_Lampung_14.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_SumateraBarat_15.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_SumateraUtara_16.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', 'A1': 'A1', 'A2': 'A2', 'B1': 'B1', 'B2': 'B2', 'C1': 'C1', 'C2': 'C2', 'D1': 'D1', 'D2': 'D2', });
lyr_IKMPERHIASANBINAAN_17.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_IKMALATMUSIKBINAAN_18.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_IKMALATMUSIKPOTENSIBINAAN_19.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_IKMPERHIASANPOTENSIBINAAN_20.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_NusaTenggaraBarat_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_SulawesiSelatan_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_BALI_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_KalimantanSelatan_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_JawaTimur_8.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_DIYogyakarta_9.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_JawaTengah_10.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_JawaBarat_11.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_DKIJakarta_12.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_BANTEN_13.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_Lampung_14.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_SumateraBarat_15.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_SumateraUtara_16.set('fieldImages', {'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', 'A1': '', 'A2': '', 'B1': '', 'B2': '', 'C1': '', 'C2': '', 'D1': '', 'D2': '', });
lyr_IKMPERHIASANBINAAN_17.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_IKMALATMUSIKBINAAN_18.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_IKMALATMUSIKPOTENSIBINAAN_19.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_IKMPERHIASANPOTENSIBINAAN_20.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_NusaTenggaraBarat_4.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_SulawesiSelatan_5.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_BALI_6.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_KalimantanSelatan_7.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_JawaTimur_8.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_DIYogyakarta_9.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_JawaTengah_10.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_JawaBarat_11.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_DKIJakarta_12.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_BANTEN_13.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_Lampung_14.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_SumateraBarat_15.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_SumateraUtara_16.set('fieldLabels', {'KDPPUM': 'hidden field', 'WADMPR': 'no label', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', 'A1': 'no label', 'A2': 'no label', 'B1': 'no label', 'B2': 'no label', 'C1': 'no label', 'C2': 'no label', 'D1': 'no label', 'D2': 'no label', });
lyr_IKMPERHIASANBINAAN_17.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_IKMALATMUSIKBINAAN_18.set('fieldLabels', {'id': 'inline label - always visible', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_IKMALATMUSIKPOTENSIBINAAN_19.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_IKMPERHIASANPOTENSIBINAAN_20.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_IKMPERHIASANPOTENSIBINAAN_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});