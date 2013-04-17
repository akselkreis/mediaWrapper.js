#mediaWrapper.js
## Simple responsive iframes.

jQuery mediaWrapper is a plugin for wrapping an making iframes and thus embedded videos behave more like images when developing a responsive website. 

## Usage

mediaWrapper accepts 2 options: baseHeight and baseWidth. These two options work together to determine the aspect ratio of the video you are embedding. You can use any combination of numbers, for example: an actual aspect ratio like '16 & 9' or '4 & 3' to set the aspect ratio, or a set of pixel values such as '640' & '480'.

<pre><code>$(document).ready(function(){
	$('iframe').mediaWrapper({
		baseWidth	:16, // 
		baseHeight	:9
	});
});</code></pre>

## Compatibility

This plugin has been tested in the following browsers: 
Firefox: 13, 20  
Chrome: 26  
Internet Explorer: 8  
  
License: MIT/GPLv2