!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):e.useFitText=t(e.react)}(this,function(e){return function(){var t=e.useRef(null),n=e.useState({fontSize:100,fontSizePrev:20}),f=n[0],r=n[1],o=f.fontSize,i=f.fontSizePrev;return e.useEffect(function(){var e=Math.abs(o-i)<=5,n=!!t.current&&t.current.scrollHeight>t.current.offsetHeight,f=o>i;e?n&&r({fontSize:i<o?i:o-(i-o),fontSizePrev:i}):r({fontSize:o+(n?f?i-o:20-o:f?100-o:i-o)/2,fontSizePrev:o})},[o,i,t]),{fontSize:o+"%",ref:t}}});
//# sourceMappingURL=index.umd.js.map