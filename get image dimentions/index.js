function getImageDimentions(e){
	var fr = new FileReader;
    
    fr.onload = function() {
        var img = new Image;
        
        img.onload = function() {
            alert(img.width+" X "+img.height);
        };
        
        img.src = fr.result;
    };
    
    fr.readAsDataURL(this.files[0]);
}

document.getElementById('file').addEventListener('change',getImageDimentions,false);