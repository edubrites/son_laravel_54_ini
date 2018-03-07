$(document).ready(function(){
    
    // menu
    $('.menu li a, #countdown a').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 130 // 170 é o valor antigo
	        }, 1000);
	        return false;
	      }
	    }
	});

    jQuery("#action-ex #enviar_expositor").click(function (o) {
        o.preventDefault(), $.ajax({
            url: "recebeemail.php",
            type: "POST",
            data: {
                form: 'expositor',
                evento: jQuery("#evento_expositor").val(),
                nome: jQuery("#nome_expositor").val(),
                cnpj: jQuery("#cnpj_expositor").val(),
                email: jQuery("#email_expositor").val()
            },
            beforeSend: function(){
                $("#ajax_loader").show();
            }
        }).error(function () {
        	console.log('erro ao enviar mensagem por e-mail');
        }).success(function (data) {
        	console.log(data);
            $("#ajax_loader").hide();
            "11" == data && jQuery(".white-expositores").html("<div style='color: green'>Cadastro efetuado com sucesso</div>"), "0" == data && jQuery(".white-expositores").html("<div style='color: red'>Este e-mail e/ou cnpj já foi cadastrado.</div>")
        })
    });

    // jQuery(".modal-body .btn-register").click(function (event) {
    //     event.preventDefault(), $.ajax({
    //         url: "recebe.php",
    //         type: "POST",
    //         data: {email: jQuery("#email").val(), nome: jQuery("#nomep").val()},
    //         beforeSend: function(){
    //             $("#ajax_loader").show();
    //         }
    //     }).error(function () {
    //     }).success(function (data) {
    //         $("#ajax_loader").hide();
    //         "1" == data && jQuery(".modal-body .newsletter .title").html("<div style='color: green'>Cadastro efetuado com sucesso</div>"), "0" == data && jQuery(".modal-body .newsletter .title").html("<div style='color: red'>Este e-mail já foi cadastrado.</div>")
    //     })
    // });

    jQuery("#envia_cadastro").click(function (event) {
        event.preventDefault(), $.ajax({
            url: "recebe.php",
            type: "POST",
            data: {email: jQuery("#email_newsletter").val(), nome: jQuery("#nome_newsletter").val()},
            beforeSend: function(){
                $("#ajax_loader").show();
            }
        }).error(function () {
        }).success(function (data) {
            $("#ajax_loader").hide();
            "1" == data && jQuery(".white-newsletter").html("<div style='color: green'>Cadastro efetuado com sucesso</div>"), "0" == data && jQuery(".white-newsletter").html("<div style='color: red'>Este e-mail já foi cadastrado.</div>")
        })
    });


    jQuery("#action-lj #enviar_lojista").click(function (o) {

        jQuery("form[id='action-lj']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                cnpj_lojista: "required",
                razao_social_lojista: "required",
                endereco_lojista: "required",
                responsavel_lojista: "required"
            },
            // Specify validation error messages
            messages: {
                cnpj_lojista: "Por favor, insira um cnpj válido.",
                razao_social_lojista: "Por favor, entre com a razão social",
                endereco_lojista: "Por favor, insira o endereço da loja",
                responsavel_lojista: "Por favor, insira o nome do responsável"
            },

            //jQuery(".white-lojista").html("");
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                // form.submit();
                o.preventDefault(), $.ajax({
                    url: "recebeemail.php",
                    type: "POST",
                    beforeSend: function(){
                        jQuery('.ajax-loader').css("visibility", "visible");
                    },
                    data: {
                        form: 'lojista',
                        razao_social_lojista: jQuery("#razao_social_lojista").val(),
                        endereco_lojista: jQuery("#endereco_lojista").val(),
                        cnpj_lojista: jQuery("#cnpj_lojista").val(),
                        fone_lojista: jQuery("#fone_lojista").val(),
                        responsavel_lojista: jQuery("#responsavel_lojista").val(),
                        site: jQuery("#site").val()
                    },
                    beforeSend: function(){
                        jQuery("#ajax_loader").show();
                    }
                }).error(function () {
                }).success(function (data) {
                    //console.log(data);
                    if(data == '1' || data == '2'){
                        jQuery(".white-lojista").html("<div style='color: green'>Cadastro efetuado com sucesso</div>");
                    }else if(data == '0'){
                        jQuery(".white-lojista").html("<div style='color: red'>Houve um erro ao tentar cadastrar os dados.<br>Por favor, tente novamente.</div>");
                    }else if(data == '3'){
                        jQuery(".white-lojista").html("<div style='color: red'>Dados já cadastrados.<br>Por favor, verifique os dados e tente novamente.</div>");
                    }
                    //jQuery("#action-lj").trigger('reset');
                    jQuery("#ajax_loader").hide();

                })
            }
        });


    });


});