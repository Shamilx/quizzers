import { AES } from "crypto-ts";

export function string_encryptor(answers: string) {
  const encryptedData = AES.encrypt(
    answers,
    process.env.ANSWERS_ENCRPYOTOR_PRIVATE_KEY as string,
  ).toString();

  return encryptedData;
}
