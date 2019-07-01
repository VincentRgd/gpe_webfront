import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-generate-infrastructure',
  templateUrl: './form-generate-infrastructure.component.html',
  styleUrls: ['./form-generate-infrastructure.component.scss']
})
export class FormGenerateInfrastructureComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // this.numbers = Array(this.maxMachines).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      machines: this.formBuilder.array([this.createMachine()]),
    });
  }

  createMachine(): FormGroup {
    const ipPattern =
      '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';
    return this.formBuilder.group({
      type: '',
      os: '',
      domain_name: '',
      ip: ['', [Validators.pattern(ipPattern), Validators.required]],
      mask: '',
      gateway: ''
    });
  }

  onSubmitForm() {
    console.log(this.form.value);
  }

  getMachines() {
    return this.form.get('machines') as FormArray;
  }

  getMachine(index: number) {
    return this.form.value.machines[index];
  }

  onAddMachine() {
    this.getMachines().push(this.createMachine());
  }

  onRemoveMachine(index: number) {
    this.getMachines().removeAt(index);
  }

  onTypeChange(index: number) {
    console.log(this.form.value.machines[index]);
  }

  getTypeOptions() {
    return [
      'Poste de travail',
      'Serveur applicatif',
      'Domain controller',
      'Serveur Proxy'
    ];
  }

  getOSOptions(type) {
    switch (type) {
      case 'Poste de travail':
        return [
          'Ubuntu',
          'Windows'
        ];
      case 'Serveur applicatif':
        return [
          'centOS',
          'Windows Server 2012',
          'Windows Server 2016'
        ];
      case 'Domain controller':
        return [
          'Windows server 2012',
          'Windows server 2016',
        ];
      case 'Serveur Proxy':
        return [
          'Squid'
        ];
        break;
      default:
        return [];
        break;
    }
  }

}
