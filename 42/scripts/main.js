/**
 * Created by Andrew on 2017/6/16.
 */
requirejs.config({
    // baseUrl: 'scripts',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery.min'
    }
});

define(['jquery'], function ($) {
    $(document.body).append('<h1>Hello World!</h1> <div>i was loded by jQuery</div>')
});