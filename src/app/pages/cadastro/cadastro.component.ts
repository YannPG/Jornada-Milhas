import { Component } from '@angular/core';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  perfilComponent = false;


  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService 
  ){

  }

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro()

      if(formCadastro?.valid){
        const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
        this.cadastroService.cadastrar(novoCadastro).subscribe({
          next:(value) =>{
            console.log('Cadastro realizado com sucesso',value);
          },
          error:(err) => {
            console.log('Erro ao realizar cadastro', err);
            
          }
        })
      }
    console.log("Cadastro realizado com sucesso");
    
  }
}
 