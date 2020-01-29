import { Component, OnInit } from '@angular/core';
import { MimodeloService } from 'src/app/services/mimodelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mimodelo } from 'src/app/modelo/mimodelo';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {

  public formuser: FormGroup;
  public misusuarios: Mimodelo;
  constructor(private formBuilder: FormBuilder, private modelo: MimodeloService) {
    this.formuser = formBuilder.group({
      nombre: ['', [Validators.required]],
      imagen: []
    });
  }

  ngOnInit() {

  }

  submit() {
    this.modelo.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
