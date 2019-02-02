// Font event technique sourced from:
// https://github.com/filamentgroup/font-loading/blob/master/font-events.html
(function(w){
  if(w.document.body.className.indexOf('Body--fontsLoaded') > -1) {
    return;
  }
  var fontA = new w.FontFaceObserver('Inconsolata', {
    weight: 400
  });
  var fontB = new w.FontFaceObserver('Inconsolata', {
    weight: 700
  });
  var fontC = new w.FontFaceObserver('Noto Sans', {
    weight: 400
  });
  var fontD = new w.FontFaceObserver('Noto Sans', {
    weight: 400,
    style: 'italic'
  });
  var fontE = new w.FontFaceObserver('Noto Sans', {
    weight: 700
  });
  w.Promise
    .all([fontA.load(), fontB.load(), fontC.load(), fontD.load(), fontE.load()])
    .then(function() {
      var cn = w.document.body.className;
      cn = cn.length ? cn.split(' ') : [];
      cn.push('Body--fontsLoaded');
      w.document.body.className = cn.join(' ');
    });
}(this));
