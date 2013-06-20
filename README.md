RWDimages
=========

A jQuery plugin to switch images based on the viewport size.

This is an MVP in that it works but as v0.1 has much room for improvement.

<h2>Overview</h2>

RWDimages identifies the size of the viewport and dynamically creates the HTML for images.

User set breakpoints control which version of an image will be served; mobile, tablet or desktop thereby keeping
loading times to a minimum.

To help with the goal of reducing load times, RWDimages does not require initial images in the markup to work with,
not even a 1x1 holding image. Before RWDimages has identified which image versions to serve upno images it controls 
will be downloaded by the visitor.

RWDimages will not change the image source attributes when the window is resized for the following reasons:

- The majority of mobile devices do not currently allow resizing of browser windows
- The majority of desktop / laptop users will have their browser at full or near-full width
- Why download a second load of images and use bandwidth if someone does resize?
