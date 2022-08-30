import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
	providedIn: 'root'
})
export class ErrorService {

	constructor(private toastrService: ToastrService) { }

	showErrorToast(message?: any): void {
		this.toastrService.error(message ?? 'Something went wrong, please try again later', 'Error');
	}

}
