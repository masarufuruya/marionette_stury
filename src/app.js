//require_config.jsを直接loadする方法とrequrejs.configの方法の2つがある
requirejs.config({
  //モジュールパス
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore-min',
    backbone: '../node_modules/backbone/backbone-min',
  }
});

requirejs([])
