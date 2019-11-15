import { Component, OnInit } from "@angular/core";
import { ProfileSService } from "../profile-s.service";
import { UserProfile } from "../profile/user-profile";

@Component({
  selector: "app-profile-component",
  templateUrl: "./profile-component.component.html",
  styleUrls: ["./profile-component.component.css"]
})
export class ProfileComponentComponent implements OnInit {
  profile: UserProfile;
  constructor(private pService: ProfileSService) {}

  ngOnInit() {
    this.profile = this.pService.getUserProfile();
  }
}
