import Logger from "../index";

beforeAll(() => {
  console.log = jest.fn();
  console.info = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
});

describe("Logger", () => {
  it("should log a warn message", () => {
    const message = "im a warning message";
    Logger.log(Logger.Level.WARN, message);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toBeCalledWith(message);
  });

  it("should log an error message", () => {
    const message = "im an error message";
    Logger.log(Logger.Level.ERROR, message);
    expect(console.error).toBeCalledTimes(1);
    expect(console.error).toBeCalledWith(message);
  });

  it("should log an info message", () => {
    const message = "im an info message";
    Logger.log(Logger.Level.INFO, message);
    expect(console.info).toBeCalledTimes(1);
    expect(console.info).toBeCalledWith(message);
  });

  it("should log a normal message", () => {
    const message = "im a normal message";
    Logger.log(Logger.Level.LOG, message);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toBeCalledWith(message);
  });

  it("should not log in production mode", () => {
    //@ts-ignore
    console.log.mockClear();
    process.env.NODE_ENV = "production";
    Logger.log(Logger.Level.LOG, "a message");
    expect(console.log).not.toBeCalled()
  })

  it("should log in dev mode", () => {
    //@ts-ignore
    console.log.mockClear();
    process.env.NODE_ENV = "development";
    Logger.log(Logger.Level.LOG, "a message");
    expect(console.log).toBeCalledTimes(1)
  })
});
