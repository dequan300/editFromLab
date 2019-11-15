import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../profile/user-profile";
import { ProfileSService } from "../profile-s.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  userData: UserProfile;
  constructor(private service: ProfileSService, private router: Router) {}
  submitProfile() {
    this.service.setUserProfile(this.userData);
    this.router.navigate(["/profile"]);
  }
  ngOnInit() {
    this.userData = this.service.getUserProfile();
  }
}
