# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Es lietoju “document.get ElementsByClassName (“hide_me”)”, kas atgriež objektu masīvu, kam ir klase “hide_me”. getElementsByClassName pieprasa virkni no meklētajām klasēm, un, ja vēlaties vairākas, varat tās atdalīt ar atstarpēm vai. newclassname, ja vēlaties TIKAI objektus, kas atbilst visiem kritērijiem.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

