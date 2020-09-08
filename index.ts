enum LogLevel {
  INFO = "info",
  ERROR = "error",
  LOG = "log",
  WARN = "warn",
}

export default class Logger {
  static readonly Level = LogLevel;

  static log = (level: LogLevel, ...messages: string[]): void => {
    const isDevOrTestEnv = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test";
    if (isDevOrTestEnv) console[level](...messages);
  };

}
