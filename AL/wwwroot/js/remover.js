function SomeeAdsRemover() {
    $("center").each(function () {
        if ($(this).html() == '<a href="http://somee.com">Web hosting by Somee.com</a>') {
            $(this).next().remove();
            $(this).next().next().remove();
            $(this).next().next().next().remove();
            $(this).remove();
            return false;
        }
        $("div 'onmouseover=\"S_ssac(); \" onmouseout=\"D_ssac(); \" style=\"position: fixed; z - index: 2147483647; left: 0px; bottom: 0px; height: 65px; right: 0px; display: block; width: 100 %; background - color: transparent; margin: 0px; padding: 0px;' ").remove();
        $("div[style='width: 100 %; color: White; font - family: \"Helvetica Neue\", \"Lucida Grande\", \"Segoe UI\", Arial, Helvetica, Verdana, sans - serif; font - size: 11pt;']").remove();
        $("div[style='margin-right: auto; margin-left: auto; display: table; padding:9px; font-size:13pt;']").remove();
        $("div[style='margin-right: auto; margin-left: auto; display: table; font-size: 9pt;']").remove();
    });
}
