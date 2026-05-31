var wms_layers = [];


        var lyr_KapOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Kapта OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_KapESRIGraylight_1 = new ol.layer.Tile({
            'title': 'Kapта ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Cd_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cd, кратность ПДК<br />\
    <img src="styles/legend/Cd_2_0.png" /> 0-0,1 ПДК<br />\
    <img src="styles/legend/Cd_2_1.png" /> 0,1-0,3 ПДК<br />\
    <img src="styles/legend/Cd_2_2.png" /> > 0,3 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cd_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var lyr_Pb_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pb, кратность ПДК<br />\
    <img src="styles/legend/Pb_3_0.png" /> 0-0,5 ПДК<br />\
    <img src="styles/legend/Pb_3_1.png" /> 0,5-1 ПДК<br />\
    <img src="styles/legend/Pb_3_2.png" /> > 1 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pb_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var lyr_Zn_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Zn, кратность ПДК<br />\
    <img src="styles/legend/Zn_4_0.png" /> <= 70,0000<br />\
    <img src="styles/legend/Zn_4_1.png" /> 70,0000 - 91,0000<br />\
    <img src="styles/legend/Zn_4_2.png" /> > 91,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Zn_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var lyr_Cu_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cu, кратность ПДК<br />\
    <img src="styles/legend/Cu_5_0.png" /> 0-0 ,5 ПДК<br />\
    <img src="styles/legend/Cu_5_1.png" /> 0,5-1 ПДК<br />\
    <img src="styles/legend/Cu_5_2.png" /> > 1 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cu_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var lyr_Ni_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ni, кратность ПДК<br />\
    <img src="styles/legend/Ni_6_0.png" /> 0-0,1 ПДК<br />\
    <img src="styles/legend/Ni_6_1.png" /> 0,1-0,3 ПДК<br />\
    <img src="styles/legend/Ni_6_2.png" /> > 0,3 ПДК<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ni_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var lyr_kap_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'kapта коэффициента магнитного <br>усиления почв (MEFK)<br />\
    <img src="styles/legend/kap_7_0.png" /> нет обогащения<br />\
    <img src="styles/legend/kap_7_1.png" /> низкий<br />\
    <img src="styles/legend/kap_7_2.png" /> средний<br />\
    <img src="styles/legend/kap_7_3.png" /> высокий<br />\
    <img src="styles/legend/kap_7_4.png" /> очень высокий<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/kap_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6490406.232467, 8044848.551886, 6495631.277455, 8055551.627269]
        })
    });
var format_OMB_8 = new ol.format.GeoJSON();
var features_OMB_8 = format_OMB_8.readFeatures(json_OMB_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OMB_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OMB_8.addFeatures(features_OMB_8);
var lyr_OMB_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OMB_8, 
                style: style_OMB_8,
                popuplayertitle: 'OMB, точки',
                interactive: true,
                title: '<img src="styles/legend/OMB_8.png" /> OMB, точки'
            });
var format_TM_9 = new ol.format.GeoJSON();
var features_TM_9 = format_TM_9.readFeatures(json_TM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TM_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TM_9.addFeatures(features_TM_9);
var lyr_TM_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TM_9, 
                style: style_TM_9,
                popuplayertitle: 'TM, точки',
                interactive: true,
                title: '<img src="styles/legend/TM_9.png" /> TM, точки'
            });
var format_ropo_10 = new ol.format.GeoJSON();
var features_ropo_10 = format_ropo_10.readFeatures(json_ropo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ropo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ropo_10.addFeatures(features_ropo_10);
var lyr_ropo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ropo_10, 
                style: style_ropo_10,
                popuplayertitle: 'ropoд Горнозаводск',
                interactive: false,
                title: '<img src="styles/legend/ropo_10.png" /> ropoд Горнозаводск'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: 'область исследований',
                interactive: false,
                title: '<img src="styles/legend/_11.png" /> область исследований'
            });

lyr_KapOpenStreetMap_0.setVisible(false);lyr_KapESRIGraylight_1.setVisible(true);lyr_Cd_2.setVisible(false);lyr_Pb_3.setVisible(false);lyr_Zn_4.setVisible(false);lyr_Cu_5.setVisible(false);lyr_Ni_6.setVisible(false);lyr_kap_7.setVisible(true);lyr_OMB_8.setVisible(false);lyr_TM_9.setVisible(true);lyr_ropo_10.setVisible(true);lyr__11.setVisible(true);
var layersList = [lyr_KapOpenStreetMap_0,lyr_KapESRIGraylight_1,lyr_Cd_2,lyr_Pb_3,lyr_Zn_4,lyr_Cu_5,lyr_Ni_6,lyr_kap_7,lyr_OMB_8,lyr_TM_9,lyr_ropo_10,lyr__11];
lyr_OMB_8.set('fieldAliases', {'id': 'номер пробы', 'ms_soil': 'ОМВ, &aelig;&times;10<sup>-3</sup>СИ', 'MEFK_soil': 'MEFK почв', });
lyr_TM_9.set('fieldAliases', {'id': 'номер пробы', 'ms_soil': 'ОМВ, &aelig;&times;10<sup>-3</sup>СИ', 'MEFK_soil': 'MEFK почв', 'Cd': 'Cd, мг/кг', 'Cu': 'Cu, мг/кг', 'Ni': 'Ni, мг/кг', 'Zn': 'Zn, мг/кг', 'Pb': 'Pb, мг/кг', });
lyr_ropo_10.set('fieldAliases', {'name': 'name', });
lyr__11.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_OMB_8.set('fieldImages', {'id': '', 'ms_soil': 'TextEdit', 'MEFK_soil': 'TextEdit', });
lyr_TM_9.set('fieldImages', {'id': 'TextEdit', 'ms_soil': '', 'MEFK_soil': '', 'Cd': '', 'Cu': 'TextEdit', 'Ni': 'TextEdit', 'Zn': '', 'Pb': 'TextEdit', });
lyr_ropo_10.set('fieldImages', {'name': 'TextEdit', });
lyr__11.set('fieldImages', {'id': 'TextEdit', 'area': '', });
lyr_OMB_8.set('fieldLabels', {'id': 'inline label - always visible', 'ms_soil': 'inline label - always visible', 'MEFK_soil': 'inline label - always visible', });
lyr_TM_9.set('fieldLabels', {'id': 'inline label - always visible', 'ms_soil': 'inline label - always visible', 'MEFK_soil': 'inline label - always visible', 'Cd': 'inline label - always visible', 'Cu': 'inline label - always visible', 'Ni': 'inline label - always visible', 'Zn': 'inline label - always visible', 'Pb': 'inline label - always visible', });
lyr_ropo_10.set('fieldLabels', {'name': 'no label', });
lyr__11.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});