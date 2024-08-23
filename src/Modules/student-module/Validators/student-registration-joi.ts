import Joi from 'joi';

export const student_joi = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.base": "Name should be a type of text",
        "string.empty": "Name is required",
        "string.min": "Name should have a minimum length of {#limit}",
        "string.max": "Name should have a maximum length of {#limit}",
        "any.required": "Name is required"
      }),
    
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
        .required()
        .messages({
          "string.base": "Password should be a type of text",
          "string.empty": "Password is required",
          "string.pattern.base":
          "Password must be between 8 ",
          "any.required": "Password is required"
        }),

        email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.base": "Email should be a type of text",
      "string.empty": "Email is required",
      "string.email": "Email must be a valid email address",
      "any.required": "Email is required"
    })

    })