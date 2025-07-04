function postToRegular() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Telefone").val();
    var field4 = $("#Idade").val();
    var field5 = $("#Privacidade").val();
    if (field5 == 'on')
        field5 = 'Sim';
    console.log("All good!")

    // Show loading message
    showFormMessage('loading', 'A enviar a sua pré-inscrição...');
    
    // Disable submit button to prevent double submission
    $("#contact-submit").prop('disabled', true).text('A ENVIAR...');

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
      statusCode: {
        0: function() {
          // Status 0 usually means success for cross-origin Google Forms
          showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
          $('#contact').trigger('reset');
          setTimeout(function() {
            $("#contact").hide();
            $("#formButton").show();
          }, 3000);
        },
        200: function() {
          showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
          $('#contact').trigger('reset');
          setTimeout(function() {
            $("#contact").hide();
            $("#formButton").show();
          }, 3000);
        }
      },
      success: function (d) {
        showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
        $('#contact').trigger('reset');
        setTimeout(function() {
          $("#contact").hide();
          $("#formButton").show();
        }, 3000);
      },
      error: function (x, y, z) {
        if (x.status === 0) {
          // Status 0 is actually success for Google Forms cross-origin requests
          showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
          $('#contact').trigger('reset');
          setTimeout(function() {
            $("#contact").hide();
            $("#formButton").show();
          }, 3000);
        } else {
          showFormMessage('error', 'Ocorreu um erro ao enviar a pré-inscrição. Por favor, tente novamente ou contacte-nos diretamente.');
        }
      },
      complete: function() {
        // Re-enable submit button
        $("#contact-submit").prop('disabled', false).text('SUBMETER');
      }
    });

    return false;
}

function showFormMessage(type, message) {
    const messageContainer = $('#form-message');
    const messageText = messageContainer.find('.message-text');
    
    // Remove any existing classes
    messageContainer.removeClass('success error loading show fade-out');
    
    // Set the message text
    messageText.text(message);
    
    // Add the appropriate class and show
    messageContainer.addClass(type).show();
    
    // Trigger show animation
    setTimeout(function() {
        messageContainer.addClass('show');
    }, 10);
    
    // Auto-hide success and error messages after 6 seconds
    if (type === 'success' || type === 'error') {
        setTimeout(function() {
            hideFormMessage();
        }, 6000);
    }
}

function hideFormMessage() {
    const messageContainer = $('#form-message');
    messageContainer.addClass('fade-out');
    
    setTimeout(function() {
        messageContainer.hide().removeClass('success error loading show fade-out');
    }, 500);
}

$(document).ready(function() {
    $("#formButton").click(function() {
      $("#contact").toggle();
      $("#formButton").hide();
      // Hide any existing messages when opening form
      hideFormMessage();
    });
});