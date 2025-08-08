import { z } from "zod";
import { UserModel } from "../core/user/entity/User";
import { BookModel } from "../core/book/entity/Book";

export function validateZodUser(user: Omit<UserModel, "id">) {
  // Regex para CPF (formato 000.000.000-00 ou apenas números)
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;

  const userSchema = z.object({
    cpf: z
      .string("campo deve ser obrigatório")
      .regex(cpfRegex, "CPF formato inválido. digite aaa.aaa.aaa-aa"),
    name: z
      .string("campo deve ser obrigatório")
      .trim()
      .min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.email("E-mail inválido"),
    password: z
      .string("campo deve ser obrigatório")
      .min(6, "Senha deve ter pelo menos 6 caracteres"),
  });
  const result = userSchema.safeParse(user); // aqui tras todas as mensagens onde teve errors

  if (!result.error) {
    return;
  }
  //formatando os erros
  const { fieldErrors } = z.flattenError(result.error); //https://zod.dev/error-formatting

  return { fieldErrors };
}

export function validateZodBook(user: Omit<BookModel, "id">) {
  const registerBookSchema = z.object({
    author: z
      .string("error: campo obrigatório")
      .trim()
      .min(3, "error: Nome deve ter pelo menos 3 caracteres"),
    title: z.string({ error: "Título é obrigatório" }),
    descriptionType: z.string({ error: "Tipo de descrição é obrigatório" }),
    userId: z.string({ error: "ID do usuário é obrigatório" }),
    ImagesBook: z
      .array(
        z.object({
          pictureName: z.string({
            error: "Nome da imagem é obrigatório",
          }),
        })
      )
      .min(1, "Pelo menos uma imagem deve ser enviada"),
  });
  const result = registerBookSchema.safeParse(user); // aqui tras todas as mensagens onde teve errors

  if (!result.error) {
    return;
  }
  //formatando os erros
  const { fieldErrors } = z.flattenError(result.error); //https://zod.dev/error-formatting

  return { fieldErrors };
}
