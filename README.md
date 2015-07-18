#mediaWrapper.js
## Simple Responsive iframes.

jQuery mediaWrapper is a plugin for wrapping an making iframes and embedded videos behave more like images when developing a responsive website. Currently iframes will default to an arbitrary width set by the embed code.

The plugin is very simple, it wraps the iframe in a relatively positioned container, and absolutely positions the iframe inside of that container to conform to the container's dimensions. No styling is applied to the iframe or the container other than what is needed to make the iframe responsive.

You can apply your own styles to the iframe or it's container by targeting the 'mediaWrapper' class.

## Usage

mediaWrapper accepts 3 options: intrinsic, baseHeight and baseWidth.

**intrinsic:** This option lets mediaWrapper use the intrinsic width and height attributes if they are set - this is good for sites that embed iframes of varying sizes. The default value is "true" - set it to "false" to use baseHeight & baseWidth.

**baseHeight & baseWidth:** These two options work together to determine the aspect ratio of the video you are embedding. You can use any combination of numbers, for example: an actual aspect ratio like '16 & 9' or '4 & 3' to set the aspect ratio, or a set of pixel values such as '640' & '480'. The plugin will fill 100% of it container's width by default. The default aspect ratio is 16:9.

<pre><code>$(document).ready(function(){
	$('iframe').mediaWrapper({
		intrinsic:	true,
		baseWidth	:16,
		baseHeight	:9
	});
});</code></pre>

## Compatibility

This plugin has been tested in the following browsers:  
Chrome: 26+  
Firefox: 13+  
Internet Explorer: 8+  
Opera: 12+  
Safari: 6+  

License: MIT/GPLv2
