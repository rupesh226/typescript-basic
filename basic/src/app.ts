{
  let fileName = "app.ts";
  console.log("Start ----->" + fileName);

  let userInput: unknown;
  let userName: string;

  const filename: string = __filename;
  console.log("My End -----> " + filename);

  userInput = 5;
  userInput = "Max";
  if (typeof userInput === "string") {
    userName = userInput;
  }

  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true) {}
  }

  generateError('An error occurred!', 500);
}
