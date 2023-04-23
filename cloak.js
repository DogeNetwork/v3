(function() {
    let url = (window.location.href, "/app.html");
    var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999")
    w.document.write('<script>document.title = "Wikipedia";document.tabIcon = "https://en.wikipedia.org/favicon.ico"</script>' +
'<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="'+url+'"></iframe>');
})();