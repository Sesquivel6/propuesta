export class ContratoModel {
    id:string; //para el ejemplo
    nombre:string;
    programa:string;
    comuna:string;
    ingreso_memo: boolean;
    fecha_ingreso: string;
    tipo_licitacion: string;
    tipo_contrato: string;
    sub_contrato: string;
    nombre_proyecto:string;
    codBip: number;
    id_arrastre_contrato: string; //para el ejemplo
    encargado_bases: string;
    mercado_publico: string;
    encargado_unidad:string;


    constructor() {
        this.ingreso_memo = false;
    }

    
}