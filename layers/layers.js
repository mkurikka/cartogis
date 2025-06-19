ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([-30689.026013, 6635144.373872, 1150266.030166, 7811144.373872]);
var wms_layers = [];


        var lyr_ESRIbasemap_0 = new ol.layer.Tile({
            'title': 'ESRI basemap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Finland_1 = new ol.format.GeoJSON();
var features_Finland_1 = format_Finland_1.readFeatures(json_Finland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Finland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finland_1.addFeatures(features_Finland_1);
var lyr_Finland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Finland_1, 
                style: style_Finland_1,
                popuplayertitle: 'Finland',
                interactive: false,
                title: '<img src="styles/legend/Finland_1.png" /> Finland'
            });
var format_Eumedoniaeumedon_2 = new ol.format.GeoJSON();
var features_Eumedoniaeumedon_2 = format_Eumedoniaeumedon_2.readFeatures(json_Eumedoniaeumedon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Eumedoniaeumedon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eumedoniaeumedon_2.addFeatures(features_Eumedoniaeumedon_2);
var lyr_Eumedoniaeumedon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eumedoniaeumedon_2, 
                style: style_Eumedoniaeumedon_2,
                popuplayertitle: 'Eumedonia eumedon',
                interactive: true,
    title: 'Eumedonia eumedon<br />\
    <img src="styles/legend/Eumedoniaeumedon_2_0.png" /> -49 - -26<br />\
    <img src="styles/legend/Eumedoniaeumedon_2_1.png" /> -25 - -6<br />\
    <img src="styles/legend/Eumedoniaeumedon_2_2.png" /> -5 - 2<br />\
    <img src="styles/legend/Eumedoniaeumedon_2_3.png" /> 3 - 26<br />\
    <img src="styles/legend/Eumedoniaeumedon_2_4.png" /> 27 - 49<br />' });

lyr_ESRIbasemap_0.setVisible(true);lyr_Finland_1.setVisible(true);lyr_Eumedoniaeumedon_2.setVisible(true);
var layersList = [lyr_ESRIbasemap_0,lyr_Finland_1,lyr_Eumedoniaeumedon_2];
lyr_Finland_1.set('fieldAliases', {'name': 'name', 'id': 'id', 'maakunta': 'maakunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', });
lyr_Eumedoniaeumedon_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'NUMPOINTS_90s': 'NUMPOINTS_90s', 'fid_2': 'fid_2', 'id_2': 'id_2', 'left_2': 'left_2', 'top_2': 'top_2', 'right_2': 'right_2', 'bottom_2': 'bottom_2', 'row_index_2': 'row_index_2', 'col_index_2': 'col_index_2', 'NUMPOINTS_20s': 'NUMPOINTS_20s', 'change': 'change', });
lyr_Finland_1.set('fieldImages', {'name': 'TextEdit', 'id': 'Range', 'maakunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', });
lyr_Eumedoniaeumedon_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'NUMPOINTS_90s': 'TextEdit', 'fid_2': 'TextEdit', 'id_2': 'TextEdit', 'left_2': 'TextEdit', 'top_2': 'TextEdit', 'right_2': 'TextEdit', 'bottom_2': 'TextEdit', 'row_index_2': 'TextEdit', 'col_index_2': 'TextEdit', 'NUMPOINTS_20s': 'TextEdit', 'change': 'Range', });
lyr_Finland_1.set('fieldLabels', {'name': 'hidden field', 'id': 'hidden field', 'maakunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'hidden field', 'namn': 'hidden field', });
lyr_Eumedoniaeumedon_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'NUMPOINTS_90s': 'hidden field', 'fid_2': 'hidden field', 'id_2': 'hidden field', 'left_2': 'hidden field', 'top_2': 'hidden field', 'right_2': 'hidden field', 'bottom_2': 'hidden field', 'row_index_2': 'hidden field', 'col_index_2': 'hidden field', 'NUMPOINTS_20s': 'hidden field', 'change': 'inline label - always visible', });
lyr_Eumedoniaeumedon_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});