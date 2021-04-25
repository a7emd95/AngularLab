import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  products = ["Product 1 " , "Product 2 " , "Product 3 " ]
  noteForm=this.fb.group({
    Name:['',[Validators.required , NameValidator(/admin/)]],
    products:[''],
   // check:[''],
    Comments:this.fb.array([])
  
  });
  ngOnInit(): void {
  }

  
  get Name()
  {
    return this.noteForm.get('userName');
  }

 

  get comments()
  {
    return this.noteForm.get('Comments') as FormArray;
  }
 
  get check(){
    return this.noteForm.get('check') as FormArray;

  }
  
  get contrlols()
  {
   return this.noteForm.controls;
  }
  addNewComment()
  {
    this.comments.push(this.fb.control(''));
  }
  
}
function NameValidator(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}

