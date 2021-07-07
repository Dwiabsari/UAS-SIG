var wms_layers = [];
var format_Demak_0 = new ol.format.GeoJSON();
var features_Demak_0 = format_Demak_0.readFeatures(json_Demak_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demak_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Demak_0.addFeatures(features_Demak_0);var lyr_Demak_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Demak_0, 
                style: style_Demak_0,
    title: 'Demak<br />\
    <img src="styles/legend/Demak_0_0.png" /> Bonang<br />\
    <img src="styles/legend/Demak_0_1.png" /> Demak<br />\
    <img src="styles/legend/Demak_0_2.png" /> Dempet<br />\
    <img src="styles/legend/Demak_0_3.png" /> Gajah<br />\
    <img src="styles/legend/Demak_0_4.png" /> Guntur<br />\
    <img src="styles/legend/Demak_0_5.png" /> Karang Tengah<br />\
    <img src="styles/legend/Demak_0_6.png" /> Karanganyar<br />\
    <img src="styles/legend/Demak_0_7.png" /> Karangawen<br />\
    <img src="styles/legend/Demak_0_8.png" /> Kebonagung<br />\
    <img src="styles/legend/Demak_0_9.png" /> Mijen<br />\
    <img src="styles/legend/Demak_0_10.png" /> Mranggen<br />\
    <img src="styles/legend/Demak_0_11.png" /> Sayung<br />\
    <img src="styles/legend/Demak_0_12.png" /> Wedung<br />\
    <img src="styles/legend/Demak_0_13.png" /> Wonosalam<br />\
    <img src="styles/legend/Demak_0_14.png" /> <br />'
        });

lyr_Demak_0.setVisible(true);
var layersList = [lyr_Demak_0];
lyr_Demak_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'jmlh_smk': 'jmlh_smk', 'Smk_Negeri': 'Smk_Negeri', 'Smk_Swata': 'Smk_Swata', });
lyr_Demak_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'jmlh_smk': 'TextEdit', 'Smk_Negeri': 'TextEdit', 'Smk_Swata': 'TextEdit', });
lyr_Demak_0.set('fieldLabels', {'PROVINSI': 'no label', 'KECAMATAN': 'no label', 'KODE_KEC': 'no label', 'KODE_KAB': 'no label', 'SHAPE_LENG': 'no label', 'KODE_PROP': 'no label', 'KABUPATEN': 'no label', 'SHAPE_LE_1': 'inline label', 'SHAPE_AREA': 'inline label', 'jmlh_smk': 'inline label', 'Smk_Negeri': 'no label', 'Smk_Swata': 'no label', });
lyr_Demak_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});