"use strict";(document.querySelectorAll(".js-modal-trigger")||[]).forEach((function(e){var t=e.dataset.target,c=document.getElementById(t);e.addEventListener("click",(function(){c.classList.add("is-active")}))})),(document.querySelectorAll(".modal-close")||[]).forEach((function(e){var t=e.closest(".modal");e.addEventListener("click",(function(){t.classList.remove("is-active")}))}));