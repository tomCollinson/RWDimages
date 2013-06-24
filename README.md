RWDimages
=========

A jQuery plugin to switch images based on the browser window size.

This is an MVP in that it works as v.0.1 has much room for improvement.

<h2>Overview</h2>

RWDimages identifies the size of the browser and dynamically creates the HTML for images.

User set breakpoints control which version of an image will be served; mobile, tablet or desktop thereby keeping
loading times to a minimum.

To help with the goal of reducing load times, RWDimages does not require initial images in the markup to work with,
not even a 1x1 holding image. Before RWDimages has identified which image versions to serve up no images it controls 
will be downloaded by the visitor.

RWDimages will not change the image source attributes when the window is resized for the following reasons:

- The majority of mobile devices do not currently allow resizing of browser windows
- The majority of desktop / laptop users will have their browser at full or near-full width
- Why download a second load of images and use bandwidth if someone does resize?

This feature may be added in the near future as an option to be turned on or off.

<h2>Installation</h2>

Include the script after calling the jQuery library:

`<script src="/path/to/rwdimages.jquery.js"></script>`

<h2>Usage</h2>

Minimum setup

```javascript
jQuery(document).ready( function($) {
  		$().responsive();
		});
```

<h3>Options</h3>

RWDimages comes with a few options listed below.
```javascript
jQuery(document).ready( function($) {
  		$().responsive({
			imgClass : '.img-responsive',
			containerClass: '.rwdimg',
			mobile : 360,
			tablet: 620,
			desktop: 900,
			fadeLoad: true
			});
		});
```

`imgClass`<br/>
Default: .image-responsive<br/>
Description: the class used by the plugin to identify where images should be replaced

`containerClass`<br/>
Default: .rwdimg<br/>
Description: the class used by the element containing the divs identified by imgClass

`mobile`<br/>
Default: 360<br/>
Description: the mobile breakpoint in pixels. This must match the filename suffix used for mobile images.

`tablet`<br/>
Default: 620<br/>
Description: the tablet breakpoint in pixels. This must match the filename suffix used for tablet images.

`desktop`<br/>
Default: 900<br/>
Description: the desktop breakpoint in pixels. This must match the filename suffix used for desktop images.

`fadeLoad`<br/>
Default: false<br/>
Description: fade in all images once they've finished loading

<h3>Markup</h3>

RWDimages requires the following markup pattern

- Container: An element (a div is recommended) with the class 'rwdimg' or whichever class name you've used in the options
- Source: An element (a div is reccomended) with the class 'img-responsive' or whichever class name you've used in the options
- The source must include a data-src attribute that links to an image that complies with the naming conventions


Example

```html
<div class="rwdimg">
  <div class="img-responsive" data-src="images/filename_900.jpg"></div>
</div>
```
    
