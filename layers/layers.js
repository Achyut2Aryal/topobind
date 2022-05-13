var wms_layers = [];

var format_way_points_0 = new ol.format.GeoJSON();
var features_way_points_0 = format_way_points_0.readFeatures(json_way_points_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_way_points_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_way_points_0.addFeatures(features_way_points_0);
var lyr_way_points_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_way_points_0, 
                style: style_way_points_0,
                interactive: true,
                title: '<img src="styles/legend/way_points_0.png" /> way_points'
            });
var format_AasthaChirangibi_1 = new ol.format.GeoJSON();
var features_AasthaChirangibi_1 = format_AasthaChirangibi_1.readFeatures(json_AasthaChirangibi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AasthaChirangibi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AasthaChirangibi_1.addFeatures(features_AasthaChirangibi_1);
var lyr_AasthaChirangibi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AasthaChirangibi_1, 
                style: style_AasthaChirangibi_1,
                interactive: true,
                title: '<img src="styles/legend/AasthaChirangibi_1.png" /> AasthaChirangibi'
            });
var format_akhanda_deep_2 = new ol.format.GeoJSON();
var features_akhanda_deep_2 = format_akhanda_deep_2.readFeatures(json_akhanda_deep_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_akhanda_deep_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akhanda_deep_2.addFeatures(features_akhanda_deep_2);
var lyr_akhanda_deep_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_akhanda_deep_2, 
                style: style_akhanda_deep_2,
                interactive: true,
                title: '<img src="styles/legend/akhanda_deep_2.png" /> akhanda_deep'
            });
var format_BahuuudashyaBhawan_3 = new ol.format.GeoJSON();
var features_BahuuudashyaBhawan_3 = format_BahuuudashyaBhawan_3.readFeatures(json_BahuuudashyaBhawan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BahuuudashyaBhawan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BahuuudashyaBhawan_3.addFeatures(features_BahuuudashyaBhawan_3);
var lyr_BahuuudashyaBhawan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BahuuudashyaBhawan_3, 
                style: style_BahuuudashyaBhawan_3,
                interactive: true,
                title: '<img src="styles/legend/BahuuudashyaBhawan_3.png" /> BahuuudashyaBhawan'
            });
var format_bindmandir_4 = new ol.format.GeoJSON();
var features_bindmandir_4 = format_bindmandir_4.readFeatures(json_bindmandir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bindmandir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bindmandir_4.addFeatures(features_bindmandir_4);
var lyr_bindmandir_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bindmandir_4, 
                style: style_bindmandir_4,
                interactive: true,
                title: '<img src="styles/legend/bindmandir_4.png" /> bind mandir'
            });
var format_BOUNDRY_5 = new ol.format.GeoJSON();
var features_BOUNDRY_5 = format_BOUNDRY_5.readFeatures(json_BOUNDRY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDRY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDRY_5.addFeatures(features_BOUNDRY_5);
var lyr_BOUNDRY_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDRY_5, 
                style: style_BOUNDRY_5,
                interactive: true,
                title: '<img src="styles/legend/BOUNDRY_5.png" /> BOUNDRY'
            });
var format_building_6 = new ol.format.GeoJSON();
var features_building_6 = format_building_6.readFeatures(json_building_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_6.addFeatures(features_building_6);
var lyr_building_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_6, 
                style: style_building_6,
                interactive: true,
                title: '<img src="styles/legend/building_6.png" /> building'
            });
var format_fountain_7 = new ol.format.GeoJSON();
var features_fountain_7 = format_fountain_7.readFeatures(json_fountain_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fountain_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fountain_7.addFeatures(features_fountain_7);
var lyr_fountain_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fountain_7, 
                style: style_fountain_7,
                interactive: true,
                title: '<img src="styles/legend/fountain_7.png" /> fountain'
            });
var format_ganeshmandir_8 = new ol.format.GeoJSON();
var features_ganeshmandir_8 = format_ganeshmandir_8.readFeatures(json_ganeshmandir_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ganeshmandir_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ganeshmandir_8.addFeatures(features_ganeshmandir_8);
var lyr_ganeshmandir_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ganeshmandir_8, 
                style: style_ganeshmandir_8,
                interactive: true,
                title: '<img src="styles/legend/ganeshmandir_8.png" /> ganesh mandir'
            });
var format_gate_9 = new ol.format.GeoJSON();
var features_gate_9 = format_gate_9.readFeatures(json_gate_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gate_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gate_9.addFeatures(features_gate_9);
var lyr_gate_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gate_9, 
                style: style_gate_9,
                interactive: true,
                title: '<img src="styles/legend/gate_9.png" /> gate'
            });
