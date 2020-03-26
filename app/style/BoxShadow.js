function onLoaded(args) {
    const page = args.object;
    const shadow = page.getViewById("shadow");
  
    if(page.ios) {
      const layer = shadow.ios.layer;
      layer.backgroundColor = UIColor.whiteColor.CGColor;
      layer.shadowOffset = CGSizeMake(0, 1);
      layer.shadowOpacity = 1;
      layer.shadowRadius = 5;
      layer.cornerRadius = 20;
      /*
       You can also specify the shadow colour;
       (i.e. layer.shadowColor = UIColor.yellowColor.CGColor)
  
       But it will default to black if not set.
      */
    }
  }