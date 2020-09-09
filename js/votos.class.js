class Pregunta{

favor = 0
contra = 0
abs = 0
texto = ""
alerta = ""

set texto(txt){
    this.texto = txt;
}

get texto(){
    return this.texto;
}

masFavor(){
    this.favor++;
}

masContra(){
    this.contra++;
}

masAbs(){
    this.abs++;
}



}