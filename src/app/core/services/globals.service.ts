import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
    public searchTerm:any;
    movieResult= [];
  constructor(
    public router: Router,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService,
  ) { }
}