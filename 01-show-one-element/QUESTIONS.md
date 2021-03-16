# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Kad uzspiežu uz pogu "More" tālāk parādas tekts, bet kad atjauninu lapu, tas teksts atkal pazūd, parādas atkal poga "More".

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Lai skripts varētu strādāt, lapai ir pilnīgi jāielādējas, tāds un ir mērķis šajai koda daļai.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Šī metode mērķa objektam reģistrē notikuma apdarinātāju, kuram tiek izsaukts notikums.
