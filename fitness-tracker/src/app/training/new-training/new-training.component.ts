import { TrainingService } from './../training.service';
import {Component, OnInit} from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
exercises: Exercise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getavailableExercise();
  }

  newTraining() {
    this.trainingService.startExercise();
  }

}
