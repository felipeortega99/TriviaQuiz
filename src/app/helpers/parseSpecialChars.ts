export function htmlSpecialChars(text: string): string {
  if (typeof text == "string") {
    text = text.replace(/&gt;/gi, ">");
    text = text.replace(/&lt;/gi, "<");
    text = text.replace(/&#039;/g, "'");
    text = text.replace(/&quot;/gi, '"');
    text = text.replace(/&epsilon;/gi, "ε");
    text = text.replace(/&Phi;/gi, "Φ");
    text = text.replace(/&amp;/gi, "&"); /* must do &amp; last */
  }
  return text;
}
