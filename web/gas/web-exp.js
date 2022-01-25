/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function get_script_url() {
 var url = ScriptApp.getService().getUrl();
 return url;
}

function condition_randomize() {
  var cond = Math.random();
  if (cond < 0.5)
    cond = "a"
  else
    cond = "b"
  return cond
}

/**
 * Get "home page", or a requested page.
 * Expects a 'page' parameter in querystring.
 *
 * @param {event} e Event passed to doGet, with querystring
 * @returns {String/html} Html to be served
 */
function doGet(e) {
  Logger.log( Utilities.jsonStringify(e) );
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function do_some(request) {
  //Logger.log(request.parameter.action);
  //Logger.log(JSON.stringify(request));
  //var html = HtmlService.createHtmlOutputFromFile("test");
  var html = HtmlService.createTemplateFromFile('index');//.evaluate();
  //if(request.parameter.action == null){
  //  request.parameter.action = "create";
  //}
  //html.action = request.parameter.action;
  //html.pid = request.parameter.pid;
  //html.title = request.parameter.title;
  //html.status = request.parameter.status;
  //html.data = request.parameter.data;
  return html.evaluate();
}




