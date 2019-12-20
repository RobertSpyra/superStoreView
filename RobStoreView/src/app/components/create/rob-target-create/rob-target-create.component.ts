import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogUpdateData } from 'src/app/models/ModalUpdateData';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TargetService } from 'src/app/services/target-service.service';

@Component({
  selector: 'app-rob-target-create',
  templateUrl: './rob-target-create.component.html',
  styleUrls: ['./rob-target-create.component.sass']
})
export class RobTargetCreateComponent implements OnInit {

  warning:string = null;

  createTargetForm: FormGroup;
  
  constructor(private targetService: TargetService, public fb: FormBuilder,public dialogRef: MatDialogRef<RobTargetCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogUpdateData) { }

  ngOnInit() {

    this.createTargetForm = this.fb.group({
      targetName: ['', [Validators.required, Validators.minLength(2)]],
    });
  }


  onKeyUp() {
    this.warning = null;
  }

  onSubmit(){
    this.targetService.createTarget(this.createTargetForm.get('targetName').value).
    subscribe(
      data => {
        this.targetService.getTargets();
        this.dialogRef.close();
      },
      err => {
        console.log(err.error);
        if (err.error.name && err.error.name === 'Name Unique') {
          console.log(err);
          this.warning = 'Cel ' + this.createTargetForm.get('targetName').value + ' już istnieje';
        }
      }
    );

  }
  onCancel(){
    this.dialogRef.close();
  }
}
