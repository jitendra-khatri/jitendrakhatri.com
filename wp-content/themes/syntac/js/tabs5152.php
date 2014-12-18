
jQuery(document).ready(function ($) {

    var pContent = jQuery('.profile-tabs-content div'),
        pTabs = jQuery('.profile-tabs li');

    pContent.hide();
    pContent.eq(4).show();

    pTabs.click(function () {
        pTabs.removeClass('active animated bounceIn');
        jQuery(this).addClass('active animated bounceIn');
        pContent.hide();

        var indexer = jQuery(this).index(),
            pShown = jQuery('.profile-tabs-content div:eq(' + indexer + ')');

        pShown.fadeIn(500);
    });

});