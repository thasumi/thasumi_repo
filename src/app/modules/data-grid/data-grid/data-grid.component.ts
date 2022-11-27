import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataGridModel } from '../models/data-grid.model';
import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  inputFormGroup!: FormGroup;
  submit: DataGridModel[] = [];
  displayedColumns: string[] = ['id','name', 'phoneNumber'];
  dataSource =  new MatTableDataSource<DataGridModel>;

  @ViewChild(MatTable) table!: MatTable<DataGridModel>;
  @ViewChild(MatSort) sort! : MatSort;


  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inputFormGroup = this.formBuilder.group({
      id:[''],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  saveData() {
    if (this.inputFormGroup.invalid) {
      return;
    };
    this.inputFormGroup.patchValue({id: this.submit.length + 1});
    this.submit.push(this.inputFormGroup.value);
    this.dataSource.data = this.submit;
    this.table.renderRows();
    this.inputFormGroup.reset();
  }

  removeData() {
    this.submit = this.submit.slice(0, -1);
    this.dataSource.data = this.submit;
    this.table.renderRows();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

