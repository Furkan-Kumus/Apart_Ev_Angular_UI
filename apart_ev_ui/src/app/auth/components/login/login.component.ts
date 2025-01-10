import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  @Output() dataEmitter = new EventEmitter<string>(); // EventEmitter tanımlandı
  
    sendData() {
      const data = 'THIS IS FROM EVENT EMITTER!!';
      this.dataEmitter.emit(data); // Veri yayıldı
    }

  isSpinning: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit() {
      this.loginForm = this.fb.group({
          email: [null, [Validators.email, Validators.required]],
          password: [null, [Validators.required]]
      });
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if(res.userId != null){
        const user = {
          id: res.userId,
          role: res.userRole
        }
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt);
        if(StorageService.isAdminLoggedIn()){
          this.router.navigateByUrl("/admin/dashboard");
        } else if (StorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl("/customer/dashboard");
        } else {
          this.message.error("Kullanıcı bilgileri yanlış!", {nzDuration: 3000});
        }
      }
    })
  }
}
