function postToRegular() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Telefone").val();
    var field4 = $("#Idade").val();
    var field5 = $("#Horarios").val();
    var field6 = $("#Observacoes").val();
    var field7 = $("#Privacidade").is(':checked') ? 'Sim' : '';
    
    // Debug logging
    console.log("Form submission started");
    console.log("Name:", field1);
    console.log("Email:", field2);
    console.log("Phone:", field3);
    console.log("Age:", field4);
    console.log("Schedule:", field5);
    console.log("Observations:", field6);
    console.log("Privacy:", field7);
    
    // Validate required fields
    if (!field1 || !field2 || !field3 || !field4 || !field5 || !field7) {
        console.log("Missing required fields");
        showFormMessage('error', 'Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    
    console.log("All fields validated, proceeding with submission...")

    // Show loading message
    showFormMessage('loading', 'A enviar a sua pré-inscrição...');
    
    // Disable submit button to prevent double submission
    $("#contact-submit").prop('disabled', true).text('A ENVIAR...');

    // Prepare form data
    const formData = new FormData();
    formData.append('entry.17101007', field1);
    formData.append('entry.580202289', field2);
    formData.append('entry.1708548339', field3);
    formData.append('entry.700354256', field4);
    formData.append('entry.1060917949', field5);
    formData.append('entry.679173537', field6);
    formData.append('entry.1896435546', field7);

    console.log("Sending data to Google Forms...");

    // Use fetch with no-cors mode (more reliable for Google Forms)
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScMCl2Zek6CyO44bcly5yLxTuUr0VmkjMbmeucn11o7iIhfmA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    })
    .then(() => {
        console.log("Form submitted successfully (no-cors mode)");
        showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
        $('#contact').trigger('reset');
        setTimeout(function() {
            $("#contact").hide();
            $(document).trigger('formHidden');
        }, 3000);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
        // Fallback: try with iframe method
        submitWithIframe(field1, field2, field3, field4, field5, field6, field7);
    })
    .finally(() => {
        // Re-enable submit button
        $("#contact-submit").prop('disabled', false).text('SUBMETER');
    });

    return false;
}

// Fallback method using iframe
function submitWithIframe(field1, field2, field3, field4, field5, field6, field7) {
    console.log("Using iframe fallback method");
    
    // Create hidden iframe if it doesn't exist
    if (!document.getElementById('hidden_iframe')) {
        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.id = 'hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    // Create temporary form for iframe submission
    const tempForm = document.createElement('form');
    tempForm.action = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScMCl2Zek6CyO44bcly5yLxTuUr0VmkjMbmeucn11o7iIhfmA/formResponse';
    tempForm.method = 'POST';
    tempForm.target = 'hidden_iframe';
    tempForm.style.display = 'none';

    // Add form fields
    const fields = [
        { name: 'entry.17101007', value: field1 },
        { name: 'entry.580202289', value: field2 },
        { name: 'entry.1708548339', value: field3 },
        { name: 'entry.700354256', value: field4 },
        { name: 'entry.1060917949', value: field5 },
        { name: 'entry.679173537', value: field6 },
        { name: 'entry.1896435546', value: field7 }
    ];

    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        tempForm.appendChild(input);
    });

    document.body.appendChild(tempForm);
    
    // Submit and clean up
    tempForm.submit();
    
    // Assume success after a short delay
    setTimeout(() => {
        console.log("Iframe submission completed");
        showFormMessage('success', 'Pré-inscrição enviada com sucesso! Entraremos em contacto em breve.');
        $('#contact').trigger('reset');
        setTimeout(function() {
            $("#contact").hide();
            $(document).trigger('formHidden');
        }, 3000);
        document.body.removeChild(tempForm);
    }, 1000);
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
    console.log("Document ready, setting up form button click handler");
    
    // Ensure form starts hidden
    $("#contact").hide();
    console.log("Form initial state - hidden:", $("#contact").is(':hidden'));
    console.log("Button initial state - visible:", $("#formButton").is(':visible'));
    
    $("#formButton").click(function() {
      console.log("Form button clicked");
      $("#contact").show();
      $("#formButton").hide();
      console.log("Form now visible:", $("#contact").is(':visible'));
      console.log("Button now hidden:", $("#formButton").is(':hidden'));
      // Hide any existing messages when opening form
      hideFormMessage();
    });
    
    // Also handle form submission
    $("#contact").on('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      console.log("Form submit event triggered");
      return postToRegular();
    });
    
    // Show form button again when form is hidden (after successful submission)
    $(document).on('formHidden', function() {
      $("#formButton").show();
    });
});