/**
 * For any page
 * function sets CodeMirror in play on textareas
 * with class pattern
 */

function setCM() {

  const allTargets = document.querySelectorAll('.sourcecode');
  allTargets.forEach(function(e) {
    CodeMirror.fromTextArea(e, {
      lineNumbers: true
    });
  });
}
