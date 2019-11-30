//Import study area 
var AOI = ee.FeatureCollection('users/shreenapyakurel/AOI_dissolve');
AOI = AOI.geometry();
Map.centerObject(AOI);
Map.addLayer(AOI, {color: 'yellow'}, 'AOI',  false);


//-----------------------------------------------------------------------------------------------------------------

//Import landsat 5 image tile
var dataset = ee.ImageCollection('LANDSAT/LT05/C01/T1_SR')

//sort by time and location to get the best tile
var spatialFiltered = dataset.filterBounds(AOI);
print('spatialFiltered', spatialFiltered);

var temporalFiltered = spatialFiltered.filterDate('2002-06-01', '2002-08-31');


// This will sort from least to most cloudy.
var sorted = temporalFiltered.sort('CLOUD_COVER');
print("sorted", sorted)

// Get the first (least cloudy) image.
var scene = sorted.first();

//----------------------------------------------------------------------------------------------------------------
// visualizing images in composites

Map.centerObject(AOI);
var visParams = {
  bands: ['B3', 'B2', 'B1'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};



var visParamsfcc = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};
//Map.addLayer(scene, visParamsfcc, 'false-color composite');

//----------------------------------------------------------------------------------------------------------------
// Creating  buffers 1000m, 1500m, 2000m, 2500m, 3000m 

var AOI = ee.FeatureCollection(AOI);

var buff1000 = AOI.map(function(f) {
  return f.buffer(1000, 1); // Note that the errorMargin is set to 100.
});
Map.addLayer(buff1000, {color: 'green'}, '1000buff', false);

var buff1500 = AOI.map(function(f) {
  return f.buffer(1500, 1); // Note that the errorMargin is set to 100.
});

Map.addLayer(buff1500, {color: 'blue'}, '1500buff', false);


var buff2000 = AOI.map(function(f) {
  return f.buffer(2000, 1); // Note that the errorMargin is set to 100.
});

Map.addLayer(buff2000, {color: 'orange'}, '2000buff', false);

var buff2500 = AOI.map(function(f) {
  return f.buffer(2500, 1); // Note that the errorMargin is set to 100.
});

Map.addLayer(buff2000, {color: 'teal'}, '2500buff', false);

var buff3000 = AOI.map(function(f) {
  return f.buffer(3000, 1); // Note that the errorMargin is set to 100.
});

Map.addLayer(buff3000, {color: 'pink'}, '3000buff', false);

//Clip Images

var clippedTCC = scene.clip(buff3000);
//TCC CLIP
Map.addLayer(clippedTCC, visParams, 'Clipped Image_TCC', false);
print(clippedTCC)
Map.addLayer(clippedTCC, visParams, 'true-color composite', false);

//  FCC CLIP
Map.setCenter(-72.404487, 42.064625, 13);
Map.addLayer(clippedTCC, visParamsfcc, 'Clipped False Color (432)');

//----------------------------------------------------------------------------------------------------------------------------
//Indices 
//NDVI
//Hardcoding 
//var nir = scene.select('B4');
//var red = scene.select('B3');
//var blue= scene.select('B1')

//var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');

var ndvi = clippedTCC.normalizedDifference(['B4', 'B3']);
print(ndvi)

Map.centerObject(AOI, 9);
var ndviParams = {min: -1, max: 1, palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ]};
Map.addLayer(ndvi, ndviParams, 'NDVI image', false);


//evi index
// Compute the EVI using an expression.
var evi =  clippedTCC.expression(
    '2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', {
      'NIR':  clippedTCC.select('B4'),
      'RED':  clippedTCC.select('B3'),
      'BLUE':  clippedTCC.select('B1')
});

var eviParams = {
  min: 0.0,
  max: 3,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ]};

print(evi)
Map.centerObject(AOI, 9);
Map.addLayer(evi, eviParams, 'EVI image', false);

//NDBI
// Compute the Normalized Difference Built-In Index (NDBI).
var ndbi = clippedTCC.normalizedDifference(['B1', 'B4']);

// Display the result.
Map.centerObject(AOI, 12);
var ndbiParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
Map.addLayer(ndbi, ndbiParams, 'NDBI image', false)


//NDWI 
var ndwi = clippedTCC.normalizedDifference(['B4', 'B5']);

// Display the result.
Map.centerObject(AOI, 12);
var ndwiParams = {min: -1, max: 1, palette: ['red', 'white', 'blue']};
Map.addLayer(ndwi, ndwiParams, 'NDWI image', false);

//----------------------------------------------------------------------------------------------------------------

//Winter Image 
var datasetwinter = ee.ImageCollection('LANDSAT/LT05/C01/T1_SR')

//sort by time and location to get the best tile
var spatialFilteredwinter = datasetwinter.filterBounds(AOI);
print('spatialFilteredwinter', spatialFilteredwinter);

var temporalFilteredwinter = spatialFilteredwinter.filterDate('2003-01-01', '2003-04-15');
print('temporalFilteredwinter', temporalFilteredwinter);

// This will sort from least to most cloudy.
var sortedwinter = temporalFilteredwinter.sort('CLOUD_COVER');
print("sorted", sortedwinter)

// Get the first (least cloudy) image.
var scenewinter = sortedwinter.first();


Map.centerObject(AOI);
var visParamswinter = {
  bands: ['B3', 'B2', 'B1'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};

//TCC 
var AOI = ee.FeatureCollection(AOI);

var buff3000winter = AOI.map(function(f) {
  return f.buffer(3000, 1); // Note that the errorMargin is set to 100.
}); 

Map.addLayer(scenewinter, visParamswinter, 'true-color composite winter', false);


var visParamsFCCwinter = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};

Map.addLayer(scenewinter, visParamsFCCwinter, 'False-color composite winter');

var ndvi = scenewinter.normalizedDifference(['B4', 'B3']);


// Display the result.
Map.centerObject(AOI, 12);
var ndviParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
Map.addLayer(ndvi, ndviParams, 'NDVI image winter', false);


//-------------------------------------------------------------------------------------------------------------------------

//CLASSIFICATION using random forest algorithm 


//Classes determined by setting points based on Massachusetts ortho imagery


var newfc = Water.merge(Cropland).merge(Urban_Res).merge(Conif).merge(Deci);
print(newfc, 'newfc')


// Use these bands for classification
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

//train data

var training = scene.select(bands).sampleRegions({
  collection: newfc,
  properties: ['Landcover'],
  scale: 30
});

// Sample the composite to generate training data.  Note that the
// class label is stored in the 'landcover' property
var classifier = ee.Classifier.randomForest().train({
  features: training,
  classProperty: 'Landcover',
  inputProperties: bands
});

//classify image 

  
var classified = scene.select(bands).classify(classifier);

var clippedClass = classified.clip(buff3000);

Map.addLayer(clippedClass,
             {min: 0, max: 4
             , palette: ['blue', 'yellow', 'black','green', 'orange']},
             'classification');
    




