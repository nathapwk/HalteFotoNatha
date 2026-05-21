var wms_layers = [];

var format_Batas_Administrasi_0 = new ol.format.GeoJSON();
var features_Batas_Administrasi_0 = format_Batas_Administrasi_0.readFeatures(json_Batas_Administrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_0.addFeatures(features_Batas_Administrasi_0);
var lyr_Batas_Administrasi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_0, 
                style: style_Batas_Administrasi_0,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_0.png" /> Batas_Administrasi'
            });
var format_AreaPerumahan800mBelajarPostTestintersection_1 = new ol.format.GeoJSON();
var features_AreaPerumahan800mBelajarPostTestintersection_1 = format_AreaPerumahan800mBelajarPostTestintersection_1.readFeatures(json_AreaPerumahan800mBelajarPostTestintersection_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahan800mBelajarPostTestintersection_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahan800mBelajarPostTestintersection_1.addFeatures(features_AreaPerumahan800mBelajarPostTestintersection_1);
var lyr_AreaPerumahan800mBelajarPostTestintersection_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahan800mBelajarPostTestintersection_1, 
                style: style_AreaPerumahan800mBelajarPostTestintersection_1,
                popuplayertitle: 'Area Perumahan 800m Belajar PostTest — intersection',
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahan800mBelajarPostTestintersection_1.png" /> Area Perumahan 800m Belajar PostTest — intersection'
            });
var format_AreaPublik400mBelajarPostTestintersection_2 = new ol.format.GeoJSON();
var features_AreaPublik400mBelajarPostTestintersection_2 = format_AreaPublik400mBelajarPostTestintersection_2.readFeatures(json_AreaPublik400mBelajarPostTestintersection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPublik400mBelajarPostTestintersection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPublik400mBelajarPostTestintersection_2.addFeatures(features_AreaPublik400mBelajarPostTestintersection_2);
var lyr_AreaPublik400mBelajarPostTestintersection_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPublik400mBelajarPostTestintersection_2, 
                style: style_AreaPublik400mBelajarPostTestintersection_2,
                popuplayertitle: 'Area Publik 400m Belajar PostTest — intersection',
                interactive: true,
                title: '<img src="styles/legend/AreaPublik400mBelajarPostTestintersection_2.png" /> Area Publik 400m Belajar PostTest — intersection'
            });
var format_AreaKomersial400mBelajarPostTestintersection_3 = new ol.format.GeoJSON();
var features_AreaKomersial400mBelajarPostTestintersection_3 = format_AreaKomersial400mBelajarPostTestintersection_3.readFeatures(json_AreaKomersial400mBelajarPostTestintersection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaKomersial400mBelajarPostTestintersection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaKomersial400mBelajarPostTestintersection_3.addFeatures(features_AreaKomersial400mBelajarPostTestintersection_3);
var lyr_AreaKomersial400mBelajarPostTestintersection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaKomersial400mBelajarPostTestintersection_3, 
                style: style_AreaKomersial400mBelajarPostTestintersection_3,
                popuplayertitle: 'Area Komersial 400m Belajar PostTest — intersection',
                interactive: true,
                title: '<img src="styles/legend/AreaKomersial400mBelajarPostTestintersection_3.png" /> Area Komersial 400m Belajar PostTest — intersection'
            });
var format_Halte_4 = new ol.format.GeoJSON();
var features_Halte_4 = format_Halte_4.readFeatures(json_Halte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_4.addFeatures(features_Halte_4);
var lyr_Halte_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_4, 
                style: style_Halte_4,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_4.png" /> Halte'
            });

lyr_Batas_Administrasi_0.setVisible(true);lyr_AreaPerumahan800mBelajarPostTestintersection_1.setVisible(true);lyr_AreaPublik400mBelajarPostTestintersection_2.setVisible(true);lyr_AreaKomersial400mBelajarPostTestintersection_3.setVisible(true);lyr_Halte_4.setVisible(true);
var layersList = [lyr_Batas_Administrasi_0,lyr_AreaPerumahan800mBelajarPostTestintersection_1,lyr_AreaPublik400mBelajarPostTestintersection_2,lyr_AreaKomersial400mBelajarPostTestintersection_3,lyr_Halte_4];
lyr_Batas_Administrasi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas Kedir': 'Luas Kedir', });
lyr_AreaPerumahan800mBelajarPostTestintersection_1.set('fieldAliases', {'fid': 'fid', 'NAMZON': 'NAMZON', 'fid_2': 'fid_2', 'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', 'Luas 1': 'Luas 1', });
lyr_AreaPublik400mBelajarPostTestintersection_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', 'fid_2': 'fid_2', 'NAMZON': 'NAMZON', 'Luas': 'Luas', 'Persentase': 'Persentase', });
lyr_AreaKomersial400mBelajarPostTestintersection_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', 'fid_2': 'fid_2', 'NAMZON': 'NAMZON', 'Luas': 'Luas', 'Persentase': 'Persentase', });
lyr_Halte_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Foto': 'Foto', });
lyr_Batas_Administrasi_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas Kedir': '', });
lyr_AreaPerumahan800mBelajarPostTestintersection_1.set('fieldImages', {'fid': 'TextEdit', 'NAMZON': 'TextEdit', 'fid_2': 'TextEdit', 'id': 'Range', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'Luas 1': '', });
lyr_AreaPublik400mBelajarPostTestintersection_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'fid_2': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas': 'TextEdit', 'Persentase': '', });
lyr_AreaKomersial400mBelajarPostTestintersection_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'fid_2': 'TextEdit', 'NAMZON': 'TextEdit', 'Luas': 'Range', 'Persentase': '', });
lyr_Halte_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Batas_Administrasi_0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luas Kedir': 'no label', });
lyr_AreaPerumahan800mBelajarPostTestintersection_1.set('fieldLabels', {'fid': 'no label', 'NAMZON': 'no label', 'fid_2': 'no label', 'id': 'no label', 'Name': 'no label', 'area': 'no label', 'perimeter': 'no label', 'Luas 1': 'no label', });
lyr_AreaPublik400mBelajarPostTestintersection_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'area': 'no label', 'perimeter': 'no label', 'fid_2': 'no label', 'NAMZON': 'no label', 'Luas': 'no label', 'Persentase': 'no label', });
lyr_AreaKomersial400mBelajarPostTestintersection_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'area': 'no label', 'perimeter': 'no label', 'fid_2': 'no label', 'NAMZON': 'no label', 'Luas': 'no label', 'Persentase': 'no label', });
lyr_Halte_4.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'Foto': 'no label', });
lyr_Halte_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});