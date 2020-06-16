var favicon_images = [
        './favicon/tmp-0.gif',
        './favicon/tmp-1.gif',
        './favicon/tmp-2.gif',
        './favicon/tmp-3.gif',
        './favicon/tmp-4.gif',
        './favicon/tmp-5.gif',
        './favicon/tmp-6.gif',
        './favicon/tmp-7.gif',
        './favicon/tmp-8.gif',
        './favicon/tmp-9.gif',
        './favicon/tmp-10.gif',
        './favicon/tmp-11.gif',
        './favicon/tmp-12.gif',
        './favicon/tmp-13.gif',
        './favicon/tmp-14.gif',
        './favicon/tmp-15.gif',
        './favicon/tmp-16.gif',
        './favicon/tmp-17.gif',
        './favicon/tmp-18.gif',
        './favicon/tmp-19.gif',
        './favicon/tmp-20.gif',
        './favicon/tmp-21.gif',
        './favicon/tmp-22.gif',
        './favicon/tmp-23.gif',
        './favicon/tmp-24.gif',
        './favicon/tmp-25.gif',
        './favicon/tmp-26.gif',
        './favicon/tmp-27.gif',
        './favicon/tmp-28.gif',
        './favicon/tmp-29.gif',
        './favicon/tmp-30.gif',
        './favicon/tmp-31.gif',
        './favicon/tmp-32.gif',
        './favicon/tmp-33.gif',
        './favicon/tmp-34.gif',
        './favicon/tmp-35.gif',
        './favicon/tmp-36.gif',
        './favicon/tmp-37.gif',
        './favicon/tmp-38.gif',
        './favicon/tmp-39.gif',
        './favicon/tmp-40.gif',
        './favicon/tmp-41.gif',
        './favicon/tmp-42.gif',
        './favicon/tmp-43.gif'
    ],
    image_counter = 0; // To keep track of the current image

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

    // If last image then goto first image
    // Else go to next image    
    if (image_counter == favicon_images.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 200);