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
    Cropland = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-71.94956266459599, 42.59071838571244]),
            {
              "Landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.93901568924377, 42.58797399844339]),
            {
              "Landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9361211308871, 42.593608192050105]),
            {
              "Landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.99238314718349, 42.59717811012977]),
            {
              "Landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.96714892477138, 42.60981334507308]),
            {
              "Landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95108015958903, 42.5923335619095]),
            {
              "Landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.94874127332804, 42.58964803560942]),
            {
              "Landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.93584521238444, 42.592870653284194]),
            {
              "Landcover": 1,
              "system:index": "7"
            })]),
    Urban_Res = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-71.93945850696798, 42.608967782801734]),
            {
              "Landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.94066013660665, 42.60876247792937]),
            {
              "Landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9223239609496, 42.6040954298634]),
            {
              "Landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95493962257069, 42.59701936456245]),
            {
              "Landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.98746945350331, 42.58703569170943]),
            {
              "Landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.96498319050886, 42.59562224393723]),
            {
              "Landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95129427363082, 42.596160237633924]),
            {
              "Landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.97730097223922, 42.586618781725974]),
            {
              "Landcover": 2,
              "system:index": "7"
            })]),
    Conif = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-71.93174633433028, 42.59399616131185]),
            {
              "Landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95552143503829, 42.5943594786442]),
            {
              "Landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9246055630843, 42.57910933863464]),
            {
              "Landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.90816345058863, 42.61118598413095]),
            {
              "Landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9337578635525, 42.58989860691622]),
            {
              "Landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9293804984402, 42.587750111201636]),
            {
              "Landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.91496094277613, 42.585348763650416]),
            {
              "Landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9178362708401, 42.58528556904464]),
            {
              "Landcover": 3,
              "system:index": "7"
            })]),
    Deci = /* color: #00ffff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-71.9561802243287, 42.619083175756295]),
            {
              "Landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95643771639413, 42.618072601694564]),
            {
              "Landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.9772788362032, 42.600249910648316]),
            {
              "Landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.99161789852803, 42.6215372566292]),
            {
              "Landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95810101467794, 42.62076356782917]),
            {
              "Landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.95556900936788, 42.62076356782917]),
            {
              "Landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.99096327850367, 42.60753264102928]),
            {
              "Landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.97143679687525, 42.59805610811934]),
            {
              "Landcover": 4,
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
    u = /* color: #98ff00 */ee.FeatureCollection(
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
    p = /* color: #0b4a8b */ee.FeatureCollection(
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
    d = /* color: #ffc82d */ee.FeatureCollection(
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
    c = /* color: #00ffff */ee.FeatureCollection(
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

//----------------------------------------------------------------------------------------------------------------------
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

Map.addLayer(scenewinter, visParamsFCCwinter, 'False-color composite winter');

var ndvi = scenewinter.normalizedDifference(['B4', 'B3']);


// Display the result.
Map.centerObject(AOI, 12);
var ndviParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
Map.addLayer(ndvi, ndviParams, 'NDVI image winter', false);


//-------------------------------------------------------------------------------------------------------------------------

//CLASSIFICATION


//Classes determined by setting points based on Massachusetts ortho imagery

//var newfc = Urban_residential.merge(Pasture).merge(Conciferous).merge(Deciduous);
//print(newfc,'newfc')

var newfc = Water.merge(Cropland).merge(Urban_Res).merge(Conif).merge(Deci);
print(newfc, 'newfc')

var newfc1 = Water.merge(u).merge(p).merge(d).merge(c);
print(newfc1, 'newfc')

// Use these bands for classification
var bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

// The name of the property on the points storing the class label
///var label = ['Landcover'];

var training1 = scene.select(bands).sampleRegions({
  collection: newfc1,
  properties: ['Landcover'],
  scale: 30
});

// Sample the composite to generate training data.  Note that the
// class label is stored in the 'landcover' property
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
    




