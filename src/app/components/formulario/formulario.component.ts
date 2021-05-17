import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  service: PostService;


  constructor(private postService: PostService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(100)
      ]),
      autor: new FormControl(''),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)
      ]),
      categoria: new FormControl('')
    })

    this.service = postService;

  }

  ngOnInit(): void {

  }

  onSubmit() {
    let newPost = this.formulario.value;
    this.service.agregarPost(newPost);
    this.formulario.reset();

  }

  dateValidator(date) {
    let result = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(date.value)
    if (result) return false;
    else return true
  }
}