var format_highway_10 = new ol.format.GeoJSON();
var features_highway_10 = format_highway_10.readFeatures(json_highway_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_10.addFeatures(features_highway_10);
var lyr_highway_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_highway_10, 
                style: style_highway_10,
                interactive: true,
                title: '<img src="styles/legend/highway_10.png" /> highway'
            });
var format_mandap_11 = new ol.format.GeoJSON();
var features_mandap_11 = format_mandap_11.readFeatures(json_mandap_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mandap_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mandap_11.addFeatures(features_mandap_11);
var lyr_mandap_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mandap_11, 
                style: style_mandap_11,
                interactive: true,
                title: '<img src="styles/legend/mandap_11.png" /> mandap'
            });
var format_park_12 = new ol.format.GeoJSON();
var features_park_12 = format_park_12.readFeatures(json_park_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_12.addFeatures(features_park_12);
var lyr_park_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_park_12, 
                style: style_park_12,
                interactive: true,
                title: '<img src="styles/legend/park_12.png" /> park'
            });
var format_parking_area_13 = new ol.format.GeoJSON();
var features_parking_area_13 = format_parking_area_13.readFeatures(json_parking_area_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_area_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parking_area_13.addFeatures(features_parking_area_13);
var lyr_parking_area_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parking_area_13, 
                style: style_parking_area_13,
                interactive: true,
                title: '<img src="styles/legend/parking_area_13.png" /> parking_area'
            });
var format_radharishnamandir_14 = new ol.format.GeoJSON();
var features_radharishnamandir_14 = format_radharishnamandir_14.readFeatures(json_radharishnamandir_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_radharishnamandir_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_radharishnamandir_14.addFeatures(features_radharishnamandir_14);
var lyr_radharishnamandir_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_radharishnamandir_14, 
                style: style_radharishnamandir_14,
                interactive: true,
                title: '<img src="styles/legend/radharishnamandir_14.png" /> radha rishna mandir'
            });
var format_saraswotimadir_15 = new ol.format.GeoJSON();
var features_saraswotimadir_15 = format_saraswotimadir_15.readFeatures(json_saraswotimadir_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_saraswotimadir_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_saraswotimadir_15.addFeatures(features_saraswotimadir_15);
var lyr_saraswotimadir_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_saraswotimadir_15, 
                style: style_saraswotimadir_15,
                interactive: true,
                title: '<img src="styles/legend/saraswotimadir_15.png" /> saraswoti madir'
            });
var format_shivmandir_16 = new ol.format.GeoJSON();
var features_shivmandir_16 = format_shivmandir_16.readFeatures(json_shivmandir_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shivmandir_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shivmandir_16.addFeatures(features_shivmandir_16);
var lyr_shivmandir_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shivmandir_16, 
                style: style_shivmandir_16,
                interactive: true,
                title: '<img src="styles/legend/shivmandir_16.png" /> shiv mandir'
            });
var format_shiva_ling_17 = new ol.format.GeoJSON();
var features_shiva_ling_17 = format_shiva_ling_17.readFeatures(json_shiva_ling_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shiva_ling_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shiva_ling_17.addFeatures(features_shiva_ling_17);
var lyr_shiva_ling_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shiva_ling_17, 
                style: style_shiva_ling_17,
                interactive: true,
                title: '<img src="styles/legend/shiva_ling_17.png" /> shiva_ling'
            });
var format_small_trees_18 = new ol.format.GeoJSON();
var features_small_trees_18 = format_small_trees_18.readFeatures(json_small_trees_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_small_trees_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_small_trees_18.addFeatures(features_small_trees_18);
var lyr_small_trees_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_small_trees_18, 
                style: style_small_trees_18,
                interactive: true,
                title: '<img src="styles/legend/small_trees_18.png" /> small_trees'
            });
var format_trees_19 = new ol.format.GeoJSON();
var features_trees_19 = format_trees_19.readFeatures(json_trees_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trees_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trees_19.addFeatures(features_trees_19);
var lyr_trees_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trees_19, 
                style: style_trees_19,
                interactive: true,
                title: '<img src="styles/legend/trees_19.png" /> trees'
            });
var format_view_point_20 = new ol.format.GeoJSON();
var features_view_point_20 = format_view_point_20.readFeatures(json_view_point_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_view_point_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_view_point_20.addFeatures(features_view_point_20);
var lyr_view_point_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_view_point_20, 
                style: style_view_point_20,
                interactive: true,
                title: '<img src="styles/legend/view_point_20.png" /> view_point'
            });
