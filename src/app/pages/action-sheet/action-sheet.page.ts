import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
selector: 'app-action-sheet',
templateUrl: './action-sheet.page.html',
styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
nombre: string = 'Jorge Saltos';
usuario = {
email: '',
password: ''
}
constructor() { }
ngOnInit() {
}
onSubmit(formulario: NgForm) {
console.log('submit');
console.log(this.usuario);
console.log(formulario);
}
}