import { Injectable } from "@angular/core";
import { UserProfile } from "./profile/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileSService {
  profile: UserProfile = {
    name: "dequan",
    contact: "@gmail",
    bio: "human"
  };
  constructor() {}
  getUserProfile() {
    return this.profile;
  }
  setUserProfile(newInfo: UserProfile): void {
    this.profile = newInfo;
  }
}
