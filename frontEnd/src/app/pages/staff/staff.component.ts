import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServerService } from './common/server.service';
import { first, pipe } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  searchVaccineForm: FormGroup;
  constructor(public fb: FormBuilder, public serverService: ServerService) {
    this.searchVaccineForm = fb.group({
      vaccineSearchText: new FormControl('', [Validators.required]),
    });
  }

  searchVaccine() {
    if (this.searchVaccineForm.status !== 'INVALID') {
      console.log(this.searchVaccineForm.value);
      this.getVaccine(this.searchVaccineForm.value);
    }
  }

  getVaccine(data: any) {
    this.serverService
      .getVaccine(data)
      .pipe(first())
      .subscribe({
        next: () => {},
        error: () => {},
      });
  }
}
