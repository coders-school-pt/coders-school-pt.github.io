function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Telefone").val();
    var field4 = $("#Idade").val();
    var field5 = $("#Privacidade").val();
    if (field5 == 'on')
        field5 = 'Sim';


    $.ajax({
        
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdQFz2MmrFbSf4AIZhPXmsMkbpkAASWusaCe89ILcLz0HVBKg/formResponse",
        
      data: {
        "entry.514993208": field1,
        "entry.480915377": field2,
        "entry.1597138676": field3,
        "entry.2103535056": field4,
        "entry.1489450399": field5
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });

    return false;
  }

  $(document).ready(function() {
    $("#formButton").click(function() {
      $("#contact").toggle();
      $("#formButton").hide();
    });
  });