var format_Toilet_21 = new ol.format.GeoJSON();
var features_Toilet_21 = format_Toilet_21.readFeatures(json_Toilet_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toilet_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toilet_21.addFeatures(features_Toilet_21);
var lyr_Toilet_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Toilet_21, 
                style: style_Toilet_21,
                interactive: true,
                title: '<img src="styles/legend/Toilet_21.png" /> Toilet'
            });
var format_WaterTank_22 = new ol.format.GeoJSON();
var features_WaterTank_22 = format_WaterTank_22.readFeatures(json_WaterTank_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterTank_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterTank_22.addFeatures(features_WaterTank_22);
var lyr_WaterTank_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterTank_22, 
                style: style_WaterTank_22,
                interactive: true,
                title: '<img src="styles/legend/WaterTank_22.png" /> Water Tank'
            });
var format_BaliBedi_23 = new ol.format.GeoJSON();
var features_BaliBedi_23 = format_BaliBedi_23.readFeatures(json_BaliBedi_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaliBedi_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaliBedi_23.addFeatures(features_BaliBedi_23);
var lyr_BaliBedi_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaliBedi_23, 
                style: style_BaliBedi_23,
                interactive: true,
                title: '<img src="styles/legend/BaliBedi_23.png" /> BaliBedi'
            });
var format_footpath_24 = new ol.format.GeoJSON();
var features_footpath_24 = format_footpath_24.readFeatures(json_footpath_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_footpath_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_footpath_24.addFeatures(features_footpath_24);
var lyr_footpath_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_footpath_24, 
                style: style_footpath_24,
                interactive: true,
                title: '<img src="styles/legend/footpath_24.png" /> footpath'
            });
var format_HanumanMandir_25 = new ol.format.GeoJSON();
var features_HanumanMandir_25 = format_HanumanMandir_25.readFeatures(json_HanumanMandir_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HanumanMandir_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HanumanMandir_25.addFeatures(features_HanumanMandir_25);
var lyr_HanumanMandir_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HanumanMandir_25, 
                style: style_HanumanMandir_25,
                interactive: true,
                title: '<img src="styles/legend/HanumanMandir_25.png" /> Hanuman Mandir'
            });
var format_NareshworBrixya_26 = new ol.format.GeoJSON();
var features_NareshworBrixya_26 = format_NareshworBrixya_26.readFeatures(json_NareshworBrixya_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NareshworBrixya_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NareshworBrixya_26.addFeatures(features_NareshworBrixya_26);
var lyr_NareshworBrixya_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NareshworBrixya_26, 
                style: style_NareshworBrixya_26,
                interactive: true,
                title: '<img src="styles/legend/NareshworBrixya_26.png" /> NareshworBrixya'
            });
var format_NariwalFutauuneThauu_27 = new ol.format.GeoJSON();
var features_NariwalFutauuneThauu_27 = format_NariwalFutauuneThauu_27.readFeatures(json_NariwalFutauuneThauu_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NariwalFutauuneThauu_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NariwalFutauuneThauu_27.addFeatures(features_NariwalFutauuneThauu_27);
var lyr_NariwalFutauuneThauu_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NariwalFutauuneThauu_27, 
                style: style_NariwalFutauuneThauu_27,
                interactive: true,
                title: '<img src="styles/legend/NariwalFutauuneThauu_27.png" /> NariwalFutauuneThauu'
            });
var format_silalekh_28 = new ol.format.GeoJSON();
var features_silalekh_28 = format_silalekh_28.readFeatures(json_silalekh_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_silalekh_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_silalekh_28.addFeatures(features_silalekh_28);
var lyr_silalekh_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_silalekh_28, 
                style: style_silalekh_28,
                interactive: true,
                title: '<img src="styles/legend/silalekh_28.png" /> silalekh'
            });
var format_Tap_29 = new ol.format.GeoJSON();
var features_Tap_29 = format_Tap_29.readFeatures(json_Tap_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tap_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tap_29.addFeatures(features_Tap_29);
var lyr_Tap_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tap_29, 
                style: style_Tap_29,
                interactive: true,
                title: '<img src="styles/legend/Tap_29.png" /> Tap'
            });
var format_bindmandir_30 = new ol.format.GeoJSON();
var features_bindmandir_30 = format_bindmandir_30.readFeatures(json_bindmandir_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bindmandir_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bindmandir_30.addFeatures(features_bindmandir_30);
var lyr_bindmandir_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bindmandir_30, 
                style: style_bindmandir_30,
                interactive: true,
                title: '<img src="styles/legend/bindmandir_30.png" /> bind mandir'
            });

