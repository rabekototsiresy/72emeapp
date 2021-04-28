import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userSerive: UserService) { }

  users = [];
  listOfTonia = [];
  nbT = 0;
  listOfMpiandraikitra = [];
  nbMp = 0
  listOfBeazina = [];
  nbBea = 0 
  sampana:any= {
    lovitao: [],
    mpianjoria: [],
    mpamakilay: [],
    mpiandalana: []
  };
  nbEeachSampanaMp = {
    lovitao: 0,
    mpianjoria: 0,
    mpamakilay:0,
    mpiandalana: 0
  }


  nbEeachSampanaBea = {
    lovitao: 0,
    mpianjoria: 0,
    mpamakilay:0,
    mpiandalana: 0
  }
  
  usersSubscription = new Subscription();

  ngOnInit(): void {
    document.title = "fandraisana"
      this.usersSubscription = this.userSerive.usersSubject.subscribe(
        (response: any)=>{
          this.users = response;

          

          this.listOfTonia = response.filter((data:any)=>data.role=="tonia");
          this.nbT = this.listOfTonia.length;
          this.listOfMpiandraikitra = response.filter((data:any)=>data.role=="mpiandraikitra");
          this.nbMp = this.listOfMpiandraikitra.length;
          this.listOfBeazina= response.filter((data:any)=>data.role=="beazina");
          this.nbBea = this.listOfBeazina.length;

          // Teto vo ita hoe tsy tokony natao attribu,kamo b ah amerina azy

          this.sampana.lovitao = response.filter((data:any)=>data.role=="mpiandraikitra" && data.sampana == "lovitao")
          this.nbEeachSampanaMp.lovitao = this.sampana.lovitao.length

          this.sampana.mpianjoria = response.filter((data:any)=>data.role=="mpiandraikitra" && data.sampana == "mpianjoria")
          this.nbEeachSampanaMp.mpianjoria = this.sampana.mpianjoria.length

          this.sampana.mpamakilay = response.filter((data:any)=>data.role=="mpiandraikitra" && data.sampana == "mpamakilay")
          this.nbEeachSampanaMp.mpamakilay = this.sampana.mpamakilay.length

          this.sampana.mpiandalana = response.filter((data:any)=>data.role=="mpiandraikitra" && data.sampana == "mpiandalana")
          this.nbEeachSampanaMp.mpiandalana = this.sampana.mpiandalana.length

          // Ity no mety

          const listLovitaoBea = response.filter((data:any)=>data.role=="beazina" && data.sampana == "lovitao")
          this.nbEeachSampanaBea.lovitao = listLovitaoBea.length

          const listMpianjoriaBea = response.filter((data:any)=>data.role=="beazina" && data.sampana == "mpianjoria")
          this.nbEeachSampanaBea.mpianjoria = listMpianjoriaBea.length

          const listMpamakilay = response.filter((data:any)=>data.role=="beazina" && data.sampana == "mpamakilay")
          this.nbEeachSampanaBea.mpamakilay = listMpamakilay.length

          const listMpiandalana = response.filter((data:any)=>data.role=="beazina" && data.sampana == "mpiandalana")
          this.nbEeachSampanaBea.mpiandalana = listMpiandalana.length




      

        },
        error=>{
          console.log(error)
        }
      )
      this.userSerive.getAllUsers()
      this.userSerive.emitUser()
  }


}
