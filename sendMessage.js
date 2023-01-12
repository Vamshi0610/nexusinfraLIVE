function sendMessage() {   
    // alert("how are you");  
    Email.send({
	Host: "smtp.gmail.com",
	Username : "vaishuawaru@gmail.com",
	Password : "9885426468",
	To : 'vaishuawaru@gmail.com',
	From : "vaishuawaru@gmail.com",
	Subject : "New Enquiry",
	Body : "Hello vaish !!!!!!!!",
	}).then(
		message => alert("mail sent successfully")
	);
             }  