const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formularioQr');


const Qr = new QRCode(contenedorQR);
const a = document.getElementById('ecg');


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let calidad = a.options[a.selectedIndex].value;
    Qr._htOption.width = formulario.qrSize.value;
    Qr._htOption.height = formulario.qrSize.value;
    //Qr._htOption.correctLevel = prueba;
    
    let tamaño = (calidad == 0) ? Qr._htOption.correctLevel =0 : (calidad == 1) ? Qr._htOption.correctLevel = 1 : (calidad == 2) ? Qr._htOption.correctLevel = 2 : Qr._htOption.correctLevel =3;
    Qr._htOption.correctLevel = tamaño;
    /*if(prueba==0){
        Qr._htOption.correctLevel = 0;
        
    
    }else{
        console.log("error")
    }*/
    Qr.makeCode(formulario.qrInfo.value);
    
    console.log(Qr._htOption)
    
})
