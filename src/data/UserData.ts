class UserData {
  private static instance: UserData | null = null;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserData();
    }

    return this.instance;
  }

  register() {}

  login() {}

  logout() {}
}

export default UserData;
