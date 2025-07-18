import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  imports: [ReactiveFormsModule],
  templateUrl: "./new-task.html",
  styleUrl: "./new-task.scss",
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private formBuilder = inject(FormBuilder); // TODO: form builder

  private tasksService = inject(TasksService);
  form: FormGroup;

  constructor() {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      summary: ["", Validators.required],
      date: ["", Validators.required],
    });
  }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.form.getRawValue(), this.userId);
    this.close.emit();
  }
}
