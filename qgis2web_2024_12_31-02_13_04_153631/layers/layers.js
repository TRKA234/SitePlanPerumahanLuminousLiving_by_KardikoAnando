var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AreaPerumahanLuminousLiving_1 = new ol.format.GeoJSON();
var features_AreaPerumahanLuminousLiving_1 = format_AreaPerumahanLuminousLiving_1.readFeatures(json_AreaPerumahanLuminousLiving_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPerumahanLuminousLiving_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPerumahanLuminousLiving_1.addFeatures(features_AreaPerumahanLuminousLiving_1);
var lyr_AreaPerumahanLuminousLiving_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPerumahanLuminousLiving_1, 
                style: style_AreaPerumahanLuminousLiving_1,
                popuplayertitle: "Area Perumahan Luminous Living",
                interactive: true,
                title: '<img src="styles/legend/AreaPerumahanLuminousLiving_1.png" /> Area Perumahan Luminous Living'
            });
var format_BlokPerumahan_2 = new ol.format.GeoJSON();
var features_BlokPerumahan_2 = format_BlokPerumahan_2.readFeatures(json_BlokPerumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokPerumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokPerumahan_2.addFeatures(features_BlokPerumahan_2);
var lyr_BlokPerumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokPerumahan_2, 
                style: style_BlokPerumahan_2,
                popuplayertitle: "Blok Perumahan",
                interactive: true,
    title: 'Blok Perumahan<br />\
    <img src="styles/legend/BlokPerumahan_2_0.png" /> 1<br />\
    <img src="styles/legend/BlokPerumahan_2_1.png" /> 2<br />\
    <img src="styles/legend/BlokPerumahan_2_2.png" /> 3<br />\
    <img src="styles/legend/BlokPerumahan_2_3.png" /> 4<br />\
    <img src="styles/legend/BlokPerumahan_2_4.png" /> 5<br />\
    <img src="styles/legend/BlokPerumahan_2_5.png" /> 6<br />\
    <img src="styles/legend/BlokPerumahan_2_6.png" /> 7<br />\
    <img src="styles/legend/BlokPerumahan_2_7.png" /> 8<br />\
    <img src="styles/legend/BlokPerumahan_2_8.png" /> 9<br />\
    <img src="styles/legend/BlokPerumahan_2_9.png" /> 10<br />\
    <img src="styles/legend/BlokPerumahan_2_10.png" /> 11<br />\
    <img src="styles/legend/BlokPerumahan_2_11.png" /> 12<br />\
    <img src="styles/legend/BlokPerumahan_2_12.png" /> 13<br />\
    <img src="styles/legend/BlokPerumahan_2_13.png" /> 14<br />\
    <img src="styles/legend/BlokPerumahan_2_14.png" /> 15<br />\
    <img src="styles/legend/BlokPerumahan_2_15.png" /> 16<br />\
    <img src="styles/legend/BlokPerumahan_2_16.png" /> 17<br />\
    <img src="styles/legend/BlokPerumahan_2_17.png" /> 18<br />\
    <img src="styles/legend/BlokPerumahan_2_18.png" /> 19<br />\
    <img src="styles/legend/BlokPerumahan_2_19.png" /> 20<br />\
    <img src="styles/legend/BlokPerumahan_2_20.png" /> 21<br />\
    <img src="styles/legend/BlokPerumahan_2_21.png" /> 22<br />\
    <img src="styles/legend/BlokPerumahan_2_22.png" /> 23<br />\
    <img src="styles/legend/BlokPerumahan_2_23.png" /> 24<br />\
    <img src="styles/legend/BlokPerumahan_2_24.png" /> 25<br />\
    <img src="styles/legend/BlokPerumahan_2_25.png" /> 26<br />\
    <img src="styles/legend/BlokPerumahan_2_26.png" /> 27<br />\
    <img src="styles/legend/BlokPerumahan_2_27.png" /> 28<br />\
    <img src="styles/legend/BlokPerumahan_2_28.png" /> 29<br />\
    <img src="styles/legend/BlokPerumahan_2_29.png" /> 30<br />\
    <img src="styles/legend/BlokPerumahan_2_30.png" /> 31<br />\
    <img src="styles/legend/BlokPerumahan_2_31.png" /> 32<br />\
    <img src="styles/legend/BlokPerumahan_2_32.png" /> 33<br />\
    <img src="styles/legend/BlokPerumahan_2_33.png" /> 34<br />\
    <img src="styles/legend/BlokPerumahan_2_34.png" /> 35<br />\
    <img src="styles/legend/BlokPerumahan_2_35.png" /> 36<br />\
    <img src="styles/legend/BlokPerumahan_2_36.png" /> 37<br />\
    <img src="styles/legend/BlokPerumahan_2_37.png" /> 38<br />\
    <img src="styles/legend/BlokPerumahan_2_38.png" /> 39<br />\
    <img src="styles/legend/BlokPerumahan_2_39.png" /> 40<br />\
    <img src="styles/legend/BlokPerumahan_2_40.png" /> 41<br />\
    <img src="styles/legend/BlokPerumahan_2_41.png" /> 42<br />\
    <img src="styles/legend/BlokPerumahan_2_42.png" /> 43<br />\
    <img src="styles/legend/BlokPerumahan_2_43.png" /> 44<br />\
    <img src="styles/legend/BlokPerumahan_2_44.png" /> 45<br />\
    <img src="styles/legend/BlokPerumahan_2_45.png" /> 46<br />\
    <img src="styles/legend/BlokPerumahan_2_46.png" /> 47<br />\
    <img src="styles/legend/BlokPerumahan_2_47.png" /> 48<br />\
    <img src="styles/legend/BlokPerumahan_2_48.png" /> 49<br />\
    <img src="styles/legend/BlokPerumahan_2_49.png" /> 50<br />\
    <img src="styles/legend/BlokPerumahan_2_50.png" /> 51<br />\
    <img src="styles/legend/BlokPerumahan_2_51.png" /> 52<br />\
    <img src="styles/legend/BlokPerumahan_2_52.png" /> 53<br />\
    <img src="styles/legend/BlokPerumahan_2_53.png" /> 54<br />\
    <img src="styles/legend/BlokPerumahan_2_54.png" /> 55<br />\
    <img src="styles/legend/BlokPerumahan_2_55.png" /> 56<br />\
    <img src="styles/legend/BlokPerumahan_2_56.png" /> 57<br />\
    <img src="styles/legend/BlokPerumahan_2_57.png" /> 58<br />\
    <img src="styles/legend/BlokPerumahan_2_58.png" /> 59<br />\
    <img src="styles/legend/BlokPerumahan_2_59.png" /> 60<br />\
    <img src="styles/legend/BlokPerumahan_2_60.png" /> 61<br />\
    <img src="styles/legend/BlokPerumahan_2_61.png" /> 62<br />\
    <img src="styles/legend/BlokPerumahan_2_62.png" /> 63<br />\
    <img src="styles/legend/BlokPerumahan_2_63.png" /> 64<br />\
    <img src="styles/legend/BlokPerumahan_2_64.png" /> 65<br />\
    <img src="styles/legend/BlokPerumahan_2_65.png" /> 66<br />\
    <img src="styles/legend/BlokPerumahan_2_66.png" /> 67<br />\
    <img src="styles/legend/BlokPerumahan_2_67.png" /> 68<br />\
    <img src="styles/legend/BlokPerumahan_2_68.png" /> 69<br />\
    <img src="styles/legend/BlokPerumahan_2_69.png" /> 70<br />\
    <img src="styles/legend/BlokPerumahan_2_70.png" /> 71<br />\
    <img src="styles/legend/BlokPerumahan_2_71.png" /> 72<br />\
    <img src="styles/legend/BlokPerumahan_2_72.png" /> 73<br />\
    <img src="styles/legend/BlokPerumahan_2_73.png" /> 74<br />\
    <img src="styles/legend/BlokPerumahan_2_74.png" /> 75<br />\
    <img src="styles/legend/BlokPerumahan_2_75.png" /> 76<br />\
    <img src="styles/legend/BlokPerumahan_2_76.png" /> 77<br />\
    <img src="styles/legend/BlokPerumahan_2_77.png" /> 78<br />\
    <img src="styles/legend/BlokPerumahan_2_78.png" /> 79<br />\
    <img src="styles/legend/BlokPerumahan_2_79.png" /> 80<br />\
    <img src="styles/legend/BlokPerumahan_2_80.png" /> 81<br />\
    <img src="styles/legend/BlokPerumahan_2_81.png" /> 82<br />\
    <img src="styles/legend/BlokPerumahan_2_82.png" /> 83<br />\
    <img src="styles/legend/BlokPerumahan_2_83.png" /> 84<br />\
    <img src="styles/legend/BlokPerumahan_2_84.png" /> 85<br />\
    <img src="styles/legend/BlokPerumahan_2_85.png" /> 86<br />\
    <img src="styles/legend/BlokPerumahan_2_86.png" /> 87<br />\
    <img src="styles/legend/BlokPerumahan_2_87.png" /> 88<br />\
    <img src="styles/legend/BlokPerumahan_2_88.png" /> 89<br />\
    <img src="styles/legend/BlokPerumahan_2_89.png" /> 90<br />\
    <img src="styles/legend/BlokPerumahan_2_90.png" /> 91<br />\
    <img src="styles/legend/BlokPerumahan_2_91.png" /> 92<br />\
    <img src="styles/legend/BlokPerumahan_2_92.png" /> 93<br />\
    <img src="styles/legend/BlokPerumahan_2_93.png" /> 94<br />\
    <img src="styles/legend/BlokPerumahan_2_94.png" /> 95<br />\
    <img src="styles/legend/BlokPerumahan_2_95.png" /> 96<br />\
    <img src="styles/legend/BlokPerumahan_2_96.png" /> 97<br />\
    <img src="styles/legend/BlokPerumahan_2_97.png" /> 98<br />\
    <img src="styles/legend/BlokPerumahan_2_98.png" /> 99<br />\
    <img src="styles/legend/BlokPerumahan_2_99.png" /> 100<br />\
    <img src="styles/legend/BlokPerumahan_2_100.png" /> 101<br />\
    <img src="styles/legend/BlokPerumahan_2_101.png" /> 102<br />\
    <img src="styles/legend/BlokPerumahan_2_102.png" /> 103<br />\
    <img src="styles/legend/BlokPerumahan_2_103.png" /> 104<br />\
    <img src="styles/legend/BlokPerumahan_2_104.png" /> 105<br />\
    <img src="styles/legend/BlokPerumahan_2_105.png" /> 106<br />\
    <img src="styles/legend/BlokPerumahan_2_106.png" /> 107<br />\
    <img src="styles/legend/BlokPerumahan_2_107.png" /> 108<br />\
    <img src="styles/legend/BlokPerumahan_2_108.png" /> 109<br />\
    <img src="styles/legend/BlokPerumahan_2_109.png" /> 110<br />\
    <img src="styles/legend/BlokPerumahan_2_110.png" /> 111<br />\
    <img src="styles/legend/BlokPerumahan_2_111.png" /> 123<br />\
    <img src="styles/legend/BlokPerumahan_2_112.png" /> 124<br />\
    <img src="styles/legend/BlokPerumahan_2_113.png" /> 125<br />\
    <img src="styles/legend/BlokPerumahan_2_114.png" /> 126<br />\
    <img src="styles/legend/BlokPerumahan_2_115.png" /> 127<br />'
        });
