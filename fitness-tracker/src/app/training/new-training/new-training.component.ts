import {TrainingService} from '../training.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Subscription} from 'rxjs';
import {Exercise} from '../exercise.model';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;


  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    // this.exercises = this.db.collection('availableExercises').valueChanges();
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => (this.exercises = exercises));
    this.trainingService.fetchAvailableExercise();

  }

  newTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }

}
