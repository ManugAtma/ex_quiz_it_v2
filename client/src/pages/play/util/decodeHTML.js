/**
 * 
 * Removes HTML-Encoding.
 *
 * @param {string} - The HTML-encoded text.
 *
 * @returns {string} - The text without HTML-Encoding. 
 * 
 */

function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export default decodeHTML;
