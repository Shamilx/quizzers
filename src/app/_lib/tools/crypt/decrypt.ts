import { AES } from "crypto-ts";
import { enc } from "crypto-ts";

export function string_decryptor(answers: string) {
  const decryptedData = AES.decrypt(
    answers,
    process.env.ANSWERS_ENCRPYOTOR_PRIVATE_KEY as string,
  ).toString(enc.Utf8);

  return decryptedData;
}