var format_FasilitasUmum_3 = new ol.format.GeoJSON();
var features_FasilitasUmum_3 = format_FasilitasUmum_3.readFeatures(json_FasilitasUmum_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_3.addFeatures(features_FasilitasUmum_3);
var lyr_FasilitasUmum_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_3, 
                style: style_FasilitasUmum_3,
                popuplayertitle: "Fasilitas Umum",
                interactive: true,
    title: 'Fasilitas Umum<br />\
    <img src="styles/legend/FasilitasUmum_3_0.png" /> Hall & Lapangan Futsal<br />\
    <img src="styles/legend/FasilitasUmum_3_1.png" /> Mushola<br />\
    <img src="styles/legend/FasilitasUmum_3_2.png" /> Post Satpam<br />\
    <img src="styles/legend/FasilitasUmum_3_3.png" /> Taman<br />'
        });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_AreaPerumahanLuminousLiving_1.setVisible(true);lyr_BlokPerumahan_2.setVisible(true);lyr_FasilitasUmum_3.setVisible(true);lyr_Jalan_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AreaPerumahanLuminousLiving_1,lyr_BlokPerumahan_2,lyr_FasilitasUmum_3,lyr_Jalan_4];
lyr_AreaPerumahanLuminousLiving_1.set('fieldAliases', {'Nama': 'Nama', 'Luas M²': 'Luas M²', });
lyr_BlokPerumahan_2.set('fieldAliases', {'id': 'id', 'Nama Blok': 'Nama Blok', 'Luas M²': 'Luas M²', 'Harga (Rp)': 'Harga (Rp)', 'Status': 'Status', });
lyr_FasilitasUmum_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas M²': 'Luas M²', });
lyr_Jalan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_AreaPerumahanLuminousLiving_1.set('fieldImages', {'Nama': '', 'Luas M²': '', });
lyr_BlokPerumahan_2.set('fieldImages', {'id': 'TextEdit', 'Nama Blok': 'TextEdit', 'Luas M²': 'TextEdit', 'Harga (Rp)': 'TextEdit', 'Status': 'TextEdit', });
lyr_FasilitasUmum_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas M²': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'id': '', 'Nama': '', });
lyr_AreaPerumahanLuminousLiving_1.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Luas M²': 'inline label - visible with data', });
lyr_BlokPerumahan_2.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama Blok': 'inline label - visible with data', 'Luas M²': 'inline label - visible with data', 'Harga (Rp)': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_FasilitasUmum_3.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Luas M²': 'inline label - visible with data', });
lyr_Jalan_4.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'inline label - visible with data', });
lyr_Jalan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});