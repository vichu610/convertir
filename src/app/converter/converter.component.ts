import { Component, Input, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { TipoCambio } from '../converter.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']

})

export class ConverterComponent implements OnInit {
  public formulario:FormGroup=new FormGroup({});
  
  constructor(private formBuilder:FormBuilder) { }
  @Input() total: any='';
  tipocambio:TipoCambio[]=[
    {tipo:'Dolar',valor:0,total:0},
    {tipo:'Euro',valor:0,total:0}];

  ngOnInit(): any {
    this.formulario=this.formBuilder.group({
      valor:['',Validators.required],
      tipo:'',
      total:''
    })
    
  }

calcular(){
  
if(this.formulario.controls['tipo'].value=='Dolar'){
console.log('convertir dolar');
let valor=this.formulario.controls['valor'].value;
let convertir:number= 20.25 * valor;
this.total=convertir;


}else if(this.formulario.controls['tipo'].value=='Euro'){
  console.log('convertir euro');
  let valor=this.formulario.controls['valor'].value;
let convertir= 25.25 * valor;
this.total=convertir;
}else{
this.total=null;
}
  
  


}

}