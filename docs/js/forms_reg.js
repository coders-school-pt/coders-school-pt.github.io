function postToRegular() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Telefone").val();
    var field4 = $("#Idade").val();
    var field5 = $("#Privacidade").val();
    if (field5 == 'on')
        field5 = 'Sim';
    console.log("All good!")

    $.ajax({
        
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScMCl2Zek6CyO44bcly5yLxTuUr0VmkjMbmeucn11o7iIhfmA/formResponse",
        
      data: {
        "entry.17101007": field1,
        "entry.580202289": field2,
        "entry.1708548339": field3,
        "entry.700354256": field4,
        "entry.1896435546": field5
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