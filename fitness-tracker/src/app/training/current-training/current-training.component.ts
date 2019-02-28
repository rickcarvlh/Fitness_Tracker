import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material";
import {StopTrainingComponent} from "./stop-training..component";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;



  constructor(private  dialog: MatDialog) {
  }

  ngOnInit() {
  //   call timer method
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    // grow by 5% every second
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }else {
        this.progress += 5;
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    // show a dialog after clicking
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.trainingExit.emit();
      }else{
        // if result is not true
        this.startOrResumeTimer();
      }

    });
  }
}
