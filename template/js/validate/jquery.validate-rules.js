	$(document).ready(function() {
			
			$.validator.addMethod("lettersonly", function(value, element) {
				return this.optional(element) || /^[a-z]+$/i.test(value);
				}, "Please enter only letters without space."); 
			
			$.validator.addMethod("customeq", function(value, element, param) { 
		        return this.optional(element) || value === param; 
		    }, "TC No Kullanılmakta.");		
			
			$.validator.addMethod(
				    "turkishDate",
				    function(value, element) {
				        // put your own logic here, this is just a (crappy)
						// example
				        return value.match(/^\d\d?\/\d\d?\/\d\d\d\d$/);
				    },
				    "Please enter a date in the format dd/mm/yyyy."
				);
			
			$.validator.addMethod('customphone', function (value, element) {
			    return this.optional(element) || /^\d{3}-\d{3}-\d{4}$/.test(value);
			}, "Please enter a valid phone number");
			
			
			$.validator.addMethod("eqrule", function(value, element, param) { 
		        return this.optional(element) || value === param; 
		    }, "This e-mail used.");
			
			
			// validate contact form on keyup and submit
			
				
			$("#signup").validate({
			
				 errorElement: "span", 
				 
				 
				// set the rules for the fields
				rules: {
				
					username: {
						required: true,
						minlength: 2,
						
						
					},
					usersurname: {
						required: true,
						minlength: 2,
						
						
					},
					phone: {
						required: true,
						customphone:true
						
						
					},
					
					useremailaddress : {
						required :true,
						email: true,
					},
					
					mailcontrol:{
						
						eqrule: '1',
						
					},
					
					userpassword : {
						required :true,
						minlength: 6,
						maxlength:12
					},	
					
					userpasswordre : {
						equalTo : "#userpassword",
					},	
					
					userbirthdate : {
						
						required: true,
						turkishDate:true
						
					},
					
					useridentityno : {
						
						required: true,
						number:true,
						minlength: 11,
						maxlength:11
						
					},
					
					formcontrol : {
						
						required: true,
						number:true,
						equalTo: "#chk",
						
					},
					
					address : {
						
						required: true,
						
					},
					city: {
						
						required: true,
						min: 1
						
					},
					town: {
						
						required: true,
						min: 1
						
					},
					
					
					
				},
			
			
				
				errorPlacement: function(error, element) {               
					error.appendTo(element.parent());     
				},
				
				
	
			});
			
			$("#apply_form").validate({
				
				errorElement: "span", 
				
				
				// set the rules for the fields
				rules: {
				
				
					uphoto : {
						
						required: true,
						
					},
					
					uidno : {
				
						required: true,
						number:true,
						minlength: 11,
						maxlength:11
						
					},
					tccontrol:{
						
						customeq: '1',
						
					},
				
					uname: {
				
						required: true,
						minlength: 2,
						
				
					},
					uage: {
						required: true,
						number: true,
						maxlength: 2,
						min: 18
					},
					
//					borncity: {
//						
//						required: true,
//						min: 1
//						
//					},
//					borntown: {
//						
//						required: true,
//						min: 1
//						
//					},
					livecity: {
						
						required: true,
						min: 1
						
					},
					livetown: {
						
						required: true,
						min: 1
						
					},
					
//					familycity: {
//						
//						required: true,
//						min: 1
//						
//					},
//					familytown: {
//						
//						required: true,
//						min: 1
//						
//					},
//					fromcity: {
//						
//						required: true,
//						min: 1
//						
//					},
//					fromtown: {
//						
//						required: true,
//						min: 1
//						
//					},
					
					uphonemobile: {
						required: true,
						customphone:true
						
						
					},
					uphonehome: {
						required: true,
						customphone:true
						
						
					},
					uphonework: {
						required: true,
						customphone:true
						
						
					},
					
					uemailaddress : {
						required :true,
						email: true,
					},
					
					mailcontrol:{
						
						eqrule: '1',
						
					},
					
					uschool: {
						required: true,
						minlength: 6,
						maxlength:200
						
						
					},
					ujob: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
//					uwork: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
//					ufjob: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
//					umjob: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
					
					umaritalst: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					
					uanycomp: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					
					uhobbies: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					
					ulikebook: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					ulikemovie: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					ufollownews: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					ufavcolumnist: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
//					ubesttvprog: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
					
					utbl42: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					utbl43: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					utbl44: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
//					utbl45: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
					utbl46: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					utbl47: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
//					utbl48: {
//						required: true,
//						minlength: 2,
//						maxlength:100
//						
//						
//					},
					utbl49: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					utbl50: {
						required: true,
						minlength: 2,
						maxlength:100
						
						
					},
					
					upassword : {
						required :true,
						minlength: 6,
						maxlength:12
					},	
					
					upasswordre : {
						equalTo : "#upassword",
					},	
					
					userbirthdate : {
						
						required: true,
						turkishDate:true
						
					},
					
					
					
					formcontrol : {
						
						required: true,
						number:true,
						equalTo: "#chk",
						
					},
					
					
					
					
				},
			
			
			
			errorPlacement: function(error, element) {               
				error.appendTo(element.parent());     
			},
			
			
			
			});
			
			
	});