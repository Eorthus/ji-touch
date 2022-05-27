$(document).ready(function(){   
    $('.email').inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{1,4}",
        greedy: false,
        clearIncomplete: true,
        onBeforePaste: function (pastedValue, opts) {
          pastedValue = pastedValue.toLowerCase();
          return pastedValue.replace("mailto:", "");
        },
        definitions: {
          '*': {
            validator: "[0-9A-Za-z-а-я-_]",
            casing: "lower"
         
          }
        }
      });
});