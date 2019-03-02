import {Exercise} from './exercise.model';
import {Subject} from 'rxjs';

export class TrainingService {
  exerciseChange = new Subject<Exercise>();

  private availableExercise: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
    {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8}
  ];

  private runningExercise: Exercise;

  getavailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercise.find(ex => ex.id === selectedId);
    // this.runningExercise = selectedExercise;
    this.exerciseChange.next({...this.runningExercise});
  }
}
