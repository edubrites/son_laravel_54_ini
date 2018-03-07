/**
 * Created by eduardobrites on 16/08/17.
 */
// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='action-lj']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            lojista_evento: "required",
            lojista_cnpj: "required",
            lojista_razaosocial: "required",
            lojista_emaile: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            lojista_nome_1: "required",
            cpf_1: "required"
        },
        // Specify validation error messages
        messages: {
            lojista_evento: "Selecione um evento",
            lojista_cnpj: "Por favor, insira um cnpj válido.",
            lojista_razaosocial: "Por favor, entre com a razão social",
            lojista_emaile: "Por favor, entre com um email válido",
            lojista_nome_1: "Por favor, insira pelo menos um nome",
            cpf_1: "Por favor, insira pelo menos um CPF"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});
