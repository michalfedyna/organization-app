class Logger {
  private static instance: Logger;
  private isEnabled: boolean = false;
  private constructor() {}

  static getLogger(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    if (!this.isEnabled) return;

    const time = new Date().toTimeString().split(' ')[0];
    console.log(`[${time}] ${message}`);
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }
}

export default Logger;
