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
  var fontC = new w.FontFaceObserver('Merriweather', {
    weight: 400
  });
  var fontD = new w.FontFaceObserver('Merriweather', {
    weight: 400,
    style: 'italic'
  });
  var fontE = new w.FontFaceObserver('Merriweather', {
    weight: 700
  });
  w.Promise
    .all([fontA.check(), fontB.check(), fontC.check(), fontD.check(), fontE.check()])
    .then(function() {
      var cn = w.document.body.className;
      cn = cn.length ? cn.split(' ') : [];
      cn.push('Body--fontsLoaded');
      w.document.body.className = cn.join(' ');
    });
}(this));
// Google Analytics.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-837636-4', 'auto');
ga('send', 'pageview');
