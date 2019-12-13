//Import shapefiles and training shapefiles 
var table = ee.FeatureCollection("users/shreenapyakurel/AOI_dissolve"),
    Water = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-71.99259752387371, 42.58959481034093]),
            {
              "Landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-72.00229639167156, 42.595028936608706]),
            {
              "Landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9627713596281, 42.61660279657414]),
            {
              "Landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.983284894174, 42.612339156073794]),
            {
              "Landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.91804001777984, 42.604139291374636]),
            {
              "Landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9566192865583, 42.64113582645904]),
            {
              "Landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.97222808049139, 42.57878982295783]),
            {
              "Landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.94666646001872, 42.58598974584279]),
            {
              "Landcover": 0,
              "system:index": "7"
            })]),
    geometry = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-72.02920099719438, 42.646180664039896],
          [-72.02920099719438, 42.56127222010768],
          [-71.89873835071, 42.56127222010768],
          [-71.89873835071, 42.646180664039896]]], null, false),
    u = /* color: #fff2ec */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.98286122843899, 42.591824862669895],
                  [-71.98150939509549, 42.59195123855885],
                  [-71.98168105647244, 42.59302542326923],
                  [-71.98303288981595, 42.59278847235113]]]),
            {
              "Landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.96302359553738, 42.5932354515787],
                  [-71.96281438323422, 42.593247299061055],
                  [-71.96375315638943, 42.59431751234102],
                  [-71.96403747054501, 42.594238530439235]]]),
            {
              "Landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.98619788142605, 42.5857750396946],
                  [-71.98666995021267, 42.586343784374925],
                  [-71.9869274422781, 42.58842913714217],
                  [-71.98800032588406, 42.58811317908596],
                  [-71.9880432412283, 42.58665975139965]]]),
            {
              "Landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.95831652140606, 42.5881539695797],
                  [-71.9572972819804, 42.58701650806097],
                  [-71.9567930266856, 42.58722188459284],
                  [-71.95744748568524, 42.587972293091056],
                  [-71.95834870791424, 42.58898335551891],
                  [-71.95892806506146, 42.58873059144939]]]),
            {
              "Landcover": 1,
              "system:index": "3"
            })]),
    p = /* color: #f2ff15 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.95065858706539, 42.59138182091362],
                  [-71.94992902621334, 42.59046558154234],
                  [-71.94894197329586, 42.58926497163392],
                  [-71.94793346270626, 42.5895651262791],
                  [-71.95093753680294, 42.59307208923746],
                  [-71.95222499713009, 42.59262978045948]]]),
            {
              "Landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.93719303320916, 42.59508918558126],
                  [-71.93607723425896, 42.59118740828196],
                  [-71.93581974219353, 42.59464689111869],
                  [-71.93614160727532, 42.59515237024823]]]),
            {
              "Landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.992651009155, 42.59801156833458],
                  [-71.99297287423678, 42.59767986333794],
                  [-71.99217894036838, 42.59692293325768],
                  [-71.99147083718844, 42.597159868456366]]]),
            {
              "Landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.96762604917467, 42.61065795899914],
                  [-71.96801228727281, 42.61015260565522],
                  [-71.967325641765, 42.60892078970206],
                  [-71.96616692747057, 42.6085417645078],
                  [-71.96612401212633, 42.60955249323394]]]),
            {
              "Landcover": 2,
              "system:index": "3"
            })]),
    d = /* color: #cd300c */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.9575748021457, 42.61901630145378],
                  [-71.95396991322968, 42.61708987841308],
                  [-71.95281119893525, 42.61933210282377],
                  [-71.95598693440888, 42.62170056204536],
                  [-71.95864768575166, 42.6211637191847]]]),
            {
              "Landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.94791318728488, 42.618627326933556],
                  [-71.94572450472873, 42.6196063120826],
                  [-71.94161029408906, 42.62107724636068],
                  [-71.93890662740205, 42.620635136385786],
                  [-71.94006534169648, 42.619877226268066],
                  [-71.93684669087861, 42.61791098404586],
                  [-71.93821998189424, 42.61986896147688],
                  [-71.93749042104218, 42.62226897885255],
                  [-71.93783374379609, 42.62343737488137],
                  [-71.93972201894258, 42.622300557411904],
                  [-71.94045157979463, 42.621447930687545],
                  [-71.94203944753144, 42.62204792848862],
                  [-71.94251151631806, 42.62100582334477],
                  [-71.94384189198945, 42.62087950638452],
                  [-71.94482894490693, 42.62182687733986],
                  [-71.94590182851289, 42.62081634780827],
                  [-71.94817634175752, 42.61936368287267]]]),
            {
              "Landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.97217337580742, 42.59963574841533],
                  [-71.97255961390556, 42.5972032675059],
                  [-71.96959845515312, 42.59840372449765]]]),
            {
              "Landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.9778811165911, 42.59919348622197],
                  [-71.97667948695243, 42.599762108465434],
                  [-71.97749487849296, 42.60089933738504],
                  [-71.97925440760673, 42.599509388108956]]]),
            {
              "Landcover": 3,
              "system:index": "3"
            })]),
    c = /* color: #23c753 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.92305551587839, 42.598435047631774],
                  [-71.9263170820405, 42.59799277691617],
                  [-71.92670332013864, 42.5899049874778]]]),
            {
              "Landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.96459756910104, 42.605637300299854],
                  [-71.963868008249, 42.6047528579745],
                  [-71.963868008249, 42.606142690276684],
                  [-71.96524129926462, 42.60709028543223]]]),
            {
              "Landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.96884618818063, 42.602225810713335],
                  [-71.96691499768991, 42.603615699391575],
                  [-71.9691465955903, 42.60465809555205],
                  [-71.96996198713083, 42.603457759057854]]]),
            {
              "Landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-71.94979177533884, 42.612743970270365],
                  [-71.95013509809274, 42.61347038418907],
                  [-71.95185171186228, 42.612743970270365]]]),
            {
              "Landcover": 4,
              "system:index": "3"
            })]);
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
print(scene)

// sxport training shapefiles
Export.table.toDrive({
  collection: u,
  description:'Urban',
  fileFormat: 'SHP'
});

Export.table.toDrive({
  collection: Water,
  description:'Water',
  fileFormat: 'SHP'
});

Export.table.toDrive({
  collection: p,
  description:'pasture',
  fileFormat: 'SHP'
});

Export.table.toDrive({
  collection: c,
  description:'conif',
  fileFormat: 'SHP'
});

Export.table.toDrive({
  collection: d,
  description:'deci',
  fileFormat: 'SHP'
});

//Projection of the site 
var b1proj = scene.select('B1').projection();
print('Band 1 projection: ', b1proj); // ee.Projection object

//Date for the site 
var date = ee.Date(scene.get('system:time_start'));
print('Timestamp: ', date); // ee.Date


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

Export.image.toDrive({
  image: scenewinter.toInt(),
  description: 'wintertest',
  scale: 30,
  region: buff3000
});

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
var clippedwfCC = scenewinter.clip(buff3000);
Map.addLayer(clippedwfCC, visParamsFCCwinter, 'False-color composite winter');

var ndvi = scenewinter.normalizedDifference(['B4', 'B3']);


// Display the result.
Map.centerObject(AOI, 12);
var ndviParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
Map.addLayer(ndvi, ndviParams, 'NDVI image winter', false);


//-------------------------------------------------------------------------------------------------------------------------

//CLASSIFICATION

var newfc1 = Water.merge(u).merge(p).merge(d).merge(c);
print(newfc1, 'newfc')

// Use these bands for classification
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'];

// Select bands to train data

var training1 = scene.select(bands).sampleRegions({
  collection: newfc1,
  properties: ['Landcover'],
  scale: 30
});

// Sample the composite to generate training data.  Note that the
// Train Data
var classifier1 = ee.Classifier.randomForest().train({
  features: training1,
  classProperty: 'Landcover',
  inputProperties: bands
});

//classify image 
var classified1 = scene.select(bands).classify(classifier1);

var clippedClass1 = classified1.clip(buff3000);

Map.addLayer(clippedClass1,
             {min: 0, max: 4
             , palette: ['blue', 'yellow', 'black','green', 'orange']},
             'classification');
    
 Export.image.toDrive({
      image: clippedClass1,
      description: 'classification',
      scale: 30,
      region: geometry
    });

Map.addLayer(AOI, {color: 'yellow'}, 'AOI',  true);


//Create Confusion Matrix

var Random = training1.randomColumn();

var Matrix = classifier1.confusionMatrix();
// Approximately 70% of our training data
var trainingPartition = Random.filter(ee.Filter.lt('random', 0.7));
// Approximately 30% of our training data
var testingPartition = Random.filter(ee.Filter.gte('random', 0.3));

// Trained with 70% of our data.
var trainedClass = ee.Classifier.randomForest().train({
  features: trainingPartition, 
  classProperty: 'Landcover', 
  inputProperties: bands
});

var test = testingPartition.classify(trainedClass);
print(test, 'test');

//Creates error matrix using the actual and the predicted values 
var errorMatrix = test.errorMatrix('Landcover', 'classification');

var OA = Matrix.accuracy()
var CA = Matrix.consumersAccuracy()
var Kappa =Matrix.kappa()
var Order = Matrix.order()
var PA = Matrix.producersAccuracy()
 
print(Matrix,'Confusion Matrix')
print(OA,'Overall Accuracy')
print(CA,'Consumers Accuracy')
print(Kappa,'Kappa')
print(Order,'Order')
print(PA,'Producers Accuracy')
//--------------------------------------------------------------------------------------------------------------------------------


//Area Chart 3000m
var options = {
  lineWidth: 1,
  pointSize: 2,
  hAxis: {title: 'Classes'},
  vAxis: {title: 'Area m^2'},
  title: 'Area by class',
  series: {
    0: { color:'blue'},
    1: { color: 'yellow'},
    2: { color: 'black'},
    3: { color: 'green'},
    4: {color: 'orange'}
  }
};
var area3000 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff3000,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);



var area2500 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff2500,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);

print('2500m Buffer area: ',area2500)

var area2000 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff2000,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);

print('2000m Buffer area: ',area2000)

var area1500 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff1500,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);

print('1500 Buffer area: ',area1500)

var area1000 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff1000,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);

print('1000 Buffer area: ',area1000)

var buff500 = AOI.map(function(f) {
  return f.buffer(500, 1); // Note that the errorMargin is set to 100.
});

var area500 = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: buff500,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);

print('500 Buffer area: ',area500)

var clippedsite = classified1.clip(AOI);
print(clippedsite)
var areasite = ui.Chart.image.byClass({
  image: ee.Image.pixelArea().addBands(clippedClass1),
  classBand: 'classification', 
  region: AOI,
  scale: 30,
  reducer: ee.Reducer.sum()
}).setSeriesNames(['Water', 'u', 'p', 'd', 'c']).setOptions(options);
print('site area: ',areasite)

//--------------------------------------------------------------------------------------------------------------------------------
//Export TCC
Export.image.toDrive({
  image: scene,
  description: 'scene',
  scale: 30,
  region: geometry
});

var img = ee.Image.pixelArea();
Map.setCenter(0, 0, 3);
Map.addLayer(img, {min: 2e8, max: 4e8, opacity: 0.85}, 'pixel area');