lyr_way_points_0.setVisible(true);lyr_AasthaChirangibi_1.setVisible(true);lyr_akhanda_deep_2.setVisible(true);lyr_BahuuudashyaBhawan_3.setVisible(true);lyr_bindmandir_4.setVisible(true);lyr_BOUNDRY_5.setVisible(true);lyr_building_6.setVisible(true);lyr_fountain_7.setVisible(true);lyr_ganeshmandir_8.setVisible(true);lyr_gate_9.setVisible(true);lyr_highway_10.setVisible(true);lyr_mandap_11.setVisible(true);lyr_park_12.setVisible(true);lyr_parking_area_13.setVisible(true);lyr_radharishnamandir_14.setVisible(true);lyr_saraswotimadir_15.setVisible(true);lyr_shivmandir_16.setVisible(true);lyr_shiva_ling_17.setVisible(true);lyr_small_trees_18.setVisible(true);lyr_trees_19.setVisible(true);lyr_view_point_20.setVisible(true);lyr_Toilet_21.setVisible(true);lyr_WaterTank_22.setVisible(true);lyr_BaliBedi_23.setVisible(true);lyr_footpath_24.setVisible(true);lyr_HanumanMandir_25.setVisible(true);lyr_NareshworBrixya_26.setVisible(true);lyr_NariwalFutauuneThauu_27.setVisible(true);lyr_silalekh_28.setVisible(true);lyr_Tap_29.setVisible(true);lyr_bindmandir_30.setVisible(true);
var layersList = [lyr_way_points_0,lyr_AasthaChirangibi_1,lyr_akhanda_deep_2,lyr_BahuuudashyaBhawan_3,lyr_bindmandir_4,lyr_BOUNDRY_5,lyr_building_6,lyr_fountain_7,lyr_ganeshmandir_8,lyr_gate_9,lyr_highway_10,lyr_mandap_11,lyr_park_12,lyr_parking_area_13,lyr_radharishnamandir_14,lyr_saraswotimadir_15,lyr_shivmandir_16,lyr_shiva_ling_17,lyr_small_trees_18,lyr_trees_19,lyr_view_point_20,lyr_Toilet_21,lyr_WaterTank_22,lyr_BaliBedi_23,lyr_footpath_24,lyr_HanumanMandir_25,lyr_NareshworBrixya_26,lyr_NariwalFutauuneThauu_27,lyr_silalekh_28,lyr_Tap_29,lyr_bindmandir_30];
lyr_way_points_0.set('fieldAliases', {'id': 'id', 'gg': 'gg', });
lyr_AasthaChirangibi_1.set('fieldAliases', {'id': 'id', });
lyr_akhanda_deep_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_BahuuudashyaBhawan_3.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_bindmandir_4.set('fieldAliases', {'id': 'id', 'idn': 'idn', 'name': 'name', 'idd': 'idd', });
lyr_BOUNDRY_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'Area': 'Area', });
lyr_building_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'test': 'test', });
lyr_fountain_7.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_ganeshmandir_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'namee': 'namee', });
lyr_gate_9.set('fieldAliases', {'id': 'id', });
lyr_highway_10.set('fieldAliases', {'id': 'id', 'nn': 'nn', });
lyr_mandap_11.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_park_12.set('fieldAliases', {'id': 'id', 'pk': 'pk', });
lyr_parking_area_13.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_radharishnamandir_14.set('fieldAliases', {'id': 'id', 'nn': 'nn', 'idd': 'idd', });
lyr_saraswotimadir_15.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_shivmandir_16.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_shiva_ling_17.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_small_trees_18.set('fieldAliases', {'id': 'id', });
lyr_trees_19.set('fieldAliases', {'id': 'id', });
lyr_view_point_20.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Toilet_21.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_WaterTank_22.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_BaliBedi_23.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_footpath_24.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_HanumanMandir_25.set('fieldAliases', {'id': 'id', 'name': 'name', 'idd': 'idd', });
lyr_NareshworBrixya_26.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_NariwalFutauuneThauu_27.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_silalekh_28.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Tap_29.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_bindmandir_30.set('fieldAliases', {'id': 'id', 'idn': 'idn', 'name': 'name', 'idd': 'idd', });
lyr_way_points_0.set('fieldImages', {'id': '', 'gg': '', });
lyr_AasthaChirangibi_1.set('fieldImages', {'id': '', });
lyr_akhanda_deep_2.set('fieldImages', {'id': '', 'name': '', });
lyr_BahuuudashyaBhawan_3.set('fieldImages', {'id': '', 'name': '', });
lyr_bindmandir_4.set('fieldImages', {'id': '', 'idn': '', 'name': '', 'idd': '', });
lyr_BOUNDRY_5.set('fieldImages', {'id': '', 'name': '', 'Area': '', });
lyr_building_6.set('fieldImages', {'id': '', 'name': '', 'test': '', });
lyr_fountain_7.set('fieldImages', {'id': '', 'name': '', });
lyr_ganeshmandir_8.set('fieldImages', {'id': '', 'name': '', 'namee': '', });
lyr_gate_9.set('fieldImages', {'id': '', });
lyr_highway_10.set('fieldImages', {'id': '', 'nn': '', });
lyr_mandap_11.set('fieldImages', {'id': '', 'name': '', });
lyr_park_12.set('fieldImages', {'id': '', 'pk': '', });
lyr_parking_area_13.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_radharishnamandir_14.set('fieldImages', {'id': '', 'nn': '', 'idd': '', });
lyr_saraswotimadir_15.set('fieldImages', {'id': '', 'name': '', });
lyr_shivmandir_16.set('fieldImages', {'id': '', 'name': '', });
lyr_shiva_ling_17.set('fieldImages', {'id': '', 'name': '', });
lyr_small_trees_18.set('fieldImages', {'id': 'TextEdit', });
lyr_trees_19.set('fieldImages', {'id': '', });
lyr_view_point_20.set('fieldImages', {'id': '', 'name': '', });
lyr_Toilet_21.set('fieldImages', {'id': '', 'name': '', });
lyr_WaterTank_22.set('fieldImages', {'id': '', 'name': '', });
lyr_BaliBedi_23.set('fieldImages', {'id': '', 'name': '', });
lyr_footpath_24.set('fieldImages', {'id': '', 'name': '', });
lyr_HanumanMandir_25.set('fieldImages', {'id': '', 'name': '', 'idd': '', });
lyr_NareshworBrixya_26.set('fieldImages', {'id': '', 'name': '', });
lyr_NariwalFutauuneThauu_27.set('fieldImages', {'id': '', 'name': '', });
lyr_silalekh_28.set('fieldImages', {'id': '', 'name': '', });
lyr_Tap_29.set('fieldImages', {'id': '', 'name': '', });
lyr_bindmandir_30.set('fieldImages', {'id': '', 'idn': '', 'name': '', 'idd': '', });
lyr_way_points_0.set('fieldLabels', {'id': 'no label', 'gg': 'no label', });
lyr_AasthaChirangibi_1.set('fieldLabels', {'id': 'no label', });
lyr_akhanda_deep_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_BahuuudashyaBhawan_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_bindmandir_4.set('fieldLabels', {'id': 'no label', 'idn': 'no label', 'name': 'no label', 'idd': 'no label', });
lyr_BOUNDRY_5.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'Area': 'no label', });
lyr_building_6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'test': 'no label', });
lyr_fountain_7.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_ganeshmandir_8.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'namee': 'no label', });
lyr_gate_9.set('fieldLabels', {'id': 'no label', });
lyr_highway_10.set('fieldLabels', {'id': 'no label', 'nn': 'no label', });
lyr_mandap_11.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_park_12.set('fieldLabels', {'id': 'no label', 'pk': 'no label', });
lyr_parking_area_13.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_radharishnamandir_14.set('fieldLabels', {'id': 'no label', 'nn': 'no label', 'idd': 'no label', });
lyr_saraswotimadir_15.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_shivmandir_16.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_shiva_ling_17.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_small_trees_18.set('fieldLabels', {'id': 'no label', });
lyr_trees_19.set('fieldLabels', {'id': 'no label', });
lyr_view_point_20.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Toilet_21.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_WaterTank_22.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_BaliBedi_23.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_footpath_24.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_HanumanMandir_25.set('fieldLabels', {'id': 'no label', 'name': 'header label', 'idd': 'no label', });
lyr_NareshworBrixya_26.set('fieldLabels', {'id': 'no label', 'name': 'header label', });
lyr_NariwalFutauuneThauu_27.set('fieldLabels', {'id': 'no label', 'name': 'header label', });
lyr_silalekh_28.set('fieldLabels', {'id': 'no label', 'name': 'inline label', });
lyr_Tap_29.set('fieldLabels', {'id': 'no label', 'name': 'inline label', });
lyr_bindmandir_30.set('fieldLabels', {'id': 'no label', 'idn': 'no label', 'name': 'inline label', 'idd': 'no label', });
lyr_bindmandir_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});