class User {
  private static instance: User | null = null;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new User();
    }

    return this.instance;
  }

  register() {}

  login() {}

  logout() {}
}

export default User;
