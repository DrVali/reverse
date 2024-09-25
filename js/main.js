    const textBox1             =   document.getElementById("text_box");
		 textBox1.addEventListener('input', function(){
			 const textBox             =  textBox1.value;
			 const text__reverse       =   document.getElementById("reverse___text");
			 let splitMyString         =   textBox.split(""); 
             let reverseArray          =   splitMyString.reverse(); 
             let finallArray           =   reverseArray.join("");
			 text__reverse.textContent =   finallArray;
		 });
		 
		 
		
		 
		 
		
