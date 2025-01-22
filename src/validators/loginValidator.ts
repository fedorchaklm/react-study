import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string()
        .required()
        .messages({
            'string.required': 'Username is required',
            'string.empty': 'Username is required'
        }),

    password: Joi.string()
        .required()
        .messages({
            'string.required': 'Username is required',
            'string.empty': 'Username is required'
        })
})