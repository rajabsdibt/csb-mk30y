parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zUX9":[function(require,module,exports) {
var define;
var t;!function(e){"use strict";var n=e.URL||e.webkitURL;function o(t){return!!n&&n.createObjectURL(t)}function r(t){return!!n&&n.revokeObjectURL(t)}function i(t,e){!t||"blob:"!==t.slice(0,5)||e&&e.noRevoke||r(t)}function c(t,n,o,r){if(!e.FileReader)return!1;var i=new FileReader;i.onload=function(){n.call(i,this.result)},o&&(i.onabort=i.onerror=function(){o.call(i,this.error)});var c=i[r||"readAsDataURL"];return c?(c.call(i,t),i):void 0}function a(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"}function u(t,n,r){function l(n,l){var f,s=document.createElement("img");function d(t,e){n!==l?t instanceof Error?l(t):((e=e||{}).image=t,n(e)):n&&n(t,e)}function b(n,i){i&&e.console&&console.log(i),n&&a("Blob",n)?f=o(t=n):(f=t,r&&r.crossOrigin&&(s.crossOrigin=r.crossOrigin)),s.src=f}return s.onerror=function(t){i(f,r),l&&l.call(s,t)},s.onload=function(){i(f,r);var e={originalWidth:s.naturalWidth||s.width,originalHeight:s.naturalHeight||s.height};try{u.transform(s,r,d,t,e)}catch(n){l&&l(n)}},"string"==typeof t?(u.requiresMetaData(r)?u.fetchBlob(t,b,r):b(),s):a("Blob",t)||a("File",t)?(f=o(t))?(s.src=f,s):c(t,function(t){s.src=t},l):void 0}return e.Promise&&"function"!=typeof n?(r=n,new Promise(l)):l(n,n)}u.requiresMetaData=function(t){return t&&t.meta},u.fetchBlob=function(t,e){e()},u.transform=function(t,e,n,o,r){n(t,r)},u.global=e,u.readFile=c,u.isInstanceOf=a,u.createObjectURL=o,u.revokeObjectURL=r,"function"==typeof t&&t.amd?t(function(){return u}):"object"==typeof module&&module.exports?module.exports=u:e.loadImage=u}("undefined"!=typeof window&&window||this);
},{}],"rlaj":[function(require,module,exports) {
var define;
var t;!function(a){"use strict";"function"==typeof t&&t.amd?t(["./load-image"],a):"object"==typeof module&&module.exports?a(require("./load-image")):a(window.loadImage)}(function(t){"use strict";var a=t.transform;t.createCanvas=function(a,e,o){if(o&&t.global.OffscreenCanvas)return new OffscreenCanvas(a,e);var i=document.createElement("canvas");return i.width=a,i.height=e,i},t.transform=function(e,o,i,n,r){a.call(t,t.scale(e,o,r),o,i,n,r)},t.transformCoordinates=function(){},t.getTransformedOptions=function(t,a){var e,o,i,n,r=a.aspectRatio;if(!r)return a;for(o in e={},a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e.crop=!0,(i=t.naturalWidth||t.width)/(n=t.naturalHeight||t.height)>r?(e.maxWidth=n*r,e.maxHeight=n):(e.maxWidth=i,e.maxHeight=i/r),e},t.drawImage=function(t,a,e,o,i,n,r,h,m){var d=a.getContext("2d");return!1===m.imageSmoothingEnabled?(d.msImageSmoothingEnabled=!1,d.imageSmoothingEnabled=!1):m.imageSmoothingQuality&&(d.imageSmoothingQuality=m.imageSmoothingQuality),d.drawImage(t,e,o,i,n,0,0,r,h),d},t.requiresCanvas=function(t){return t.canvas||t.crop||!!t.aspectRatio},t.scale=function(a,e,o){e=e||{},o=o||{};var i,n,r,h,m,d,g,s,c,u,l,f,v=a.getContext||t.requiresCanvas(e)&&!!t.global.HTMLCanvasElement,p=a.naturalWidth||a.width,w=a.naturalHeight||a.height,C=p,x=w;function b(){var t=Math.max((r||C)/C,(h||x)/x);t>1&&(C*=t,x*=t)}function y(){var t=Math.min((i||C)/C,(n||x)/x);t<1&&(C*=t,x*=t)}if(v&&(g=(e=t.getTransformedOptions(a,e,o)).left||0,s=e.top||0,e.sourceWidth?(m=e.sourceWidth,void 0!==e.right&&void 0===e.left&&(g=p-m-e.right)):m=p-g-(e.right||0),e.sourceHeight?(d=e.sourceHeight,void 0!==e.bottom&&void 0===e.top&&(s=w-d-e.bottom)):d=w-s-(e.bottom||0),C=m,x=d),i=e.maxWidth,n=e.maxHeight,r=e.minWidth,h=e.minHeight,v&&i&&n&&e.crop?(C=i,x=n,(l=m/d-i/n)<0?(d=n*m/i,void 0===e.top&&void 0===e.bottom&&(s=(w-d)/2)):l>0&&(m=i*d/n,void 0===e.left&&void 0===e.right&&(g=(p-m)/2))):((e.contain||e.cover)&&(r=i=i||r,h=n=n||h),e.cover?(y(),b()):(b(),y())),v){if((c=e.pixelRatio)>1&&(!a.style.width||Math.floor(parseFloat(a.style.width,10))!==Math.floor(p/c))&&(C*=c,x*=c),t.orientationCropBug&&!a.getContext&&(g||s||m!==p||d!==w)&&(l=a,a=t.createCanvas(p,w,!0),t.drawImage(l,a,0,0,p,w,p,w,e)),(u=e.downsamplingRatio)>0&&u<1&&C<m&&x<d)for(;m*u>C;)f=t.createCanvas(m*u,d*u,!0),t.drawImage(a,f,g,s,m,d,f.width,f.height,e),g=0,s=0,m=f.width,d=f.height,a=f;return f=t.createCanvas(C,x),t.transformCoordinates(f,e,o),c>1&&(f.style.width=f.width/c+"px"),t.drawImage(a,f,g,s,m,d,C,x,e).setTransform(1,0,0,1,0,0),f}return a.width=C,a.height=x,a}});
},{"./load-image":"zUX9"}],"Gr9j":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,a=arguments[3];!function(a){"use strict";"function"==typeof e&&e.amd?e(["./load-image"],a):"object"==typeof module&&module.exports?a(require("./load-image")):a(window.loadImage)}(function(e){"use strict";var a=e.global,t=e.transform,r=a.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),i=a.ArrayBuffer&&ArrayBuffer.prototype.slice||function(e,a){a=a||this.byteLength-e;var t=new Uint8Array(this,e,a),r=new Uint8Array(a);return r.set(t),r.buffer},n={jpeg:{65505:[],65517:[]}};function o(t,o,l,f){var s=this;function u(o,u){if(!(a.DataView&&r&&t&&t.size>=12&&"image/jpeg"===t.type))return o(f);var c=l.maxMetaDataSize||262144;e.readFile(r.call(t,0,c),function(e){var a=new DataView(e);if(65496!==a.getUint16(0))return u(new Error("Invalid JPEG file: Missing JPEG marker."));for(var t,r,c,g,m=2,p=a.byteLength-4,d=m;m<p&&((t=a.getUint16(m))>=65504&&t<=65519||65534===t);){if(m+(r=a.getUint16(m+2)+2)>a.byteLength){console.log("Invalid JPEG metadata: Invalid segment size.");break}if((c=n.jpeg[t])&&!l.disableMetaDataParsers)for(g=0;g<c.length;g+=1)c[g].call(s,a,m,r,f,l);d=m+=r}!l.disableImageHead&&d>6&&(f.imageHead=i.call(e,0,d)),o(f)},u,"readAsArrayBuffer")||o(f)}return l=l||{},a.Promise&&"function"!=typeof o?(f=l=o||{},new Promise(u)):(f=f||{},u(o,o))}function l(e,a,t){return e&&a&&t?new Blob([t,r.call(e,a.byteLength)],{type:"image/jpeg"}):null}e.transform=function(r,i,n,l,f){e.requiresMetaData(i)?o(l,function(o){o!==f&&(a.console&&console.log(o),o=f),t.call(e,r,i,n,l,o)},i,f=f||{}):t.apply(e,arguments)},e.blobSlice=r,e.bufferSlice=i,e.replaceHead=function(e,t,r){var i={maxMetaDataSize:256,disableMetaDataParsers:!0};if(!r&&a.Promise)return o(e,i).then(function(a){return l(e,a.imageHead,t)});o(e,function(a){r(l(e,a.imageHead,t))},i)},e.parseMetaData=o,e.metaDataParsers=n});
},{"./load-image":"zUX9"}],"Z77d":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t){"use strict";"function"==typeof e&&e.amd?e(["./load-image"],t):"object"==typeof module&&module.exports?t(require("./load-image")):t(window.loadImage)}(function(e){"use strict";var t=e.global;t.fetch&&t.Request&&t.Response&&t.Response.prototype.blob?e.fetchBlob=function(e,n,o){function s(e){return e.blob()}if(t.Promise&&"function"!=typeof n)return fetch(new Request(e,n)).then(s);fetch(new Request(e,o)).then(s).then(n).catch(function(e){n(null,e)})}:t.XMLHttpRequest&&""===(new XMLHttpRequest).responseType&&(e.fetchBlob=function(e,n,o){function s(t,n){o=o||{};var s=new XMLHttpRequest;s.open(o.method||"GET",e),o.headers&&Object.keys(o.headers).forEach(function(e){s.setRequestHeader(e,o.headers[e])}),s.withCredentials="include"===o.credentials,s.responseType="blob",s.onload=function(){t(s.response)},s.onerror=s.onabort=s.ontimeout=function(e){t===n?n(null,e):n(e)},s.send(o.body)}return t.Promise&&"function"!=typeof n?(o=n,new Promise(s)):s(n,n)})});
},{"./load-image":"zUX9"}],"VSxx":[function(require,module,exports) {
var define;
var e;!function(t){"use strict";"function"==typeof e&&e.amd?e(["./load-image","./load-image-meta"],t):"object"==typeof module&&module.exports?t(require("./load-image"),require("./load-image-meta")):t(window.loadImage)}(function(e){"use strict";function t(e){e&&(Object.defineProperty(this,"map",{value:this.ifds[e].map}),Object.defineProperty(this,"tags",{value:this.tags&&this.tags[e]||{}}))}t.prototype.map={Orientation:274,Thumbnail:"ifd1",Blob:513,Exif:34665,GPSInfo:34853,Interoperability:40965},t.prototype.ifds={ifd1:{name:"Thumbnail",map:t.prototype.map},34665:{name:"Exif",map:{}},34853:{name:"GPSInfo",map:{}},40965:{name:"Interoperability",map:{}}},t.prototype.get=function(e){return this[e]||this[this.map[e]]};var i={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}};function n(e,t,n,f,a,s){var o,r,l,g,u,d,c=i[f];if(c){if(!((r=(o=c.size*a)>4?t+e.getUint32(n+8,s):n+8)+o>e.byteLength)){if(1===a)return c.getValue(e,r,s);for(l=[],g=0;g<a;g+=1)l[g]=c.getValue(e,r+g*c.size,s);if(c.ascii){for(u="",g=0;g<l.length&&"\0"!==(d=l[g]);g+=1)u+=d;return u}return l}console.log("Invalid Exif data: Invalid data offset.")}else console.log("Invalid Exif data: Invalid tag type.")}function f(e,t,i){return(!e||e[i])&&(!t||!0!==t[i])}function a(e,t,i,a,s,o,r,l){var g,u,d,c,x,m;if(i+6>e.byteLength)console.log("Invalid Exif data: Invalid directory offset.");else{if(!((u=i+2+12*(g=e.getUint16(i,a)))+4>e.byteLength)){for(d=0;d<g;d+=1)c=i+2+12*d,f(r,l,x=e.getUint16(c,a))&&(m=n(e,t,c,e.getUint16(c+2,a),e.getUint32(c+4,a),a),s[x]=m,o&&(o[x]=c));return e.getUint32(u,a)}console.log("Invalid Exif data: Invalid directory size.")}}i[7]=i[1],e.parseExifData=function(i,n,s,o,r){if(!r.disableExif){var l,g,u,d=r.includeExifTags,c=r.excludeExifTags||{34665:{37500:!0}},x=n+10;if(1165519206===i.getUint32(n+4))if(x+8>i.byteLength)console.log("Invalid Exif data: Invalid segment size.");else if(0===i.getUint16(n+8)){switch(i.getUint16(x)){case 18761:l=!0;break;case 19789:l=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}42===i.getUint16(x+2,l)?(g=i.getUint32(x+4,l),o.exif=new t,r.disableExifOffsets||(o.exifOffsets=new t,o.exifTiffOffset=x,o.exifLittleEndian=l),(g=a(i,x,x+g,l,o.exif,o.exifOffsets,d,c))&&f(d,c,"ifd1")&&(o.exif.ifd1=g,o.exifOffsets&&(o.exifOffsets.ifd1=x+g)),Object.keys(o.exif.ifds).forEach(function(e){!function(e,i,n,f,s,o,r){var l=e.exif[i];l&&(e.exif[i]=new t(i),e.exifOffsets&&(e.exifOffsets[i]=new t(i)),a(n,f,f+l,s,e.exif[i],e.exifOffsets&&e.exifOffsets[i],o&&o[i],r&&r[i]))}(o,e,i,x,l,d,c)}),(u=o.exif.ifd1)&&u[513]&&(u[513]=function(t,i,n){if(n){if(!(i+n>t.byteLength))return new Blob([e.bufferSlice.call(t.buffer,i,i+n)],{type:"image/jpeg"});console.log("Invalid Exif data: Invalid thumbnail data.")}}(i,x+u[513],u[514]))):console.log("Invalid Exif data: Missing TIFF marker.")}else console.log("Invalid Exif data: Missing byte alignment offset.")}},e.metaDataParsers.jpeg[65505].push(e.parseExifData),e.exifWriters={274:function(e,t,i){var n=t.exifOffsets[274];return n?(new DataView(e,n+8,2).setUint16(0,i,t.exifLittleEndian),e):e}},e.writeExifData=function(t,i,n,f){return e.exifWriters[i.exif.map[n]](t,i,f)},e.ExifMap=t});
},{"./load-image":"zUX9","./load-image-meta":"Gr9j"}],"zZKb":[function(require,module,exports) {
var define;
var e;!function(t){"use strict";"function"==typeof e&&e.amd?e(["./load-image","./load-image-exif"],t):"object"==typeof module&&module.exports?t(require("./load-image"),require("./load-image-exif")):t(window.loadImage)}(function(e){"use strict";var t=e.ExifMap.prototype;t.tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",34665:{36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",36880:"OffsetTime",36881:"OffsetTimeOriginal",36882:"OffsetTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber"},34853:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},40965:{1:"InteroperabilityIndex"}},t.tags.ifd1=t.tags,t.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"Original",2:"Horizontal flip",3:"Rotate 180° CCW",4:"Vertical flip",5:"Vertical flip + Rotate 90° CW",6:"Rotate 90° CW",7:"Horizontal flip + Rotate 90° CW",8:"Rotate 90° CCW"}},t.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":if(!t)return;return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":if(!t)return;return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":if(!t)return;return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},t.getAll=function(){var e,t,i,r={};for(e in this)Object.prototype.hasOwnProperty.call(this,e)&&((t=this[e])&&t.getAll?r[this.ifds[e].name]=t.getAll():(i=this.tags[e])&&(r[i]=this.getText(i)));return r},t.getName=function(e){var t=this.tags[e];return"object"==typeof t?this.ifds[e].name:t},function(){var e,i,r,o=t.tags;for(e in o)if(Object.prototype.hasOwnProperty.call(o,e))if(i=t.ifds[e])for(e in r=o[e])Object.prototype.hasOwnProperty.call(r,e)&&(i.map[r[e]]=Number(e));else t.map[o[e]]=Number(e)}()});
},{"./load-image":"zUX9","./load-image-exif":"VSxx"}],"lrQ4":[function(require,module,exports) {
var define;
var t;!function(e){"use strict";"function"==typeof t&&t.amd?t(["./load-image","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-meta")):e(window.loadImage)}(function(t){"use strict";function e(){}function i(t,e,i,n,a){return"binary"===e.types[t]?new Blob([i.buffer.slice(n,n+a)]):"Uint16"===e.types[t]?i.getUint16(n):function(t,e,i){for(var n="",a=e+i,r=e;r<a;r+=1)n+=String.fromCharCode(t.getUint8(r));return n}(i,n,a)}function n(t,e){return void 0===t?e:t instanceof Array?(t.push(e),t):[t,e]}function a(t,e,a,r,o,s){for(var c,f,p,u=e+a,g=e;g<u;)28===t.getUint8(g)&&2===t.getUint8(g+1)&&(p=t.getUint8(g+2),o&&!o[p]||s&&s[p]||(f=t.getInt16(g+3),c=i(p,r.iptc,t,g+5,f),r.iptc[p]=n(r.iptc[p],c),r.iptcOffsets&&(r.iptcOffsets[p]=g))),g+=1}function r(t,e){return 943868237===t.getUint32(e)&&1028===t.getUint16(e+4)}function o(t,e){var i=t.getUint8(e+7);return i%2!=0&&(i+=1),0===i&&(i=4),i}e.prototype.map={ObjectName:5},e.prototype.types={0:"Uint16",200:"Uint16",201:"Uint16",202:"binary"},e.prototype.get=function(t){return this[t]||this[this.map[t]]},t.parseIptcData=function(t,i,n,s,c){if(!c.disableIptc)for(var f=i+n;i+8<f;){if(r(t,i)){var p=o(t,i),u=i+8+p;if(u>f){console.log("Invalid IPTC data: Invalid segment offset.");break}var g=t.getUint16(i+6+p);if(i+g>f){console.log("Invalid IPTC data: Invalid segment size.");break}return s.iptc=new e,c.disableIptcOffsets||(s.iptcOffsets=new e),void a(t,u,g,s,c.includeIptcTags,c.excludeIptcTags||{202:!0})}i+=1}},t.metaDataParsers.jpeg[65517].push(t.parseIptcData),t.IptcMap=e});
},{"./load-image":"zUX9","./load-image-meta":"Gr9j"}],"P1QC":[function(require,module,exports) {
var define;
var e;!function(t){"use strict";"function"==typeof e&&e.amd?e(["./load-image","./load-image-iptc"],t):"object"==typeof module&&module.exports?t(require("./load-image"),require("./load-image-iptc")):t(window.loadImage)}(function(e){"use strict";var t=e.IptcMap.prototype;t.tags={0:"ApplicationRecordVersion",3:"ObjectTypeReference",4:"ObjectAttributeReference",5:"ObjectName",7:"EditStatus",8:"EditorialUpdate",10:"Urgency",12:"SubjectReference",15:"Category",20:"SupplementalCategories",22:"FixtureIdentifier",25:"Keywords",26:"ContentLocationCode",27:"ContentLocationName",30:"ReleaseDate",35:"ReleaseTime",37:"ExpirationDate",38:"ExpirationTime",40:"SpecialInstructions",42:"ActionAdvised",45:"ReferenceService",47:"ReferenceDate",50:"ReferenceNumber",55:"DateCreated",60:"TimeCreated",62:"DigitalCreationDate",63:"DigitalCreationTime",65:"OriginatingProgram",70:"ProgramVersion",75:"ObjectCycle",80:"Byline",85:"BylineTitle",90:"City",92:"Sublocation",95:"State",100:"CountryCode",101:"Country",103:"OriginalTransmissionReference",105:"Headline",110:"Credit",115:"Source",116:"CopyrightNotice",118:"Contact",120:"Caption",121:"LocalCaption",122:"Writer",125:"RasterizedCaption",130:"ImageType",131:"ImageOrientation",135:"LanguageIdentifier",150:"AudioType",151:"AudioSamplingRate",152:"AudioSamplingResolution",153:"AudioDuration",154:"AudioOutcue",184:"JobID",185:"MasterDocumentID",186:"ShortDocumentID",187:"UniqueDocumentID",188:"OwnerID",200:"ObjectPreviewFileFormat",201:"ObjectPreviewFileVersion",202:"ObjectPreviewData",221:"Prefs",225:"ClassifyState",228:"SimilarityIndex",230:"DocumentNotes",231:"DocumentHistory",232:"ExifCameraInfo",255:"CatalogSets"},t.stringValues={10:{0:"0 (reserved)",1:"1 (most urgent)",2:"2",3:"3",4:"4",5:"5 (normal urgency)",6:"6",7:"7",8:"8 (least urgent)",9:"9 (user-defined priority)"},75:{a:"Morning",b:"Both Morning and Evening",p:"Evening"},131:{L:"Landscape",P:"Portrait",S:"Square"}},t.getText=function(e){var t=this.get(e),i=this.map[e],r=this.stringValues[i];return r?r[t]:String(t)},t.getAll=function(){var e,t,i={};for(e in this)Object.prototype.hasOwnProperty.call(this,e)&&(t=this.tags[e])&&(i[t]=this.getText(t));return i},t.getName=function(e){return this.tags[e]},function(){var e,i=t.tags,r=t.map||{};for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(r[i[e]]=Number(e))}()});
},{"./load-image":"zUX9","./load-image-iptc":"lrQ4"}],"DLZ3":[function(require,module,exports) {
var define;
var t;!function(e){"use strict";"function"==typeof t&&t.amd?t(["./load-image","./load-image-scale","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-scale"),require("./load-image-meta")):e(window.loadImage)}(function(t){"use strict";var e=t.transform,a=t.requiresCanvas,A=t.requiresMetaData,r=t.transformCoordinates,o=t.getTransformedOptions;function i(e,a){var A=e&&e.orientation;return!0===A&&!t.orientation||1===A&&t.orientation||(!a||t.orientation)&&A>1&&A<9}function n(t,e){return t!==e&&(1===t&&e>1&&e<9||t>1&&t<9)}function s(t,e){if(e>1&&e<9)switch(t){case 2:case 4:return e>4;case 5:case 7:return e%2==0;case 6:case 8:return 2===e||4===e||5===e||7===e}return!1}!function(t){if(t.global.document){var e=document.createElement("img");e.onload=function(){if(t.orientation=2===e.width&&3===e.height,t.orientation){var a=t.createCanvas(1,1,!0).getContext("2d");a.drawImage(e,1,1,1,1,0,0,1,1),t.orientationCropBug="255,255,255,255"!==a.getImageData(0,0,1,1).data.toString()}},e.src="data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAIAAwMBEQACEQEDEQH/xABRAAEAAAAAAAAAAAAAAAAAAAAKEAEBAQADAQEAAAAAAAAAAAAGBQQDCAkCBwEBAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AG8T9NfSMEVMhQvoP3fFiRZ+MTHDifa/95OFSZU5OzRzxkyejv8ciEfhSceSXGjS8eSdLnZc2HDm4M3BxcXwH/9k="}}(t),t.requiresCanvas=function(e){return i(e)||a.call(t,e)},t.requiresMetaData=function(e){return i(e,!0)||A.call(t,e)},t.transform=function(a,A,r,o,i){e.call(t,a,A,function(e,a){if(a){var A=t.orientation&&a.exif&&a.exif.get("Orientation");if(A>4&&A<9){var o=a.originalWidth,i=a.originalHeight;a.originalWidth=i,a.originalHeight=o}}r(e,a)},o,i)},t.getTransformedOptions=function(e,a,A){var r=o.call(t,e,a),i=A.exif&&A.exif.get("Orientation"),c=r.orientation,l=t.orientation&&i;if(!0===c&&(c=i),!n(c,l))return r;var E=r.top,h=r.right,f=r.bottom,g=r.left,B={};for(var Q in r)Object.prototype.hasOwnProperty.call(r,Q)&&(B[Q]=r[Q]);if(B.orientation=c,(c>4&&!(l>4)||c<5&&l>4)&&(B.maxWidth=r.maxHeight,B.maxHeight=r.maxWidth,B.minWidth=r.minHeight,B.minHeight=r.minWidth,B.sourceWidth=r.sourceHeight,B.sourceHeight=r.sourceWidth),l>1){switch(l){case 2:h=r.left,g=r.right;break;case 3:E=r.bottom,h=r.left,f=r.top,g=r.right;break;case 4:E=r.bottom,f=r.top;break;case 5:E=r.left,h=r.bottom,f=r.right,g=r.top;break;case 6:E=r.left,h=r.top,f=r.right,g=r.bottom;break;case 7:E=r.right,h=r.top,f=r.left,g=r.bottom;break;case 8:E=r.right,h=r.bottom,f=r.left,g=r.top}if(s(c,l)){var m=E,b=h;E=f,h=g,f=m,g=b}}switch(B.top=E,B.right=h,B.bottom=f,B.left=g,c){case 2:B.right=g,B.left=h;break;case 3:B.top=f,B.right=g,B.bottom=E,B.left=h;break;case 4:B.top=f,B.bottom=E;break;case 5:B.top=g,B.right=f,B.bottom=h,B.left=E;break;case 6:B.top=h,B.right=f,B.bottom=g,B.left=E;break;case 7:B.top=h,B.right=E,B.bottom=g,B.left=f;break;case 8:B.top=g,B.right=E,B.bottom=h,B.left=f}return B},t.transformCoordinates=function(e,a,A){r.call(t,e,a,A);var o=a.orientation,i=t.orientation&&A.exif&&A.exif.get("Orientation");if(n(o,i)){var c=e.getContext("2d"),l=e.width,E=e.height,h=l,f=E;switch((o>4&&!(i>4)||o<5&&i>4)&&(e.width=E,e.height=l),o>4&&(h=E,f=l),i){case 2:c.translate(h,0),c.scale(-1,1);break;case 3:c.translate(h,f),c.rotate(Math.PI);break;case 4:c.translate(0,f),c.scale(1,-1);break;case 5:c.rotate(-.5*Math.PI),c.scale(-1,1);break;case 6:c.rotate(-.5*Math.PI),c.translate(-h,0);break;case 7:c.rotate(-.5*Math.PI),c.translate(-h,f),c.scale(1,-1);break;case 8:c.rotate(.5*Math.PI),c.translate(0,-f)}switch(s(o,i)&&(c.translate(h,f),c.rotate(Math.PI)),o){case 2:c.translate(l,0),c.scale(-1,1);break;case 3:c.translate(l,E),c.rotate(Math.PI);break;case 4:c.translate(0,E),c.scale(1,-1);break;case 5:c.rotate(.5*Math.PI),c.scale(1,-1);break;case 6:c.rotate(.5*Math.PI),c.translate(0,-E);break;case 7:c.rotate(.5*Math.PI),c.translate(l,-E),c.scale(-1,1);break;case 8:c.rotate(-.5*Math.PI),c.translate(-l,0)}}}});
},{"./load-image":"zUX9","./load-image-scale":"rlaj","./load-image-meta":"Gr9j"}],"zlHZ":[function(require,module,exports) {
module.exports=require("./load-image"),require("./load-image-scale"),require("./load-image-meta"),require("./load-image-fetch"),require("./load-image-exif"),require("./load-image-exif-map"),require("./load-image-iptc"),require("./load-image-iptc-map"),require("./load-image-orientation");
},{"./load-image":"zUX9","./load-image-scale":"rlaj","./load-image-meta":"Gr9j","./load-image-fetch":"Z77d","./load-image-exif":"VSxx","./load-image-exif-map":"zZKb","./load-image-iptc":"lrQ4","./load-image-iptc-map":"P1QC","./load-image-orientation":"DLZ3"}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("blueimp-load-image"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var i=e.apply(t,r);function u(e){n(i,a,o,u,c,"next",e)}function c(e){n(i,a,o,u,c,"throw",e)}u(void 0)})}}document.querySelector("input[type=file]").addEventListener("change",r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,e.default)(this.files[0],{maxWidth:1500,maxHeight:1500,canvas:!0});case 2:t.sent.image.toBlob(function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image_file",t),e.next=4,fetch("https://sdk.photoroom.com/v1/segment",{method:"POST",headers:{"x-api-key":"85ec9dcfc4dad1e802961a5266ea0e18d43a670f"},body:n});case 4:return r=e.sent,e.next=7,r.blob();case 7:a=e.sent,o=document.createElement("img"),document.querySelector("#result").appendChild(o),o.style.width="50%",o.src=URL.createObjectURL(a);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return t.stop()}},t,this)})));
},{"blueimp-load-image":"zlHZ"}]},{},["Focm"], null)
//# sourceMappingURL=/csb-mk30y/source.608b7a45.js.map