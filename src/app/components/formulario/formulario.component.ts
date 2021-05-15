import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  newPost: Post[];
  formulario: FormGroup;


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
      fecha: new FormControl(''),
      categoria: new FormControl('')
    })




  }

  ngOnInit(): void { }

  onSubmit() {
    this.formulario.value.push;
  }

}

