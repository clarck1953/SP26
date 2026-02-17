var wms_layers = [];


        var lyr_WorldImagery_0 = new ol.layer.Tile({
            'title': 'World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Rgionsetlocalits_1 = new ol.format.GeoJSON();
var features_Rgionsetlocalits_1 = format_Rgionsetlocalits_1.readFeatures(json_Rgionsetlocalits_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgionsetlocalits_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgionsetlocalits_1.addFeatures(features_Rgionsetlocalits_1);
var lyr_Rgionsetlocalits_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgionsetlocalits_1, 
                style: style_Rgionsetlocalits_1,
                popuplayertitle: 'Régions et localités',
                interactive: true,
                title: '<img src="styles/legend/Rgionsetlocalits_1.png" /> Régions et localités'
            });
var format_CapitalAntananarivo_2 = new ol.format.GeoJSON();
var features_CapitalAntananarivo_2 = format_CapitalAntananarivo_2.readFeatures(json_CapitalAntananarivo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalAntananarivo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalAntananarivo_2.addFeatures(features_CapitalAntananarivo_2);
var lyr_CapitalAntananarivo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalAntananarivo_2, 
                style: style_CapitalAntananarivo_2,
                popuplayertitle: 'Capital Antananarivo',
                interactive: true,
                title: '<img src="styles/legend/CapitalAntananarivo_2.png" /> Capital Antananarivo'
            });
var format_CentresRgionauxdeMaintenance_3 = new ol.format.GeoJSON();
var features_CentresRgionauxdeMaintenance_3 = format_CentresRgionauxdeMaintenance_3.readFeatures(json_CentresRgionauxdeMaintenance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentresRgionauxdeMaintenance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentresRgionauxdeMaintenance_3.addFeatures(features_CentresRgionauxdeMaintenance_3);
var lyr_CentresRgionauxdeMaintenance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentresRgionauxdeMaintenance_3, 
                style: style_CentresRgionauxdeMaintenance_3,
                popuplayertitle: 'Centres Régionaux de Maintenance',
                interactive: true,
                title: '<img src="styles/legend/CentresRgionauxdeMaintenance_3.png" /> Centres Régionaux de Maintenance'
            });
var format_Activits_4 = new ol.format.GeoJSON();
var features_Activits_4 = format_Activits_4.readFeatures(json_Activits_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activits_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activits_4.addFeatures(features_Activits_4);
var lyr_Activits_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activits_4, 
                style: style_Activits_4,
                popuplayertitle: 'Activités',
                interactive: true,
    title: 'Activités<br />\
    <img src="styles/legend/Activits_4_0.png" /> Nouvelle station automatique terrestre<br />\
    <img src="styles/legend/Activits_4_1.png" /> Stations à réhabiliter<br />\
    <img src="styles/legend/Activits_4_2.png" /> Stations à remplacer<br />\
    <img src="styles/legend/Activits_4_3.png" /> Installation Radio Sondage-UA<br />' });

lyr_WorldImagery_0.setVisible(true);lyr_Rgionsetlocalits_1.setVisible(true);lyr_CapitalAntananarivo_2.setVisible(true);lyr_CentresRgionauxdeMaintenance_3.setVisible(true);lyr_Activits_4.setVisible(true);
var layersList = [lyr_WorldImagery_0,lyr_Rgionsetlocalits_1,lyr_CapitalAntananarivo_2,lyr_CentresRgionauxdeMaintenance_3,lyr_Activits_4];
lyr_Rgionsetlocalits_1.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'CLA_ADM_AN': 'CLA_ADM_AN', 'CLA_ADM_NO': 'CLA_ADM_NO', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'CLAADMSOFF': 'CLAADMSOFF', });
lyr_CapitalAntananarivo_2.set('fieldAliases', {'ID': 'ID', 'TOPONYME': 'TOPONYME', 'CLA_ADM_AN': 'CLA_ADM_AN', 'CLA_ADM_NO': 'CLA_ADM_NO', 'REGION': 'REGION', 'DEPARTEMEN': 'DEPARTEMEN', 'COMMUNE': 'COMMUNE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', });
lyr_CentresRgionauxdeMaintenance_3.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', 'SOFF_Fev26': 'SOFF_Fev26', });
lyr_Activits_4.set('fieldAliases', {'WMO-Statio': 'WMO-Statio', 'StationNam': 'StationNam', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Height': 'Height', 'Country': 'Country', 'StType': 'StType', 'SOFF_Fev26': 'SOFF_Fev26', });
lyr_Rgionsetlocalits_1.set('fieldImages', {'ID': 'Range', 'TOPONYME': 'TextEdit', 'CLA_ADM_AN': 'TextEdit', 'CLA_ADM_NO': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'CLAADMSOFF': 'TextEdit', });
lyr_CapitalAntananarivo_2.set('fieldImages', {'ID': 'Range', 'TOPONYME': 'TextEdit', 'CLA_ADM_AN': 'TextEdit', 'CLA_ADM_NO': 'TextEdit', 'REGION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'COMMUNE': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', });
lyr_CentresRgionauxdeMaintenance_3.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', 'SOFF_Fev26': 'TextEdit', });
lyr_Activits_4.set('fieldImages', {'WMO-Statio': 'TextEdit', 'StationNam': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Height': 'TextEdit', 'Country': 'TextEdit', 'StType': 'TextEdit', 'SOFF_Fev26': 'TextEdit', });
lyr_Rgionsetlocalits_1.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'CLA_ADM_AN': 'no label', 'CLA_ADM_NO': 'no label', 'REGION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'CLAADMSOFF': 'no label', });
lyr_CapitalAntananarivo_2.set('fieldLabels', {'ID': 'no label', 'TOPONYME': 'no label', 'CLA_ADM_AN': 'no label', 'CLA_ADM_NO': 'no label', 'REGION': 'no label', 'DEPARTEMEN': 'no label', 'COMMUNE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', });
lyr_CentresRgionauxdeMaintenance_3.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', 'SOFF_Fev26': 'no label', });
lyr_Activits_4.set('fieldLabels', {'WMO-Statio': 'no label', 'StationNam': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Height': 'no label', 'Country': 'no label', 'StType': 'no label', 'SOFF_Fev26': 'no label', });
lyr_Activits_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});