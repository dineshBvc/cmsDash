import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { category } from 'src/app/interfaces/category';
import { IonicModule } from '@ionic/angular';
import { createOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CategoryPage {

  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private alertService = inject(AlertService);
  private formBuilder = inject(FormBuilder);

  @ViewChild('eleImages') input!: ElementRef<HTMLInputElement>;

  appType = '';
  public newInputForm!: FormGroup;
  private rawcategories: category[] = [];
  public categories = [...this.rawcategories];
  public categoryId = '';
  public imagePreview: string | ArrayBuffer | null = null;

  constructor() {
    this.appType = this.route.snapshot.paramMap.get('apptype')!;
    addIcons({ createOutline, trashOutline });
    this.initializeForm();
    this.GetCategories();
  }

  initializeForm() {
    this.newInputForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productImage: ['', [Validators.required]],
    });
  }


  GetCategories() {
    this.apiService.GetCategories(this.appType).subscribe((data: category[]) => {
      this.rawcategories = data;
      this.categories = [...this.rawcategories];
    });
  }

  AddCategory() {

    if (this.categoryId.length > 0) {
      this.newInputForm.controls['productImage'].removeValidators([Validators.required]);
      this.newInputForm.controls['productImage'].updateValueAndValidity()
    }

    if (this.newInputForm.valid) {

      const formData = new FormData();
      formData.append('name', this.newInputForm.value.name);


      if (this.newInputForm.value.productImage != '') {
        formData.append('Image', this.newInputForm.value.productImage);
      }

      if (this.categoryId.length === 0) {
        this.apiService.AddCategory(formData, this.appType).subscribe(
          (response: any) => {
            this.alertService.successToast(response.message);
            this.Reset();
          });
      }
      else {
        this.apiService.EditCategory(this.categoryId, formData, this.appType).subscribe(
          (response: any) => {
            this.alertService.successToast(response.message);
            this.Reset();
          });
      }
    }
    else {
      this.newInputForm.markAllAsTouched();
    }
  }

  GetCategory(Id: string) {

    const category = this.rawcategories.find(x => x.id == Id);
    if (category != null) {
      this.newInputForm.reset();
      this.categoryId = Id;
      this.newInputForm.get('name')?.patchValue(category?.name);
      this.imagePreview = category?.imgPath ?? '';
    }
  }

  DeleteCategory(Id: string) {
    const alertButtons = [
      {
        text: 'NO',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'YES',
        role: 'confirm',
        handler: () => {
          this.apiService.DeleteCategory(Id, this.appType).subscribe(() => {
            this.alertService.errorToast('Deleted Successfully');
            this.GetCategories();
          });
        },
      },
    ];

    this.alertService.showAlert('Do you want to delete this category?', 'DELETE', alertButtons);
  }


  Reset() {
    this.categoryId = '';
    this.newInputForm.reset();
    this.imagePreview = null;
    this.input.nativeElement.value = "";
    this.newInputForm.controls['productImage'].setValidators([Validators.required]);
    this.newInputForm.controls['productImage'].updateValueAndValidity();
    this.GetPlaceholderImage();
    this.GetCategories();
  }

  findCategory(event: any) {
    const query = event.target.value.toLowerCase();
    this.categories = [... this.categories.filter((p) => p.name.toLowerCase().includes(query))];
  }

  GetPlaceholderImage() {
    this.apiService.GetPlaceholderImage().subscribe(async (data) => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(data);
      reader.onload = (event: any) => {
        this.imagePreview = event.target.result;
      };
    })
  }


  onFileChange(event: any) {
    const fileInput = event.target;
    const file = fileInput.files?.[0];

    if (file) {
      // Set the file in the form control
      this.newInputForm.patchValue({
        productImage: file,
      });

      // Read and display the image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getErrorText(control: string) {
    const validations = this.validation_messages[control]
    for (let validation of validations) {
      if (this.newInputForm.get(control)?.touched && this.newInputForm.get(control)?.hasError(validation.type))
        return validation.message;
    }
    return '';
  }

  public validation_messages: any = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Minimum 3 characters required' },
      { type: 'maxlength', message: 'Exceeded the max length 50' },
    ],
    'productImage': [{ type: 'required', message: 'Image is required, Please select the Image' }]
  }



}
