import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutComponent>) { }

  ngOnInit() {
  }

  closeModal() {
      this.dialogRef.close();
  }

}
