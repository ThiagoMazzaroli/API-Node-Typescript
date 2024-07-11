import { setLocale } from 'yup';


setLocale({
  mixed: {
    required: 'Este campo é obrigatório',
    notType: 'Formato digitado é inválido',
    defined: 'Este campo precisa ter um valor definido',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
  },
  string: {
    lowercase: 'Deve estar em minúsculo',
    uppercase: 'Deve estar em maiúsculo',
    url: 'Deve ter um formato de URL válida',
    max: 'Deve ter no máximo ${max} caracteres',
    min: 'Deve ter pelo menos ${min} caracteres',
    email: 'Formato de e-mail digitado não é válido',
    length: 'Deve ter exatamente ${length} caracteres',
    uuid: 'Valor digitado não confere a um UUID válido',
    trim: 'Não deve conter espaços no início ou no fim.',
    matches: 'O valor deve corresponder ao padrão: ${regex}',
  },
  number: {
    min: 'Deve ser no mínimo ${min}',
    max: 'Deve ser no máximo ${max}',
    integer: 'Deve ser um número inteiro',
    lessThan: 'Deve ser menor que ${less}',
    moreThan: 'Deve ser maior que ${more}',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
  },
  date: {
    min: 'Deve ser maior que a data ${min}',
    max: 'Deve ser menor que a data ${max}',
  },
  array: {
    min: 'Deve ter no mínimo ${min} itens',
    max: 'Deve ter no máximo ${max} itens',
    length: 'Deve conter exatamente ${length} itens',
  },
  object: {
    noUnknown: 'Contém chaves não especificadas no objeto',
  },
});
