import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PAjaxService } from '../../services/p-ajax.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  public formulario: FormGroup;
  public login: Boolean = false;

  public usuario = {
    id: 0,
    nombre: "",
    apellidos: ""
  }

  constructor(private peti: PAjaxService, private ruta: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {

    this.formulario = this.fb.group({
      email: this.fb.control('rigo@mail.com', Validators.required),
      clave: this.fb.control('', Validators.required)
    })

  }

  ngOnInit() {



  }

  onSubmit(user: any) {

    console.log("user: ", user);

    this.peti.iniciarSesion(user).subscribe({
      next: datos => {
        console.log("detalles", datos);

        localStorage.setItem("JWT", datos.JWT);

        this.usuario = {
          id: datos.id,
          nombre: datos.nombre,
          apellidos: datos.apellidos
        };

        console.log("usuario: ", this.usuario);
      },
      error: error => console.log(error)
    })



  }
}
