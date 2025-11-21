var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriDarkGray_1 = new ol.layer.Tile({
            'title': 'Esri Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
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
var format_LayerIKMPERHIASANBINAAN_4 = new ol.format.GeoJSON();
var features_LayerIKMPERHIASANBINAAN_4 = format_LayerIKMPERHIASANBINAAN_4.readFeatures(json_LayerIKMPERHIASANBINAAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LayerIKMPERHIASANBINAAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LayerIKMPERHIASANBINAAN_4.addFeatures(features_LayerIKMPERHIASANBINAAN_4);
cluster_LayerIKMPERHIASANBINAAN_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LayerIKMPERHIASANBINAAN_4
});
var lyr_LayerIKMPERHIASANBINAAN_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LayerIKMPERHIASANBINAAN_4, 
                style: style_LayerIKMPERHIASANBINAAN_4,
                popuplayertitle: 'Layer IKM PERHIASAN BINAAN',
                interactive: true,
                title: '<img src="styles/legend/LayerIKMPERHIASANBINAAN_4.png" /> Layer IKM PERHIASAN BINAAN'
            });
var format_LayerIKMALATMUSIKBINAAN_5 = new ol.format.GeoJSON();
var features_LayerIKMALATMUSIKBINAAN_5 = format_LayerIKMALATMUSIKBINAAN_5.readFeatures(json_LayerIKMALATMUSIKBINAAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LayerIKMALATMUSIKBINAAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LayerIKMALATMUSIKBINAAN_5.addFeatures(features_LayerIKMALATMUSIKBINAAN_5);
cluster_LayerIKMALATMUSIKBINAAN_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LayerIKMALATMUSIKBINAAN_5
});
var lyr_LayerIKMALATMUSIKBINAAN_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LayerIKMALATMUSIKBINAAN_5, 
                style: style_LayerIKMALATMUSIKBINAAN_5,
                popuplayertitle: 'Layer IKM ALAT MUSIK BINAAN',
                interactive: true,
                title: '<img src="styles/legend/LayerIKMALATMUSIKBINAAN_5.png" /> Layer IKM ALAT MUSIK BINAAN'
            });
var format_LayerIKMALATMUSIKPOTENSIBINAAN_6 = new ol.format.GeoJSON();
var features_LayerIKMALATMUSIKPOTENSIBINAAN_6 = format_LayerIKMALATMUSIKPOTENSIBINAAN_6.readFeatures(json_LayerIKMALATMUSIKPOTENSIBINAAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LayerIKMALATMUSIKPOTENSIBINAAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LayerIKMALATMUSIKPOTENSIBINAAN_6.addFeatures(features_LayerIKMALATMUSIKPOTENSIBINAAN_6);
cluster_LayerIKMALATMUSIKPOTENSIBINAAN_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LayerIKMALATMUSIKPOTENSIBINAAN_6
});
var lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LayerIKMALATMUSIKPOTENSIBINAAN_6, 
                style: style_LayerIKMALATMUSIKPOTENSIBINAAN_6,
                popuplayertitle: 'Layer IKM ALAT MUSIK POTENSI BINAAN',
                interactive: true,
                title: '<img src="styles/legend/LayerIKMALATMUSIKPOTENSIBINAAN_6.png" /> Layer IKM ALAT MUSIK POTENSI BINAAN'
            });
var format_LayerIKMPERHIASANPOTENSIBINAAN_7 = new ol.format.GeoJSON();
var features_LayerIKMPERHIASANPOTENSIBINAAN_7 = format_LayerIKMPERHIASANPOTENSIBINAAN_7.readFeatures(json_LayerIKMPERHIASANPOTENSIBINAAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LayerIKMPERHIASANPOTENSIBINAAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LayerIKMPERHIASANPOTENSIBINAAN_7.addFeatures(features_LayerIKMPERHIASANPOTENSIBINAAN_7);
cluster_LayerIKMPERHIASANPOTENSIBINAAN_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LayerIKMPERHIASANPOTENSIBINAAN_7
});
var lyr_LayerIKMPERHIASANPOTENSIBINAAN_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LayerIKMPERHIASANPOTENSIBINAAN_7, 
                style: style_LayerIKMPERHIASANPOTENSIBINAAN_7,
                popuplayertitle: 'Layer IKM PERHIASAN POTENSI BINAAN',
                interactive: true,
                title: '<img src="styles/legend/LayerIKMPERHIASANPOTENSIBINAAN_7.png" /> Layer IKM PERHIASAN POTENSI BINAAN'
            });

lyr_CartoDark_0.setVisible(true);lyr_EsriDarkGray_1.setVisible(true);lyr_CartoLight_2.setVisible(true);lyr_GoogleMaps_3.setVisible(true);lyr_LayerIKMPERHIASANBINAAN_4.setVisible(true);lyr_LayerIKMALATMUSIKBINAAN_5.setVisible(true);lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6.setVisible(true);lyr_LayerIKMPERHIASANPOTENSIBINAAN_7.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_EsriDarkGray_1,lyr_CartoLight_2,lyr_GoogleMaps_3,lyr_LayerIKMPERHIASANBINAAN_4,lyr_LayerIKMALATMUSIKBINAAN_5,lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6,lyr_LayerIKMPERHIASANPOTENSIBINAAN_7];
lyr_LayerIKMPERHIASANBINAAN_4.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_LayerIKMALATMUSIKBINAAN_5.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_LayerIKMPERHIASANPOTENSIBINAAN_7.set('fieldAliases', {'id': 'id', 'IKM': 'IKM', 'Pemilik': 'Pemilik', 'KBLI': 'KBLI', 'Alamat': 'Alamat', 'Kontak': 'Kontak', 'Fasilitasi': 'Fasilitasi', 'Katalog': 'Katalog', });
lyr_LayerIKMPERHIASANBINAAN_4.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_LayerIKMALATMUSIKBINAAN_5.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_LayerIKMPERHIASANPOTENSIBINAAN_7.set('fieldImages', {'id': 'TextEdit', 'IKM': 'TextEdit', 'Pemilik': 'TextEdit', 'KBLI': 'TextEdit', 'Alamat': 'TextEdit', 'Kontak': 'TextEdit', 'Fasilitasi': 'TextEdit', 'Katalog': 'TextEdit', });
lyr_LayerIKMPERHIASANBINAAN_4.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'no label', });
lyr_LayerIKMALATMUSIKBINAAN_5.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_LayerIKMALATMUSIKPOTENSIBINAAN_6.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_LayerIKMPERHIASANPOTENSIBINAAN_7.set('fieldLabels', {'id': 'no label', 'IKM': 'inline label - always visible', 'Pemilik': 'inline label - always visible', 'KBLI': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Kontak': 'inline label - always visible', 'Fasilitasi': 'inline label - always visible', 'Katalog': 'inline label - always visible', });
lyr_LayerIKMPERHIASANPOTENSIBINAAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});