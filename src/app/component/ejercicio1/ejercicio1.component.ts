import { Component } from '@angular/core';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad: number;
  idioma: string;
}

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { id: 0, nombre: '', email: '', edad: 0, idioma: '' };
  usuarioSeleccionado: Usuario | null = null;

  agregarEditarUsuario() {
    if (!this.esFormularioValido()) {
      return;
    }

    if (this.usuarioSeleccionado) {
      // Editar usuario existente
      this.usuarioSeleccionado.id = this.nuevoUsuario.id;
      this.usuarioSeleccionado.nombre = this.nuevoUsuario.nombre;
      this.usuarioSeleccionado.email = this.nuevoUsuario.email;
      this.usuarioSeleccionado.edad = this.nuevoUsuario.edad;
      this.usuarioSeleccionado.idioma = this.nuevoUsuario.idioma;
    } else {
      // Agregar nuevo usuario
      if (this.nuevoUsuario.id !== 0) {
        // Verificar si el usuario ya existe en el vector
        const usuarioExistente = this.usuarios.find(u => u.id === this.nuevoUsuario.id);
        if (usuarioExistente) {
          alert('Ya existe un usuario con el mismo ID.');
          return;
        }
      }

      this.usuarios.push(this.nuevoUsuario);
    }

    this.limpiarFormulario();
  }

  esFormularioValido(): boolean {
    return (
      this.nuevoUsuario.id !== 0 &&
      this.nuevoUsuario.nombre.trim() !== '' &&
      this.nuevoUsuario.email.trim() !== '' &&
      this.nuevoUsuario.edad !== 0 &&
      this.nuevoUsuario.idioma.trim() !== ''
    );
  }

  seleccionarUsuario(usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
    this.nuevoUsuario = { ...usuario };
  }

  borrarUsuario(usuario: Usuario) {
    const indice = this.usuarios.indexOf(usuario);
    this.usuarios.splice(indice, 1);

    if (this.usuarioSeleccionado === usuario) {
      this.limpiarFormulario();
    }
  }

  cancelarEdicion() {
    this.limpiarFormulario();
  }

  private limpiarFormulario() {
    this.usuarioSeleccionado = null;
    this.nuevoUsuario = { id: 0, nombre: '', email: '', edad: 0, idioma: '' };
  }
}
