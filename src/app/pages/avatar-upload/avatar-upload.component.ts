import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.css']
})
export class AvatarUploadComponent implements OnInit {

  token = localStorage.getItem('token');
  avatar: any = {};
  shoudSubmit = false;
  errrorMessageUploadFileFromService = "";
  errorMessageUploadFileSubscription: Subscription = new Subscription();
  constructor(private userService: UserService,private router: ActivatedRoute,private authService: AuthService) { }
  logged = false;
  id_user = "";
  
  
  ngOnInit(): void {
    this.logged = this.authService.logged
    const id = this.router.snapshot.params.id;
    this.id_user = id

    
  }

  handleFile(event: any){
    this.avatar = event.target.files[0];
    this.shoudSubmit = true
  }

  addAvatarFromService(){
    const id = this.router.snapshot.params.id;
    const fd = new FormData();
    fd.append('avatar',this.avatar,this.avatar.name)
    this.userService.addAvatar(fd,id)
    this.errorMessageUploadFileSubscription = this.userService.errorMessageUploadFileSubject.subscribe(
      (response:any)=>{
        this.errrorMessageUploadFileFromService = response;
      }
    )
  }

}
