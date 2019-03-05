import { TrainingService } from '../training.service';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Exercise} from '../exercise.model';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
exercises: Observable<Exercise[]>;


  constructor(private trainingService: TrainingService, private db: AngularFirestore) {}

  ngOnInit() {
   // this.exercises = this.db.collection('availableExercises').valueChanges();
   //  calling the collection
   this.exercises = this.db
      .collection<Exercise>('availableExercises')
      .snapshotChanges()
      .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data()
        };
      });
    }));
  }

  newTraining(form:NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
